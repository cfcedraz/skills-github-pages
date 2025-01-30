// Seleciona elementos
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const form = document.getElementById("form-presente");
const botoesEscolher = document.querySelectorAll(".escolher-btn");

// Abre o modal ao clicar em "Escolher"
botoesEscolher.forEach((botao) => {
    botao.addEventListener("click", () => {
        modal.style.display = "flex";
        const item = botao.parentElement.getAttribute("data-item");
        form.setAttribute("data-item", item);
    });
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Processa o formulário
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const item = form.getAttribute("data-item");

    // Aqui você pode enviar os dados para um servidor ou salvar localmente
    console.log(`Item: ${item}, Nome: ${nome}, E-mail: ${email}`);

    // Remove o item da lista
    const itemEscolhido = document.querySelector(`li[data-item="${item}"]`);
    if (itemEscolhido) {
        itemEscolhido.remove();
    }

    // Fecha o modal e limpa o formulário
    modal.style.display = "none";
    form.reset();
});