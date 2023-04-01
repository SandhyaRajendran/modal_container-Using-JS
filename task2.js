// // // alert("welcome sandhya u can do it :)")
// //button is targeted
const openbtn = document.querySelector("#open");
// // console.log(openbtn)
// //the continer we need to show is targeted
const modal = document.querySelector('.modal-overlay');
// // console.log(modal)
// //event is added for the button 
// openbtn.addEventListener('click',function(e){
//     // console.log(e.target)
//     if(e.target.classList.contains('btn')){
//         modal.style.visibility = 'visible';
//         modal.style.zIndex = 5
//     }
// })

// // const buttons = document.querySelectorAll('button')
// // // console.log(buttons)
// // for(let i=0; i<buttons.length; i++){
// //     // console.log('hi')
// //     function showall(e){
// //     //     if(e.target.classList.contains('btn')){
// //     //         console.log('welcome')
// //     //     }
// //         console.log(e.target)

// //     }
    
// // }
// // buttons[i].addEventListener('click',showall)


// const closebtn = document.querySelector('.close-btn')
// console.log(closebtn)
// function xbutton(e){
//     console.log(e.target)
//     if(e.target.classList.contains('fas')){
//         console.log('hello')
//         modal.style.visibility = 'hidden';
//         modal.style.zIndex = -10
//     }
// }
// closebtn.addEventListener('click',xbutton)

// const ibutton = document.querySelector('i')
// // console.log('heeello')
// function ibtn(e){
//     // console.log(e.target)
//     if(e.target.classList.contains('fas fa-times')){
//                 console.log('hello')
//                 // modal.style.visibility = 'hidden';
//                 // modal.style.zIndex = -10
//             }

// }
// ibutton.addEventListener('click',ibtn)
// const clsbtn = document.querySelector('.close-btn')
// console.log('cls')

const buttons = document.querySelectorAll('button')
console.log(buttons)

// buttons.addEventListener('click', function () {
//     if(e.target.classList.contains('btn')){
//         modal.style.visibility = 'visible';
//         modal.style.zIndex = 5
//     }
//     if(e.target.classList.contains('fas')){
//         console.log('hello')
//         modal.style.visibility = 'hidden';
//         modal.style.zIndex = -10
//     }

// })

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',(e)=>{

        if(e.target.classList.contains('btn')){
            modal.style.visibility = 'visible';
            modal.style.zIndex = 5
        }
        if(e.target.classList.contains('fas')){
            console.log('hello')
            modal.style.visibility = 'hidden';
            modal.style.zIndex = -10
        }

    })  
    }


