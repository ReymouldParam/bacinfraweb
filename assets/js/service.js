
let item1 = document.getElementById("itemOne");
let item2 = document.getElementById("itemTwo");
let item3 = document.getElementById("itemThree");
let item4 = document.getElementById("itemFour");
let item5 = document.getElementById("itemFive");
let item6 = document.getElementById("itemSix");

let hiddenMainContainer = document.getElementById("hiddenContainerView");

let hiddenElementOneContainer = document.getElementById("hiddenItemOne");
let hiddenElementTwoContainer = document.getElementById("hiddenItemTwo");
let hiddenElementThreeContainer = document.getElementById("hiddenItemThree");
let hiddenElementFourContainer = document.getElementById("hiddenItemFour");
let hiddenElementFiveContainer = document.getElementById("hiddenItemFive");
let hiddenElementSixContainer = document.getElementById("hiddenItemSix");

function itemOneView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementOneContainer.classList.remove("d-none");
    hiddenElementTwoContainer.classList.add("d-none");
    hiddenElementThreeContainer.classList.add("d-none");
    hiddenElementFourContainer.classList.add("d-none");
    hiddenElementFiveContainer.classList.add("d-none")
    hiddenElementSixContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

function itemTwoView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementTwoContainer.classList.remove("d-none");
    hiddenElementOneContainer.classList.add("d-none");
    hiddenElementThreeContainer.classList.add("d-none");
    hiddenElementFourContainer.classList.add("d-none");
    hiddenElementFiveContainer.classList.add("d-none")
    hiddenElementSixContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

function itemThreeView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementThreeContainer.classList.remove("d-none");
    hiddenElementOneContainer.classList.add("d-none");
    hiddenElementTwoContainer.classList.add("d-none");
    hiddenElementFourContainer.classList.add("d-none");
    hiddenElementFiveContainer.classList.add("d-none");
    hiddenElementSixContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

function itemFourView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementFourContainer.classList.remove("d-none");
    hiddenElementOneContainer.classList.add("d-none");
    hiddenElementTwoContainer.classList.add("d-none");
    hiddenElementThreeContainer.classList.add("d-none")
    hiddenElementFiveContainer.classList.add("d-none");
    hiddenElementSixContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

function itemFiveView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementFiveContainer.classList.remove("d-none");
    hiddenElementOneContainer.classList.add("d-none");
    hiddenElementTwoContainer.classList.add("d-none");
    hiddenElementThreeContainer.classList.add("d-none")
    hiddenElementFourContainer.classList.add("d-none");
    hiddenElementSixContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

function itemSixView() {
    hiddenMainContainer.classList.add("view");
    hiddenElementSixContainer.classList.remove("d-none");
    hiddenElementOneContainer.classList.add("d-none");
    hiddenElementTwoContainer.classList.add("d-none");
    hiddenElementThreeContainer.classList.add("d-none")
    hiddenElementFourContainer.classList.add("d-none");
    hiddenElementFiveContainer.classList.add("d-none");
    hiddenMainContainer.scrollIntoView(false)
}

item1.addEventListener("click", itemOneView);
item2.addEventListener("click", itemTwoView);
item3.addEventListener("click", itemThreeView);
item4.addEventListener("click", itemFourView);
item5.addEventListener("click", itemFiveView);
item6.addEventListener("click", itemSixView);


