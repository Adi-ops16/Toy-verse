import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routs/Routs'
import ToysProvider from './provider/ToysProvider'
import AuthProvider from './provider/AuthProvider'
import { ReTitleProvider } from 're-title'

createRoot(document.getElementById('root')).render(
  <ToysProvider>
    <AuthProvider>
      <ReTitleProvider>
        <RouterProvider router={router}></RouterProvider>
      </ReTitleProvider>
    </AuthProvider>
  </ToysProvider>
)
