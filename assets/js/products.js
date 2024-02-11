// Sample fake data
const PizzaData = [
    { name: 'Margarita', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/1.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Hawaii', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/2.png", price: 60.00, size: ['S', 'L'] },
    { name: 'Pepperoni', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/3.png", price: 70.00, size: ['S', 'L'] },
    { name: 'Tuna Pizza', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/4.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Vegetarian', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/5.png", price: 40.00, size: ['S', 'L'] },
    { name: 'Mexico', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/6.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Rustica', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/7.png", price: 80.00, size: ['S', 'L'] },
    { name: 'San Marco', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/8.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Kebabs', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/9.png", price: 100.00, size: ['S', 'L'] },

];
const BurgerData = [
    { name: 'Margarita', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Hawaii', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 60.00, size: ['S', 'L'] },
    { name: 'Pepperoni', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 70.00, size: ['S', 'L'] },
    { name: 'Tuna burger', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Vegetarian', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 40.00, size: ['S', 'L'] },
    { name: 'Mexico', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Rustica', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 80.00, size: ['S', 'L'] },
    { name: 'San Marco', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 50.00, size: ['S', 'L'] },
    { name: 'Kebabs', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/burger/1.png", price: 100.00, size: ['S', 'L'] },

];

// Function to display fake data
function displayData(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bg-white rounded-2xl lg:cursor-pointer';
        div.innerHTML = `
            <img src=${item.image} alt="product" class="h-auto min-w-full" />
            <div class="flex flex-wrap justify-between items-center gap-2 mt-5 mb-3 px-2 lg:px-5">
                <p class="font-bold text-base lg:text-xl">${item.name}</p>
                <p class="text-[#33333386] text-[11px] lg:text-base">${item.category}</p>
            </div>
            <p class="px-2 lg:px-5 text-xs lg:text-base">${item.description}</p>
            <div class="flex flex-wrap gap-1 justify-between mt-3 pb-5 px-2 lg:px-5">
                <p class="font-bold text-sm lg:text-xl">DKK ${item.price.toFixed(2)}</p>
                <p class="text-xs lg:text-sm bg-[#5EAE53] text-white py-1 lg:py-2.5 w-max rounded-[5px] px-2 lg:px-5">Order</p>
            </div>
        `;
        // Add click event listener to each card
        div.addEventListener('click', function () {
            showModal(item);
        });
        container.appendChild(div);
    });
}

// Display fake data
displayData(PizzaData, 'data-container-pizza');
displayData(BurgerData, 'data-container-burger');

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// Function to display data in the modal
function showModal(item) {
    document.getElementById("modalImage").src = item.image;
    document.getElementById("modalName").innerText = item.name;
    document.getElementById("modalCat").innerText = item.category;
    document.getElementById("modalDesc").innerText = item.description;
    document.getElementById("modalPrice").innerText = "DKK" + " " + item.price.toFixed(2);
    const modalSize = document.getElementById("modalSize");
    modalSize.innerHTML = ``;

    item.size.forEach(size => {
        const sizeOption = document.createElement("p");
        sizeOption.className = "lg:cursor-pointer border border-[#979595] text-[#979595] text-xs px-2.5 py-[5px] w-max inline rounded";
        sizeOption.textContent = size;
        modalSize.appendChild(sizeOption);
        modalSize.appendChild(document.createTextNode(" "));
    });
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// script.js for scroll menu active
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('#product-menu a');
let currentSection = null;

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const isVisible = window.scrollY >= sectionTop - sectionHeight / 3 &&
            window.scrollY < sectionTop + sectionHeight;

        if (isVisible) {
            currentSection = section;
            // console.log(currentSection,"currentSection 1");
            break; // Stop iterating after finding the visible section
        }
        if (window.scrollY === 0) {
            currentSection = null;
        }
    }

    // Update menu item classes
    updateMenuItems();
}

function updateMenuItems() {
    for (const menuItem of menuItems) {
        menuItem.classList.remove('active');

        if (menuItem.href.includes(`#${currentSection?.id}`)) {
            menuItem.classList.add('active');
        }
    }
}
