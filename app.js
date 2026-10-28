// BASE DE DATOS DE PRODUCTOS CON PRECIOS
const products = [
  // --- JABONES CON ESTROPAJO ---
  {
    id: "avena-estropajo",
    title: "Jabón de Avena con Estropajo - El Jabón Suave",
    price: 10800,
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
    price: 10800,
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
    price: 10800,
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
    price: 10800,
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
    price: 11800,
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

  // --- JABONES PARA MANOS ---
  {
    id: "manos-rosas",
    title: "Jabón de Manos - Aroma Floral Dulce",
    price: 15000,
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
    price: 20000,
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
    price: 15000,
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

  // --- TRATAMIENTOS ESPECIALES / LÍNEA ESTÁNDAR ---
  {
    id: "carbon-activado",
    title: "Jabón de Carbón Activado - Detox Profundo",
    price: 10000,
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
  {
    id: "cafe-gym",
    title: "Jabón de Café - El Jabón del Gym",
    price: 11000,
    benefit: "Limpia poros y puntos negros - Exfoliante de verdad",
    tag: "Exfoliante",
    category: "Exfoliante",
    image: "img/cafe-gym.jpeg",
    bullets: [
      "Exfoliante potente: Quita piel muerta y puntos negros",
      "Activa circulación: Disimula celulitis y estira la piel",
      "Despierta y Anti-odor: Huele a café y neutraliza olores"
    ]
  },
  {
    id: "jamaica",
    title: "Jabón de Flor de Jamaica - Antioxidante Reafirma",
    price: 10000,
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
  {
    id: "arroz",
    title: "Jabón de Arroz - Aclara y Unifica",
    price: 10000,
    benefit: "Aclara, suaviza y unifica el tono",
    tag: "Aclarante",
    category: "Aclarantes",
    image: "img/arroz.jpeg",
    bullets: [
      "Aclara manchas",
      "Suaviza la piel",
      "Unifica el tono"
    ]
  },
  {
    id: "zanahoria",
    title: "Jabón de Zanahoria - Borra Estrías",
    price: 10000,
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
  {
    id: "curcuma",
    title: "Jabón de Cúrcuma - Desinflama Manchas",
    price: 10000,
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
  {
    id: "calendula-romero",
    title: "Jabón de Caléndula y Romero - Cicatriza",
    price: 10000,
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
  {
    id: "manzanilla",
    title: "Jabón de Manzanilla - Calma",
    price: 10000,
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
  {
    id: "pepino-aloe",
    title: "Jabón de Pepino y Aloe - Refresca",
    price: 10000,
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
  // --- NUEVOS JABONES COLECCIÓN PANAL ---
  {
    id: "jabon-avena-panal",
    title: "Jabón de Avena - El Jabón Exfoliante Suave",
    price: 9000,
    benefit: "Exfolia suave y nutre - Avena que limpia sin resecar y deja piel suavecito",
    tag: "Exfoliante Suave",
    category: "Hidratacion",
    image: "img/jabon-avena-panal.jpeg",
    bullets: [
      "Exfoliante Suave: Quita células muertas sin irritar",
      "Piel Suave: Deja piel de bebé",
      "Nutritivo: Hidrata y calma"
    ]
  },
  {
    id: "jabon-jengibre-curcuma",
    title: "Jabón de Jengibre y Cúrcuma - El Jabón Antinflamatorio",
    price: 9000,
    benefit: "Desinflama y energiza - Cúrcuma que borra manchas y revive piel",
    tag: "Antinflamatorio",
    category: "Aclarantes",
    image: "img/jabon-jengibre-curcuma.jpeg",
    bullets: [
      "Antiinflamatorio: Desinflama y calma",
      "Aclara Manchas: Borra manchas oscuras",
      "Energizante: Activa circulación"
    ]
  },
  {
    id: "jabon-carbon-activado",
    title: "Jabón de Carbón Activado - El Jabón Detox",
    price: 9000,
    benefit: "Detox, purificante y desintoxicante - Carbón que limpia profundo y quita puntos negros",
    tag: "Detox",
    category: "Exfoliante",
    image: "img/jabon-carbon-activado.jpeg",
    bullets: [
      "Detox Profundo: Limpia poros y quita puntos negros",
      "Purificante: Quita grasa y toxinas",
      "Piel Limpia: Piel limpia y matificada"
    ]
  },
  {
    id: "jabon-zanahoria-aloe",
    title: "Jabón de Zanahoria y Aloe Vera - El Jabón Bronceador",
    price: 9000,
    benefit: "Broncea natural y regenera - Zanahoria que da color y aloe que repara",
    tag: "Bronceador",
    category: "Regenerante",
    image: "img/jabon-zanahoria-aloe.jpeg",
    bullets: [
      "Bronceado Natural: Da tono dorado natural",
      "Regenerador: Repara piel con aloe",
      "Vitamina A: Nutre y protege"
    ]
  },
  {
    id: "jabon-rosas",
    title: "Jabón de Rosas - El Jabón del Amor",
    price: 9000,
    benefit: "Romántico, suave y perfumado - Rosas que hidratan y dejan piel de pétalo",
    tag: "Romántico",
    category: "Hidratacion",
    image: "img/jabon-rosas.jpeg",
    bullets: [
      "Piel de Pétalo: Suaviza y perfuma",
      "Romántico: Aroma delicado que enamora",
      "Hidratante Floral: Hidrata con amor"
    ]
  },
  {
    id: "jabon-flor-jamaica",
    title: "Jabón de Flor de Jamaica - El Jabón Antioxidante",
    price: 9000,
    benefit: "Antioxidante, rejuvenecedor y tonificante - Jamaica que tonifica y rejuvenece",
    tag: "Antioxidante",
    category: "Regenerante",
    image: "img/jabon-flor-jamaica.jpeg",
    bullets: [
      "Antioxidante: Rejuvenece y tonifica",
      "Astringente Natural: Cierra poros y tonifica",
      "Piel Radiante: Ilumina natural"
    ]
  },
  {
    id: "jabon-pepino-aloe",
    title: "Jabón de Pepino y Aloe Vera - El Jabón Refrescante",
    price: 9000,
    benefit: "Refresca, hidrata y calma - Pepino que desinflama y aloe que cicatriza",
    tag: "Refrescante",
    category: "Hidratacion",
    image: "img/jabon-pepino-aloe.jpeg",
    bullets: [
      "Refrescante: Refresca y desinflama",
      "Hidratante: Hidrata profundo",
      "Calmante: Calma irritación"
    ]
  },
  {
    id: "jabon-arroz",
    title: "Jabón de Arroz - El Jabón Aclarante Natural",
    price: 9000,
    benefit: "Aclara manchas y unifica tono - Arroz que ilumina y deja piel porcelana",
    tag: "Aclarante",
    category: "Aclarantes",
    image: "img/jabon-arroz.jpeg",
    bullets: [
      "Aclara Manchas: Borra manchas y unifica",
      "Piel Porcelana: Deja piel luminosa",
      "Suavizante: Suaviza y nutre"
    ]
  },
  {
    id: "jabon-calendula-romero",
    title: "Jabón de Caléndula y Romero - El Jabón Sanador",
    price: 9000,
    benefit: "Sanador, calmante y regenerador - Caléndula y romero que cura y regenera",
    tag: "Sanador",
    category: "Regenerante",
    image: "img/jabon-calendula-romero.jpeg",
    bullets: [
      "Sanador: Calma irritación y regenera",
      "Antiinflamatorio: Romero que desinflama",
      "Piel Renovada: Regenera piel dañada"
    ]
  },
  {
    id: "jabon-hierbabuena",
    title: "Jabón de Hierbabuena - El Jabón Mentolado",
    price: 9000,
    benefit: "Refrescante, mentolado y energizante - Hierbabuena que refresca y despierta",
    tag: "Mentolado",
    category: "Hidratacion",
    image: "img/jabon-hierbabuena.jpeg",
    bullets: [
      "Refrescante Intenso: Frescura que despierta",
      "Descongestion: Abre poros y limpia",
      "Energizante: Activa y revitaliza"
    ]
  },
  // --- NUEVA COLECCIÓN GIRASOL (AMBAR LUXURY) ---
  {
    id: "girasol-carbon-activado",
    title: "Jabón de Carbón Activado - El Jabón Detox",
    price: 10000,
    benefit: "Detox, purificante y revitalizante - Carbón activado que limpia y purifica",
    tag: "Girasol Detox",
    category: "Exfoliante",
    image: "img/girasol-carbon-activado.jpeg",
    bullets: [
      "Detox: Elimina impurezas y toxinas",
      "Purificante: Controla el exceso de grasa",
      "Piel Purificada: Purifica y equilibra la piel"
    ]
  },
  {
    id: "girasol-flor-jamaica",
    title: "Jabón de Flor de Jamaica - El Jabón Antioxidante",
    price: 10000,
    benefit: "Antioxidante, rejuvenecedor y reparador - Flor de Jamaica que protege y revitaliza",
    tag: "Girasol Antioxidante",
    category: "Regenerante",
    image: "img/girasol-flor-jamaica.jpeg",
    bullets: [
      "Antioxidante: Combate radicales libres y protege",
      "Rejuvenecedor: Revitaliza y mejora elasticidad",
      "Piel Radiante: Ilumina y unifica el tono"
    ]
  },
  {
    id: "girasol-calendula-romero",
    title: "Jabón de Caléndula y Romero - El Jabón Sanador",
    price: 10000,
    benefit: "Sanador, calmante y regenerador - Caléndula y romero que cura y regenera",
    tag: "Girasol Sanador",
    category: "Regenerante",
    image: "img/girasol-calendula-romero.jpeg",
    bullets: [
      "Sanador: Calma irritación y regenera",
      "Antiinflamatorio: Romero que desinflama",
      "Piel Renovada: Regenera piel dañada"
    ]
  },
  {
    id: "girasol-patilla",
    title: "Jabón de Patilla - El Jabón Hidratante",
    price: 10000,
    benefit: "Hidratante, refrescante y nutritivo - Patilla que hidrata y renueva",
    tag: "Girasol Hidratante",
    category: "Hidratacion",
    image: "img/girasol-patilla.jpeg",
    bullets: [
      "Hidratante: Hidrata profundamente y refresca",
      "Nutritivo: Patilla rica en vitaminas",
      "Piel Suave: Suaviza y rejuvenece la piel"
    ]
  },
  {
    id: "girasol-hierbabuena",
    title: "Jabón de Hierbabuena - El Jabón Mentolado",
    price: 10000,
    benefit: "Refrescante, aliviante y purificante - Hierbabuena que refresca y revitaliza",
    tag: "Girasol Mentolado",
    category: "Hidratacion",
    image: "img/girasol-hierbabuena.jpeg",
    bullets: [
      "Refrescante: Alivia y refresca",
      "Mentolado: Efecto frío natural",
      "Piel Equilibrada: Purifica y equilibra la grasa"
    ]
  },
  {
    id: "girasol-pepino-aloe",
    title: "Jabón de Pepino y Aloe Vera - El Jabón Refrescante",
    price: 10000,
    benefit: "Refrescante, hidratante y purificante - Pepino y aloe vera que calma e hidrata",
    tag: "Girasol Refrescante",
    category: "Hidratacion",
    image: "img/girasol-pepino-aloe.jpeg",
    bullets: [
      "Refrescante: Calma y refresca la piel",
      "Antiinflamatorio: Aloe que desinflama",
      "Piel Hidratada: Hidratación profunda"
    ]
  },
  {
    id: "girasol-zanahoria-aloe",
    title: "Jabón de Zanahoria y Aloe Vera - El Jabón Bronceador",
    price: 10000,
    benefit: "Bronceador, hidratante y nutritivo - Zanahoria y aloe vera que broncea y nutre",
    tag: "Girasol Bronceador",
    category: "Regenerante",
    image: "img/girasol-zanahoria-aloe.jpeg",
    bullets: [
      "Bronceador: Aporta bronceado natural y luminoso",
      "Hidratante: Aloe vera que hidrata y calma",
      "Piel Nutritida: Nutre y suaviza la piel"
    ]
  },
  {
    id: "girasol-avena-miel",
    title: "Jabón de Avena y Miel - El Jabón Exfoliante Suave",
    price: 10000,
    benefit: "Exfoliante, calmante y nutritivo - Avena y miel que suavizan y nutren",
    tag: "Girasol Exfoliante",
    category: "Hidratacion",
    image: "img/girasol-avena-miel.jpeg",
    bullets: [
      "Exfoliante Suave: Elimina células muertas suavemente",
      "Piel Suave: Deja la piel suave y sedosa",
      "Nutritivo: Miel que nutre e hidrata"
    ]
  },
  {
    id: "girasol-jengibre-curcuma",
    title: "Jabón de Jengibre y Cúrcuma - El Jabón Antinflamatorio",
    price: 10000,
    benefit: "Antiinflamatorio, calmante y revitalizante - Jengibre y cúrcuma que alivia y revitaliza",
    tag: "Girasol Antinflamatorio",
    category: "Aclarantes",
    image: "img/girasol-jengibre-curcuma.jpeg",
    bullets: [
      "Antiinflamatorio: Reduce inflamación y dolor",
      "Calmante: Calma piel sensible e irritada",
      "Revitaliza piel: Revitaliza y aporta luminosidad"
    ]
  },
  {
    id: "girasol-rosas",
    title: "Jabón de Rosas - El Jabón del Amor",
    price: 10000,
    benefit: "Romántico, hidratante y reparador - Rosas que enamoran y revitalizan",
    tag: "Girasol Romántico",
    category: "Hidratacion",
    image: "img/girasol-rosas.jpeg",
    bullets: [
      "Hidratante: Hidrata profundamente y suaviza",
      "Antiestrés: Aroma de rosas que relaja",
      "Piel Suave: Renueva y da luminosidad"
    ]
  },
  {
    id: "girasol-carbon-activado-bicolor",
    title: "Jabón de Carbón Activado - El Jabón Detox",
    price: 10000,
    benefit: "Purifica y desintoxica - Carbón activado que elimina impurezas y toxinas",
    tag: "Girasol Detox",
    category: "Exfoliante",
    image: "img/girasol-carbon-activado-bicolor.jpeg",
    bullets: [
      "Detox Profundo: Elimina impurezas y purifica",
      "Purificante: Controla grasa y limpia poros",
      "Piel Purificada: Suaviza y equilibra"
    ]
  },
  {
    id: "girasol-patilla-burbujas",
    title: "Jabón de Patilla - El Jabón Hidratante",
    price: 10000,
    benefit: "Hidrata, refresca y nutre - Patilla jugosa que suaviza y revitaliza",
    tag: "Girasol Hidratante",
    category: "Hidratacion",
    image: "img/girasol-patilla-burbujas.jpeg",
    bullets: [
      "Hidratante: Hidrata profundamente y refresca",
      "Nutritivo: Patilla rica en vitaminas que nutre",
      "Piel Suave: Suaviza y rejuvenece"
    ]
  },
  {
    id: "girasol-limon",
    title: "Jabón de Limón - El Jabón Aclarante",
    price: 10000,
    benefit: "Aclara, purifica y tonifica - Limón fresco que ilumina y limpia",
    tag: "Girasol Aclarante",
    category: "Aclarantes",
    image: "img/girasol-limon.jpeg",
    bullets: [
      "Aclarante Natural: Aclara manchas y unifica tono[cite: 27]",
      "Purificante: Controla grasa y limpia poros[cite: 27]",
      "Piel Luminosa: Ilumina y refresca[cite: 27]"
    ]
  },
  {
    id: "panal-limon",
    title: "Jabón de Limón - El Jabón Aclarante",
    price: 10000,
    benefit: "Aclara, purifica y tonifica - Limón fresco que ilumina y limpia",
    tag: "Panal Aclarante",
    category: "Aclarantes",
    image: "img/panal-limon.jpeg",
    bullets: [
      "Aclarante Natural: Aclara manchas y unifica tono[cite: 28]",
      "Purificante: Controla grasa y limpia poros[cite: 28]",
      "Piel Luminosa: Ilumina y refresca[cite: 28]"
    ]
  },
  {
    id: "masajeador-rosas",
    title: "Jabón de Rosas - El Jabón Romántico",
    price: 10000,
    benefit: "Suaviza, tonifica y perfuma - Rosas que embellecen y relajan",
    tag: "Masajeador Romántico",
    category: "Hidratacion",
    image: "img/masajeador-rosas.jpeg",
    bullets: [
      "Hidratante Natural: Hidrata profundamente y nutre",
      "Tonificante: Tonifica la piel y mejora la circulación",
      "Piel Sedosa: Suaviza y deja la piel sedosa y perfumada"
    ]
  }
];

// ESTADO DEL CARRITO
let cart = [];
let activeProduct = null;

// INICIALIZAR APP
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});

// FORMATO DE MONEDA
function formatCOP(amount) {
  return `$${amount.toLocaleString('es-CO')} COP`;
}

// RENDERIZAR PRODUCTOS
function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = items.map(p => `
    <div class="product-card" onclick="openProductModal('${p.id}')">
      <div class="card-img-container">
        <span class="product-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.title}" class="product-img">
      </div>
      <div class="card-content">
        <h3 class="product-title">${p.title}</h3>
        <p class="product-benefit">${p.benefit}</p>
        <div class="card-footer">
          <span class="price-tag">${formatCOP(p.price)}</span>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart('${p.id}')">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// FILTRAR PRODUCTOS
function filterProducts(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  if (category === 'ALL') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

// ABRIR MODAL DE PRODUCTO
function openProductModal(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  activeProduct = p;

  document.getElementById('modalProductTag').innerText = p.tag;
  document.getElementById('modalProductImg').src = p.image;
  document.getElementById('modalProductTitle').innerText = p.title;
  document.getElementById('modalProductBenefit').innerText = p.benefit;
  document.getElementById('modalProductPrice').innerText = formatCOP(p.price);

  const bulletsList = document.getElementById('modalProductBullets');
  bulletsList.innerHTML = p.bullets.map(b => `<li><i class="fa-solid fa-check"></i> ${b}</li>`).join('');

  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(p.id);
    closeProductModal();
  };

  document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// MANEJO DEL CARRITO
function addToCart(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...p, quantity: 1 });
  }

  updateCartUI();
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadge');
  const cartList = document.getElementById('cartItemsList');
  const cartSummary = document.getElementById('cartSummary');
  const cartEmpty = document.getElementById('cartEmptyMessage');
  const totalPriceElem = document.getElementById('cartTotalPrice');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.innerText = totalItems;

  let total = 0;

  if (cart.length === 0) {
    cartEmpty.classList.remove('hidden');
    cartSummary.classList.add('hidden');
    cartList.innerHTML = '';
  } else {
    cartEmpty.classList.add('hidden');
    cartSummary.classList.remove('hidden');

    cartList.innerHTML = cart.map(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <p>${formatCOP(item.price)} x ${item.quantity} = <strong>${formatCOP(subtotal)}</strong></p>
          </div>
          <div class="cart-item-controls">
            <button onclick="changeQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      `;
    }).join('');

    totalPriceElem.innerText = formatCOP(total);
  }
}

function openCartModal() {
  updateCartUI();
  document.getElementById('cartModal').classList.remove('hidden');
}

function closeCartModal() {
  document.getElementById('cartModal').classList.add('hidden');
}

// ENVIAR A WHATSAPP
function sendOrderToWhatsApp() {
  const name = document.getElementById('custName').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes').value.trim();

  if (cart.length === 0) {
    alert('Tu pedido está vacío. Agrega al menos un jabón.');
    return;
  }

  if (!name || !city) {
    alert('Por favor completa tu Nombre y Ciudad para realizar el pedido.');
    return;
  }

  let total = 0;
  let text = ` *NUEVO PEDIDO - AMBAR LUXURY* \n\n`;
  text += ` *Cliente:* ${name}\n`;
  text += ` *Ciudad:* ${city}\n`;
  if (address) text += ` *Dirección:* ${address}\n`;
  if (notes) text += ` *Notas:* ${notes}\n`;
  text += `\n *DETALLE DEL PEDIDO:* \n`;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    text += `• ${item.title} (x${item.quantity}) - $${subtotal.toLocaleString('es-CO')} COP\n`;
  });

  text += `\n *TOTAL A PAGAR:* $${total.toLocaleString('es-CO')} COP`;

  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/573159483123?text=${encodedText}`, '_blank');
}