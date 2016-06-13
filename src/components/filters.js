require("react-datepicker/dist/react-datepicker.css");
require("../stylesheets/filters.scss")

import React from "react"
import DatePicker from "react-datepicker";
import { connect } from "react-redux"
import { setFilter } from "../actions/filters"

const Filters = ({ startDate, endDate, species, setStartDateFilter, setEndDateFilter, setSpeciesFilter }) => (
  <form className="filters">
    <label htmlFor>Start Date:</label>
    <DatePicker
      selected={startDate}
      onChange={setStartDateFilter}
    />
    <label>End Date:</label>
    <DatePicker
      selected={endDate}
      onChange={setEndDateFilter}
    />
    <label>Species:</label>
    <select
      value={species}
      onChange={(event) => setSpeciesFilter(event.target.value)}
    >
      <option value="ALL">All</option>
      <option value="CAT">Cat</option>
      <option value="DOG">Dog</option>
    </select>
  </form>
)

const mapStateToProps = state => state.filters

const mapDisplatchToProps = dispatch => ({
  setStartDateFilter: (date) => dispatch(setFilter("startDate", date)),
  setEndDateFilter: (date) => dispatch(setFilter("endDate", date)),
  setSpeciesFilter: (species) => dispatch(setFilter("species", species))
})

export default connect(mapStateToProps, mapDisplatchToProps)(Filters)
