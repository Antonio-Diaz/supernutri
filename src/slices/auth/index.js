import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setMessage } from '../ui'

const auth = getAuth()

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const userCredential = response?.user
      thunkAPI.dispatch(
        setUser({ email: userCredential.email, uid: userCredential.uid }),
      )
    } catch (error) {
      const errorCode = error.code
      thunkAPI.dispatch(setMessage({ errorCode }))
    }
  },
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const { uid } = response?.user
      thunkAPI.dispatch(setUser({ email, uid }))
    } catch (error) {
      const errorCode = error.code
      thunkAPI.dispatch(setMessage({ errorCode }))
    }
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return { user: action.payload }
    },
    unSetUser: (state, action) => {
      return { user: null }
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isSignIn = true
    },
    [register.rejected]: (state, action) => {
      state.isSignIn = false
    },
    [login.fulfilled]: (state, action) => {
      state.isSignIn = true
    },
    [login.rejected]: (state, action) => {
      state.isSignIn = false
    },
  },
})

const { reducer, actions } = authSlice
export const { setUser, unSetUser } = actions
export default reducer
