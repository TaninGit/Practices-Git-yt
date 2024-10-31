// const rootNode=window.document
// console.log(rootNode) // This is "root node"

// const rootElement=document.documentElement
// console.log(rootElement) // This is "root element (HTML,body,head,p,h1)"

// console.log(rootNode.nodeType) //9 มักจะเป็น root node
// console.log(rootNode.nodeName) //document
// console.log(rootNode.nodeValue) //null

// console.log(rootElement.nodeType) //1 ส่วนใหญ่ที่เป็น 1 มักจะเป็น element node
// console.log(rootElement.nodeName) //HTML
// console.log(rootElement.nodeValue) //null

// if(rootElement.nodeType === Node.ELEMENT_NODE){
//     //compare rootElement is an element node or not?
//     console.log("rootElement is an element node")
// }
// ---------------------------------------------------------
// const head = document.head
// const body = document.body
// console.log(head) 
// console.log(body)
// ---------------------------------------------------------
// ฝึก list childnode ของ root node
// const rootNode = window.document
// const rootChild = rootNode.childNodes
// console.log(rootChild) // NodeList(2) [<!DOCTYPE html>, html] => NodeList เป็น Array แบบนึงแต่ไม่ใช่ array

// const arrayRootChild = Array.from(rootChild) //เนื่องจาก root ที่ได้มันเป็น Array-Like(เกือบจะเป็น array แต่ไม่ใช่ช array) ดังนนั้นเราจึงต้องเปลี่ยนให้มันเป็น Array ตัวเต็ม
// console.log(arrayRootChild) // (2) [<!DOCTYPE html>, html]

// arrayRootChild.forEach((node)=>console.log(
//     `node Type: ${node.nodeType} node Name: ${node.nodeName} node Value: ${node.nodeValue}`
// ))
// //node Type: 10 node Name: html node Value: null => type 10 จากตารางคือ document type node
// //node Type: 1 node Name: HTML node Value: null => type 1 จากตารางคือ element node
// ---------------------------------------------------------
// // ฝึก list children ของ root node
// const rootNodeChildren = rootNode.children
// console.log(rootNodeChildren)  // HTMLCollection [html]

// Array.from(rootNodeChildren).forEach((node)=>console.log(
//     `node Type: ${node.nodeType} node Name: ${node.nodeName} node Value: ${node.nodeValue}`
// ))
// // node Type: 1 node Name: HTML node Value: null
// ---------------------------------------------------------
// Exercise: ลองไป list childnodes กับ children ของ body ออกมา
// const bodyNode_childNodes = window.document.body.childNodes
// const bodyNode_children = window.document.body.children

// console.log(bodyNode_childNodes)
// console.log(bodyNode_children)

// console.log("bodyNode_childNodes")
// Array.from(bodyNode_childNodes).forEach((node)=>console.log(
//     `node Type: ${node.nodeType} node Name: ${node.nodeName} node Value: ${node.nodeValue}`
// ))

// console.log("bodyNode_children")
// Array.from(bodyNode_children).forEach((node)=>console.log(
//     `node Type: ${node.nodeType} node Name: ${node.nodeName} node Value: ${node.nodeValue}`
// ))

// ---------------------------------------------------------
// const rootElement = document.documentElement
// const firstChild = rootElement.firstChild //firstElementChild
// console.log(firstChild) //<!--Second Comment-->
// const firstElementChild = rootElement.firstElementChild
// console.log(firstElementChild) //<head>...</head>

// const lastChild = rootElement.lastChild
// console.log(lastChild) //<body>...</body>
// const lastElementChild = rootElement.lastElementChild
// console.log(lastElementChild) //<body>...</body>

// const body_childNodes = document.body.childNodes
// console.log(body_childNodes.length) // 8
// const body_children = document.body.children
// console.log(body_children.length) // 3

// ---------------------------------------------------------
// const body = document.body
// console.log(body.parentElement) //html, get parent that has element node type
// console.log(body.parentNode) //html, get parent that allows any types

// ---------------------------------------------------------
// const body = document.body
// const divElement = body.children[1]
// console.log(divElement)

const divElement = document.getElementById('dom-01')
const divAttrs = divElement.attributes //get all attributes of current node
console.log(divAttrs.length) //2
for (let i = 0; i < divAttrs.length; i++) {
  console.log(divAttrs[i].name) //id , style
  console.log(divAttrs[i].value) // dom-01, color:red
  console.log(divAttrs[i]) //id='dom-01', style='color:red'
}
//know your attribute name and get its value
console.log(divElement.getAttribute('id')) //dom-01
console.log(divElement.getAttribute('style')) //color:red
//call attribute's parent
console.log(divElement.attributes[0].parentElement) //null
console.log(divElement.attributes[0].parentNode) //null
console.log(divElement.attributes[0].ownerElement) //<div>...</div>