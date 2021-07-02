const newFormHandler = async event => {
  event.preventDefault()

  const name = document.querySelector('#playlist-name').value.trim()
  const needed_funding = document
    .querySelector('#playlist-funding')
    .value.trim()
  const description = document.querySelector('#playlist-desc').value.trim()

  if (name && needed_funding && description) {
    const response = await fetch(`/api/playlist`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert('Failed to create playlist')
    }
  }
}

const delButtonHandler = async event => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id')

    const response = await fetch(`/api/playlist/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert('Failed to delete playlist')
    }
  }
}

document
  .querySelector('.new-playlist-form')
  .addEventListener('submit', newFormHandler)

document
  .querySelector('.playlist-list')
  .addEventListener('click', delButtonHandler)
