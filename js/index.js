const btnFetchHtml = document.querySelector('.fetch-html');
btnFetchHtml.addEventListener('click', fetchHtml);
function fetchHtml() {
    fetch('client-data.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.html-container')
                .innerHTML = html );
}