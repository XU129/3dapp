//Navbar
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick =function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
//Contact
function showcontact(){
    document.getElementById("contact").style.display = "block";
}
function closecontact(){
    document.getElementById("contact").style.display = "none";
}


//RGB span
const RrangeInput = document.getElementById('r');
const RrangeValue = document.getElementById('r-value');
RrangeInput.addEventListener('input', () => {
    RrangeValue.textContent = RrangeInput.value;
});

const GrangeInput = document.getElementById('g');
const GrangeValue = document.getElementById('g-value');
GrangeInput.addEventListener('input', () => {
    GrangeValue.textContent = GrangeInput.value;
});

const BrangeInput = document.getElementById('b');
const BrangeValue = document.getElementById('b-value');
BrangeInput.addEventListener('input', () => {
    BrangeValue.textContent = BrangeInput.value;
});




