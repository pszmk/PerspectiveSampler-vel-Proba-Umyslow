import { createSlice } from '@reduxjs/toolkit'
import { EChatboxPerson } from '../../Chatbox/const/bubble';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChatboxMessage {
    id: string;
    text: string;
    person: EChatboxPerson;
}

export interface CounterState {
    messages: ChatboxMessage[];
    inputValue: string;
}

const initialState: CounterState = {
    inputValue: '',
    messages: [{
        id: 'sample_message_1',
        text: `Raport, jak państwo zobaczą, zawiera główną taką prognozę: 
        inflacja zejdzie gdzieś tam do poziomu sześć, dziewięć, 
        powiedzmy, a wzrost będzie dwa, ponad dwa.`,
        person: EChatboxPerson.AI_DEBATER
    }, {
        id: 'sample_message_12',
        text: `Może półtora. 
        Tam jest półtora, jest dziewięć. Zależy czy tarcza będzie, 
        czy nie będzie tarczy.`,
        person: EChatboxPerson.USER,
    }, {
        id: 'sample_message_3',
        text: `Jak nie będzie tarczy,
        to będzie 12 w przyszłym roku, jak będzie tarcza, 
        będzie dziewięć, a na koniec roku będzie sześć`,
        person: EChatboxPerson.AI_ARBITER,
    }]
}

type SendMessageAction = PayloadAction<{ value: string }>;

export const chatboxSlice = createSlice({
    name: 'chatbox',
    initialState,
    reducers: {
        setInputValue: (state, { payload }: SendMessageAction) => {
            const { value } = payload;
            state.inputValue = value;
        },
        sendMessage: () => {},
        /* TODO: Ta getMessage dodaje nową wiadomość do listy wiadomości,
            trzeba to odbierać od backendu w jakimś epicu
        */
        getMessage: (state, { payload }: PayloadAction<ChatboxMessage>) => {
            state.messages.push(payload);
        }
    },
})

export const { 
    setInputValue, 
    sendMessage,
    getMessage, 
} = chatboxSlice.actions;

export default chatboxSlice.reducer;
