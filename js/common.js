const moreBtns = document.querySelectorAll('.js-moreBtn');
// const menu = document.querySelector('.js-sub-menu');

console.log(moreBtns);
// function display() {
//     console.log("sub menu is: "+ menu.style.display);

//     if(menu.style.display === 'none') {
//         menu.style.display = 'block';

//     }
//     else menu.style.display = 'none';

// }


// alert()

for(var i = 0; i< moreBtns.length ; i++) { 
    
    moreBtns[i].addEventListener('click',function() {
        const nextSibling = this.nextElementSibling;
        if(nextSibling.classList.contains('js-sub-menu')) {
            if(nextSibling.style.display === 'block') {
                nextSibling.style.display = 'none';
        
            }
            else nextSibling.style.display = 'block';
        }
        
    })
}

// moreBtn.addEventListener('click',display);