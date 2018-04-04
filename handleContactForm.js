function pickCaptcha () {
  const id = Math.floor(Math.random() * 10)
  document.getElementsByName('captcha')[0].setAttribute('id', id)
  document.getElementById("captcha-img").src = 'captcha/' + id + '.png'
}

function handleContactForm (event) {
  event.preventDefault()
  const c = document.getElementsByName('captcha')[0].getAttribute('id')
  if (c === '') {
    console.warn('Are you trying to break my app?')
    return false
  }

  const e = document.getElementsByName('email')[0].value
  const n = document.getElementsByName('name')[0].value
  const s = document.getElementsByName('subject')[0].value
  const m = document.getElementsByName('message')[0].value
  const a = document.getElementsByName('captcha')[0].value
  if (a === '' || e === ''  || n === '' || s === '' || m === '') {
    console.log('Weird. It looks like you by-passed the required constraint on the input fields.')
    return false
  }

  fetch('https//localhost:5000/', {
      method: 'post',
      body: {e, n, s, m, a, c},
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log('Thanks for the message!')
    })
  return true
}
