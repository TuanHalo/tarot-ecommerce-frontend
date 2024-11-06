import { useRoutes } from 'react-router-dom'
import { routers } from './routers'
import { AuthProvider } from './stores/AuthContext'

function App() {
  const element = useRoutes(routers);

  return (
    <AuthProvider>
      {element}
    </AuthProvider>
  )
}

export default App
