const styles = document.createElement('style')
styles.innerHTML =
  `
body {
  background-color: white !important;
}

#app {
  display: none  !important;
}
`
document.documentElement.appendChild(styles)

const icon = document.createElement('script')
icon.id = '__customIconHref'
icon.type = 'application/json'
icon.dataset['value'] = chrome.runtime.getURL('icon.ico')
document.documentElement.appendChild(icon)


const target = document.createElement('script')
target.type = 'text/javascript'
target.src = chrome.runtime.getURL('interceptor.js')
document.documentElement.appendChild(target)
