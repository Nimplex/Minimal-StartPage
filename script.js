const searchBox = document.getElementById('search')

searchBox.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    const { value } = searchBox
    if (value.replace(/ /gm, '').length > 0) location.href = `https://duckduckgo.com/?q=${value}`
    else searchBox.value = ''
  }
})

window.onload = () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}