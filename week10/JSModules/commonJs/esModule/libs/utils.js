//export Syntax => ES modules
// 1.individual export
// export const nums = [1,3,5,7]
// export function echo(msg = 'Hello, World'){
//     return msg
// }
// export default function x() {}

//export list
function echo(msg = 'Hello, World') {
  return msg
}
function x() {
    return "Good Bye I'm Ironman."
}
export {echo,x as default}