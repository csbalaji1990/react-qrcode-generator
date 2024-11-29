import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QrCode } from './components/QrCode'
import './style/QrCode.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCode />
  </StrictMode>,
)