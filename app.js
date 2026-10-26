const PRODUCTS = [
  // --- JABONES CON ESTROPAJO  ---
  {
    id: "avena-estropajo",
    title: "Jabón de Avena con Estropajo - El Jabón Suave",
    benefit: "Suaviza y nutre - Exfoliante delicado",
    tag: "Con Estropajo",
    category: "Estropajo",
    image: "img/avena-estropajo.jpeg",
    bullets: [
      "Ideal para piel sensible y delicada",
      "Avena que alimenta y deja piel de bebé",
      "Alivia picazón y protege la piel"
    ]
  },
  {
    id: "manzanilla-estropajo",
    title: "Jabón de Manzanilla con Estropajo - El Calmante",
    benefit: "Calma e ilumina - Suaviza y aclara",
    tag: "Con Estropajo",
    category: "Estropajo",
    image: "img/manzanilla-estropajo.jpeg",
    bullets: [
      "Alivia irritaciones y enrojecimiento",
      "Ilumina manchas y suaviza la piel",
      "Aroma relajante y anti-estrés"
    ]
  },
  {
    id: "patilla-estropajo",
    title: "Jabón de Patilla con Estropajo - El Dulce",
    benefit: "Hidrata y suaviza - Dulzura frutal",
    tag: "Con Estropajo",
    category: "Estropajo",
    image: "img/patilla-estropajo.jpeg",
    bullets: [
      "Nutre y suaviza piel reseca",
      "Antioxidante natural con vitaminas",
      "Aroma dulce a patilla fresca"
    ]
  },
  {
    id: "hierbabuena-estropajo",
    title: "Jabón de Hierbabuena con Estropajo - El Fresco",
    benefit: "Limpia poros - Exfoliante natural",
    tag: "Con Estropajo",
    category: "Estropajo",
    image: "img/hierbabuena-estropajo.jpeg",
    bullets: [
      "Quita piel muerta y puntos negros",
      "Activa circulación y disimula celulitis",
      "Refresca y neutraliza olores"
    ]
  },
  {
    id: "cafe-estropajo",
    title: "Jabón de Café con Estropajo - El del Gym",
    benefit: "Limpia poros - Exfoliante potente",
    tag: "Con Estropajo",
    category: "Estropajo",
    image: "img/cafe-estropajo.jpeg",
    bullets: [
      "Quita piel muerta y puntos negros",
      "Activa circulación y estira la piel",
      "Da energía y neutraliza olores"
    ]
  },
  // --- JABONES PARA MANOS (6 VARIACIONES) ---
  {
    id: "manos-rosas",
    title: "Jabón de Manos - Aroma Floral Dulce",
    benefit: "Suaviza e hidrata (Diseño Colgante)",
    tag: "Para Manos",
    category: "Manos",
    image: "img/manos-rosas.jpeg",
    bullets: [
      "Diseño colgante práctico para lavamanos",
      "Aroma floral dulce exclusivo",
      "100% artesanal y humectante"
    ]
  },
  {
    id: "manos-uvas",
    title: "Jabón de Manos - Aroma a Uvas",
    benefit: "Aroma dulce y alta hidratación",
    tag: "Para Manos",
    category: "Manos",
    image: "img/manos-uvas.jpeg",
    bullets: [
      "Formato colgante con cuerda rústica",
      "Aroma dulce a uvas frescas",
      "Suaviza e hidrata en cada lavado"
    ]
  },
  {
    id: "manos-cafe",
    title: "Jabón de Manos - Aroma a Café",
    benefit: "Neutraliza olores en la cocina",
    tag: "Para Manos",
    category: "Manos",
    image: "img/manos-cafe.jpeg",
    bullets: [
      "Ideal para lavamanos de cocina u oficina",
      "Exquisito aroma a café natural",
      "100% artesanal, no reseca la piel"
    ]
  },

  // --- OTRAS TRATAMIENTOS ESPECIALES (2 VARIACIONES) ---
  {
    id: "carbon-activado",
    title: "Jabón de Carbón Activado - Detox Profundo",
    benefit: "Desintoxicación y limpieza extrema",
    tag: "Exfoliante",
    category: "Exfoliante",
    image: "img/carbon-activado.jpeg",
    bullets: [
      "Limpia poros obstruidos a fondo",
      "Absorbe grasa e impurezas de la piel",
      "Sensación de frescura purificante"
    ]
  },
  // 1. Café (El Jabón del Gym)
  {
    id: "cafe-gym",
    title: "Jabón de Café - El Jabón del Gym",
    benefit: "Limpia poros y puntos negros - Exfoliante de verdad que levanta y estira la piel",
    tag: "Exfoliante",
    category: "Exfoliante",
    image: "img/cafe-gym.jpeg",
    bullets: [
      "Exfoliante potente: Quita piel muerta y puntos negros",
      "Activa circulación: Disimula celulitis y estira la piel",
      "Despierta y Anti-odor: Huele a café, da energía y neutraliza olores"
    ]
  },

  // 2. Flor de Jamaica
  {
    id: "jamaica",
    title: "Jabón de Flor de Jamaica - Antioxidante Reafirma",
    benefit: "Antioxidante que reafirma la piel",
    tag: "Reafirmante",
    category: "Regenerante",
    image: "img/jamaica.jpeg",
    bullets: [
      "Antioxidante",
      "Reafirma la piel",
      "Hidratación natural"
    ]
  },

  // 3. Arroz
  {
    id: "arroz",
    title: "Jabón de Arroz - Aclara y Unifica",
    benefit: "Aclara, suaviza y unifica el tono",
    tag: "Aclarante",
    category: "Aclarantes",
    image: "img/arroz.jpeg",
    bullets: [
      "Aclara manchas[cite: 14]",
      "Suaviza la piel[cite: 14]",
      "Unifica el tono[cite: 14]"
    ]
  },

  // 4. Zanahoria
  {
    id: "zanahoria",
    title: "Jabón de Zanahoria - Borra Estrías",
    benefit: "Regenera y difumina estrías",
    tag: "Regenerante",
    category: "Regenerante",
    image: "img/zanahoria.jpeg",
    bullets: [
      "Regenera la piel",
      "Difumina estrías",
      "Nutre profundamente"
    ]
  },

  // 5. Cúrcuma
  {
    id: "curcuma",
    title: "Jabón de Cúrcuma - Desinflama Manchas",
    benefit: "Desinflama y aclara manchitas",
    tag: "Aclarante",
    category: "Aclarantes",
    image: "img/curcuma.jpeg",
    bullets: [
      "Desinflama naturalmente",
      "Aclara manchas oscuras",
      "Piel más uniforme y radiante"
    ]
  },

  // 6. Caléndula y Romero
  {
    id: "calendula-romero",
    title: "Jabón de Caléndula y Romero - Cicatriza",
    benefit: "Cicatriza, repara y regenera",
    tag: "Regenerante",
    category: "Regenerante",
    image: "img/calendula-romero.jpeg",
    bullets: [
      "Cicatriza: Cierra heridas y calma irritación",
      "Repara: Restaura la barrera natural de la piel",
      "Regenera: Favorece la renovación celular"
    ]
  },

  // 7. Manzanilla
  {
    id: "manzanilla",
    title: "Jabón de Manzanilla - Calma",
    benefit: "Calma y suaviza piel sensible",
    tag: "Calmante",
    category: "Hidratacion",
    image: "img/manzanilla.jpeg",
    bullets: [
      "Calma la piel",
      "Suaviza sensibilidad",
      "Relajante natural"
    ]
  },

  // 8. Pepino y Aloe
  {
    id: "pepino-aloe",
    title: "Jabón de Pepino y Aloe - Refresca",
    benefit: "Refresca, hidrata y desinflama",
    tag: "Refrescante",
    category: "Hidratacion",
    image: "img/pepino-aloe.jpeg",
    bullets: [
      "Refresca: Sensación fresca y revitalizante",
      "Hidrata: Hidratación natural y profunda",
      "Calma: Reduce inflamación y enrojecimiento"
    ]
  },

];

