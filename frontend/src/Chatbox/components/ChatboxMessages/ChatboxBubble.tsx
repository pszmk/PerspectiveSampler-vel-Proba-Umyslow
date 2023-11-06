import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { BUBBLE_BG_COLOR, BUBBLE_JUSTIFY, EChatboxPerson } from '../../const/bubble';

interface ChatboxBubbleProps {
    text: string;
    person: EChatboxPerson;
}

export const ChatboxBubble: FC<ChatboxBubbleProps> = ({ text, person }) => (
    <Flex
        direction="row"
        w="full"
        justify={BUBBLE_JUSTIFY[person]}
    >
        <Text
            boxShadow="dark-lg"
            maxW="75%"
            as={Box}
            bg={BUBBLE_BG_COLOR[person]}
            borderRadius="md"
            px={2}
            py={1}
                
            userSelect="none"
        >
            {text}
        </Text>
    </Flex>
)