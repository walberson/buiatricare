import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,

} from "@chakra-ui/react"


import {WithSpeechBubbles} from "../components/index/Testimonial"
import {CallToActionWithVideo} from "../components/index/Hero"

export default function Home() {
  return (
    <Flex flexDir='column' >
      <CallToActionWithVideo/>
      <WithSpeechBubbles/>
    </Flex>
  )
}
