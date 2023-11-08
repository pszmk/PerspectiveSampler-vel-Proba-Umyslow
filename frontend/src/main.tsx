import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { isNil } from 'ramda';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const rootElement = document.getElementById('root');

if (isNil(rootElement)) {
    throw Error('Cannot load app');
}

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Provider>
    </StrictMode>,
)
