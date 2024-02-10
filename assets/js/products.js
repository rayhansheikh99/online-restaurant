// Sample fake data
const fakeData = [
    { name: 'Margarita', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/1.png", price: 50.00 },
    { name: 'Hawaii', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/2.png", price: 60.00 },
    { name: 'Pepperoni', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/3.png", price: 70.00 },
    { name: 'Tuna Pizza', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/4.png", price: 50.00 },
    { name: 'Vegetarian', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/5.png", price: 40.00 },
    { name: 'Mexico', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/6.png", price: 50.00 },
    { name: 'Rustica', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/7.png", price: 80.00 },
    { name: 'San Marco', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/8.png", price: 50.00 },
    { name: 'Kebabs', category: "Sushi", description: 'With tomato sauce, cheese and oregano', image: "/assets/images/online-order/pizza/9.png", price: 100.00 },

];

// Function to display fake data
function displayData(data) {
    const container = document.getElementById('data-container');
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bg-white rounded-lg';
        div.innerHTML = `
            <img src=${item.image} alt="product" class="h-auto min-w-full" />
            <div class="flex justify-between gap-2 mt-5 mb-3 px-5">
                <p class="font-bold text-xl">${item.name}</p>
                <p class="text-[#33333386]">${item.category}</p>
            </div>
            <p class="px-5">${item.description}</p>
            <p class="font-bold text-xl text-[#5EAE53] mt-3 pb-5 px-5">DKK ${item.price.toFixed(2)}</p>
        `;
        container.appendChild(div);
    });
}

// Display fake data
displayData(fakeData);