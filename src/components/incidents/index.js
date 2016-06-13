require("../../stylesheets/incidents.scss")

import React from "react"
import IncidentsData from "./data"
import IncidentsError from "./error"
import IncidentsLoading from "./loading"
import IncidentsEmpty from "./empty"
import { connect } from "react-redux"
import transformIncidents from "../../selectors/transformIncidents"

const Incidents = ({ error, isLoading, data }) => (
  <div className="incidents">
    {currentComponent({ error, isLoading, data })}
  </div>
)

const currentComponent = ({ error, isLoading, data }) => {
  if (error) {
    return <IncidentsError error={error}/>
  } else if (isLoading) {
    return <IncidentsLoading />
  } else if (data.length == 0) {
    return <IncidentsEmpty />
  } else {
    return <IncidentsData data={data} />
  }
}

const mapStateToProps = ({ incidents }) => ({
  error: incidents.error,
  isLoading: incidents.isLoading,
  data: transformIncidents(incidents.data),
})

export default connect(mapStateToProps)(Incidents)
