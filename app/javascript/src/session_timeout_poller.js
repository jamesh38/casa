const deviseTimeoutInMinutes = 180
// const timeoutDuration = 180
const twoMinuteWarning = deviseTimeoutInMinutes - 2
const totalTimerAmount = twoMinuteWarning * 60 * 1000
const deviseTimeoutInMilliseconds = deviseTimeoutInMinutes * 60 * 1000
const startTime = new Date().getTime()
let lastTime = new Date().getTime()
let currentTime
let timeElapsed
console.log('here', window.timeout)

function warningBoxAndReload () {
  window.alert('Warning: You will be logged off in 2 minutes due to inactivity.')
  window.location.reload()
}

setInterval(myTimer, 1000)

function myTimer () {
  timeElapsed = Math.abs(lastTime - startTime)
  currentTime = new Date().getTime()
  if (timeElapsed > deviseTimeoutInMilliseconds) {
    window.location.reload()
  } else if (timeElapsed > totalTimerAmount) {
    warningBoxAndReload()
  } else {
    lastTime = currentTime
  }
};
