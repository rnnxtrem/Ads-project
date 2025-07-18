document.addEventListener("DOMContentLoaded", () => {
  const linkList = document.getElementById("link-list");
  fetch("links.json")
    .then((res) => res.json())
    .then((data) => {
      data.links.forEach(link => {
        const div = document.createElement("div");
        div.textContent = `Link: ${link.url} | Cliques: ${link.cliques}`;
        linkList.appendChild(div);
      });
    });
});
