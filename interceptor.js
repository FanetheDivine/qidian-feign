document.title = 'useEffect - 搜索'

const customIconHref = document.querySelector('#__customIconHref').dataset.value
function changeIcon() {
    const icon = document.querySelector('[rel~=shortcut]')
    if (!icon) {
        setTimeout(changeIcon, 0)
    } else {
        icon.href = customIconHref
    }
}
changeIcon()

async function getContent() {
    const contentNodes = [...document.querySelectorAll('.content-text')]
    if (contentNodes.length > 0) {
        return contentNodes.map(dom => dom.innerText)
    } else {
        return new Promise(resolve => {
            setTimeout(() => resolve(getContent()), 0)
        })
    }
}

const iframe = document.createElement('iframe')
iframe.style = 'position:fixed;width:100%;height:100%;'
iframe.src = 'https://cn.bing.com/search?q=useEffect'
document.documentElement.appendChild(iframe)

getContent().then(content => {
    // const functionStr =
    //     `
    // alert(1)
    // function __setContent(){
    //     const dom = document.querySelector("b_caption")
    //     if(!dom){
    //         console.log(1)
    //         setTimout(__setContent,1000)
    //     }
    //     else{
    //         dom.innerHTML =
    //         \`
    //         <div style='width:600px;height:130px;overflow:auto;'>
    //             ${content.map(p => `<span>${p}</span><br>`)}
    //         </div>
    //         \`
    //     }
    // }
    // __setContent()
    // `
    // const script = iframe.contentDocument.createElement('script')
    // script.innerHTML = functionStr
    // iframe.contentDocument.documentElement.appendChild(script)
})
