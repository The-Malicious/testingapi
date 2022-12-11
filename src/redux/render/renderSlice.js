import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    render : ""
}

const renderSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {
        renderState:(state,action)=>{
            state.render = action.payload
        }
    }
})

export const {renderState} = renderSlice.actions;
export default renderSlice.reducer