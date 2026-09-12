import restaurantImage from "./images/jason-leung-poI7DelFiVA-unsplash.jpg"

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");

const h1 = document.createElement('div');
const img = document.createElement('img');
const p = document.createElement('p');

content.classList.add('home-content');
homeButton.classList.add('selected-button');
h1.classList.add('restaurant-title');
img.classList.add('restaurant-image');
p.classList.add('restaurant-info');

h1.textContent = "Quant Restaurant";

img.src = restaurantImage;
img.alt = "Image of a Restaurant";

p.textContent = `Welcome to Quant Restaurant, where culinary artistry meets mathematical precision.
        We redefine the modern dining experience by blending meticulously sourced seasonal
        ingredients with innovative, exact cooking techniques. Every dish on our menu is a
        calculated masterpiece, designed to balance flavor, texture, and visual elegance in
        perfect harmony. Whether you are joining us for an immersive tasting menu or a
        curated cocktail experience, our team is dedicated to delivering flawless hospitality
        and an unforgettable gastronomic journey. Explore our current offerings and discover
        the exact science of exceptional taste.`

function loadHome() {
    content.replaceChildren();
    
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
}

export default loadHome;