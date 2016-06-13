import React from "react"
import moment from "moment"

const IncidentsRow = ({ incident }) => (
  <tr>
    <td>{incident.impoundDate.format("MMM Do, YYYY - h:mm A")}</td>
    <td>{incident.impoundno}</td>
    <td>{incident.service_code}</td>
    <td>{incident.species}</td>
    <td>{incident.breed}</td>
    <td>{incident.sex}</td>
    <td>{incident.size}</td>
    <td>{incident.color}</td>
    <td>{incident.condition}</td>
    <td>{incident.temperment}</td>
    <td>{incident.collar != "UNKNOWN" ? `${incident.collar}/${incident.collar_color}` : "NONE"}</td>
    <td>{incident.location}</td>
  </tr>
)

const incidentTime = (date, time) => moment(`${date}`).format(`${time}`)

export default IncidentsRow
