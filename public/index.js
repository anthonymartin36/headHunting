const selectedRole = document.getElementsByClassName('selected')[0]
const charactorName = document.getElementById('name').value

const form = document.getElementsByClassName('form')[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Form Submitted')

  const headers = new Headers()

  const body = { name: charactorName, role: selectedRole }

  const jsonBody = JSON.stringify(body)
  console.log('Should Fetch')

  window.location.href = `invitation/${jsonBody}`
})
