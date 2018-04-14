function pickCaptcha () {
  const id = Math.floor(Math.random() * 10)
  document.getElementsByName('captcha')[0].setAttribute('id', id)
  document.getElementById("captcha-img").src = 'assets/captcha/' + id + '.jpg'
}

function handleContactForm (event) {
  event.preventDefault()

  if (!getApiKey) {
    console.error('You must define a getApiKey() functino that returns the API key as a simple string in order to use the email functionality.')
    return false
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn('Mh. No API key. You\'re not going to get very far.')
    return false
  }

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

  const captchas = [
    'W93BX',
    'JA3V8',
    'RBSKW',
    'HJ9PV',
    '459CT',
    'TSMS9',
    'R84CH',
    'D4TSH',
    '3M56R',
    'HAPK3',
  ]

  if (String(a).toUpperCase() !== captchas[c]) {
    console.info('You might want to get this checked out. Are you a robot?')
    document.getElementById('validation').innerHTML = 'Your input does not match the image.'
    return false
  }

  document.getElementById('sending').style.display = 'block'
  document.getElementById('validation').style.display = 'none'
  fetch('https://76psli8g8k.execute-api.us-west-2.amazonaws.com/development/sendMail', {
      method: 'POST',
      body: JSON.stringify({e, n, s, m, a, c}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      })
    })
    .then(function (response) {
      document.getElementById('sending').style.display = 'none'
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.indexOf("application/json") === -1) {
        throw ('Oops! Response Content-Type is not JSON.')
      }
      return response.json()
    })
    .then(function (response) {
      if (response.errorMessage) {
        throw (response.errorMessage)
      }
      console.log('Thanks for the message!')
      document.getElementById('sending').style.display = 'none'
      document.getElementById('contact-form').classList.add("disappear");
      setTimeout(function() {
        document.getElementById('thankyou').style.display = 'flex'
      }, 600)
    })
    .catch(function (error) {
      console.error('Something went wrong:', error)
      document.getElementById('sending').style.display = 'none'
      document.getElementById('validation').style.display = 'block'
      document.getElementById('validation').innerHTML = 'Oops! Something went wrong. Please try again later or send me a direct email at gurcan.yves@gmail.com.'
    })
  return true
}
