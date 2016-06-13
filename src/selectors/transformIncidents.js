import { createSelector } from "reselect"
import moment from "moment"
import { extractIncidentImpoundDate } from "../utils/incidents"

const getIncidents = incidents => incidents

const transformIncidents = createSelector(
  [getIncidents],
  (incidents) => {
    let incidentsCopy = incidents.slice(0)
    incidentsCopy = incidentsCopy.map(incident => {
      return Object.assign(incident, { impoundDate: extractIncidentImpoundDate(incident) })
    })
    incidentsCopy.sort((a, b) => {
      return b.impoundDate.valueOf() - a.impoundDate.valueOf()
    })
    return incidentsCopy
  }
)

export default transformIncidents
