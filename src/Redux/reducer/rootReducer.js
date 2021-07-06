// import external modules
import { combineReducers } from '@reduxjs/toolkit'

import categoryReducer from '../slice/index'

const rootReducer = combineReducers({
  Category: categoryReducer,
})

export default rootReducer