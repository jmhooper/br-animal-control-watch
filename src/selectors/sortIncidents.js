import { createSelector } from "reselect"
import moment from "moment"

const getIncidents = incidents => incidents

const sortIncidents = createSelector(
  [getIncidents],
  (incidents) => {
    const incidentsCopy = incidents.slice(0)
    incidentsCopy.sort((a, b) => {
      const dateA = moment(moment(`${a.impound_date}`).format(`YYYY-MM-DD\T${a.impound_time}`))
      const dateB = moment(moment(`${b.impound_date}`).format(`YYYY-MM-DD\T${b.impound_time}`))
      return dateB.valueOf() - dateA.valueOf()
    })
    return incidentsCopy
  }
)

export default sortIncidents
