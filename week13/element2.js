// old node
const divId = document.getElementById("1360")
// create new node
const pElement = document.createElement('p')
pElement.setAttribute('style','color:red')
pElement.textContent = 'Hello Tanin!'

divId.appendChild(pElement)
