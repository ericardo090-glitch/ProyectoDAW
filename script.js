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
