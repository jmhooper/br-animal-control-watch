export const incidentsURL = ({ startDate, endDate, species })  => {
  let url = `https://data.brla.gov/resource/3tyj-sddj.json?$where=impoundno IS NOT NULL AND ${dateFilter(startDate, endDate)}`
  if (species !== "ALL") {
    url = url + ` AND species = '${species}'`
  }
  return url
}

const dateFilter = (startDate, endDate) => {
  const startDateString = startDate.format("YYYY-MM-DD")
  const endDateString = endDate.format("YYYY-MM-DD")
  return `impound_date BETWEEN '${startDateString}' AND '${endDateString}'`
}


