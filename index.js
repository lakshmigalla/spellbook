console.log('testing')

const button = document.getElementById('title')
const submitButton = document.getElementById('submit')

function changeHeading() {
    const title = document.querySelector('h1')
    const title2 = document.querySelector('h2')
    const title3 = document.getElementById('xtern');
    title.textContent = 'Book of Spells'
    title2.textContent = 'Expelliarmus'
    title3.textContent = 'Avada Kedavra'
    button.textContent = 'Clicked'
}

function addHeading() {
    let added = document.querySelector('input').value
    const title4 = document.getElementById('changed')
    title4.textContent = added
}

button.addEventListener('click', changeHeading)

submitButton.addEventListener('click', addHeading)

const input = document.getElementById('heading')
input.addEventListener('keydown', function (ev) {
    if (ev.keyCode == 13) {
        event.preventDefault()
        document.getElementById('submit').click()
    }
});
