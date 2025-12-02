const navLinks = document.getElementById("nav-links");
const user = JSON.parse(localStorage.getItem("user"));

navLinks.innerHTML = `
    <li><a href="/">OtakuList</a></li>
`;

if (!user) {
    // Visitante - sem login
    navLinks.innerHTML += `
        <li><a href="/">Início</a></li>
        <li><a href="/animes">Animes</a></li>
        <li><a href="/login">Entrar</a></li>
        <li><a href="/cadastro">Cadastrar</a></li>
    `;
} else {
    // Usuário logado
    navLinks.innerHTML += `
        <li><a href="/">Início</a></li>
        <li><a href="/animes">Animes</a></li>
        <li><a href="/minha-lista">Minha Lista</a></li>
        <li><a href="/perfil">Perfil</a></li>
        <li><a href="#" id="logout-btn">Sair</a></li>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    });
}
