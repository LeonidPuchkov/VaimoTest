var burger = document.getElementById('burger');
var overlay = document.getElementById('overlay');
var footerItem = document.querySelectorAll('.footer_mobile_item');


burger.onclick = function() {
    overlay.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
        console.log(footerItem);
    }
}

const openDropDown = (element, rotate) => {
    element.classList.add("active");
    rotate.style.transform = "rotate(135deg)";
}

const closeDropDown = (element, rotate) => {
    element.classList.remove('active');
    rotate.style.transform = 'rotate(45deg)';
}


footerItem.forEach(elem => elem.addEventListener('click', (event) => {
    const target = event.target;
    const parent = target.closest('.footer_mobile_item');
    const ul = parent.querySelector('.footer_mobile_submenu');
    const chevron = parent.querySelector('.chevron');
    ul.classList.contains('active') ? closeDropDown(ul, chevron) : openDropDown(ul, chevron);
}));