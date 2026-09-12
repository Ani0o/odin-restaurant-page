import pizzaImage from "./images/pizza.jpg"
import burgerImage from "./images/burger.jpg"
import pastaImage from "./images/pasta.jpg"
import ramenImage from "./images/ramen.jpg"
import cakeImage from "./images/cake.jpg"
import juiceImage from "./images/juice.jpg"

const menu = [];

class Dish {
    constructor(name, img, desc, price) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.price = price;
    }
}

function addDishToMenu(name, img, desc, price) {
    const dish = new Dish(name, img, desc, price);
    menu.push(dish);
}

addDishToMenu("Pizza", pizzaImage, "A meticulously engineered combination of hydration-controlled crust, mathematically balanced layers of rich tomato coulis, and an optimal distribution of melted artisanal cheeses, baked at an exact 450°C for the ultimate structural crunch.", "$15");
addDishToMenu("Burger", burgerImage, "A mathematically optimized 80/20 premium beef blend, engineered for maximum juiciness and flavor retention. Layered with melt-calibrated sharp cheddar, crisp hydroponic lettuce, and our proprietary signature sauce on a perfectly proportioned artisan bun.", "$7");
addDishToMenu("Pasta", pastaImage, "An expertly engineered geometry of bronze-die extruded rigatoni, designed for optimal sauce adhesion. Tossed in a mathematically balanced, emulsified cacio e pepe sauce with crackled black peppercorns at peak aromatic release.", "$10");
addDishToMenu("Ramen", ramenImage, "A highly calibrated umami matrix featuring an exact 1:3 ratio of rich shoyu tare to double-cooked dashi. Paired with alkaline noodles engineered for the perfect chew, seared pork belly, and an mathematically timed 6-minute soft-boiled egg.", "$8");
addDishToMenu("Cake", cakeImage, "A structural marvel of alternating geometric layers featuring espresso-soaked almond sponge and silk-textured dark chocolate ganache, engineered to deliver the perfect density and moisture balance in every bite.", "$13");
addDishToMenu("Juice", juiceImage, "A highly calibrated formulation of antioxidant-rich cold-pressed fruits and roots, engineered with an exact acidity-to-sweetness ratio to refresh and restore systemic balance.", "$4");

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

const div = document.createElement('div');
const h1 = document.createElement('h1');
const cardContainer = document.createElement('div');

div.classList.add('menu-content');
h1.classList.add('restaurant-title');
cardContainer.classList.add('menu-card-container');

h1.textContent = "Quant Restaurant";

menu.forEach(dish => {
    const menuCard = document.createElement('div');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');

    menuCard.classList.add('menu-card');
    name.classList.add('dish-name');
    image.classList.add('dish-image');
    description.classList.add('dish-description');
    price.classList.add('dish-price');

    name.textContent = dish.name;

    image.src = dish.img;
    image.alt = `Image of ${dish.name}`;

    description.textContent = dish.desc;
    price.textContent = dish.price;

    menuCard.appendChild(name);
    menuCard.appendChild(image);
    menuCard.appendChild(description);
    menuCard.appendChild(price);
    cardContainer.appendChild(menuCard);
});

div.appendChild(h1);
div.appendChild(cardContainer);

function loadMenu() {
    content.replaceChildren();
    content.appendChild(div);
    homeButton.classList.remove('selected-button');
    menuButton.classList.add('selected-button');
    aboutButton.classList.remove('selected-button');
}

export default loadMenu;