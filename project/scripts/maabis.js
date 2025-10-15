const hamburger = document.querySelector(".hamburger");
const navigation2 = document.querySelector(".navigation2");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navigation2.classList.toggle("show");
});


const jewelries = [
    {
        brandName: "Philip Lindvall",
        type: "Watch",
        material: "Leather & Gold",
        price: "$1,850",
        image: "images/pexels-philip-lindvall-300724-1120275.jpg"
    },

    {
        brandName: "Godisable Jacob",
        type: "Bracelet",
        material: "Silver & Gold",
        price: "$1,150",
        image: "images/pexels-godisable-jacob-226636-1191536.jpg"
    },

    {
        brandName: "Pixabay",
        type: "Watch",
        material: "Leather",
        price: "$725",
        image: "images/pexels-pixabay-158741.jpg"
    },

    {
        brandName: "Alejandro Avila",
        type: "Ring",
        material: "Platinum",
        price: "$12,725",
        image: "images/pexels-alxvila1-288008.jpg"
    },

    {
        brandName: "Pixabay 4",
        type: "Watch",
        material: "Silver",
        price: "$725",
        image: "images/pexels-pixabay-47856.jpg"
    },

    {
        brandName: "Stephen Gitau",
        type: "Ring",
        material: "Gold",
        price: "$21,725",
        image: "images/pexels-git-stephen-gitau-302905-1670723.jpg"
    },

    {
        brandName: "Pixabay 12",
        type: "Bracelet",
        material: "Silver & Moissante",
        price: "$950",
        image: "images/pexels-pixabay-265906.jpg"
    },

    {
        brandName: "Alexandre Borecky",
        type: "Watch",
        material: "Leather",
        price: "$325",
        image: "images/pexels-alexandr-borecky-128389-393047.jpg"
    },

    {
        brandName: "Anthony Derosa",
        type: "Watch",
        material: "Leather & Platinum",
        price: "$1,259",
        image: "images/pexels-anthony-derosa-39577-236900.jpg"
    },

    {
        brandName: "Alimadad",
        type: "Watch",
        material: "Bronze & Platinum",
        price: "$1,559",
        image: "images/pexels-alimadad-1268511.jpg"
    },

    {
        brandName: "Leah Newhouse",
        type: "Ring",
        material: "Gold & Diamond",
        price: "$12,559",
        image: "images/pexels-leah-newhouse-50725-691046.jpg"
    },


    {
        brandName: "Pixabay 2",
        type: "Watch",
        material: "Platinum",
        price: "$3,559",
        image: "images/pexels-pixabay-280250.jpg"
    },

    {
        brandName: "Heiner",
        type: "Ring",
        material: "Bronze",
        price: "$2,159",
        image: "images/pexels-heiner-56542-204993.jpg"
    },

    {
        brandName: "Pixabay 5 Pocket-Watch",
        type: "Watch",
        material: "Gold & Silver",
        price: "$3,559",
        image: "images/pexels-pixabay-51396.jpg"
    },

    {
        brandName: "Dima Valkov",
        type: "Earring",
        material: "Bronze & Moissante",
        price: "$1,750",
        image: "images/pexels-dima-valkov-1186343-3266700 (1).jpg"
    },

    {
        brandName: "Fernando Arcos",
        type: "Ring",
        material: "Gold, Silver & Bronze",
        price: "$32,559",
        image: "images/pexels-ferarcosn-204427.jpg"
    },

    {
        brandName: "Lalesh Aldarwish",
        type: "Ring",
        material: "Silver & Moissante",
        price: "$12,559",
        image: "images/pexels-lalesh-168927.jpg"
    },

    {
        brandName: "Jessica Monte",
        type: "Bracelet",
        material: "Multi Colored Rubber",
        price: "$50",
        image: "images/pexels-jessica-monte-67886-322674.jpg"
    },

    {
        brandName: "Ashithosh",
        type: "Earring",
        material: "Bronze, Bead & Cotton",
        price: "$150",
        image: "images/pexels-ashuphotography-1413420.jpg"
    },

    {
        brandName: "Say Straight",
        type: "Earring",
        material: "Silver & Moissante",
        price: "$750",
        image: "images/pexels-say-straight-1400349-2735970.jpg"
    },

    {
        brandName: "Julia Sakeli",
        type: "Anklet",
        price: "$150",
        image: "images/pexels-juliasakelli-5676230.jpg"
    },


    {
        brandName: "Rachel Claire",
        type: "Anklet",
        price: "$550",
        image: "images/pexels-rachel-claire-4992841.jpg"
    },

    {
        brandName: "Anna Tarazevich",
        type: "Anklet",
        price: "$250",
        image: "images/pexels-anntarazevich-6711855.jpg"
    },

    {
        brandName: "Karolina Grabowska",
        type: "Anklet",
        price: "$25",
        image: "images/pexels-karolina-grabowska-4996988.jpg"
    },

    {
        brandName: "Cottonbro",
        type: "Anklet",
        price: "$115",
        image: "images/pexels-cottonbro-9317123.jpg"
    },

]

