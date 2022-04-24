import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    message: '',
  },
  reducers: {
    setMessage: (state, action) => ({
      message: action.payload.errorCode,
    }),
    unSetMessage: (state, action) => ({
      message: '',
    }),
  },
})

const { reducer, actions } = uiSlice
export const { setMessage, unSetMessage } = actions
export default reducer
