function getDurations () {
  
  const getMillisecondsSince = function (year, month=0) {
    return ((new Date ()).getTime() - new Date (year, month, 1))
  }
  
  const getYearsSince = function (year, round=1) {
    return round * Math.floor(1/round * Math.floor(getMillisecondsSince(year) / (1000 * 60 * 60 * 24 * 7 * 52)))
  }
  
  const getMonthsSince = function (year, month) {
    return Math.floor(getMillisecondsSince(year, month) / (1000 * 60 * 60 * 24 * 31))
  }
  
  const getAmeliesAge = function () {
    const months = getMonthsSince(2017, 6)
    return months < 12 ? `${months}-month-old` : `${getYearsSince(2017)}-year-old`
  }
  
  document.getElementById("years-of-professional-experience").innerHTML = getYearsSince(2015)
  document.getElementById("years-of-personal-experience").innerHTML = getYearsSince(2003, 5)
  document.getElementById("age-of-amelie").innerHTML = getAmeliesAge()
}

function ee() {
  console.log('oremor nhoj em llik tsum uoy emag eht niw ot')
  document.getElementsByTagName("header")[0].style.backgroundImage = "url('/assets/doom.jpg')";
}
