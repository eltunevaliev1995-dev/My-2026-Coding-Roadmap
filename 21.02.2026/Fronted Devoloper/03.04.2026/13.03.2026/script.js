
const products = [

   { id:1, name: "MacBook Pro" ,    icon: "💻", category: "Kompyuter",  price: 2499, rating: 4.9 },
   { id:2, name: "iPhone 15",       icon: "📱", category: "Telefon"  ,  price: 999,  rating: 4.8 },
   { id:3, name: "iPad Air",        icon: "📟", category: "Tablet",     price: 749,  rating: 4.7 },
   { id:4, name: "AirPods Pro",     icon: "🎧", category: "Audio",      price: 249,  rating: 4.8 },
   { id:5, name: "Dell XPS 15",     icon: "🖥️", category: "Kompyuter",  price: 1899, rating: 4.6 },
   { id:6, name: "Samsung S24",     icon: "📲", category: "Telefon",    price: 899,  rating: 4.7 },
   { id:7, name: "Sony WH-1000XM5", icon: "🎵", category: "Audio",      price: 349,  rating: 4.9 },
   { id:8, name: "Surface Pro",     icon: "📓", category: "Tablet",     price: 999,  rating: 4.5},

];


let cart = [];

let activeCategory = "Hamısı";

const categories = ["Hamısı", ...new Set(products.map(function(p){

      return p.category;
}))];


function renderFilterButtons(){

    const container = document.getElementById("filter-buttons");
    
    let html = "";
    for(let i = 0; i < categories.length; i ++){

       const cat =  categories[i];
       const isActive = (cat ===  activeCategory) ? "active" : "";
       html += `<div class="filter-btn ${isActive}" onclick="setCategory('${cat}')">${cat}</div>`;
    }
    container.innerHTML = html;
}


function getFilteredProducts() {

   const query = document.getElementById("search-input").value.toLowerCase();
   const filtered = products.filter(function(product){

     const matchesCategory = activeCategory === "Hamısı" || product.category === activeCategory;
     const matchesSearch = product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
     return matchesCategory && matchesSearch;

   });
   return filtered;
}


function renderProducts() {

    const grid = document.getElementById("products-grid");
    const filtered =  getFilteredProducts();
    if(filtered.length === 0) {

         grid.innerHTML = `<div class="no-results">Nəticə tapılmadı 😔</div>`;
         return;

    }
    let html = "";
    for(let i = 0; i < filtered.length; i ++){

       const product = filtered[i];
       const isInCart = cart.some(function(item){
           return item.id === product.id;
       });
       const stars = "⭐".repeat(Math.round(product.rating));
   
       html += `<div class="product-card ${isInCart ? "in-cart" : ""}">
       
         <span class="product-icon">${product.icon}</span>
         <div  class="product-name">${product.name}</div>
         <div  class="product-category">${product.category}</div>
         <div  class="product-rating">${product.rating}</div>
         <div  class="product-price">${product.price.toLocaleString()}</div>
         <button class="add-btn ${isInCart ? "added" : ""}" onclick="toggleCart(${product.id})">
             ${isInCart ? "✓ Əlavə edildi" : "+ Səbətə at"} 
         </button>
      </div>
       
       `
    }
    grid.innerHTML = html;
}


function renderCart() {

   const cartList = document.getElementById("cart-list");
   const cartCount = document.getElementById("cart-count");
   cartCount.textContent = cart.length;
   if(cart.length === 0) {

      cartList.innerHTML = `<p class="cart-empty">Səbət boşdur</p>`;
      return;
   }
   let html = "";
   for(let i = 0; i < cart.length; i++) {

      const item = cart[i];

      html += `<div class="cart-item">
      <div class="cart-item-left">
        <span>${item.icon}</span>
        <span>${item.name}</span>
     </div>
     <div>
        <span class="cart-item-price">${item.price.toLocaleString()}</span>
        <button class="remove-btn" onclick="toggleCart(${item.id})">Sil</button>
     </div>
     </div>`;
   }
   const total = cart.reduce(function(accumulator, currentItem) {
   
   return accumulator + currentItem.price;

   }, 0);
    html += `
    <div class="cart-total-row">
      <span>Cəmi / Total</span>
      <span>$${total.toLocaleString()}</span>
    </div>
  `;
  cartList.innerHTML = html;
   
}

