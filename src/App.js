import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { projectName } from './config/firebase'
import { login, register } from './slices/auth'
import { unSetMessage } from './slices/ui'
import { Container } from '@mui/material'
import Login from './components/login'

const App = () => {
  const dispatch = useDispatch()

  // when a dispatch is running the message will be cleared
  useEffect(() => {
    dispatch(unSetMessage())
  }, [dispatch])

  const handleOnLogin = () => {
    dispatch(
      login({
        email: 'j.ant2onio.2udiaz@gmail.com',
        password: 'Tangente15',
      }),
    )
  }

  const handleOnRegister = () => {
    dispatch(
      register({
        email: 'j.antonio.udiaz@gmail.com',
        password: 'Tangente15213',
      }),
    )
  }
  return (
    <Container
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <h1>{projectName}</h1>
      <button onClick={handleOnRegister}>register</button>
    <button onClick={handleOnLogin}>Login</button> */}
      <Login />
    </Container>
  )
}

export default App
