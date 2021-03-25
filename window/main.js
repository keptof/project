const getSearhDiv = document.querySelectorAll('.parent');

const getSearhButton = document.querySelector('#cross');

const but = document.querySelector('#btn')

but.addEventListener('click', ()=>{
    getSearhDiv.forEach((child) => child.classList.add('window'));
}); 

getSearhButton.addEventListener('click', ()=>{
    getSearhDiv.forEach((child) => child.classList.remove('window'));
}); 

// getSearhButton.addEventListener('click', ()=>{
//     getSearhDiv.forEach((child) => child.classList.remove('window'));
// })
