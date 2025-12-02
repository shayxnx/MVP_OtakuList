//  Verifica se o login foi efetivado
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
    window.location.href = "/login";
}

// Preenche o perfil com os dados vindos do backend
document.getElementById("user-name").textContent = user.nome;
document.getElementById("user-username").textContent = "@" + user.username;
document.getElementById("user-avatar").src = user.avatar || "/static/img/avatar.jpg";

document.getElementById("stat-total").textContent = user.total || 0;
document.getElementById("stat-watching").textContent = user.watching || 0;
document.getElementById("stat-completed").textContent = user.completed || 0;
document.getElementById("stat-dropped").textContent = user.dropped || 0;
