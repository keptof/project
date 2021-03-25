const fChildren = document.body.querySelectorAll('.f-child');
const sChildren = document.body.querySelectorAll('.s-child');
const tChildren = document.body.querySelectorAll('.t-child');

const but = document.getElementById('btn');



let count = 1;

but.addEventListener('click',() => {
        if(count === 1) {
            fChildren.forEach((child) => child.classList.toggle('first'));
            count +=1;
        }else if (count === 2){
            sChildren.forEach((child) => child.classList.toggle('second'));
            count +=1
        }else if (count === 3){
            tChildren.forEach((child) => child.classList.toggle('third'));
            count +=1;
        } else if(count === 4) {
            fChildren.forEach((child) => child.classList.toggle('first'));
            sChildren.forEach((child) => child.classList.toggle('second'));
            tChildren.forEach((child) => child.classList.toggle('third'));
            count = 1;
        }
    }
)