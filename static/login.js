const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("login-error");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Simulando resposta do backend (substituir depois pelo fetch real)
    const fakeUser = {
        nome: "Usuário Teste",
        username: "usuario123",
        email,
        avatar: "/static/img/avatar.jpg",
        total: 10,
        watching: 2,
        completed: 7,
        dropped: 1
    };

    // LOGIN SIMPLES (substituir pelo backend real)
    if (email === "teste@teste.com" && senha === "123") {
        localStorage.setItem("user", JSON.stringify(fakeUser));
        window.location.href = "/perfil";
    } else {
        errorMsg.textContent = "Email ou senha incorretos!";
    }
});
