# EXPLICAÇÕES SOBRE O DOM (Document Object Model)
==============================================================

## O QUE É:
Ele é uma **representação da página HTML** como uma árvore de objetos, onde cada elemento do HTML é um nó (node) que você pode acessar e manipular com JavaScript.

HTML:
```HTML 
<div id="container">
  <h1>Hello</h1>
  <p>Este é um parágrafo.</p>
</div>
```

DOM (simplificado):

```HTML
document
 └─ html
     └─ body
         └─ div#container
             ├─ h1
             └─ p
```

# SELECIONANDO ELEMENTOS NO DOM
==============================================================

Visão rápida antes de começar
## MÉTODOS NATIVOS:

- document.getElementById(id)
- document.getElementsByClassName(className)
- document.getElementsByTagName(tagName)
- document.getElementsByName(name)
- document.querySelector(selector)
- document.querySelectorAll(selector)

querySelector usa gramática de seletores CSS (muito flexível).

Alguns retornos são live (se atualizam quando DOM muda) e outros são static (são “fotografias” naquele momento). Isso muda como você deve iterar/remover elementos.

### 1) Selecionar por tag name
```JS
const paragrafos = document.getElementsByTagName('p'); 
```
O que retorna:
HTMLCollection (array-like) — live: se o DOM mudar (adicionar/remover <p>), a collection é atualizada automaticamente.

### 2) Selecionar por ID
```JS
const cabecalho = document.getElementById('meu-id'); 
```
O que retorna:
Um Element (o elemento) ou null se não existir.

Propriedades importantes:
- IDs devem ser únicos dentro do documento (boa prática/semântica).
- getElementById é tradicionalmente o mais rápido (otimizado pelos browsers).

### 3) Selecionar por classe
```JS
const cards = document.getElementsByClassName('card'); // HTMLCollection (live)
```

O que retorna:
HTMLCollection (array-like) e live — muda quando elementos são adicionados/removidos/classList alteradas.

### 4) querySelector e querySelectorAll (o poder dos seletores CSS)
```JS
const primeiro = document.querySelector('.menu');
const todos = document.querySelectorAll('.card .titulo');
```

- querySelector → retorna o primeiro elemento que combina ou null.
- querySelectorAll → retorna NodeList (static) com todos os matches (não live).

O método querySelector() utiliza a mesma sintaxe dos seletores CSS, o que significa que você deve usar # para IDs, . para classes e o nome da tag para elementos. Por exemplo: document.querySelector('#titulo') seleciona um elemento com ID “titulo”, document.querySelector('.botao') seleciona o elemento com classe “botao” e document.querySelector('p') seleciona o primeiro parágrafo. Essa sintaxe torna o método intuitivo e muito flexível, permitindo inclusive o uso de seletores compostos, como em CSS.

# SELETORES E PROPRIEDADES DE FILHOS NO DOM
==============================================================

No DOM, além de selecionar elementos diretamente, podemos **navegar pela hierarquia da árvore** usando propriedades como **firstChild**, **lastChild**, **children**, **parentNode**, etc.

### FirstChild

- Retorna o primeiro nó filho de um elemento.
- Importante: nó (node) pode ser um elemento, texto ou comentário.
- Se você quiser apenas elementos HTML, use firstElementChild.

#### Exemplo:
```JS
const container = document.getElementById('container');

console.log(container.firstChild); // pode retornar um texto ou o <h1>
console.log(container.firstElementChild); // garante que seja o <h1>
```
--------------------------------------------------------------

### LastChild

- Retorna o último nó filho de um elemento.
- Assim como firstChild, pode ser um texto ou elemento.
- Para garantir que seja um elemento HTML, use lastElementChild.

#### Exemplo:
```JS
console.log(container.lastChild); // pode retornar o texto do <p>
console.log(container.lastElementChild); // garante que seja o <p>
```
--------------------------------------------------------------

### children

- Retorna uma coleção de todos os elementos filhos (HTMLCollection).
- Não inclui text nodes ou comentários, apenas elementos HTML.

#### Exemplo:
```JS
console.log(container.children); // [<h1>, <p>]
console.log(container.children[0]); // <h1>
console.log(container.children[1]); // <p>
```
--------------------------------------------------------------
