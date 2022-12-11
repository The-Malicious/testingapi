import { configureStore } from '@reduxjs/toolkit'
import deleteSlice from './delete/deleteSlice'
import renderSlice from './render/renderSlice'

export const store = configureStore({
    reducer: {
        renderState: renderSlice,
        allDelete: deleteSlice
    }
})