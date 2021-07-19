const toggleClass = (id, klass) => {
  const el = document.getElementById(id)

  if (el) {
    el.classList.toggle(klass)
  }
}

export default toggleClass
