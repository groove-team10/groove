document.addEventListener("DOMContentLoaded", () => {
    let productContainer = document.querySelector(".product-container");
    const backButton = document.querySelector(".back");

    if (!productContainer) {
        console.error("Fejl: .product-container findes ikke i DOM'en.");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const myId = urlParams.get("id") || 1;

    fetch(`https://dummyjson.com/products/${myId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Kunne ikke hente produktdata.");
            }
            return response.json();
        })
        .then(data => {
            const productCategory = data.category || "beauty";
            sessionStorage.setItem("lastCategory", productCategory);

            if (backButton) {
                backButton.href = `produktliste.html?category=${productCategory}`;
            }

            productContainer.innerHTML = `
            <section class="product-container">
                <div class="product-image">
                    <img src="${data.thumbnail}" alt="${data.title}" />
                </div>

                <div class="product-info">
                    <p class="brand">${data.brand}</p>

                    <h1 class="product-name">${data.title}</h1>

                    <p class="price">${data.price} $</p>

                    <div class="cart-container">
                        <div class="quantity-box">
                            <div class="plus-minus">-</div>
                            <div class="quantity">1</div>
                            <div class="plus-minus">+</div>
                        </div>   
                        <div class="add-to-cart">ADD TO CART</div>
                        <div class="favorites">
                            <span class="heart-icon"><img src="img/hjerte.svg" alt="heart icon"></span>
                        </div>
                    </div>

                    <div class="about-product">
                        <div class="about-dropdown">
                            <a href="#">DESCRIPTION</a>
                            <div class="about-content">
                                <p>${data.description}</p>
                            </div>
                        </div>

                        <div class="about-dropdown">
                            <a href="#">SPECIFICATION</a>
                            <div class="about-content">
                                <p>Brand: ${data.brand}<br>
                                   SKU: ${data.sku}<br>
                                   Weight: ${data.weight}<br>
                                   Dimensions:
                                   Width: ${data.dimensions.width}, 
                                   Height: ${data.dimensions.height}, 
                                   Depth: ${data.dimensions.depth}
                                </p>
                            </div>
                        </div>

                        <div class="about-dropdown">
                            <a href="#">REVIEWS</a>
                            <div class="about-content">
                                ${data.reviews && data.reviews.length > 0 ? data.reviews.map(review => `
                                    <p>Rating: ${review.rating}<br>
                                       Kommentar: ${review.comment || "Ingen kommentar"}<br>
                                       Dato: ${review.date || "Ukendt"}<br>
                                       Reviewer: ${review.reviewerName || "Anonym"}<br>
                                       Email: ${review.reviewerEmail || "Ikke tilgængelig"}
                                    </p>
                                `).join('') : "<p>Ingen anmeldelser endnu.</p>"}
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;
        })
        .catch(error => {
            console.error("Fejl:", error);
            productContainer.innerHTML = "<p>Kunne ikke hente produkt. Prøv igen senere.</p>";
        });
});
