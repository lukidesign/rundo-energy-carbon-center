import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')
if (!root) { document.body.innerHTML = 'NO ROOT'; } else {
  try {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  } catch(e) {
    root.innerHTML = '<div style="color:red;padding:20px">RENDER ERROR: ' + String(e) + '</div>'
    console.error('RENDER ERROR:', e)
  }
}
