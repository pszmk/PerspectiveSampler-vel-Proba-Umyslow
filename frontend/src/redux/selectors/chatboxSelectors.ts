import { RootState } from '../store';

const selectMessages = (state: RootState) => (
    state.chatboxReducer.messages
);

const selectInputValue = (state: RootState) => (
    state.chatboxReducer.inputValue
);

export const ChatboxSelectors = {
    selectMessages,
    selectInputValue,
};
