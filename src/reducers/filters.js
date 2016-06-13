import moment from "moment"

const initialState = {
  startDate: moment().subtract(1, "weeks").startOf("day"),
  endDate: moment().startOf("day"),
  species: "ALL",
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return Object.assign({}, state, { [action.filter]: action.value })
    default:
      return state
  }
}

export default filters
