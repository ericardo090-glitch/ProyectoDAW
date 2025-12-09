// --- Modo oscuro ---
const btn = document.getElementById("modoBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// --- Validación del formulario ---
const form = document.getElementById("contactForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        resultado.textContent = "Todos los campos son obligatorios.";
        resultado.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        resultado.textContent = "El email no es válido.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "Mensaje enviado correctamente ✔";
    resultado.style.color = "green";

    form.reset();
});
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let index = 0;

/* Crear puntos */
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => goToSlide(i));
});

const dots = document.querySelectorAll('.dots span');

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

/* Automático cada 5s */
setInterval(nextSlide, 5000);

