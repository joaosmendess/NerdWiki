import React from 'react'
import ReactDOM from 'react-dom/client'

import '../app/globals.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
