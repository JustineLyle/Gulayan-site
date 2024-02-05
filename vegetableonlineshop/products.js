const products = [
  {
    image: "./vegetables-img/Tomato_je.jpg",
    productName: "Tomato",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/eggplant.JPG",
    productName: "Eggplant",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/garlic.JPG",
    productName: "Garlic",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/cucumber.jpg",
    productName: "Cucumber",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/ginger.jpg",
    productName: "Ginger",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/kalabasa.jpg",
    productName: "Kalabasa",
    productPrice: "600",
  },
  {
    image: "./vegetables-img/onion.jpg",
    productName: "Onion",
    productPrice: "600",
  },
];

const veges = document.querySelector(".product-listings");

// Clear previous content in the cart
veges.innerHTML = "";

// Loop through products and create HTML for each
products.forEach((product) => {
  const vegetables = `<h2>Best Seller</h2>
<div class="product-card">
  <img src="${product.image}" alt="" />
  <p>${product.productName}</p>
  <p>${product.productPrice}</p>
  <button class="add-to-cart js-add-to-cart" data-product-name="${product.productName}">Add to Cart</button>
  <button id="buy" onclick="openModal()">Buy</button>
</div>
`;

  veges.innerHTML += vegetables;
});

//add-to-cart
const cart = [];
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const vegeName = button.dataset.productName;
    let matchingProduct;
    cart.forEach((item) => {
      if (vegeName === item.vegeName) {
        matchingProduct = item;
      }
    });
    if (matchingProduct) {
      matchingProduct.quantity += 1;
    } else {
      cart.push({
        vegeName: vegeName,
        quantity: 1,
      });
    }
    const cartBox = document.querySelector("#cart");
    cartBox.innerHTML = "";
    cart.forEach((items) => {
      const gulay = `
      <div class="product-card">
        <p>${items.vegeName}</p>
        <p>${items.quantity}</p>
        <button id="buy" onclick="openModal()">Buy</button>
      </div>
      `;
      cartBox.innerHTML += gulay;
    });
  });
});

//modal

function openModal() {
  document.querySelector("#modal-container").style.display = "flex";
}
function closeModal() {
  document.querySelector("#modal-container").style.display = "none";
  document.querySelector("#text").innerHTML = "Do you want to buy?";
}
function buy() {
  document.querySelector("#text").innerHTML = "Prepairing....";
}
