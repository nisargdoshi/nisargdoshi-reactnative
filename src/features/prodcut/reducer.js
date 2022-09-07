import { GET_PRODUCT_LIST_REQUEST_SUCCESS,GET_CATEGORY_LIST_REQUEST_SUCCESS } from "./actions";

const initialState={
    productList:[],
    categoryList:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_LIST_REQUEST_SUCCESS: {
        const {productList} = action.payload;
        return {
            ...state,
            productList
        };
      }
      case GET_CATEGORY_LIST_REQUEST_SUCCESS: {

        const {categoryList} = action.payload;

        return {
            ...state,
            categoryList
        };
      }


      default:
        return state;
    }
  };
  
  export {reducer};