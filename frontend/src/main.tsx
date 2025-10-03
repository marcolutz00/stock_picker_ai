import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tailwind.css'
// import App from './App.tsx'
import StockPickerUI from './pages/stock-picker-ui.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <StockPickerUI />
  </StrictMode>,
)
