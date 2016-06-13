import { CALL_API } from "redux-api-middleware";
import { incidentsURL } from "../utils/incidents"

export const loadIncidents = (filters) => ({
  [CALL_API]: {
    endpoint: incidentsURL(filters),
    method: 'GET',
    types: ['INCIDENT_API_REQUEST', 'INCIDENT_API_SUCCESS', 'INCIDENT_API_FAILURE']
  }
})
