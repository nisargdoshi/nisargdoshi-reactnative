import { combineReducers } from 'redux'
import { reducer as producutListReducer } from '../src/features/prodcut/reducer'
import { reducer as createProductreducer } from '../src/features/prodcut/createProductreducer'

const appreducer = combineReducers({
        product: producutListReducer,
        createProduct:createProductreducer
})

const reducer = (state, action) => {
    return appreducer(state, action);
};

export { reducer }