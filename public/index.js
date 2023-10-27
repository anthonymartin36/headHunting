const selectedRole = document.getElementByClassName('selected')[0]
const charactorName = document.getElementById('name').value

const form = document.getElementsByClassName('form')[0]
console.log('heheheheheehhe')
form.addEventListener('submit', (event) => {
  const headers = new Headers()

  const body = {}

  body.name = charactorName
  body.role = selectedRole

  const jsonBody = JSON.stringify(body)

  const requestSettings = {
    method: 'POST',
    headers: headers,
    body: jsonBody,
    mode: 'cors',
    cache: 'default',
  }

  const request = new Request('invitation', requestSettings)

  fetch(request)
})
