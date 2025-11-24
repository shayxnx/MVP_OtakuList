document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBar");
    const list = document.getElementById("animeList");

    if (!searchInput || !list) return;

    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();
        const items = list.querySelectorAll(".anime-item");

        items.forEach(item => {
            const title = item.querySelector(".anime-title").textContent.toLowerCase();

            item.style.display = title.includes(value) ? "block" : "none";
        });
    });
});
