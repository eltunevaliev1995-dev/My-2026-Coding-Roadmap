 // Product Data
                    const products = [
                              { id: 1, name: "Silk Summer Dress", category: "dresses", price: 289, oldPrice: null, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", colors: ["#F5F5DC", "#FFB6C1", "#000000"], sizes: ["XS", "S", "M", "L"], isNew: true, isSustainable: true, rating: 4.9, reviews: 128 },
                              { id: 2, name: "Linen Wide Trousers", category: "bottoms", price: 189, oldPrice: 249, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80", colors: ["#F5F5DC", "#808080"], sizes: ["S", "M", "L", "XL"], isNew: false, isSustainable: true, rating: 4.7, reviews: 89 },
                              { id: 3, name: "Oversized Blazer", category: "outerwear", price: 459, oldPrice: null, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", colors: ["#000000", "#FFFFFF", "#8B4513"], sizes: ["XS", "S", "M", "L"], isNew: true, isSustainable: false, rating: 4.8, reviews: 234 },
                              { id: 4, name: "Organic Cotton Tee", category: "tops", price: 89, oldPrice: null, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", colors: ["#FFFFFF", "#000000", "#808080", "#F5F5DC"], sizes: ["XS", "S", "M", "L", "XL"], isNew: false, isSustainable: true, rating: 4.6, reviews: 567 },
                              { id: 5, name: "Pleated Midi Skirt", category: "bottoms", price: 219, oldPrice: null, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80", colors: ["#000000", "#FFD700"], sizes: ["S", "M", "L"], isNew: true, isSustainable: false, rating: 4.9, reviews: 145 },
                              { id: 6, name: "Cashmere Turtleneck", category: "tops", price: 399, oldPrice: 499, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", colors: ["#F5F5DC", "#808080", "#000000"], sizes: ["S", "M", "L"], isNew: false, isSustainable: true, rating: 4.9, reviews: 89 },
                              { id: 7, name: "Trench Coat Classic", category: "outerwear", price: 599, oldPrice: null, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", colors: ["#F5F5DC", "#000000"], sizes: ["XS", "S", "M", "L", "XL"], isNew: false, isSustainable: true, rating: 4.8, reviews: 312 },
                              { id: 8, name: "Wrap Dress Floral", category: "dresses", price: 259, oldPrice: null, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80", colors: ["#FF69B4", "#F5F5DC"], sizes: ["XS", "S", "M", "L"], isNew: true, isSustainable: false, rating: 4.7, reviews: 178 },
                              { id: 9, name: "High-Waist Jeans", category: "bottoms", price: 179, oldPrice: null, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80", colors: ["#000080"], sizes: ["24", "26", "28", "30", "32"], isNew: false, isSustainable: true, rating: 4.5, reviews: 423 },
                              { id: 10, name: "Satin Camisole", category: "tops", price: 129, oldPrice: null, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", colors: ["#000000", "#F5F5DC", "#FFB6C1"], sizes: ["XS", "S", "M", "L"], isNew: true, isSustainable: false, rating: 4.6, reviews: 234 },
                              { id: 11, name: "Wool Overcoat", category: "outerwear", price: 799, oldPrice: 999, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80", colors: ["#8B4513", "#000000", "#F5F5DC"], sizes: ["S", "M", "L"], isNew: false, isSustainable: true, rating: 4.9, reviews: 67 },
                              { id: 12, name: "Cocktail Dress", category: "dresses", price: 389, oldPrice: null, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80", colors: ["#000000", "#FF0000", "#FFD700"], sizes: ["XS", "S", "M", "L"], isNew: true, isSustainable: false, rating: 4.8, reviews: 156 }
                    ];

                    let cart = [];
                    let wishlist = [];
                    let currentCategory = 'all';
                    let selectedProduct = null;
                    let selectedSize = null;
                    let selectedColor = null;

                    // Initialize
                    document.addEventListener('DOMContentLoaded', () => {
                              lucide.createIcons();
                              renderProducts();
                              initCursor();
                              initParallax();
                              initScrollAnimations();
                    });

                    // Render Products
                    function renderProducts(filter = 'all') {
                              const grid = document.getElementById('productsGrid');
                              let filtered = filter === 'all' ? products :
                                        filter === 'sustainable' ? products.filter(p => p.isSustainable) :
                                                  products.filter(p => p.category === filter);

                              // Update count
                              document.getElementById('showingCount').textContent = filtered.length;

                              grid.innerHTML = filtered.map((product, index) => `
                <div class="product-card group cursor-pointer" onclick="openProductModal(${product.id})" style="animation: fadeIn 0.6s ease-out ${index * 0.1}s both;">
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4">
                        <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover transition-transform duration-700">
                        
                        ${product.isNew ? `
                            <div class="absolute top-4 left-4 px-3 py-1 bg-fashion-black text-white text-xs font-bold rounded-full">YENİ</div>
                        ` : ''}
                        
                        ${product.isSustainable ? `
                            <div class="absolute top-4 right-4 w-8 h-8 sustainability-badge rounded-full flex items-center justify-center text-white" title="Eko-dost">
                                <i data-lucide="leaf" class="w-4 h-4"></i>
                            </div>
                        ` : ''}
                        
                        ${product.oldPrice ? `
                            <div class="absolute bottom-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</div>
                        ` : ''}
                        
                        <div class="quick-actions absolute bottom-0 left-0 right-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 flex gap-2">
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="flex-1 py-3 bg-fashion-black text-white rounded-full text-sm font-medium hover:bg-luxury-gold transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                                Səbətə At
                            </button>
                            <button onclick="event.stopPropagation(); toggleWishlistItem(${product.id})" class="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-rose hover:text-white transition-colors wishlist-btn ${wishlist.includes(product.id) ? 'active text-luxury-rose' : ''}">
                                <i data-lucide="heart" class="w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="space-y-1">
                        <div class="flex justify-between items-start">
                            <h3 class="font-medium text-sm md:text-base group-hover:text-luxury-gold transition-colors">${product.name}</h3>
                            <div class="flex items-center gap-1 text-xs">
                                <i data-lucide="star" class="w-3 h-3 fill-yellow-400 text-yellow-400"></i>
                                <span>${product.rating}</span>
                            </div>
                        </div>
                        <div class="flex items-baseline gap-2">
                            <span class="font-bold text-lg">${product.price} ₼</span>
                            ${product.oldPrice ? `<span class="text-sm text-gray-400 line-through">${product.oldPrice} ₼</span>` : ''}
                        </div>
                        <div class="flex gap-1 mt-2">
                            ${product.colors.map(color => `
                                <div class="w-4 h-4 rounded-full border border-gray-300" style="background-color: ${color}"></div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');

                              lucide.createIcons();
                    }

                    function filterCategory(category) {
                              currentCategory = category;
                              document.querySelectorAll('.filter-pill').forEach(btn => {
                                        btn.classList.toggle('active',
                                                  (category === 'all' && btn.textContent === 'Hamısı') ||
                                                  (category === 'dresses' && btn.textContent === 'Donlar') ||
                                                  (category === 'tops' && btn.textContent === 'Üst geyimlər') ||
                                                  (category === 'bottoms' && btn.textContent === 'Alt geyimlər') ||
                                                  (category === 'outerwear' && btn.textContent === 'Gödəkçələr') ||
                                                  (category === 'sustainable' && btn.textContent.includes('Eko'))
                                        );
                              });
                              renderProducts(category);
                    }

                    function sortProducts() {
                              const sort = document.getElementById('sortSelect').value;
                              let sorted = [...products];

                              switch (sort) {
                                        case 'price-low':
                                                  sorted.sort((a, b) => a.price - b.price);
                                                  break;
                                        case 'price-high':
                                                  sorted.sort((a, b) => b.price - a.price);
                                                  break;
                                        case 'popular':
                                                  sorted.sort((a, b) => b.reviews - a.reviews);
                                                  break;
                              }

                              // Re-render with sorted data
                              products.length = 0;
                              products.push(...sorted);
                              renderProducts(currentCategory);
                    }

                    function setGridView(cols) {
                              const grid = document.getElementById('productsGrid');
                              grid.className = `grid gap-4 md:gap-6 ${cols === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`;

                              document.getElementById('grid2').classList.toggle('bg-gray-100', cols === 2);
                              document.getElementById('grid4').classList.toggle('bg-gray-100', cols === 4);
                    }

                    // Product Modal
                    function openProductModal(productId) {
                              const product = products.find(p => p.id === productId);
                              selectedProduct = product;
                              selectedSize = null;
                              selectedColor = null;

                              const modal = document.getElementById('productModal');
                              const content = document.getElementById('productModalContent');
                              const body = document.getElementById('productModalBody');

                              body.innerHTML = `
                <div class="aspect-square md:aspect-auto md:h-full bg-gray-100 dark:bg-gray-800 relative">
                    <img src="${product.image}" class="w-full h-full object-cover">
                    ${product.isSustainable ? `
                        <div class="absolute top-6 left-6 sustainability-badge text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                            <i data-lucide="leaf" class="w-4 h-4"></i>
                            EKO-DOST
                        </div>
                    ` : ''}
                </div>
                
                <div class="p-8 md:p-12 flex flex-col">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-xs tracking-widest uppercase text-gray-500">${product.category}</span>
                        <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                        <div class="flex items-center gap-1 text-sm">
                            <i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                            <span class="font-medium">${product.rating}</span>
                            <span class="text-gray-500">(${product.reviews} rəy)</span>
                        </div>
                    </div>
                    
                    <h2 class="font-serif text-3xl md:text-4xl font-bold mb-4">${product.name}</h2>
                    
                    <div class="flex items-baseline gap-3 mb-6">
                        <span class="text-3xl font-bold">${product.price} ₼</span>
                        ${product.oldPrice ? `
                            <span class="text-xl text-gray-400 line-through">${product.oldPrice} ₼</span>
                            <span class="text-red-500 text-sm font-medium">-${Math.round((1 - product.price / product.oldPrice) * 100)}% ENDİRİM</span>
                        ` : ''}
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Premium keyfiyyətli, uzunömürlü parça. Hər detalı əl işi ilə hazırlanmış, müasil siluet. 
                        ${product.isSustainable ? '100% organik və sürdürülebilir materiallardan istehsal edilib.' : ''}
                    </p>
                    
                    <!-- Colors -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium mb-3">Rəng: <span id="selectedColorName" class="text-gray-500">Seçin</span></label>
                        <div class="flex gap-3">
                            ${product.colors.map((color, idx) => `
                                <button onclick="selectColor('${color}', this)" class="color-option w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 relative" style="background-color: ${color}">
                                    <div class="absolute inset-0 rounded-full border-2 border-transparent hover:border-fashion-black dark:hover:border-white transition-colors"></div>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Sizes -->
                    <div class="mb-8">
                        <div class="flex justify-between items-center mb-3">
                            <label class="text-sm font-medium">Ölçü</label>
                            <button class="text-xs text-luxury-gold underline">Ölçü cədvəli</button>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${product.sizes.map(size => `
                                <button onclick="selectSize('${size}', this)" class="size-btn w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-700 font-medium text-sm hover:border-fashion-black dark:hover:border-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex gap-4 mt-auto">
                        <button onclick="addToCartWithOptions()" id="addToCartBtn" class="flex-1 py-4 bg-fashion-black text-white rounded-full font-medium hover:bg-luxury-gold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                            Səbətə Əlavə Et
                        </button>
                        <button onclick="toggleWishlistItem(${product.id}); this.classList.toggle('text-luxury-rose')" class="w-14 h-14 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:border-luxury-rose transition-colors ${wishlist.includes(product.id) ? 'text-luxury-rose' : ''}">
                            <i data-lucide="heart" class="w-6 h-6 ${wishlist.includes(product.id) ? 'fill-current' : ''}"></i>
                        </button>
                    </div>
                    
                    <!-- Features -->
                    <div class="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-xs">
                        <div>
                            <i data-lucide="truck" class="w-5 h-5 mx-auto mb-2 text-gray-400"></i>
                            <span class="text-gray-500">Pulsuz çatdırılma</span>
                        </div>
                        <div>
                            <i data-lucide="refresh-cw" class="w-5 h-5 mx-auto mb-2 text-gray-400"></i>
                            <span class="text-gray-500">30 gün qaytarma</span>
                        </div>
                        <div>
                            <i data-lucide="shield-check" class="w-5 h-5 mx-auto mb-2 text-gray-400"></i>
                            <span class="text-gray-500">2 il zəmanət</span>
                        </div>
                    </div>
                </div>
            `;

                              modal.classList.remove('hidden');
                              modal.classList.add('flex');
                              setTimeout(() => {
                                        content.classList.remove('scale-95', 'opacity-0');
                                        content.classList.add('scale-100', 'opacity-100');
                              }, 10);

                              lucide.createIcons();
                    }

                    function closeProductModal() {
                              const modal = document.getElementById('productModal');
                              const content = document.getElementById('productModalContent');

                              content.classList.remove('scale-100', 'opacity-100');
                              content.classList.add('scale-95', 'opacity-0');

                              setTimeout(() => {
                                        modal.classList.add('hidden');
                                        modal.classList.remove('flex');
                              }, 300);
                    }

                    function selectColor(color, btn) {
                              selectedColor = color;
                              document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
                              btn.classList.add('active');
                              document.getElementById('selectedColorName').textContent = color;
                              checkSelection();
                    }

                    function selectSize(size, btn) {
                              selectedSize = size;
                              document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                              btn.classList.add('active');
                              checkSelection();
                    }

                    function checkSelection() {
                              const btn = document.getElementById('addToCartBtn');
                              if (selectedColor && selectedSize) {
                                        btn.disabled = false;
                              }
                    }

                    function addToCartWithOptions() {
                              if (!selectedProduct || !selectedSize || !selectedColor) return;

                              const cartItem = {
                                        ...selectedProduct,
                                        selectedSize,
                                        selectedColor,
                                        quantity: 1,
                                        cartId: Date.now()
                              };

                              cart.push(cartItem);
                              updateCartUI();
                              closeProductModal();
                              showNotification('Səbətə əlavə edildi', `${selectedProduct.name} - ${selectedSize}`);
                    }

                    function addToCart(productId) {
                              const product = products.find(p => p.id === productId);
                              const cartItem = {
                                        ...product,
                                        selectedSize: product.sizes[Math.floor(product.sizes.length / 2)],
                                        selectedColor: product.colors[0],
                                        quantity: 1,
                                        cartId: Date.now()
                              };
                              cart.push(cartItem);
                              updateCartUI();
                              showNotification('Səbətə əlavə edildi', product.name);
                    }

                    function removeFromCart(cartId) {
                              cart = cart.filter(item => item.cartId !== cartId);
                              updateCartUI();
                    }

                    function updateQuantity(cartId, change) {
                              const item = cart.find(i => i.cartId === cartId);
                              if (item) {
                                        item.quantity += change;
                                        if (item.quantity <= 0) {
                                                  removeFromCart(cartId);
                                        } else {
                                                  updateCartUI();
                                        }
                              }
                    }

                    function updateCartUI() {
                              const cartItems = document.getElementById('cartItems');
                              const cartBadge = document.getElementById('cartBadge');
                              const cartItemCount = document.getElementById('cartItemCount');
                              const subtotalEl = document.getElementById('cartSubtotal');
                              const shippingEl = document.getElementById('cartShipping');
                              const totalEl = document.getElementById('cartTotal');
                              const ecoDiscount = document.getElementById('ecoDiscount');

                              const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                              const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                              const hasEco = cart.some(item => item.isSustainable);
                              const ecoAmount = hasEco ? 15 : 0;
                              const shipping = subtotal > 200 ? 0 : 25;
                              const total = subtotal + shipping - ecoAmount;

                              cartBadge.textContent = totalItems;
                              cartBadge.style.opacity = totalItems > 0 ? '1' : '0';
                              cartItemCount.textContent = totalItems;
                              subtotalEl.textContent = `${subtotal} ₼`;
                              shippingEl.textContent = shipping === 0 ? 'Pulsuz' : `${shipping} ₼`;
                              totalEl.textContent = `${total} ₼`;

                              ecoDiscount.style.display = hasEco ? 'flex' : 'none';

                              if (cart.length === 0) {
                                        cartItems.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-gray-400">
                        <div class="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                            <i data-lucide="shopping-bag" class="w-10 h-10 opacity-30"></i>
                        </div>
                        <p>Səbətiniz boşdur</p>
                        <button onclick="toggleCart(); scrollToCollection()" class="mt-4 text-luxury-gold hover:underline font-medium">Alış-verişə başla</button>
                    </div>
                `;
                              } else {
                                        cartItems.innerHTML = cart.map(item => `
                    <div class="flex gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
                        <img src="${item.image}" class="w-20 h-24 object-cover rounded-lg">
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start">
                                <h4 class="font-medium truncate">${item.name}</h4>
                                <button onclick="removeFromCart(${item.cartId})" class="text-gray-400 hover:text-red-500 transition-colors">
                                    <i data-lucide="x" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <p class="text-sm text-gray-500 mt-1">${item.selectedSize} / ${item.selectedColor}</p>
                            <div class="flex justify-between items-center mt-3">
                                <div class="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-full px-3 py-1">
                                    <button onclick="updateQuantity(${item.cartId}, -1)" class="text-gray-500 hover:text-fashion-black">-</button>
                                    <span class="text-sm font-medium w-4 text-center">${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.cartId}, 1)" class="text-gray-500 hover:text-fashion-black">+</button>
                                </div>
                                <span class="font-bold">${item.price * item.quantity} ₼</span>
                            </div>
                        </div>
                    </div>
                `).join('');
                              }

                              lucide.createIcons();
                    }

                    function toggleCart() {
                              const drawer = document.getElementById('cartDrawer');
                              const overlay = document.getElementById('cartOverlay');

                              if (drawer.classList.contains('open')) {
                                        drawer.classList.remove('open');
                                        overlay.classList.add('hidden');
                                        overlay.classList.remove('opacity-100');
                              } else {
                                        drawer.classList.add('open');
                                        overlay.classList.remove('hidden');
                                        setTimeout(() => overlay.classList.add('opacity-100'), 10);
                              }
                    }

                    // Wishlist
                    function toggleWishlistItem(productId) {
                              const index = wishlist.indexOf(productId);
                              if (index > -1) {
                                        wishlist.splice(index, 1);
                                        showNotification('Seçilmişlərdən silindi', 'Məhsul favorilərinizdən çıxarıldı');
                              } else {
                                        wishlist.push(productId);
                                        showNotification('Seçilmişlərə əlavə edildi', 'Məhsul favorilərinizə əlavə edildi');
                              }
                              updateWishlistUI();
                              renderProducts(currentCategory);
                    }

                    function updateWishlistUI() {
                              const badge = document.getElementById('wishlistBadge');
                              badge.textContent = wishlist.length;
                              badge.style.opacity = wishlist.length > 0 ? '1' : '0';
                    }

                    function toggleWishlist() {
                              if (wishlist.length === 0) {
                                        showNotification('Boş siyahı', 'Hələ heç bir məhsul seçməmisiniz', 'info');
                                        return;
                              }
                              // Filter to show only wishlist items
                              const grid = document.getElementById('productsGrid');
                              const wishlistProducts = products.filter(p => wishlist.includes(p.id));
                              grid.innerHTML = wishlistProducts.map((product, index) => `
                <div class="product-card group cursor-pointer" onclick="openProductModal(${product.id})" style="animation: fadeIn 0.6s ease-out ${index * 0.1}s both;">
                    <!-- Same structure as renderProducts -->
                    <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4">
                        <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover transition-transform duration-700">
                        <div class="quick-actions absolute bottom-0 left-0 right-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 flex gap-2">
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="flex-1 py-3 bg-fashion-black text-white rounded-full text-sm font-medium hover:bg-luxury-gold transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                                Səbətə At
                            </button>
                            <button onclick="event.stopPropagation(); toggleWishlistItem(${product.id})" class="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-rose hover:text-white transition-colors text-luxury-rose">
                                <i data-lucide="heart" class="w-5 h-5 fill-current"></i>
                            </button>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h3 class="font-medium text-sm md:text-base group-hover:text-luxury-gold transition-colors">${product.name}</h3>
                        <div class="font-bold text-lg">${product.price} ₼</div>
                    </div>
                </div>
            `).join('');
                              lucide.createIcons();
                    }

                    // AI Stylist
                    function toggleAIStylist() {
                              const modal = document.getElementById('aiStylistModal');
                              const content = document.getElementById('aiStylistContent');

                              if (modal.classList.contains('hidden')) {
                                        modal.classList.remove('hidden');
                                        modal.classList.add('flex');
                                        setTimeout(() => {
                                                  content.classList.remove('scale-95', 'opacity-0');
                                                  content.classList.add('scale-100', 'opacity-100');
                                        }, 10);
                              } else {
                                        content.classList.remove('scale-100', 'opacity-100');
                                        content.classList.add('scale-95', 'opacity-0');
                                        setTimeout(() => {
                                                  modal.classList.add('hidden');
                                                  modal.classList.remove('flex');
                                        }, 300);
                              }
                    }

                    function quickAI(text) {
                              document.getElementById('aiInput').value = text;
                              sendAIMessage();
                    }

                    function sendAIMessage() {
                              const input = document.getElementById('aiInput');
                              const message = input.value.trim();
                              if (!message) return;

                              const chat = document.getElementById('aiChat');

                              // User message
                              chat.innerHTML += `
                <div class="flex gap-3 justify-end">
                    <div class="bg-fashion-black text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-[80%]">
                        ${message}
                    </div>
                    <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <i data-lucide="user" class="w-4 h-4"></i>
                    </div>
                </div>
            `;

                              input.value = '';
                              chat.scrollTop = chat.scrollHeight;

                              // AI Response simulation
                              setTimeout(() => {
                                        const responses = [
                                                  "Sizin üçün mükəmməl seçimlər tapdım! <b>Silk Summer Dress</b> və <b>Linen Wide Trousers</b> kombinasiyasını tövsiyə edirəm.",
                                                  "Bu mövsümün trendi oversized blazerlərdir. Siyah rəngdə mövcuddur.",
                                                  "Sizin büdcənizə uyğun 3 variant seçdim. İstəyirsiniz baxaq?",
                                                  "Eko-dost seçimlər üçün <b>Organic Cotton</b> kolleksiyamıza göz atın."
                                        ];
                                        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                                        chat.innerHTML += `
                    <div class="flex gap-3">
                        <div class="w-8 h-8 rounded-full try-on-bg flex items-center justify-center flex-shrink-0">
                            <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 text-sm max-w-[80%]">
                            ${randomResponse}
                        </div>
                    </div>
                `;
                                        chat.scrollTop = chat.scrollHeight;
                                        lucide.createIcons();
                              }, 1000);

                              lucide.createIcons();
                    }

                    // Utilities
                    function showNotification(title, text, type = 'success') {
                              const notif = document.getElementById('notification');
                              document.getElementById('notificationTitle').textContent = title;
                              document.getElementById('notificationText').textContent = text;

                              notif.classList.add('show');
                              setTimeout(() => notif.classList.remove('show'), 3000);
                    }

                    function toggleSearch() {
                              const overlay = document.getElementById('searchOverlay');
                              if (overlay.classList.contains('hidden')) {
                                        overlay.classList.remove('hidden');
                                        setTimeout(() => {
                                                  overlay.classList.remove('opacity-0');
                                                  document.getElementById('searchInput').focus();
                                        }, 10);
                              } else {
                                        overlay.classList.add('opacity-0');
                                        setTimeout(() => overlay.classList.add('hidden'), 300);
                              }
                    }

                    function quickSearch(term) {
                              document.getElementById('searchInput').value = term;
                              toggleSearch();
                              // Filter products based on search
                              const filtered = products.filter(p =>
                                        p.name.toLowerCase().includes(term.toLowerCase()) ||
                                        p.category.toLowerCase().includes(term.toLowerCase())
                              );
                              // Update grid with filtered results
                              const grid = document.getElementById('productsGrid');
                              grid.innerHTML = filtered.map((product, index) => `
                <!-- Same product card structure -->
            `).join('');
                    }

                    function toggleDarkMode() {
                              document.documentElement.classList.toggle('dark');
                    }

                    function toggleMobileMenu() {
                              showNotification('Mobil menyu', 'Mobil menyu açıldı');
                    }

                    function toggleFilters() {
                              showNotification('Filterlər', 'Ətraflı filter paneli açıldı');
                    }

                    function shopLook(id) {
                              showNotification('Set əlavə edildi', `Look ${id} səbətə əlavə edildi`);
                    }

                    function checkout() {
                              if (cart.length === 0) {
                                        showNotification('Xəta', 'Səbətiniz boşdur', 'error');
                                        return;
                              }
                              showNotification('Yönləndirilir', 'Ödəniş səhifəsinə keçirilir...');
                    }

                    function scrollToCollection() {
                              document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
                    }

                    // Cursor follower
                    function initCursor() {
                              const cursor = document.getElementById('cursor');
                              let mouseX = 0, mouseY = 0;
                              let cursorX = 0, cursorY = 0;

                              document.addEventListener('mousemove', (e) => {
                                        mouseX = e.clientX;
                                        mouseY = e.clientY;
                              });

                              function animate() {
                                        cursorX += (mouseX - cursorX) * 0.1;
                                        cursorY += (mouseY - cursorY) * 0.1;
                                        cursor.style.left = cursorX - 10 + 'px';
                                        cursor.style.top = cursorY - 10 + 'px';
                                        requestAnimationFrame(animate);
                              }
                              animate();

                              // Expand on interactive elements
                              document.querySelectorAll('button, a, .product-card').forEach(el => {
                                        el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
                                        el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
                              });
                    }

                    // Parallax
                    function initParallax() {
                              window.addEventListener('scroll', () => {
                                        const scrolled = window.pageYOffset;
                                        const parallax = document.querySelectorAll('.parallax-image');
                                        parallax.forEach(el => {
                                                  const speed = 0.5;
                                                  el.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
                                        });
                              });
                    }

                    // Scroll Animations
                    function initScrollAnimations() {
                              gsap.registerPlugin(ScrollTrigger);

                              // Navbar background
                              ScrollTrigger.create({
                                        start: 'top -100',
                                        onUpdate: (self) => {
                                                  const nav = document.getElementById('navbar');
                                                  if (self.direction === 1 && self.scroll() > 100) {
                                                            nav.classList.add('shadow-lg');
                                                  } else if (self.scroll() < 100) {
                                                            nav.classList.remove('shadow-lg');
                                                  }
                                        }
                              });

                              // Product cards stagger
                              gsap.from('.product-card', {
                                        scrollTrigger: {
                                                  trigger: '#productsGrid',
                                                  start: 'top 80%',
                                        },
                                        opacity: 0,
                                        y: 50,
                                        duration: 0.6,
                                        stagger: 0.1,
                                        ease: 'power3.out'
                              });
                    }

                    function loadMore() {
                              showNotification('Yüklənir', 'Daha çox məhsul yüklənir...');
                              setTimeout(() => {
                                        showNotification('Hazır', 'Bütün məhsullar göstərildi');
                              }, 1500);
                    }

                    // Add fade-in keyframes
                    const style = document.createElement('style');
                    style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
                    document.head.appendChild(style);