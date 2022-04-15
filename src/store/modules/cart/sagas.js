import {call, put, all, takeLatest} from 'redux-saga/effects'
import api from '../../../services/api'
import {addToCartSuccess} from './actions'

 export function* addToCart() {
     const response = yield call(api.get, '/products/1')
   
   
    yield put(addToCartSuccess(response.data))  
}

export default all([
    takeLatest('ADD_TO_CART_REQUEST', addToCart)
    
])