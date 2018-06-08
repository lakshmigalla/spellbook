console.log('testing')

const button = document.getElementById('title')
const submitButton = document.getElementById('submit')

const array = []
function changeHeading() {
    const title = document.querySelector('h1')
    const title2 = document.querySelector('h2')
    const title3 = document.getElementById('xtern');
    title.textContent = 'Book of Spells'
    // title2.textContent = 'Protection Spell'
    // title3.textContent = 'Patronus'
    button.textContent = 'Clicked'
}


function addListItem() {

    //let added = document.querySelector('input').value || document.querySelector('input[name = "spell"]:checked').value
    const added = document.querySelector('input').value

    const wand = document.querySelector('input[name = "spell"]:checked').value
    const wandText = document.createTextNode(wand)
    //wandText.innerHTML += "    <button class = 'btn'>Delete</button>" 
    
    const listOfItems = document.getElementById('changed')

    // listOfItems.innerHTML += '<p>' + added + '</p>'
    
    const node = document.createElement("li")
    //node.innerHTML = added
    node.innerText = added + " - "
    
    node.setAttribute("style", "color:purple;")

    node.appendChild(wandText)

    array.push(node.innerText)

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = 'Delete'
    node.appendChild(deleteButton)

    deleteButton.addEventListener('click', function() {
        deleteButton.parentNode.remove()
        for (let i = 0; i < array.length; i++) {
            if (deleteButton.parentNode.textContent === array[i] + "Delete" + "Like" + "Unlike") {
                array.splice(i, 1)
            }
        }
    })

    const editButton = document.getElementById("edit")

    editButton.addEventListener('click', function() {
        document.getElementById("changed").contentEditable = true
    })

    const favButton = document.createElement("button")
    favButton.innerHTML = 'Like'
    node.appendChild(favButton)

    favButton.addEventListener('click', function() {
        node.style.color = "#008000"
    })

    const unfavButton = document.createElement("button")
    unfavButton.innerHTML = "Unlike"
    node.appendChild(unfavButton)

    unfavButton.addEventListener('click', function() {
        node.style.color = "purple"
    })

    listOfItems.appendChild(node)
    document.querySelector('input').value = ''
    
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

