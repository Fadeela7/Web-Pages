let home = document.querySelector("#homePage")
let skills = document.querySelector("#mySkillsPage");
let profile = document.querySelector("#profilePage");
let partners = document.querySelector("#findPartnerPage");
let firstRightDiv = document.querySelector(".rightDiv1");
let secondRightDiv = document.querySelector(".rightD2");
let thirdRightDiv = document.querySelector(".rightD3");
let fourthRightDiv = document.querySelector(".rightD4");

home.addEventListener('click', () =>{
    secondRightDiv.classList.add("rightD2");
    secondRightDiv.classList.remove("rightDiv2");
    thirdRightDiv.classList.remove("rightDiv3");
    thirdRightDiv.classList.add("rightD3");
    fourthRightDiv.classList.remove("rightDiv4");
    fourthRightDiv.classList.add("rightD4");
    firstRightDiv.classList.remove("rightD1");
    firstRightDiv.classList.add("rightDiv1");
});

skills.addEventListener('click', () =>{
    firstRightDiv.classList.add("rightD1");
    firstRightDiv.classList.remove("rightDiv1");
    thirdRightDiv.classList.remove("rightDiv3");
    thirdRightDiv.classList.add("rightD3");
    fourthRightDiv.classList.remove("rightDiv4");
    fourthRightDiv.classList.add("rightD4");
    secondRightDiv.classList.remove("rightD2");
    secondRightDiv.classList.add("rightDiv2");
});

profile.addEventListener('click', () =>{
    firstRightDiv.classList.add("rightD1");
    firstRightDiv.classList.remove("rightDiv1");
    secondRightDiv.classList.add("rightD2");
    secondRightDiv.classList.remove("rightDiv2");
    fourthRightDiv.classList.remove("rightDiv4");
    fourthRightDiv.classList.add("rightD4");
    thirdRightDiv.classList.add("rightDiv3");
    thirdRightDiv.classList.remove("rightD3");
});

partners.addEventListener('click', () =>{
    firstRightDiv.classList.add("rightD1");
    firstRightDiv.classList.remove("rightDiv1");
    secondRightDiv.classList.add("rightD2");
    secondRightDiv.classList.remove("rightDiv2");
    thirdRightDiv.classList.remove("rightDiv3");
    thirdRightDiv.classList.add("rightD3");
    fourthRightDiv.classList.add("rightDiv4");
    fourthRightDiv.classList.remove("rightD4");
});