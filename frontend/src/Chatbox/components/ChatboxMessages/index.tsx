import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { ChatboxBubble } from './ChatboxBubble';
import { useAppSelector } from '../../../redux/store';
import { ChatboxSelectors } from '../../../redux/selectors/chatboxSelectors';

export const ChatboxMessages: FC = () => {
    const messages = useAppSelector(ChatboxSelectors.selectMessages);
    
    return (
        <Flex
            direction="column"
            h="full"
            w="full"
            color="gray.400"
            gap={4}
            p={4}
            overflowY="auto"
            className='scroll'
        >
            {
                messages.map(({ id, text, person }) => (
                    <ChatboxBubble
                        key={id}
                        text={text}
                        person={person}
                    />
                ))
            }
        </Flex>
    );
}