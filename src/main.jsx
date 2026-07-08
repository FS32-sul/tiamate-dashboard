import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from 'antd'
import Paths from './routes/Paths'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Paths />
    </App>
  </StrictMode>,
)
