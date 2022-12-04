import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    employeId : ""
}

const employeSlice = createSlice({
    name: 'employeSlice',
    initialState,
    reducers:{
        getEmployeId : (state, action) =>{
            state.employeId = action.payload
        }
    }
})

export const {getEmployeId} = employeSlice.actions;
export default employeSlice.reducer