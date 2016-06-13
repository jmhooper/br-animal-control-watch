import { combineReducers } from "redux"
import filters from "./filters"
import incidents from "./incidents"

export default combineReducers({
  filters,
  incidents,
})
