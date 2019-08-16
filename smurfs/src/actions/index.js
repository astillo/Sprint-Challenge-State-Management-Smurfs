import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA';
export const DISPLAY_DATA = 'DISPLAY_DATA';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: DISPLAY_DATA, payload: res.data })
        })
        .catch(err => {
            alert(err)
        })
}


