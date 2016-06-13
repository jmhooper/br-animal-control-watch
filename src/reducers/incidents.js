import moment from "moment"

const initialState = {
  error: undefined,
  isLoading: false,
  data: [],
}

const incidents = (state = initialState, action) => {
  switch (action.type) {
    case "INCIDENT_API_REQUEST":
      return Object.assign({}, state, { isLoading: true, data: [], error: undefined })
    case "INCIDENT_API_SUCCESS":
      return Object.assign({}, state, { isLoading: false, data: action.payload })
    case "INCIDENT_API_FAILURE":
      return Object.assign({}, state, { isLoading: false, error: action.payload })
    default:
      return state
  }
}

export default incidents
