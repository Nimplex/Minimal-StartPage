const searchBox = document.getElementById('search')
const engineButton = document.getElementById('engine')

const engines = [
  { name: 'Brave', url: 'https://search.brave.com/search?q=' },
  { name: 'Google', url: 'https://www.google.com/search?q=' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' }
]

let engine = 0
try {
  const saved = engines.findIndex((e) => e.name === localStorage.getItem('engine'))
  if (saved >= 0) engine = saved
} catch {}

const showEngine = () => { engineButton.textContent = engines[engine].name }
showEngine()

engineButton.addEventListener('click', () => {
  engine = (engine + 1) % engines.length
  showEngine()
  try { localStorage.setItem('engine', engines[engine].name) } catch {}
  searchBox.focus()
})

searchBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = searchBox.value.trim()
    if (value.length > 0) location.href = engines[engine].url + encodeURIComponent(value)
    else searchBox.value = ''
  }
})

window.onload = () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}
