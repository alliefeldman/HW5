var product_list = {
    //this used to be a dictionary of lists, I changed it to a dictionary of dictionaries
    "foundation": {"official_name": "Foundation", "full_price": 24.99, "img_src": "media/foundation.jpeg", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed vulputate odio. Rhoncus urna neque viverra justo nec ultrices dui. Hendrerit gravida rutrum quisque non. Tellus in metus vulputate eu scelerisque felis imperdiet proin. ", "colors": [""], "rating": 4.5},
    "concealer":  {"official_name": "Concealer", "full_price": 15.98, "img_src": "media/concealer.jpeg", "description": "this concealer is like... literally the best thing ever. I would DIE if this were to be discontinued."},
    "bronzer":    {"official_name": "Bronzer", "full_price": 16.61, "img_src": "media/bronzer.jpeg", "description": "my face be bronzed to da gods, it's like blush but it's NOT"},
    "highlighter": {"official_name": "Luminous Highlighter", "full_price": 20.22, "img_src": "media/highlighter.jpeg", "description": "so shiny"},
    "lipgloss": {"official_name": "Lip Gloss", "full_price": 10.99, "img_src": "media/lipgloss.jpeg", "description": "Ullamcorper morbi tincidunt ornare massa eget egestas. Tristique magna sit amet purus gravida quis blandit turpis cursus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Arcu risus quis varius quam quisque id diam vel quam. Feugiat scelerisque varius morbi enim nunc faucibus. Dictum fusce ut placerat orci.", "rating": 4},
    "mascara": {"official_name": "Mascara", "full_price": 15.99, "img_src": "media/mascara.jpeg", "description": "Ullamcorper morbi tincidunt ornare massa eget egestas. Tristique magna sit amet purus gravida quis blandit turpis cursus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Arcu risus quis varius quam quisque id diam vel quam. Feugiat scelerisque varius morbi enim nunc faucibus. Dictum fusce ut placerat orci.", "rating": 4}
};

function selectActiveProduct(item){
    let id = item.parentNode.id;
    localStorage.setItem("active_product", id);
}


function showCartSize() {
    try {
        let cart = localStorage.getItem("cart").split(",");
    }
    catch (error) {
        establishEmptyCart()
    }
    let cart_div = document.getElementById("cart");
    document.getElementById("cart").innerHTML = `<img src="media/cart.png", width="65">`;
}


function updateProductPage() {
    var active_product = localStorage.getItem("active_product");
    //Product Image side (left)
    let image_div = document.getElementById("product_image");
    let product_image = document.createElement("img");
    product_image.setAttribute("src", product_list[active_product]["img_src"]);
    product_image.setAttribute("style","width: 30vw; height: 30vw;");
    image_div.appendChild(product_image);

    //Product Info side (right)
    let productinfo_div = document.getElementById("product_info");
    // // Name
    let product_name = document.createElement("h1");
    product_name.innerText = product_list[active_product]["official_name"];
    productinfo_div.appendChild(product_name);
    // // Price
    let price = document.createElement("h2");
    price.innerText = "$" + product_list[active_product]["full_price"];
    let subscription_price_label = document.createElement("span");
    subscription_price_label.innerText = " ($" + (Math.round(product_list[active_product]["full_price"] * .8 * 100)/100) + " with a subscription)";
    price.appendChild(subscription_price_label);
    productinfo_div.appendChild(price);
    // // Description
    let description = document.createElement("p");
    description.innerText = product_list[active_product]["description"];
    productinfo_div.appendChild(description);
}


function removeItem(cart_item_index) {
    let cart = localStorage.getItem("cart").split(",");
    cart.splice(cart_item_index, 1);
    localStorage.setItem("cart", cart);
    displayCart();
    showCartSize();

}