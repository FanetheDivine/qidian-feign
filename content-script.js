const styles = document.createElement('style')
styles.innerHTML =
  `
body {
  background-color: white !important;
}

#app {
  display: none  !important;
}

.-qidian-feign{
  position:fixed;
  width:100%;
  height:100%;
  z-index:0;
}

.-qidian-content{
  position:fixed;
  left:180px;
  bottom:0;
  width:50%;
  height:30px;
  overflow:auto;
  z-index:100;
  background:white;
  border-top:1px gray solid;
}

.-qidian-content::-webkit-scrollbar{
  display:none;
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


const iframe = document.createElement('iframe')
iframe.className = '-qidian-feign'
iframe.src = ['https://cn.bing.com/search?q=useEffect', 'https://cn.bing.com/search?q=useLayoutEffect', 'https://zh-hans.react.dev/reference/react/useEffect', 'https://zh-hans.react.dev/reference/react/useLayoutEffect', 'https://nextjs.org/docs']
  .sort(() => Math.random() - 0.5)[0]
document.documentElement.appendChild(iframe)
