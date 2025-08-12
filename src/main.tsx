import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from '../src/styles/GlobalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
     <App />,
     <GlobalStyles />
    </>
  </StrictMode>,
)
