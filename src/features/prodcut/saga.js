import { call, put, takeEvery } from 'redux-saga/effects';
import queryAPi from '../../api/Api';
import { constant } from '../../api/Constants';
import { methodTypes } from '../../api/Helper';
import {
  CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_REQUEST_FAILURE, CREATE_CATEGORY_REQUEST_SUCCESS, GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_REQUEST_SUCCESS, GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_REQUEST_SUCCESS
} from './actions';


 export default function* handler() {
  yield takeEvery(GET_PRODUCT_LIST_REQUEST, getProductList);
  yield takeEvery(GET_CATEGORY_LIST_REQUEST, getCategoryList);
  yield takeEvery(CREATE_CATEGORY_REQUEST,createProduct)
}

function* getProductList(action) {
  try {
     const response= yield call(queryAPi,
        {
            endPoint:constant.products,
            methodType:methodTypes.GET,
            accessToken:constant.accessToken
        })

        if(response.message==='Success'){
            yield put({
                type: GET_PRODUCT_LIST_REQUEST_SUCCESS,
                payload: {
                  productList:response.products
                },
              });
        }
    
  } catch (err) {
    // Handle error
  }
}

function* getCategoryList(action) {
    try {
       const response= yield call(queryAPi,
          {
              endPoint:constant.categories,
              methodType:methodTypes.GET,
              accessToken:constant.accessToken
          })
  
          if(response.message==='Success'){
              yield put({
                  type: GET_CATEGORY_LIST_REQUEST_SUCCESS,
                  payload: {
                    categoryList:response.categories
                  },
                });
          }
      
    } catch (err) {
      // Handle error
    }
  }

function* createProduct(action) {
    try {
      console.log(action.payload)
       const response= yield call(queryAPi,
          {
              endPoint:constant.products,
              methodType:methodTypes.POST,
              body:action.payload,
              accessToken:constant.accessToken
          })

          console.log(response.message)

          if(response.message!=='Success'){
              yield put({
                  type: CREATE_CATEGORY_REQUEST_FAILURE,
                  payload: {
                    message:response.message
                  },
                });
          }
          else{
            yield put({
              type: CREATE_CATEGORY_REQUEST_SUCCESS,
              payload: {
                message:response.message
              },
            });
          }
      
    } catch (err) {
      // Handle error
    }
  }
