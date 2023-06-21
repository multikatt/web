import {
  Panel,
  Separator,
  Text,
  AppUnlockForm,
} from '@siafoundation/design-system'
import { buildModeEmbed } from '../../config/buildMode'
import { connectivityRoute, routes } from '../../config/routes'
import { WalletdPublicLayout } from '../WalletdPublicLayout'

export function LockScreen() {
  return (
    <WalletdPublicLayout routes={routes}>
      <div className="flex flex-col items-center justify-center gap-6 h-full">
        <Panel className="relative top-[-50px] w-[300px] p-2.5">
          <div className="flex flex-col justify-between h-full">
            <Text font="mono" weight="bold" size="20">
              walletd
            </Text>
            <Separator className="w-full mt-2 mb-3" />
            <AppUnlockForm
              route={connectivityRoute}
              buildModeEmbed={buildModeEmbed}
              routes={routes}
            />
          </div>
        </Panel>
      </div>
    </WalletdPublicLayout>
  )
}