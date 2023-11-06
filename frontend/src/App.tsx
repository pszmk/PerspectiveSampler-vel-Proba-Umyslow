import { FC } from 'react'
import { Box, Center } from '@chakra-ui/react'
import { Chatbox } from './Chatbox';

export const App: FC = () => (
    <Box 
        w="100vw" 
        h="100vh"
        bg="gray.800"
    >
        <Center
            userSelect="none" 
            h="full" 
            w="full"
        >
            <Chatbox />
        </Center>
    </Box>
);
