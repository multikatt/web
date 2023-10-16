import { createContext, useContext } from 'react'
import {
  triggerSuccessToast,
  triggerErrorToast,
  useOnInvalid,
} from '@siafoundation/design-system'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  HostSettings,
  useSettings,
  useSettingsDdns,
  useSettingsUpdate,
} from '@siafoundation/react-hostd'
import { SettingsData, initialValues } from './types'
import { getFields } from './fields'
import { calculateMaxCollateral, transformDown, transformUp } from './transform'
import { useForm } from 'react-hook-form'
import useLocalStorageState from 'use-local-storage-state'

export function useConfigMain() {
  const settings = useSettings({
    standalone: 'configSettingsForm',
  })
  const settingsUpdate = useSettingsUpdate()
  const dynDNSCheck = useSettingsDdns({
    disabled: !settings.data || !settings.data.ddns.provider,
    config: {
      swr: {
        revalidateOnFocus: false,
        errorRetryCount: 0,
      },
    },
  })
  const [showAdvanced, setShowAdvanced] = useLocalStorageState<boolean>(
    'v0/config/showAdvanced',
    {
      defaultValue: false,
    }
  )

  const form = useForm({
    mode: 'all',
    defaultValues: initialValues,
  })

  const resetFormData = useCallback(
    (data: HostSettings) => {
      const settingsData = transformDown(data)
      form.reset(settingsData)
      return settingsData
    },
    [form]
  )

  const didDataRevalidate = useMemo(() => [settings.data], [settings.data])

  const resetFormDataIfAllDataFetched = useCallback((): SettingsData | null => {
    if (settings.data) {
      return resetFormData(settings.data)
    }
    return null
  }, [resetFormData, settings.data])

  // init - when new config is fetched, set the form
  const [hasInit, setHasInit] = useState(false)
  useEffect(() => {
    if (!hasInit) {
      const didReset = resetFormDataIfAllDataFetched()
      if (didReset) {
        setHasInit(true)
      }
    }
  }, [hasInit, resetFormDataIfAllDataFetched])

  const revalidateAndResetFormData = useCallback(async () => {
    const data = await settings.mutate()
    if (!data) {
      triggerErrorToast('Error fetching settings.')
    } else {
      resetFormData(data)
      // also recheck dynamic dns
      await dynDNSCheck.mutate()
    }
  }, [settings, resetFormData, dynDNSCheck])

  const onValid = useCallback(
    async (values: typeof initialValues) => {
      if (!settings.data) {
        return
      }
      try {
        const response = await settingsUpdate.patch({
          payload: transformUp(values, settings.data),
        })
        if (response.error) {
          throw Error(response.error)
        }
        if (form.formState.dirtyFields.netAddress) {
          triggerSuccessToast(
            'Settings have been saved. Address has changed, make sure to re-announce the host.',
            {
              duration: 20_000,
            }
          )
        } else {
          triggerSuccessToast('Settings have been saved.')
        }
        await revalidateAndResetFormData()
      } catch (e) {
        triggerErrorToast((e as Error).message)
        console.log(e)
      }
    },
    [form, settings, settingsUpdate, revalidateAndResetFormData]
  )

  const fields = useMemo(() => getFields({ showAdvanced }), [showAdvanced])

  const onInvalid = useOnInvalid(fields)

  const onSubmit = useMemo(
    () => form.handleSubmit(onValid, onInvalid),
    [form, onValid, onInvalid]
  )

  const storage = form.watch('storagePrice')
  const collateralMultiplier = form.watch('collateralMultiplier')

  // if simple mode, then calculate and set max collateral
  useEffect(() => {
    if (
      !showAdvanced &&
      storage?.isGreaterThan(0) &&
      collateralMultiplier?.isGreaterThan(0)
    ) {
      form.setValue(
        'maxCollateral',
        calculateMaxCollateral(storage, collateralMultiplier),
        {
          shouldDirty: true,
        }
      )
    }
  }, [form, showAdvanced, storage, collateralMultiplier])

  // Resets so that stale values that are no longer in sync with what is on
  // the daemon will show up as changed.
  const resetWithUserChanges = useCallback(() => {
    const currentFormValues = form.getValues()
    const serverFormValues = resetFormDataIfAllDataFetched()
    if (!serverFormValues) {
      return
    }
    form.reset(serverFormValues)
    for (const [key, value] of Object.entries(currentFormValues)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      form.setValue(key as any, value, {
        shouldDirty: true,
      })
    }
  }, [form, resetFormDataIfAllDataFetched])

  useEffect(() => {
    if (form.formState.isSubmitting) {
      return
    }
    resetWithUserChanges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    form,
    // if form mode is toggled reset
    showAdvanced,
    // if any of the settings are revalidated reset
    didDataRevalidate,
  ])

  const changeCount = Object.entries(form.formState.dirtyFields).filter(
    ([_, val]) => !!val
  ).length

  return {
    fields,
    settings,
    dynDNSCheck,
    changeCount,
    revalidateAndResetFormData,
    form,
    onSubmit,
    showAdvanced,
    setShowAdvanced,
  }
}

type State = ReturnType<typeof useConfigMain>

const ConfigContext = createContext({} as State)
export const useConfig = () => useContext(ConfigContext)

type Props = {
  children: React.ReactNode
}

export function ConfigProvider({ children }: Props) {
  const state = useConfigMain()
  return (
    <ConfigContext.Provider value={state}>{children}</ConfigContext.Provider>
  )
}