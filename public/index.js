const selectedRole = document.getElementById('select')
const charactorName = document.getElementById('name')

const form = document.getElementsByClassName('form')[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('37246807656234562348568723645634')
  console.log(charactorName)

  const body = {
    name: charactorName.value,
    role: selectedRole.options[selectedRole.selectedIndex].innerHTML,
  }

  console.log(selectedRole.options[selectedRole.selectedIndex].innerHTML)

  const jsonBody = JSON.stringify(body)

  window.location.href = `invitation/${jsonBody}`
})
