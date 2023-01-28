const outer_modal = document.querySelector('.outer-modal');
const inner_modal = outer_modal.querySelector('.inner-modal');
const humburger = document.querySelector('.hamburger');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('open')
    outer_modal.classList.toggle('opacity-0');
    outer_modal.classList.toggle('pointer-events-all');
    outer_modal.classList.toggle('pointer-events-none');
    // document.body.classList.toggle('overflow-y-hidden ');
    // inner_modal.classList.toggle('translate-x-full')
    // inner_modal.classList.toggle(' translate-x-0')
})

const MyCute = document.querySelector('#cute-photo');
console.log(MyCute)