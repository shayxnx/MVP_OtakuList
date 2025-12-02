const cadastroForm = document.getElementById("cadastroForm");
const cadastroErro = document.getElementById("cadastro-erro");

cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulação de cadastro (backend fará isso de verdade)
    const newUser = {
        nome,
        username,
        email,
        avatar: "/static/img/avatar.jpg",
        total: 0,
        watching: 0,
        completed: 0,
        dropped: 0
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    window.location.href = "/perfil";
});
