//Element-querySelector (one node result or null), use CSS selector, return first node in document that matches given condition
const divCourse = document.querySelector('#elective-1-67, #courses-1-67') //# represent id value
//Element-getElementById (one node result or null), use id value
console.log(divCourse)
const divCourseById = document.getElementById('courses-1-67') //dont put .
console.log(divCourseById)
//...........................................................
//NodeList-getElementsByName (name attribute)
const progCourse = document.getElementsByName('programming')
console.log(progCourse)
console.log(progCourse.length)
//NodeList-querySelectorAll, use CSS selector
const electClassCourses = document.querySelectorAll('.elect-course') //. represents a class name
console.log(electClassCourses)
//.............................................................
//HTMLCollection-getElementsByTagName
const divElements = document.getElementsByTagName('div')
console.log(divElements)
console.log(divElements.length)
//HTMLCollection -getElementsByClassName
const electCourses = document.getElementsByClassName('elect-course') //no need to use .
console.log(electCourses)
console.log(electCourses.length)
const lastElectCourse = electCourses[electCourses.length - 1]
console.log(`last elective course: ${lastElectCourse}`)