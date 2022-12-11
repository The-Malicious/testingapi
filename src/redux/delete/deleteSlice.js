import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allSelect : []
}

const deleteSlice = createSlice({
    name: 'delete',
    initialState,
    reducers: {
        deleteAll : (state, action) => {
            state.allSelect.push(action.payload)
        }
    }
})

export const {deleteAll} = deleteSlice.actions;
export default deleteSlice.reducer