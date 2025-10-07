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
--------------------------------------------------------------

### 2) Selecionar por ID
```JS
const cabecalho = document.getElementById('meu-id'); 
```
O que retorna:
Um Element (o elemento) ou null se não existir.

Propriedades importantes:
- IDs devem ser únicos dentro do documento (boa prática/semântica).
- getElementById é tradicionalmente o mais rápido (otimizado pelos browsers).
--------------------------------------------------------------

### 3) Selecionar por classe
```JS
const cards = document.getElementsByClassName('card'); // HTMLCollection (live)
```

O que retorna:
HTMLCollection (array-like) e live — muda quando elementos são adicionados/removidos/classList alteradas.
--------------------------------------------------------------

### 4) querySelector e querySelectorAll (o poder dos seletores CSS)
```JS
const primeiro = document.querySelector('.menu');
const todos = document.querySelectorAll('.card .titulo');
```

- querySelector → retorna o primeiro elemento que combina ou null.
- querySelectorAll → retorna NodeList (static) com todos os matches (não live).
--------------------------------------------------------------

O método querySelector() utiliza a mesma sintaxe dos seletores CSS, o que significa que você deve usar # para IDs, . para classes e o nome da tag para elementos. Por exemplo: document.querySelector('#titulo') seleciona um elemento com ID “titulo”, document.querySelector('.botao') seleciona o elemento com classe “botao” e document.querySelector('p') seleciona o primeiro parágrafo. Essa sintaxe torna o método intuitivo e muito flexível, permitindo inclusive o uso 
de seletores compostos, como em CSS.


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

# Manipulação de Elementos no DOM
==============================================================

Depois de **selecionar elementos**, podemos **alterar seu conteúdo, atributos, estilos e estrutura**.  
Abaixo estão os principais métodos e propriedades de manipulação.

---

## innerText

- Permite **ler ou alterar o texto visível** de um elemento.
- Ignora tags HTML internas (apenas texto puro).

#### Exemplo:
```JS
const titulo = document.querySelector('h1');

// Ler o texto
console.log(titulo.innerText); // "Hello"

// Alterar o texto
titulo.innerText = "Novo título";
```
--------------------------------------------------------------

## innerHTML

- Permite ler ou alterar o conteúdo HTML interno de um elemento.
- Ao contrário de innerText, mantém e interpreta tags HTML.

#### Exemplo:
```JS
const container = document.getElementById('container');

// Ler HTML interno
console.log(container.innerHTML);

// Alterar HTML interno
container.innerHTML = "<h2>Subtítulo</h2><p>Parágrafo novo</p>";
```
--------------------------------------------------------------

## appendChild

- Adiciona um novo elemento filho no final do elemento selecionado.
- Útil para criar listas, cards, menus dinâmicos, etc.

#### Exemplo:
```JS
const lista = document.getElementById('lista');

// Criar novo elemento <li>
const novoItem = document.createElement('li');
novoItem.innerText = "Item 4";

// Adicionar ao final da lista
lista.appendChild(novoItem);

```
--------------------------------------------------------------

## setAttribute

- Permite adicionar ou alterar atributos de um elemento.
- Funciona com qualquer atributo HTML: id, class, src, href, etc.

#### Exemplo:
```JS
const imagem = document.querySelector('img');

// Definir atributo src
imagem.setAttribute('src', 'foto.jpg');

// Definir atributo alt
imagem.setAttribute('alt', 'Minha foto');


```
- Para remover atributos, use removeAttribute:

```JS
imagem.removeAttribute('alt');

```
--------------------------------------------------------------

## classList

- Permite adicionar, remover, alternar ou verificar classes de um elemento.
- Muito útil para controlar estilos via CSS dinamicamente.

Principais métodos:

- element.classList.add('classe')
- element.classList.remove('classe')
- element.classList.toggle('classe')
- element.classList.contains('classe')

#### Exemplo:
```JS
const botao = document.querySelector('button');

// Adicionar classe
botao.classList.add('ativo');

// Remover classe
botao.classList.remove('ativo');

// Alternar classe
botao.classList.toggle('ativo');

// Verificar se possui classe
console.log(botao.classList.contains('ativo')); // true ou false

```
--------------------------------------------------------------

## removeChild

- Remove um filho específico de um elemento.

#### Exemplo:
```JS
const lista = document.getElementById('lista');
const primeiroItem = lista.firstElementChild;

// Remove o primeiro item da lista
lista.removeChild(primeiroItem);

```

- Alternativa moderna: element.remove() remove o próprio elemento do DOM.

```JS
primeiroItem.remove();

```
--------------------------------------------------------------

## Criar elementos com createElement

- Permite criar novos elementos HTML para adicionar dinamicamente.

#### Exemplo:
```JS
const novoDiv = document.createElement('div');
novoDiv.innerText = "Nova div criada";

document.body.appendChild(novoDiv);

```

- Depois, você pode usar setAttribute, classList e appendChild para manipulá-lo.

--------------------------------------------------------------
