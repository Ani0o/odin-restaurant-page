const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

const div = document.createElement('div');
const h1 = document.createElement('h1');
const aboutContainer = document.createElement('div');

div.classList.add('about-content');
h1.classList.add('restaurant-title');
aboutContainer.classList.add('about-container');

h1.textContent = "Quant Restaurant";

div.appendChild(h1);

const belief = document.createElement('div');
const beliefTitle = document.createElement('h2');
const beliefContent = document.createElement('p');

belief.classList.add('belief');

beliefTitle.innerText = "The Science of Flavor. The Art of Precision.";
beliefContent.innerText = `At Quant Restaurant, we believe that exceptional dining is both a
                        creative art and an exact science. Founded by a team of passionate
                        chefs and culinary innovators, our concept is built on a simple
                        philosophy: perfection is measurable. We strip away the guesswork
                        from the kitchen to deliver a culinary experience where every flavor,
                        texture, and temperature is calculated to delight the senses.`.replace(/\n/g, ' ');

belief.appendChild(beliefTitle);
belief.appendChild(beliefContent);
aboutContainer.appendChild(belief);

const philosophy = document.createElement('div');
const philosophyTitle = document.createElement('h2');
const philosophyContent = document.createElement('p');

philosophy.classList.add('philosophy');

philosophyTitle.innerText = "Our Culinary Philosophy";
philosophyContent.innerText = `We approach our menu with the mindset of a laboratory and the soul of
                        an artisan. Our kitchen utilizes advanced cooking techniques, strict
                        temperature controls, and precise ratios to unlock the absolute best
                        expression of every ingredient. From our 48-hour fermented doughs to
                        our mathematically balanced reduction sauces, every element on your
                        plate serves a distinct structural and flavorful purpose.`.replace(/\n/g, ' ');

philosophy.appendChild(philosophyTitle);
philosophy.appendChild(philosophyContent);
aboutContainer.appendChild(philosophy);

const sourcing = document.createElement('div');
const sourcingTitle = document.createElement('h2');
const sourcingContent = document.createElement('p');

sourcing.classList.add('sourcing');

sourcingTitle.innerText = "Meticulous Sourcing";
sourcingContent.innerText = `Precision means nothing without pristine components. We partner
                        exclusively with local farmers, sustainable fisheries, and artisanal
                        producers who share our obsession with quality. By selecting only
                        peak-seasonal ingredients, we ensure that the raw data entering our
                        kitchen yields an unparalleled gastronomic output on your table.`.replace(/\n/g, ' ');

sourcing.appendChild(sourcingTitle);
sourcing.appendChild(sourcingContent);
aboutContainer.appendChild(sourcing);

const experience = document.createElement('div');
const experienceTitle = document.createElement('h2');
const experienceContent1 = document.createElement('p');
const experienceContent2 = document.createElement('p');

experience.classList.add('experience');

experienceTitle.innerText = "The Experience";
experienceContent1.innerText = `Dining at Quant is an immersive journey into harmony. Our sleek,
                        minimalist dining space is designed to remove distractions, allowing
                        you to focus entirely on the symmetry of the food, the curated
                        complexity of our beverages, and the warmth of our hospitality.`.replace(/\n/g, ' ');
experienceContent2.innerText = `Welcome to Quant. We have calibrated everything down to the finest
                        detail—all you have to do is enjoy.`.replace(/\n/g, ' ');

experience.appendChild(experienceTitle);
experience.appendChild(experienceContent1);
experience.appendChild(experienceContent2);
aboutContainer.appendChild(experience);

const locationDiv = document.createElement('div');
const locationTitle = document.createElement('h2');
const locationContent = document.createElement('p');

locationDiv.classList.add('location');

locationTitle.innerText = "Location";
locationContent.innerText = `Quadrant 4, Node 81, The Obsidian Sector, Neo-Veridia`.replace(/\n/g, ' ');

locationDiv.appendChild(locationTitle);
locationDiv.appendChild(locationContent);
aboutContainer.appendChild(locationDiv);

const contact = document.createElement('div');
const contactTitle = document.createElement('h2');
const contactContent = document.createElement('p');

contact.classList.add('contact');

contactTitle.innerText = "Contact";
contactContent.innerText = `+00 (0) 777-COMPUTE-99`.replace(/\n/g, ' ');

contact.appendChild(contactTitle);
contact.appendChild(contactContent);
aboutContainer.appendChild(contact);

const hours = document.createElement('div');
const hoursTitle = document.createElement('h2');
const hoursContent1 = document.createElement('p');
const hoursContent2 = document.createElement('p');

hours.classList.add('hours');

hoursTitle.innerText = "Opening Hours";
hoursContent1.innerHTML = `Mon - Fri :&ensp;7:00 - 23:00`.replace(/\n/g, ' ');
hoursContent2.innerHTML = `Sat - Sun :&ensp;9:00 - 21:00`.replace(/\n/g, ' ');

hours.appendChild(hoursTitle);
hours.appendChild(hoursContent1);
hours.appendChild(hoursContent2);
aboutContainer.appendChild(hours);

div.appendChild(aboutContainer);

function loadAbout() {
    content.replaceChildren();
    content.appendChild(div);
    homeButton.classList.remove('selected-button');
    menuButton.classList.remove('selected-button');
    aboutButton.classList.add('selected-button');
}

export default loadAbout;