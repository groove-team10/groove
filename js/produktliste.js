/* Hente kategori fra URL */

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  document.querySelector(".category-title").textContent = category;
  fetchProducts(category);
}

// Koden tjekker, om der er en kategori i URL’en (fx produktliste.html?category=beauty).
// Kalder funktionen fetchProducts(category), som henter produkter fra API’et.

/* ------------------------------------------------------------------------------------- */

/* Hente kategori fra URL */

async function fetchProducts(category) {
  const url = `https://dummyjson.com/products`;
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  displayProducts(products);
}

// Funktion fetchProducts(category) henter en liste af produkter fra https://dummyjson.com/products.
// Konverterer dataene til JSON-format (response.json()).
// Filtrerer produkterne, så kun dem med den valgte kategori vises.
// Sender de filtrerede produkter videre til displayProducts().

/* ------------------------------------------------------------------------------------- */

/* Viser produkterne på hjemmesiden */

function displayProducts(products) {
  const container = document.querySelector(".product_grid");
  container.innerHTML = "";

  products.forEach((product) => {
    const soldoutLabel = product.discountPercentage ? `<div class="soldout-label">Discount: ${product.discountPercentage}%</div>` : "";

    const discountLabel = product.stock === 0 ? `<div class="soldout-label">Udsolgt</div>` : "";

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

// Finder HTML-elementet .product_grid, hvor produkterne skal vises.
// Fjerner gamle produkter (container.innerHTML = "";).
// Løber gennem listen af produkter (forEach())

/* ------------------------------------------------------------------------------------- */

/* Ændrer billede dynamisk baseret på kategori */

document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("categoryImage");

  if (window.location.href.includes("fragrances")) {
    imageElement.src = "img/perfume.webp";
  } else if (window.location.href.includes("beauty")) {
    imageElement.src = "img/stift.webp";
  }
});

// Når siden indlæses (DOMContentLoaded), finder den et billede (#categoryImage).
// Hvis brugeren er i fragrances, skifter billedet til en parfume.
// Hvis brugeren er i beauty, skifter billedet til en læbestift.

/* ------------------------------------------------------------------------------------- */

/* Formular alert besked */

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your message! We will get back to you as soon as possible.");
  this.reset(); // Ryd formularen efter indsendelse
});

// Når brugeren sender kontaktformularen, forhindrer koden siden i at genindlæse (event.preventDefault()).
// Viser en besked (alert("Thank you for your message!")).
// Nulstiller formularen (this.reset()), så den bliver tom igen.
