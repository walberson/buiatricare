import { Flex } from '@chakra-ui/react'

import { WithSpeechBubbles } from '../components/index/Testimonial'
import { CallToActionWithVideo } from '../components/index/Hero'
import { Create } from '../components/index/Create'

export default function Home() {
    return (
        <Flex flexDir="column">
            <CallToActionWithVideo />
            <Create />
            <WithSpeechBubbles />
        </Flex>
    )
}
