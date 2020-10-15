const searchBoxContainer = document.querySelector('.searchBoxContainer')

function handleFocus() {
    searchBoxContainer.classList.add('focus')
}

function handleBlur() {
    searchBoxContainer.classList.remove('focus')
}

