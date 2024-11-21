//query an element node <div id="1306"> (current node)
const divName = document.getElementById('1360')

let currentNode = divName
while (currentNode !== null && currentNode !== undefined) {
  console.log(`
    current node: ${currentNode},
    node type: ${currentNode.nodeType},
    node name: ${currentNode.nodeName},
    node value: ${currentNode.nodeValue}`)
    console.log(currentNode?.childElementCount)
    const childElements = currentNode.children //up to document node
    currentNode = childElements[0]
}

//query an element node <div id="courses-1-67"> (current node)
const divCourse = document.getElementById('courses-1-67')