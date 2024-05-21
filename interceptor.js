document.title = 'useEffect-搜索'

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

getContent().then(content => {
    alert(JSON.stringify(content))
})
