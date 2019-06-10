console.log('0110010001101111011100000110010101100110011010010111001101101000')

function getDurations() {

    const getMillisecondsSince = function (year, month = 0) {
        return ((new Date()).getTime() - new Date(year, month, 1))
    }

    const getYearsSince = function (year, round = 1) {
        return round * Math.floor(1 / round * Math.floor(getMillisecondsSince(year) / (1000 * 60 * 60 * 24 * 7 * 52)))
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
    const header = document.getElementsByTagName("header")[0]
    if (header.style.backgroundImage === "url(\"/assets/doom.jpg\")") {
        header.style.backgroundImage = null
    } else {
        console.log('oremor nhoj em llik tsum uoy emag eht niw ot')
        header.style.backgroundImage = "url('/assets/doom.jpg')"
    }

}
