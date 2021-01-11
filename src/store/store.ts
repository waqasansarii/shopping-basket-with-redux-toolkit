import {configureStore} from '@reduxjs/toolkit'
import {listReducer} from '../globalState/createSlice'


export const store = configureStore({
    reducer:{
        reducer:listReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
