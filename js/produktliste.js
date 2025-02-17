const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  document.querySelector(".category-title").textContent = category;
  fetchProducts(category);
}

async function fetchProducts(category) {
  const url = `https://dummyjson.com/products`;
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  displayProducts(products);
}

function displayProducts(products) {
  const container = document.querySelector(".product_grid");
  container.innerHTML = ""; // Ryd tidligere indhold

  products.forEach((product) => {
    const discountLabel = product.discountPercentage ? `<div class="discount-label">Udsalg: ${product.discountPercentage}%</div>` : "";

    const soldoutLabel = product.stock === 0 ? `<div class="soldout-label">Udsolgt</div>` : "";

    const productHTML = `
        <section class="card">
          <a href="produkt.html?id=${product.id}">
            ${soldoutLabel}
            <img src="${product.thumbnail}" alt="${product.title}" />
            <article class="card_container">
              <h2 class="item_titel">${product.title}</h2>
              <div class="arrow">
                <p class="price">${product.price} $</p>
                <img src="img/right-arrow.webp" alt="arrow" style="width: 30px; height: 40px" />
              </div>
            </article>
          </a>
        </section>
    `;
    container.innerHTML += productHTML;
  });
}
