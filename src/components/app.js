import React from "react"
import Header from "./header"
import About from "./about"
import Filters from "./filters"
import Incidents from "./incidents"
import { loadIncidents } from "../actions/incidents"
import { connect } from "react-redux"

class App extends React.Component {
  componentDidMount() {
    this.props.loadIncidents(this.props.filters)
  }

  componentDidUpdate(prevProps) {
    for (let key of Object.keys(prevProps.filters)) {
      if (prevProps.filters[key] != this.props.filters[key]) {
        this.props.loadIncidents(this.props.filters)
        break
      }
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Filters/>
        <Incidents/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ filters: state.filters })

const mapDisplatchToProps = (dispatch) => ({
  loadIncidents: (filters) => dispatch(loadIncidents(filters))
})

export default connect(mapStateToProps, mapDisplatchToProps)(App)
