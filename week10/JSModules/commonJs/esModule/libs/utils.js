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
function x(someone='guest') {
    return `Hi, ${someone}`
}
const nums = [1,3,5,7]
export {echo,x as greeting, nums}