const dropdownMenuLeft = document.querySelector('.dropdown-left-desktop-container');
const dropdownMenuRight = document.querySelector('.dropdown-right-desktop-container');
const featuresMenu = document.querySelector('#features');
const companyMenu = document.querySelector('#company');
const burger = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.dropdown-mobile-container');
const closingIcon = document.querySelector('#closing');
const listContainerLeft = document.querySelector('.list-container-mobile-left');
const listContainerRight = document.querySelector('.list-container-mobile-right');
const featuresList = document.querySelector('.features-mobile');
const companyList = document.querySelector('.company-mobile');
const featureIcon = document.querySelector('.dropdown-left-icon');
const companyIcon = document.querySelector('.dropdown-right-icon');
const featureMobileIcon = document.querySelector('.dropdown-mobile-icon-left');
const companyMobileIcon = document.querySelector('.dropdown-mobile-icon-right');

featuresMenu.addEventListener('click', toggleDropdownMenuLeft, featureIcon);

companyMenu.addEventListener('click', toggleDropdownMenuRight, companyIcon);

burger.addEventListener('click', toggleMobileMenu);

closingIcon.addEventListener('click', closingMobileMenu);

featuresList.addEventListener('click', toggleListLeft, featureMobileIcon);

companyList.addEventListener('click', toggleListRight, companyMobileIcon);

// Menus toggles and icons rotation

function toggleDropdownMenuLeft() {
    dropdownMenuLeft.classList.toggle('activation-left');
    dropdownMenuLeft.style.display = dropdownMenuLeft.style.display === 'none' ? 'flex' : 'none';
    featureIcon.classList.toggle('activation-left');
    featureIcon.style.transform = featureIcon.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleDropdownMenuRight() {
    dropdownMenuRight.classList.toggle('activation-right');
    dropdownMenuRight.style.display = dropdownMenuRight.style.display === 'none' ? 'flex' : 'none';
    companyIcon.classList.toggle('activation-right');
    companyIcon.style.transform = companyIcon.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('activation-menu-mobile');
    mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
}

function closingMobileMenu() {
    toggleMobileMenu();
}

function toggleListLeft() {
    listContainerLeft.classList.toggle('activation-left');
    listContainerLeft.style.display = listContainerLeft.style.display === 'none' ? 'flex' : 'none';
    featureMobileIcon.classList.toggle('activation-left');
    featureMobileIcon.style.transform = featureMobileIcon.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleListRight() {
    listContainerRight.classList.toggle('activation-right');
    listContainerRight.style.display = listContainerRight.style.display === 'none' ? 'flex' : 'none';
    companyMobileIcon.classList.toggle('activation-right');
    companyMobileIcon.style.transform = companyMobileIcon.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
}


// No ternaries functions

// function toggleDropdownMenuLeft() {
//     dropdownMenuLeft.classList.toggle('activation-left');
//     if (dropdownMenuLeft.style.display === 'none') {
//         dropdownMenuLeft.style.display = 'flex';
//     } else {
//         dropdownMenuLeft.style.display = 'none';
//     }
//     featureIcon.classList.toggle('activation-left');
//     if (featureIcon.style.transform === 'rotate(0deg)') {
//         featureIcon.style.transform = 'rotate(180deg';
//     } else {
//         featureIcon.style.transform = 'rotate(0deg)';
//     }
// }

// function toggleDropdownMenuRight() {
//     dropdownMenuRight.classList.toggle('activation-right');
//     if (dropdownMenuRight.style.display === 'none') {
//         dropdownMenuRight.style.display = 'flex';
//     } else {
//         dropdownMenuRight.style.display = 'none';
//     }
//     companyIcon.classList.toggle('activation-right');
//     if (companyIcon.style.transform === 'rotate(0deg)') {
//         companyIcon.style.transform = 'rotate(180deg';
//     } else {
//         companyIcon.style.transform = 'rotate(0deg)';
//     }
// }

// function toggleMobileMenu() {
//     mobileMenu.classList.toggle('activation-menu-mobile');
//     if (mobileMenu.style.display === 'none') {
//         mobileMenu.style.display = 'flex';
//     } else {
//         mobileMenu.style.display = 'none';
//     }
// }

// function closingMobileMenu() {
//     mobileMenu.classList.toggle('activation-menu-mobile');
//     if (mobileMenu.style.display === 'none') {
//         mobileMenu.style.display = 'flex';
//     } else {
//         mobileMenu.style.display = 'none';
//     }

// }

// function toggleListLeft() {
//     listContainerLeft.classList.toggle('activation-left');
//     if (listContainerLeft.style.display === 'none') {
//         listContainerLeft.style.display = 'flex';
//     } else {
//         listContainerLeft.style.display = 'none';
//     }
//     featureMobileIcon.classList.toggle('activation-left');
//     if (featureMobileIcon.style.transform === 'rotate(0deg)') {
//         featureMobileIcon.style.transform = 'rotate(180deg';
//     } else {
//         featureMobileIcon.style.transform = 'rotate(0deg)';
//     }

// }

// function toggleListRight() {
//     listContainerRight.classList.toggle('activation-right');
//     if (listContainerRight.style.display === 'none') {
//         listContainerRight.style.display = 'flex';
//     } else {
//         listContainerRight.style.display = 'none';
//     }
//     featureMobileIcon.classList.toggle('activation-right');
//     if (companyMobileIcon.style.transform === 'rotate(0deg)') {
//         companyMobileIcon.style.transform = 'rotate(180deg';
//     } else {
//         companyMobileIcon.style.transform = 'rotate(0deg)';
//     }

// }
