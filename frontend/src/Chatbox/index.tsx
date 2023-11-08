import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { 
    ChatboxTopbar, 
    ChatboxInput, 
    ChatboxMessages
} from './components'

export const Chatbox: FC = () => (
    <Flex
        direction="column" 
        w="sm" 
        h="xl"
        bg="gray.900"
    >
        <ChatboxTopbar />

        <ChatboxMessages />

        <ChatboxInput/>
    </Flex>
)
