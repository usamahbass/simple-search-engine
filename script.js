const searchBoxContainer = document.querySelector('.searchBoxContainer')

function handleFocus() {
    searchBoxContainer.classList.add('focus')
}

function handleBlur() {
    searchBoxContainer.classList.remove('focus')
}

const search = document.querySelector('.searchBoxIcon')
const cari = document.getElementById('cari')
const result = document.querySelector('.result')

search.addEventListener('click', function () {
    fetch(`http://api.serpstack.com/search?access_key=bf304b26ab99fde4146b4640c0cdde86&query=${cari.value}`).then(function (response) {
        return response.json()
    }).then(function(data) {
        console.log(data);
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    })
    
})

