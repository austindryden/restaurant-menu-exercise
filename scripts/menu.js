let VEGAN = false;
let VEGETARIAN = false;
const menu = {
    breakfast: [
        {
            name: "Biscuits and gravy",
            isVegetarian: false,
            isVegan: false,
            description: "Two biscuits and some gravy!",
            price: 4,
            photo: "./images/jodie-morgan-PAa_MJztyUY-unsplash.jpg"
        },     
        {
            name: "Granola",
            isVegetarian: true,
            isVegan: true,
            description: "Fruit, granola, and yogurt.",
            price: 3,
            photo: "./images/dan-counsell-efJu9SKIjLA-unsplash.jpg"
        },     
        {
            name: "Breakfast Tacos",
            isVegetarian: false,
            isVegan: false,
            description: "Tacos. In your face!",
            price: 8,
            photo: "./images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg"
        },     
        {
            name: "Pancakes",
            isVegetarian: true,
            isVegan: false,
            description: "A stack of yum",
            price: 7,
            photo: "./images/elli-o-7hlOjB5VVb0-unsplash.jpg"
        },     
    ],
    lunch: [
        {
            name: "Burger",
            isVegetarian: false,
            isVegan: false,
            description: "The taste of freedom",
            price: 9,
            photo: "./images/beef-blur-bread-bun-551991.jpg"
        },     
        {
            name: "Salad",
            isVegetarian: true,
            isVegan: true,
            description: "The taste of vegetables",
            price: 7,
            photo: "./images/vegetable-salad-with-wheat-bread-on-the-side-1213710.jpg"
        },     
        {
            name: "BLT",
            isVegetarian: false,
            isVegan: false,
            description: "It's like a salad, but it's a sandwich. And there's bacon.",
            price: 7,
            photo: "./images/eiliv-sonas-aceron-PlLvvTs-kxU-unsplash.jpg"
        },     
        {
            name: "Veggie Soup",
            isVegetarian: true,
            isVegan: true,
            description: "Because it's cold outside",
            price: 0,
            photo: "./images/jeeray-tang-mrGYttsi4iU-unsplash.jpg"
        },     
    ],
    dinner: [
        {
            name: "Trout",
            isVegetarian: true,
            isVegan: false,
            description: "So healthy!",
            price: 11,
            photo: "./images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
        },     
        {
            name: "Steak",
            isVegetarian: false,
            isVegan: false,
            description: "Because meat",
            price: 13,
            photo: "./images/eugene-Xk0jQPZseMk-unsplash.jpg"
        },     
        {
            name: "Veggie Kebabs",
            isVegetarian: true,
            isVegan: true,
            description: "Food on sticks",
            price: 9,
            photo: "./images/ella-olsson-Pb9aFVR9-Bk-unsplash.jpg"
        },     
        {
            name: "Hummus Plate",
            isVegetarian: true,
            isVegan: true,
            description: "It's like an appetizer, but bigger.",
            price: 8,
            photo: "./images/kyle-brinker-uAOQvpSI6MY-unsplash.jpg"
        },     
    ],
    desserts: [
        {
            name: "Ice cream",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for ice cream",
            price: 4,
            photo: "./images/dovile-ramoskaite-iT4qcNMhYTQ-unsplash.jpg"
        },
        {
            name: "Cheesecake",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for cheesecake",
            price: 5,
            photo: "./images/tina-guina-s8_7AqkzCWY-unsplash.jpg"

        },
        {
            name: "Torte",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for fancy cake",
            price: 6,
            photo: "./images/tanya-prodan-XTI0pEqQ8DI-unsplash.jpg"

        }
    ]
};

function getCategories(menu){
    // console.log(Object.keys(menu));
    return Object.keys(menu);
}

function nameToListItem(name){
    let li = document.createElement(`li`);
    li.textContent = name;
    // console.log(li);
    return li;
}

function categoriesToListItems(nameArr){
    return nameArr.map(nameToListItem);
}

function appendLiToElement(element){
    menuContainer.appendChild(element);
}

function valueOfCategory(cat){
    let newArr = [];
    for (let item of menu[cat]){
        newArr.push(item.name);
    }
    return newArr;
}

function addClickHandler(obj){
    obj.addEventListener('click', clickCallback);
}

function clickCallback(event){
    console.log("HEY YOU CLICKED A THING~");
    console.log(event.target.textContent);
    const category = event.target.textContent;
    mainContentContainer.textContent = "";
    if(VEGAN){
        menu[category]
            .filter(isItVegan)
            .map(itemToCard)
            .map(appendCardToMainContent);
    } else if(VEGETARIAN){
        menu[category]
        .filter(isItVegetarian)
        .map(itemToCard)
        .map(appendCardToMainContent);
    } else {
        menu[category]
        .map(itemToCard)
        .map(appendCardToMainContent);
    }
}

function isItVegan(food){
    return food.isVegan;
}

function isItVegetarian(food){
    return food.isVegetarian;
}

function itemToCard(menuObj){
    const div = document.createElement("div");
    div.className = "card";
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h3");
    const img = document.createElement("img");
    img.src = menuObj.photo;
    h2.textContent = menuObj.name;
    console.log(menuObj.name);
    h4.textContent = menuObj.price;
    div.appendChild(h2);
    div.appendChild(h4);
    div.appendChild(img);
    return div;
}

function appendCardToMainContent(menuCard){
    mainContentContainer.appendChild(menuCard);
}

function vegetarianButton(){
    const button = document.createElement("button");
    button.textContent = "VEGETARIAN?!?!";
    button.addEventListener('click', vegetarianCallback);
    return button;
}

function veganButton(){
    const button = document.createElement("button");
    button.textContent = "VEGAN?!?!";
    button.addEventListener('click', veganCallback);
    return button;
}

function vegetarianCallback(event){
    console.log("sup vegetarian!");
    VEGETARIAN = !VEGETARIAN;
    if(VEGETARIAN  == false){
        VEGAN = false;
    }
}

function veganCallback(event){
    console.log("hey vegan!");
    VEGAN = !VEGAN;
    if(VEGAN  == false){
        VEGETARIAN = false;
    }
}

function veganFlag(){
    const h4 = document.createElement("h4");
    h4.textContent = VEGAN;
    return h4;

}

function vegetarianFlag(){
    const h4 = document.createElement("h4");
    h4.textContent = VEGETARIAN;
    return h4;
}

const liArr = categoriesToListItems(getCategories(menu));
const menuContainer = document.querySelector(".js-menu");
const mainContentContainer = document.querySelector(".js-main-content");

liArr.map(addClickHandler);
menuContainer.appendChild(vegetarianButton());
// menuContainer.appendChild(vegetarianFlag());
menuContainer.appendChild(veganButton());
// menuContainer.appendChild(veganFlag());
liArr.map(appendLiToElement);