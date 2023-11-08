import { FC } from 'react'
import { Flex, Text,} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaRegFaceSmileBeam } from 'react-icons/fa6';
import { MdOutlineFullscreen, MdClose } from 'react-icons/md';
import { FaRedo } from 'react-icons/fa';

export const ChatboxTopbar: FC = () => (
    <Flex
        direction="row"
        w="full" 
        h={10}
        borderBottom='1px' 
        borderColor="gray.700"
        p={2}
        gap={2}
        color="gray.500"
    >
        <Icon
            color="blue.700"
            as={FaRegFaceSmileBeam}
            boxSize={6} 
        />

        <Text
            w="full"
            userSelect="none"
            h={8}
            overflow="hidden"    
        >
            Debata o inflacji
        </Text>

        <Icon
            cursor="pointer"
            as={FaRedo}
            boxSize={4}
            m={1}
        />

        <Icon
            cursor="pointer"
            as={MdOutlineFullscreen}
            boxSize={6}
        />

        <Icon
            cursor="pointer"
            as={MdClose}
            boxSize={6}
        />
    </Flex>
)