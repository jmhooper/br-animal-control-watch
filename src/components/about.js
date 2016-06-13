require("../stylesheets/about.scss")

import React from "react"

const About = (props) => (
  <article className="about">
    <p>
      This site allows you to view animal control incidents that have occurred in East Baton Rouge Parish.
      Incidents can be filtered by date and by whether the incident involved a cat or a dog.
    </p>
    <p>
      This site uses <a href="https://data.brla.gov/">Baton Rouge Open Data</a> to download animal control incidents.
      This data is only as accurate as the data provided by Baton Rouge Open Data.
      Additionally, there may be some delay between when incidents occur and when they appear here because it takes some time for animal control incidents to propagate into the open data system.
    </p>
    <p>
      This website was built in Baton Rouge, LA by <a href="http://jonathanhooper.net">Jonathan Hooper</a>.
      The idea for this application was inspired by the final project of a student in <a href="http://thefuturesfund.org">The Futures Fund</a> program.
    </p>
    <p>
      This website was developed using <a href="https://facebook.github.io/react/">React</a> and is open source.
      The source code can be found on my <a href="https://github.com/jmhooper/br-animal-control-watch">Github page</a>.
    </p>
  </article>
)

export default About
