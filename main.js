// Allow for smooth scrolling between elements on the page //

let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorLinks){
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

//Reset animations//

function resetHomeAnimation(){
    var el = document.getElementById('home-content');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
}



