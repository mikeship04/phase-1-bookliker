//when a page loads get list of books by creating an li 
//and adding each li to the ul/list
//when the user clicks a book this should be displayed in the div show-panel
//use can like a book
//data contains author, description, id, 
//img_url, subtitle, title, users[id: 2 username: name]
const list = document.getElementById('list')
const showPanel = document.getElementById('show-panel')

fetch('http://localhost:3000/books')
.then(r => r.json())
//.then(console.log)
.then(data => data.forEach(renderAuthor))

function renderAuthor (obj) {
    const author = document.createElement('li')
    
    author.textContent = obj.author
    author.addEventListener('click', () => {
        renderDisplay(obj)
    })

    list.append(author)
}

function renderDisplay (obj) {
    showPanel.textContent = ''
    const bookImg = document.createElement('img')
    const bookDescription = document.createElement('p')
    const userList = document.createElement('ul')
    obj.users.forEach((element) => {
        const username = document.createElement('li')
        username.textContent = element.username
        userList.append(username)
    }) 

    bookImg.src = obj.img_url
    bookDescription.textContent = obj.description

    showPanel.append(bookImg, bookDescription, userList)
    console.log(showPanel)
}

//users likes
//get user likes out of array
