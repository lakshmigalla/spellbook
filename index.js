console.log('testing')

const button = document.getElementById('title')
const submitButton = document.getElementById('submit')

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

function addListItem() {

    let added = document.querySelector('input').value || document.querySelector('input[name = "spell"]:checked').value
    
    const listOfItems = document.getElementById('changed')

    // listOfItems.innerHTML += '<p>' + added + '</p>'
    
    // const node = document.createTextNode(added)
    const node = document.createElement("li")
    node.innerHTML = added + "    <button class = 'btn'>Delete</button>" 
    //array.push(node.textContent)
    array.push(added)
    if (document.querySelector('input[name = "spell"]:checked').value == added) {
        node.setAttribute("style", "color:gold;")
    }
    else {
        node.setAttribute("style", "color:white;")
    }
     
    listOfItems.appendChild(node)
   
    document.querySelector('input').value = ''
 
        listOfItems.addEventListener('click', function(e) {
            if (e.target.nodeName == "BUTTON") {
                e.target.parentNode.remove()
                for (let i = 0; i < array.length; i++) {
                    if (e.target.parentNode.textContent === array[i] + "    Delete") {
                        array.splice(i, 1)
                    }
                }
            }
        })
    
}

button.addEventListener('click', changeHeading)

submitButton.addEventListener('click', addListItem)

const input = document.getElementById("input list")
input.addEventListener('keydown', function (ev) {
    if (ev.keyCode == 13) {
        event.preventDefault()
        document.getElementById('submit').click()
    }
});
