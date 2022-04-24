import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { projectName } from './config/firebase'
import { login, register } from './slices/auth'
import { unSetMessage } from './slices/ui'

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
    <>
      <h1>{projectName}</h1>
      <button onClick={handleOnRegister}>register</button>
      <button onClick={handleOnLogin}>Login</button>
    </>
  )
}

export default App
