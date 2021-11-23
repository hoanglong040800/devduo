import moment from 'moment'

export function arrToObjWithData(arr, data) {
  return arr.reduce((prev, cur) => {
    prev[cur] = data[cur]
    return prev
  }, {})
}

export function convertUTCToDateTime(utc) {
  let date = utc.slice(0, utc.indexOf('T'))
  let time = utc.substr(utc.indexOf('T') + 1, 8)
  let datetime = utc.slice(0, 19)

  return datetime
}

export function convertTimeStart(time_start, duration) {
  const startDatetime = convertUTCToDateTime(time_start)
  const formatStartDatetime = moment(startDatetime).format('D/M/YY  hh:mm:ss')

  // countdown
  const finishMili = moment(startDatetime).add(duration, 'hours').valueOf()
  const nowMili = moment().valueOf()
  const countdownMili = finishMili - nowMili
  const formatCountdownTime = formatTimeLeft(countdownMili)

  return { formatStartDatetime, formatCountdownTime }
}

export function formatTimeLeft(miliseconds) {
  if (miliseconds <= 0) return ''

  const countdownMoment = moment.duration(miliseconds)
  const hours = countdownMoment.hours()
  const minutes = countdownMoment.minutes()
  const seconds = countdownMoment.seconds()

  if (hours > 0) return `${hours} hours left`
  if (minutes > 0) return `${minutes} minutes left`
  if (seconds > 0) return `${seconds} seconds left`
}
