import { FC } from 'react'
import { Box, Input } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ChatboxSelectors } from '../../redux/selectors/chatboxSelectors';
import { sendMessage, setInputValue } from '../../redux/reducers/chatboxReducer';
import { equals } from 'ramda';

export const ChatboxInput: FC = () => {
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector(ChatboxSelectors.selectInputValue);

    return (
        <Box 
            w="full" 
            color="gray.300"
            p={2}
        >
            <Input
                value={inputValue}
                onChange={({ target }) => {
                    const { value } = target;
                    dispatch(setInputValue({ value }))
                }}
                onKeyDown={({key}) => {
                    if (equals(key, 'Enter')) {
                        dispatch(sendMessage());
                    }
                }}
                border="none"
                _focus={{ 
                    border: 'none', 
                    boxShadow: 'none' 
                }}
                bg="gray.800"
            />
        </Box>
    );
};
