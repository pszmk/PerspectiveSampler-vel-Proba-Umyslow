import { combineEpics } from 'redux-observable';
import { filter, tap, map } from 'rxjs';
import { RootEpic } from '../store';
import { sendMessage, setInputValue } from '../reducers/chatboxReducer';
import { ChatboxSelectors } from '../selectors/chatboxSelectors';

const sendMessageEpic: RootEpic = ($action, $state) => $action.pipe(
    filter(sendMessage.match),
    tap(() => {
        const inputValue = ChatboxSelectors.selectInputValue($state.value);
        /*
            TODO: W tym miejscu powinno nastąpić jakieś przesłanie
            wpisanej wiadomości do backendu.
        */
        console.log(`Przesłano "${inputValue}" do backendu!`);
    }),
    map(() => setInputValue({ value: '' }))
);

export const rootEpic = combineEpics(sendMessageEpic);
