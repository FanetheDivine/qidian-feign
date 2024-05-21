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
    const contentNode = document.querySelector('#vite-plugin-ssr_pageContext')
    if (!contentNode) {
        return new Promise(resolve => {
            setTimeout(() => resolve(getContent()), 0)
        })
    } else {
        return JSON.parse(contentNode.innerHTML).pageContext.pageProps.pageData.chapterInfo.content.split('<p>')
    }
}

getContent().then(content => {
    alert(JSON.stringify(content))
})
