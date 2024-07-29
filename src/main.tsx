import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
