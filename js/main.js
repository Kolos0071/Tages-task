function hideShowModal(el = false) {
    if (el){
        el.target.classList.toggle('modal--active');
    } else {
        document.querySelector('.modal').classList.toggle('modal--active');
    }
    
}

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.modal').addEventListener('click', hideShowModal, false);
})