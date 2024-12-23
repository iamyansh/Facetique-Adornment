import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider} from 'react-redux'
import { store } from './redux/store/store'
import { BrowserRouter} from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import { theme } from './theme.js'
import axios from 'axios'

// axios.defaults.baseURL = "";
console.log(import.meta.env.VITE_BACKEND_URL);
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
)