let cart = {};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
});

function renderProducts(items) {
  const container = document.getElementById('productsGrid');
  container.innerHTML = items.map(p => `
    <div class="product-card" onclick="openProductModal('${p.id}')">
      <div class="product-image-container">
        <span class="product-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.title}" class="product-image">
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.title}</h3>
        <p class="product-benefit">${p.benefit}</p>
        <ul class="product-bullets">
          ${p.bullets.map(b => `<li><i class="fa-solid fa-sparkles"></i> ${b}</li>`).join('')}
        </ul>
        <div class="product-footer">
          <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.id}')">
            <i class="fa-solid fa-cart-plus"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (category === 'ALL') {
    renderProducts(PRODUCTS);
  } else {
    renderProducts(PRODUCTS.filter(p => p.category === category));
  }
}

/* --- FUNCIONES DEL MODAL DE DETALLE --- */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalProductTag').innerText = product.tag;
  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductTitle').innerText = product.title;
  document.getElementById('modalProductBenefit').innerText = product.benefit;
  
  const bulletsContainer = document.getElementById('modalProductBullets');
  bulletsContainer.innerHTML = product.bullets.map(b => `<li><i class="fa-solid fa-sparkles"></i> ${b}</li>`).join('');

  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(product.id);
    closeProductModal();
  };

  const modal = document.getElementById('productModal');
  modal.classList.remove('hidden');

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  };
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

/* --- CERRAR MODALES CON LA TECLA ESCAPE --- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeCartModal();
  }
});

/* --- FUNCIONES DEL CARRITO --- */
function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  updateCartUI();
  
  const product = PRODUCTS.find(p => p.id === productId);
  alert(`¡"${product.title}" agregado al pedido! 🌿`);
}

function updateQty(productId, delta) {
  if (cart[productId]) {
    cart[productId] += delta;
    if (cart[productId] <= 0) delete cart[productId];
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyMsg = document.getElementById('cartEmptyMessage');

  let totalItems = 0;
  const itemKeys = Object.keys(cart);

  if (itemKeys.length === 0) {
    emptyMsg.classList.remove('hidden');
    itemsContainer.innerHTML = '';
  } else {
    emptyMsg.classList.add('hidden');
    itemsContainer.innerHTML = itemKeys.map(id => {
      const product = PRODUCTS.find(p => p.id === id);
      const qty = cart[id];

      totalItems += qty;

      return `
        <div class="cart-item">
          <div>
            <div class="cart-item-title">${product.title}</div>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty('${id}', -1)">-</button>
            <span style="font-weight: 700; font-size: 0.85rem;">${qty}</span>
            <button class="qty-btn" onclick="updateQty('${id}', 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  badge.innerText = totalItems;
}

function sendOrderToWhatsApp() {
  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) {
    alert("Agrega al menos un jabón a tu pedido.");
    return;
  }

  const name = document.getElementById('custName').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes').value.trim();

  if (!name || !city) {
    alert("Ingresa tu Nombre y Ciudad para coordinar el envío.");
    return;
  }

  let itemsText = "";

  itemKeys.forEach(id => {
    const p = PRODUCTS.find(prod => prod.id === id);
    const qty = cart[id];
    itemsText += `• *${qty}x* ${p.title}\n`;
  });

  const message = ` *NUEVO PEDIDO - AMBAR LUXURY* \n\n` +
                  ` *Cliente:* ${name}\n` +
                  ` *Ciudad:* ${city}\n` +
                  (address ? ` *Dirección:* ${address}\n` : '') +
                  (notes ? ` *Notas:* ${notes}\n` : '') +
                  `\n *Detalle del pedido:*\n${itemsText}\n` +
                  `¡Hola! Quisiera confirmar disponibilidad y precios de estos productos. `;

  const phone = "573159483123";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function openCartModal() {
  document.getElementById('cartModal').classList.remove('hidden');
}

function closeCartModal() {
  document.getElementById('cartModal').classList.add('hidden');
}