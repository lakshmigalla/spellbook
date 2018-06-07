console.log('testing')

const button = document.getElementById('title')
const submitButton = document.getElementById('submit')
//const deleteButton
const array = []
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

    let added = document.querySelector('input').value || document.querySelector('input[name = "spell"]:checked').value
    
    const title4 = document.getElementById('changed')

    // title4.innerHTML += '<p>' + added + '</p>'
    
    // const node = document.createTextNode(added)
    const node = document.createElement("li")
    node.textContent = added
    array.push(node.textContent)
    if (document.querySelector('input[name = "spell"]:checked').value == added) {
        node.setAttribute("style", "color:gold;")
    }
    else {
        node.setAttribute("style", "color:white;")
    }
    const br = document.createElement("br");
    title4.appendChild(node)
    title4.appendChild(br)
    
    document.querySelector('input').value = ''
}

button.addEventListener('click', changeHeading)

submitButton.addEventListener('click', addHeading)

const input = document.getElementById("input list")
input.addEventListener('keydown', function (ev) {
    if (ev.keyCode == 13) {
        event.preventDefault()
        document.getElementById('submit').click()
    }
});
