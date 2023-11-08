import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { AnyAction, configureStore } from '@reduxjs/toolkit'
import chatboxReducer from './reducers/chatboxReducer';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        chatboxReducer,
    },
    middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic as unknown as Epic<AnyAction, AnyAction, void, RootState>);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootEpic = Epic<AnyAction, AnyAction, RootState>;