const jewelryContainer = document.getElementById("jewelryContainer");

function displayJewelries(jewelriesToShow) {
    jewelryContainer.innerHTML = '';

    jewelriesToShow.forEach(jewelry => {
        const card = document.createElement("div");
        card.classList.add("jewelry-card");

        const img = document.createElement("img");
        img.src = jewelry.image;
        img.alt = jewelry.brandName;
        img.loading = "lazy";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = jewelry.brandName;
        card.appendChild(name);

        const type = document.createElement("p");
        type.textContent = jewelry.type;
        card.appendChild(type);

        const material = document.createElement("p");
        material.textContent = jewelry.material;
        card.appendChild(material);

        const price = document.createElement("p");
        price.innerHTML = `<strong>${jewelry.price}</strong>`;
        card.appendChild(price);

        jewelryContainer.appendChild(card);
    })
}

function filteredJewelries(category) {
    let filteredJewelries = jewelries;

    if (category === 'Watch') {
        filteredJewelries = jewelries.filter(jewelry => jewelry.type === 'Watch');
    }

    else if (category === 'Ring') {
        filteredJewelries = jewelries.filter(jewelry => jewelry.type === 'Ring');
    }

    else if (category === 'Earring') {
        filteredJewelries = jewelries.filter(jewelry => jewelry.type === 'Earring');
    }

    else if (category === 'Bracelet') {
        filteredJewelries = jewelries.filter(jewelry => jewelry.type === 'Bracelet');
    }

    else if (category === 'Anklet') {
        filteredJewelries = jewelries.filter(jewelry => jewelry.type === 'Anklet');
    }

    else if (category === 'All') {
        filteredJewelries = jewelries;
    }

    displayJewelries(filteredJewelries);
}

document.getElementById('all').addEventListener('click', (e) => {
    e.preventDefault();
    filteredJewelries('All');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

document.getElementById('watch').addEventListener('click', (e) => {
    e.preventDefault();
    filteredJewelries('Watch');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

document.getElementById('rings').addEventListener('click', (e) => {
    e.preventDefault();
    filteredJewelries('Ring');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

document.getElementById('earrings').addEventListener('click', (e) => {
    e.preventDefault();
    filteredJewelries('Earring');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

document.getElementById('bracelets').addEventListener('click', (e) =>{
    e.preventDefault();
    filteredJewelries('Bracelet');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

document.getElementById('anklets').addEventListener('click', (e) => {
    e.preventDefault();
    filteredJewelries('Anklet');
    navigation2.classList.remove("show");
    hamburger.classList.remove("show");
})

displayJewelries(jewelries);


const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const results = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = jewelries.filter(jewelry => 
        jewelry.brandName.toLowerCase().includes(query)
    );

    displayResults(filtered);
})

function displayResults(items) {
    results.innerHTML = '';

    if (items.length === 0) {
        results.innerHTML = "<p>No results found.</p>";
        return;
    }

    items.forEach(jewelry => {
        const card = document.createElement('div');
        card.classList.add('jewelry-card');

        card.innerHTML =  `
        <img src = "${jewelry.image}" alt="${jewelry.brandName}">
        <h3>${jewelry.brandName}</h3>
        <p>${jewelry.type} - ${jewelry.material || "Material N/A"}</p>
        <p><strong>${jewelry.price}</strong></p>
        `;

        results.appendChild(card);
    })
}
