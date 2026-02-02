import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import { neobrutalistTheme } from './theme/neobrutalism.theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={neobrutalistTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
