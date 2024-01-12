const handleHeaderChange = (location, buttonId) => {
    window.location.href = location
    changeHeader(buttonId)
}


const changeHeader = (buttonId) => {
    const allTabs = document.getElementsByClassName('header__tab');
    tabNum = allTabs.length
    for (let i = 0; i < tabNum; i++) {
        allTabs[i].classList.remove('header__tab_active');
    }
    const targetedTab = document.getElementById(buttonId)
    targetedTab.classList.add('header__tab_active')
}