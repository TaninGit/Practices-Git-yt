// // add event handler and event listener
// // event listener ปกติแล้วจะมี 3 parametors ตัว 1.ประเภทของ event, 2.จะให้ทำอะไร, 3.default คือ bubbling flow
// // get query div button
// const okButton = document.getElementById("btn-ok")
// console.log(okButton)
// // okButton handler function#1
// okButton.addEventListener("click", ()=>{console.log("ok button click 1")},true)
// // okButton handler function#2
// okButton.addEventListener("click",() => {console.log("ok button click 2")}, true)

// // get query div
// const divButton = document.getElementById("div-btn-ok")
// console.log(divButton)
// function getMessage() {
//     console.log("div click")
// }
// divButton.addEventListener("click", getMessage, true) // addEvent
// divButton.removeEventListener("click", getMessage, true) //removeEvent

// ------------------------------------------------------------------------------------

// const okButton = document.getElementById("btn-ok")
// okButton.addEventListener("click",
//      (event)=>{console.log(`event target: ${event.target}, current target: ${event.currentTarget}, event phase: ${event.eventPhase}`)}
//     )

// const divButton = document.getElementById("div-btn-ok")
// divButton.addEventListener("click", (event) => {console.log(`event target: ${event.target}, current target: ${event.currentTarget}, event phase: ${event.eventPhase}`)})


// // ------------------------------------------------------------------------------------


// const aLink = document.getElementById("link-kmutt")
// aLink.addEventListener('click', (event) => {
//   event.preventDefault()
//   alert("Don't visit")
// })

// ------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//     alert(`hello, body children: ${document.body.children}`)
// })

// window.addEventListener("load", ()=>{
//     alert("all resoources loaded")
// })

// window.addEventListener("beforeunload", ()=>{
//     localStorage.setItem("endingloaded","good bye")
// })

// ------------------------------------------------------------------------------------

const divElement_1 = document.getElementById("div-move-1")
divElement_1.addEventListener('mouseover',(event)=>{
    const pageX = document.getElementById("page-x1")
    const pageY = document.getElementById("page-y1")
    pageX.textContent = event.pageX
    pageY.textContent = event.pageY
})

const divElement_2 = document.getElementById("div-move-2")
divElement_2.addEventListener('mousemove',(event)=>{
    const pageX = document.getElementById("page-x2")
    const pageY = document.getElementById("page-y2")
    pageX.textContent = event.pageX
    pageY.textContent = event.pageY
})

// ------------------------------------------------------------------------------------

const inputElement = document.getElementById("input-001")
inputElement.addEventListener('keyup', (event)=>{
    console.log(event.code)
    const messageElement = document.getElementById("message-001")
    if(event.code === 'Enter'){
        messageElement.textContent = event.target.value
        console.log(event.target.value)
    }
})