function renderStats(){

   const statsRow = document.getElementById("stats-row");
   const totalPrice = products.reduce(function(sum, p) {
     return sum + p.price;

   }, 0);
   const avgPrice = Math.round(totalPrice / products.length);
   const avgRating = products.reduce(function(sum, p) {

      return sum + p.rating;

   }, 0) / products.length;

   const cartTotal = cart.reduce(function(sum, item){

      return sum + item.price;


   }, 0);
   const stats = [
   
       {label: "Məhsul sayı",  value: products.length},
       {label: "Orta qiymət",  value: "$" + avgPrice.toLocaleString()},
       {label: "Orta reytinq", value: avgRating.toFixed(1)},
       {label: "Səbət cəmi",   value: "$" + cartTotal.toLocaleString()},

   ];
   let html = "";
   for(let i = 0; i < stats.length; i ++) {

      html += `

         <div class="stat-card">
           <div class="label">${stats[i].label}</div>
           <div class="value">${stats[i].value}</div>
         </div>
      `
   }
   statsRow.innerHTML = html;
}


function toggleCart() {

   const product = products.find(function(p){

      return p.id === productId;

   });
   const indexInCart = cart.findIndex(function(item) {

       return item.id === productId;
   });

   if(indexInCar === -1) {

      cart.push(product);

   } else {
    
      cart.splice(indexInCart, 1)

   }
   renderAll();


   function setCategory(category){

       activeCategory = category;
       renderAll();  
   }


   function renderAll(){

      renderFilterButtons();
      renderProducts();
      renderCart();
      renderStats();
   }


   function scrollToCart(){

       document.getElementById("cart-section").scrollIntoView({
    
            behavior: "smooth"

       });
   }
}
renderAll();



 





























function renderCart() {
  const cartList  = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
  if (cart.length === 0) {
    cartList.innerHTML = `<p class="cart-empty">Səbət boşdur</p>`;
    return;
  }
  let html = "";
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    html += `
      <div class="cart-item">
        <div class="cart-item-left">
          <span>${item.icon}</span>
          <span>${item.name}</span>
        </div>
        <div>
          <span class="cart-item-price">$${item.price.toLocaleString()}</span>
          <button class="remove-btn" onclick="toggleCart(${item.id})">Sil</button>
        </div>
      </div>
    `;
  }
  const total = cart.reduce(function(accumulator, currentItem) {
    return accumulator + currentItem.price;
  }, 0);
  html += `
    <div class="cart-total-row">
      <span>Cəmi / Total</span>
      <span>$${total.toLocaleString()}</span>
    </div>
  `;
  cartList.innerHTML = html;
}

function renderStats() {
  const statsRow = document.getElementById("stats-row");
  const totalPrice = products.reduce(function(sum, p) {
    return sum + p.price;
  }, 0);
  const avgPrice = Math.round(totalPrice / products.length);
  const avgRating = products.reduce(function(sum, p) {
    return sum + p.rating;
  }, 0) / products.length;
  const cartTotal = cart.reduce(function(sum, item) {
    return sum + item.price;
  }, 0);
  const stats = [
    { label: "Məhsul sayı",  value: products.length },
    { label: "Orta qiymət",  value: "$" + avgPrice.toLocaleString() },
    { label: "Orta reytinq", value: avgRating.toFixed(1) },
    { label: "Səbət cəmi",   value: "$" + cartTotal.toLocaleString() },
  ];
  let html = "";
  for (let i = 0; i < stats.length; i++) {
    html += `
      <div class="stat-card">
        <div class="label">${stats[i].label}</div>
        <div class="value">${stats[i].value}</div>
      </div>
    `;
  }
  statsRow.innerHTML = html;
}

function toggleCart(productId) {
  const product = products.find(function(p) {
    return p.id === productId;
  });
  const indexInCart = cart.findIndex(function(item) {
    return item.id === productId;
  });
  if (indexInCart === -1) {
    cart.push(product);
  } else {
    cart.splice(indexInCart, 1);
  }
  renderAll();
}

function setCategory(category) {
  activeCategory = category;
  renderAll();
}

function renderAll() {
  renderFilterButtons();
  renderProducts();
  renderCart();
  renderStats();
}

function scrollToCart() {
  document.getElementById("cart-section").scrollIntoView({
    behavior: "smooth"
  });
}

renderAll();