function gerarLink() {
  const input = document.getElementById("urlInput").value;
  const novoLink = `https://seusite.com/ads?target=${btoa(input)}`;
  document.getElementById("linkGerado").innerHTML = 
    '<p>Link Gerado:</p><a href="' + novoLink + '" target="_blank">' + novoLink + '</a>';
}
