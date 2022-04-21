/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Box,
  Heading,
  Text,
  Paragraph,
  Section,
} from '@siafoundation/design-system'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Italic from './Italic'

type Props = {
  onDone: () => void
}

export default function Letter({ onDone }: Props) {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      onDone()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <Section size="3">
      <Flex
        direction="column"
        gap="2"
        css={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Text
          size="32"
          weight="bold"
          css={{ fontStyle: 'italic', margin: '$3 0' }}
        >
          the future is bright, yet again
        </Text>
        <Paragraph>
          A common sentiment is brewing online; a shared desire for the Internet
          that might have been. After decades of corporate encroachment, you
          don't need to be a power user to realize that something has gone very
          wrong.
        </Paragraph>
        <Paragraph>
          In the early days of the Internet, the future was bright. In that
          future, when you sent an instant message, it traveled directly to the
          recipient. When you needed to pay a friend, you announced a transfer
          of value to their public key. When an app was missing a feature you
          wanted, you opened up the source code and implemented it. When you
          took a picture on your phone, it was immediately encrypted and backed
          up to storage that you controlled. In that future, people would laugh
          at the idea of having to authenticate themselves to some corporation
          before doing these things.
        </Paragraph>
        <Paragraph>
          What did we get instead? Rather than a network of human-sized
          communities, we have a handful of enormous commons, each controlled by
          a faceless corporate entity. Hey user, want to send a message? You
          can, but we'll store a copy of it indefinitely, unencrypted, for our
          preference-learning algorithms to pore over; how else could we slap
          targeted ads on every piece of content you see? Want to pay a friend?
          You can—in our Monopoly money. Want a new feature? Submit a request to
          our Support Center and we'll totally maybe think about it. Want to
          backup a photo? You can—inside our walled garden, which only we (and
          the NSA, of course) can access. Just be careful what you share,
          because merely locking you out of your account and deleting all your
          data is far from the worst thing we could do.
        </Paragraph>
        <Paragraph>
          You rationalize this: "MEGACORP would never do such a thing; it would
          be bad for business." But we all know, at some level, that this state
          of affairs, this inversion of power, is not merely "unfortunate" or
          "suboptimal" – No. It is <Italic>degrading</Italic>. Even if MEGACORP
          were purely benevolent, it is degrading that we must ask its
          permission to talk to our friends; that we must rely on it to
          safeguard our treasured memories; that our digital lives are
          completely beholden to those who seek only to extract value from us.
        </Paragraph>
        <Paragraph>
          At the root of this issue is the centralization of data. MEGACORP can
          surveil you—because your emails and video chats flow through their
          servers. And MEGACORP can control you—because they hold your data
          hostage. But centralization is a solution to a{' '}
          <Italic>technical problem</Italic>: How can we make the user's data
          accessible from anywhere in the world, on any device? For a long time,
          no alternative solution to this problem was forthcoming.
        </Paragraph>
        <Paragraph>
          Today, thanks to a confluence of established techniques and recent
          innovations, we have solved the accessibility problem without
          resorting to centralization. Hashing, encryption, and erasure encoding
          got us most of the way, but one barrier remained: incentives. How do
          you incentivize an anonymous stranger to store your data? Earlier
          protocols like BitTorrent worked around this limitation by relying on
          altruism, tit-for-tat requirements, or "points" – in other words,
          nothing you could pay your electric bill with. Finally, in 2009, a
          solution appeared: Bitcoin. Not long after, Sia was born.
        </Paragraph>
        <Paragraph>
          Cryptography has unleashed the latent power of the Internet by
          enabling interactions between mutually-distrustful parties. Sia
          harnesses this power to turn the cloud storage market into a proper
          market<Italic>place</Italic>, where buyers and sellers can transact
          directly, with no intermediaries, anywhere in the world. No more silos
          or walled gardens: your data is encrypted, so it can't be spied on,
          and it's stored on many servers, so no single entity can hold it
          hostage. Thanks to projects like Sia, the Internet is being
          re-decentralized.
        </Paragraph>
      </Flex>
      <Box ref={ref} css={{ marginTop: '50vh' }} />
    </Section>
  )
}