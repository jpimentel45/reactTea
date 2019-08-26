import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'
import axios from 'axios'

//thunk allows us to use asychronous request
export const getItems = () => dispatch => {
   dispatch(setItemsLoading);
   axios
   //from our backend proxy: allows us to do this from packagejson
       .get('/api/special')
   .then(res => 
    dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
}

export const deleteItem = (id) => dispatch => {
   axios
   .delete(`/api/special/${id}`)
   .then(res => 
    dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
}

//item comes in with id and name 
export const addItem = (item) => dispatch => {
  axios
  .post('/api/special/', item)
  .then(res => 
    dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
}

//dispatch items loading
export const setItemsLoading = () => {
    return {
        //sets false to true 
        type: ITEMS_LOADING
    }
}