function deleteModalSetup () {
  // index page all card delete buttons
  const deleteButtons = document.querySelectorAll('.deleteButton')

  // index page modal
  const modalRestaurantName = document.querySelector('#restaurantName')
  const modalDeleteForm = document.querySelector('#delete-form')

  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const { id, name } = event.target.dataset
      modalRestaurantName.textContent = name
      modalDeleteForm.setAttribute('action', `/restaurants/${id}?_method=DELETE`)
    })
  })
};

// wait for DOM to load
document.addEventListener('DOMContentLoaded', deleteModalSetup)
