import { CREATE_CATEGORY_REQUEST_SUCCESS,CREATE_CATEGORY_REQUEST_FAILURE,CREATE_CATEGORY_REQUEST,RESET_ACTION } from "./actions";

const initialState={
    message:null,
    isLoading:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case RESET_ACTION:{
        return {message:null,
        isLoading:false,}
      }
      case CREATE_CATEGORY_REQUEST:{
        return{
          message:null,
          isLoading:true
        }
      }
    
      case CREATE_CATEGORY_REQUEST_SUCCESS: {
        const {message} = action.payload;
        console.log(message,action.payload)

        return {
            message,
            isLoading:false
        };
      }
      case CREATE_CATEGORY_REQUEST_FAILURE: {

        const {message} = action.payload;
        console.log(message,'fmee')
        return {
            message,
            isLoading:false,
        };
      }
      default:
        return {
          message:null,
          isLoading:false,
        };
    }
  };
  
  export {reducer};