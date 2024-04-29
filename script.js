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
As cinco vantagens de se aprender JS:
<ol>
    <li>um</li>
    <li>dois</li>
    <li>três</li>
    <li>quatro</li>
    <li>cinco</li>
<ol>
`