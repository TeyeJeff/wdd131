document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7831.jpg"
    },
    {
        templeName: "Bogota Columbia",
        location: "Bogota Columbia",
        dedicated: "1983, June, 1-4",
        area: 53500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-57256.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Atlanta Georgia",
        dedicated: "1999, April, 24-26",
        area: 34500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3861.jpg"
    }
];

const templeContainer = document.getElementById("templeContainer");

function displayTemples(templesToShow) {
    templeContainer.innerHTML = '';

    templesToShow.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(area);

        templeContainer.appendChild(card);
    });
}

function filterTemples(category) {
    let filteredTemples = temples;

    if (category === 'old') {
        filteredTemples = temples.filter(temple => {
            const yearMatch = temple.dedicated.match(/^\d{4}/);
            const dedicationYear = yearMatch ? parseInt(yearMatch[0]) : null;
            return dedicationYear && dedicationYear < 1900;
        });
    } else if (category === 'new') {
        filteredTemples = temples.filter(temple => {
            const yearMatch = temple.dedicated.match(/^\d{4}/);
            const dedicationYear = yearMatch ? parseInt(yearMatch[0]) : null;
            return dedicationYear && dedicationYear > 2000;
        });
    } else if (category === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (category === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    } else if (category === 'home') {
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}
document.getElementById('home').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('home');
});
document.getElementById('old').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('old');
});
document.getElementById('new').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('new');
});
document.getElementById('large').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('large');
});
document.getElementById('small').addEventListener('click', (e) => {
    e.preventDefault();
    filterTemples('small');
});
displayTemples(temples);