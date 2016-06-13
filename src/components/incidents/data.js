import React from "react"
import IncidentRow from "./row"

const IncidentsData = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Incident date/time</th>
        <th>Impound Number</th>
        <th>Service code</th>
        <th>Species</th>
        <th>Breed</th>
        <th>Sex</th>
        <th>Size</th>
        <th>Color</th>
        <th>Condition</th>
        <th>Temperment</th>
        <th>Collar</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {data.map(incident => {
        return <IncidentRow key={incident.cpfileno} incident={incident}/>
      })}
    </tbody>
  </table>
)

export default IncidentsData
