let titulo = document.querySelector("h1")
let lista1 = document.querySelector("ul")
let lista2 = document.querySelector("ol")
let link_a = document.querySelector("a")

titulo.innerText = `Manipulando com Inner´s`;

lista1.innerHTML = `
Tipos de Inne´s
<ul>
    <li>A</li>
    <li>B</li>
</ul>
`;

link_a.innerText = `Proz Educação`

lista2.innerHTML = `
Três ótimos canais para o aprendizado de HTML, CSS e JS:
<ol>
    <li><a href="https://www.youtube.com/@rafaellaballerini">Rafa Ballerini</a></li>
    <li><a href="https://www.youtube.com/@CursoemVideo">Curso em Vídeo</a></li>
    <li><a href="https://www.youtube.com/@canaldevclub">DevClub</a></li>
<ol>
`