// function strikeOutText(element) {
//    if (element.style.textDecoration===
//     "line-through") {
//         element.style.textDecoration='none'
//    } else {
//         element.style.textDecoration=
//         'line-through'
//    }
// }



// pak sunu 
function strikeOutText(element) {
     if (element.classList.contains('todo--done')) {
         element.classList.remove('todo--done')
     } else {
         element.classList.add('todo--done')
     }
 }