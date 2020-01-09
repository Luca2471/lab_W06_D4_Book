document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const titleForm = document.querySelector("#title")
  titleForm.addEventListener("input", handleTitleSubmit)

  const authorForm = document.querySelector("#author")
  authorForm.addEventListener(`input`, handleAuthorSubmit)

//   const categoryButton = document.querySelector(`#category`)
//   categoryButton.addEventListener(`change`, handleFormSubmit)
 })

const handleTitleSubmit = function(event) {
  event.preventDefault()
  console.log(event.target.title.value)
  const result = document.querySelector(`#reading-list`)
  result.textContent = ` ${event.target.value}`
}

const handleAuthorSubmit = function(event) {
  event.preventDefault()
  console.log(event.target.author.value)
  const result = document.querySelector("#reading-list")
  result.textContent = `${event.target.value}`
}
