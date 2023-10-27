const selectedRole = document.getElementById('select')
const charactorName = document.getElementById('name').value

const form = document.getElementsByClassName('form')[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Form Submitted')

  const body = {
    name: charactorName,
    role: selectedRole.options[selectedRole.selectedIndex].innerHTML,
  }

  console.log(selectedRole.options[selectedRole.selectedIndex].innerHTML)

  const jsonBody = JSON.stringify(body)

  window.location.href = `invitation/${jsonBody}`
})
