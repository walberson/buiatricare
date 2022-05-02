import { Flex } from '@chakra-ui/react'

import { WithSpeechBubbles } from '../components/index/Testimonial'
import { CallToActionWithVideo } from '../components/index/Hero'
import { Create } from '../components/index/Create'

import { useSession } from 'next-auth/react'
import { Dashboard } from '../components/index/Dashboard'

export default function Home() {
    const { data: session } = useSession()

    return session ? (
        <>
            <Dashboard name={session.user.name} />
        </>
    ) : (
        <>
            <Flex flexDir="column">
                <CallToActionWithVideo />
                <Create />
                <WithSpeechBubbles />
            </Flex>
        </>
    )
}
