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

getContent().then(content => {
    const contentDom = document.createElement('div')
    contentDom.className = '-qidian-content'
    contentDom.innerHTML =
        `
    ${content.map(p => `<span>${p}</span><br>`).join('')}
    `
    contentDom.addEventListener('wheel', e => {
        e.preventDefault()
        contentDom.scrollBy({
            behavior: 'smooth',
            top: 20 * (e.deltaY > 0 ? 1 : -1)
        })
    })
    document.documentElement.appendChild(contentDom)
})
