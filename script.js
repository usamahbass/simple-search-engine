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
const idResult = document.getElementById('result')
const resultNumber = document.getElementById('resultNumber')

search.addEventListener('click', function () {
    idResult.innerHTML ="Loading ..."
    fetch(`http://api.serpstack.com/search?access_key=bf304b26ab99fde4146b4640c0cdde86&query=${cari.value}`).then(function (response) {
        return response.json()
    }).then(function(data) {
        idResult.innerHTML = ""
        resultNumber.innerHTML = ""

        resultNumber.innerHTML = `<p id="searchResultsNumber">About ${data.search_information.total_results} results (${data.search_information.time_taken_displayed} seconds) </p>`
        data.organic_results.forEach(value => {
            console.log(value);
            const displayed_url = value.displayed_url
            const snippet = value.snippet
            idResult.innerHTML += 
            `   <div class="rc" style="transition: height 300ms ease-in-out 0s;">
                    <div class="card">
                        <div class="cardBody"> 
                            <div class="displayUrl">
                                <div class="searchResult">
                                    <a href="${value.url}" ping="${value.related_pages_url}">
                                        <br>
                                        <span class="bold">${value.domain}</span><span class="subbold">${displayed_url.replace(`http://${value.domain}`, ' ')}</span> <button>▼</button>
                                            <h2>${value.title}</h2>
                                    </a>
                                    <p>${snippet.substr(0, 300) + '...'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            // idResult.insertAdjacentHTML('afterbegin', `<h2>${element.title}</h2>`) 
        });
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    })
    
})

