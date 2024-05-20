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