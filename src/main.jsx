import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from 'antd'
import Paths from './routes/Paths'
import AntContext from './contexts/AntContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <AntContext>
        <Paths />
      </AntContext>
    </App>
  </StrictMode>,
)
