let BASE_URL = "https://arystorephone.com/wp-content/uploads/";
let products = [
  {
    title: "Iphone15 Pro Max",
    description: "New Version New RAM",
    price: 1239,
    thumbnail:
      "2023/09/iphone-15-pro-max-blacktitanium-300x300.jpg?v=1696852167",
  },
  {
    title: "HONOR Magic V2 5G",
    description: "Ultra Camera with Specific Versions",
    price: 1499,
    thumbnail: "2024/01/honor-magic-v2.jpg?v=1706376382",
  },
  {
    title: "Galaxy S24 Ultra",
    description: "Big Screen and Fast Charging",
    price: 1299,
    thumbnail:
      "2024/01/Samsung-Galaxy-S24-Ultra-Titanium-Yellow-300x300.jpg?v=1704448271",
  },
  {
    title: "Realme C53",
    description: "New Model and Big RAM",
    price: 163,
    thumbnail: "2023/07/realme-c53-Champion-Gold-300x300.jpg?v=1696852286",
  },
  {
    title: "Oppo Reno10 Pro",
    description: "New Accessing with New Design",
    price: 569,
    thumbnail: "2023/07/reno10-pro-5g-purple-300x300.jpg?v=1696852255",
  },
  {
    title: "HUAWEI MatePad 11.5",
    description: "Keyboard Extra Task",
    price: 349,
    thumbnail: "2024/01/HUAWEI-MatePad-11.5-1.jpg?v=1705578048",
  },
];
let renderCard = document.querySelector("section");
products.map((pro) => {
  renderCard.innerHTML += `

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
<a href="#">
    <img class="p-8 rounded-t-lg" src="${BASE_URL}${pro.thumbnail}" alt="product image" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">${pro.title}</h5>
    </a>
    <a href="#">
        <p class="text-md font-semibold tracking-tight text-gray-900 ">${pro.description}</p>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
    </div>
    <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-red-500 ">$${pro.price}</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
</div>
</div>

       `;
});
