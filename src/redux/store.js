import {configureStore} from '@reduxjs/toolkit'
import employeSlice from './employeSlice/employeSlice'

export const store = configureStore({
    reducer:{
        employe : employeSlice
    }
})