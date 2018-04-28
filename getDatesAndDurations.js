function getDatesAndDurations () {
  
  const getMillisecondsSince = function (start) {
    return Math.ceil((new Date ()).getTime() - (new Date (start + '01/01')))
  }
  
  const getYearsSince = function (start) {
    return getMillisecondsSince(start) / 1000 / 60 / 60 / 24 / 7 / 52
  }
  
  document.getElementById("years-of-professional-experience").innerHTML = getYearsSince('2015')
  document.getElementById("years-of-personal-experience").innerHTML = 15
  document.getElementById("age-of-amelie").innerHTML = '9-month-old'
}

function ee() {
  console.log('oremor nhoj em llik tsum uoy emag eht niw ot')
  document.getElementsByTagName("header")[0].style.backgroundImage = "url('/assets/doom.jpg')";
}
