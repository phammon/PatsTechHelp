import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Pay from './pages/Pay'
import PaySuccess from './pages/PaySuccess'
import PageViewTracker from './components/PageViewTracker'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay/success" element={<PaySuccess />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
