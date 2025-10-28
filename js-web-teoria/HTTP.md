# EXPLICAÇÕES SOBRE O HTTP (Hyper Text Transfer Protocol)
==============================================================

## Conceitos básicos:

### O que é HTTP (HyperText Transfer Protocol)
HTTP, ou Hypertext Transfer Protocol, é um protocolo de comunicação utilizado para a transferência de informações na World Wide Web (WWW) e em outros sistemas de rede.

O HTTP é a base para que o cliente e um servidor web troquem informações. Ele permite a requisição e a resposta de recursos, como imagens, arquivos e as próprias páginas webs que acessamos, por meio de mensagens padronizadas. Com ele, é possível que um estudante num café em São Paulo leia um artigo que está armazenado em um servidor no Japão. (ALURA)

### Diferença entre HTTP e HTTPS
#### HTTP (HyperText Transfer Protocol):
Protocolo de aplicação usado para transferir páginas web, imagens, dados de formulários etc. É texto simples (não criptografado).

#### HTTPS (HTTP Secure):
é HTTP sobre TLS (antigo SSL) — ou seja, é o mesmo protocolo HTTP mas rodando dentro de uma camada segura de criptografia (TLS). Tudo trafega cifrado.

![Diferença entre HTTP e HTTPS](../assets/img/diferencas-entre-http-e-https.webp)

#### Diferença prática
HTTP não tem criptografia. Então qualquer transferência de informação pode ser interceptada e lida/alterada. Isso já não acontece com o HTTPS já que ele usa o TLS (Transport Layer Security) para cifrar os dados evitando leitura/edição de terceiros

o HTTPS exige um certificado X.509 emitido por uma Autoridade Certificadora (CA) confiável, que permite ao navegador validar que ele está falando com o servidor legítimo.

#### Como o usuário pode identificar
HTTP: normalmente aparece como “Não seguro” ou sem cadeado.

HTTPS: aparece com cadeado (e, se houver problemas no certificado, mostrará aviso de certificado inválido/expirado).
Ter HTTPS evita avisos que assustam usuários e reduz risco de abandono.

### O que é um cliente (navegador) e um servidor
Cliente / servidor é um modelo de interação no qual um programa envia uma solicitação para outro programa e aguarda uma resposta.. O programa solicitante é chamado de cliente; o programa que responde é chamado de servidor. Embora o modelo cliente / servidor possa ser usado entre programas em um único computador, o termo geralmente se refere a uma rede. Em uma rede, o modelo fornece uma maneira conveniente de interconectar programas que são distribuídos em diferentes locais (IBM)

![Diferença cliente Servidor](../assets/img/cliente-servidor.png)

#### O que é um cliente
O cliente é qualquer dispositivo ou software que solicita serviços ou recursos de outro computador (o servidor).
No contexto web, o cliente normalmente é o navegador (Chrome, Firefox, Edge, Safari), mas também pode ser um app de celular, um programa de email ou até um script que consome APIs.

#### Funções do cliente
1 - Fazer requisições: solicita dados ou serviços do servidor (ex.: abrir uma página web, enviar um formulário).

2 - Exibir ou processar respostas: mostra a página HTML, renderiza imagens, toca vídeos, ou processa dados recebidos.

3 - Gerenciar estado local: cookies, armazenamento local (localStorage, sessionStorage) e cache.

#### Exemplos de clientes
- Navegador web (Google Chrome, Firefox)

- Aplicativo de celular (Instagram, WhatsApp)

- Software de email (Outlook, Thunderbird)

- Scripts ou programas que fazem requisições HTTP (curl, Postman, apps backend que consomem APIs de terceiros)

#### O que é um navegador
O servidor é o computador ou software que responde aos pedidos do cliente, oferecendo recursos, serviços ou dados. Ele “serve” algo ao cliente.

#### Funções do servidor:

1 - Receber requisições: recebe pedidos HTTP, FTP, SMTP ou outro protocolo.

2 - Processar requisições: executa lógica de backend, consulta banco de dados, gera respostas dinâmicas (ex.: página de produto, resultado de busca).

3 - Enviar respostas: devolve os dados ou serviços solicitados para o cliente.

#### Exemplos de servidores
- Servidor web: Apache, Nginx, IIS — serve páginas HTML, imagens, CSS e JS.

- Servidor de banco de dados: MySQL, PostgreSQL — responde a consultas SQL do backend.

- Servidor de email: Exchange, Postfix — envia e recebe emails.

- Servidor de API: Node.js, Django, Laravel — processa requisições de dados e retorna JSON ou XML.

### Como cliente e servidor se comunicam
A comunicação geralmente segue o modelo cliente-servidor usando protocolos de rede, como HTTP/HTTPS.

#### Exemplo de fluxo web
1 - Você digita www.exemplo.com no navegador (cliente).

2 - O navegador envia uma requisição HTTP para o servidor que hospeda o site.

3 - O servidor recebe a requisição e processa: busca arquivos HTML, consulta banco de dados, monta a página.

4 - O servidor envia uma resposta HTTP (HTML, CSS, JS, imagens) de volta ao cliente.

5 - O navegador renderiza a página para você ver e interagir.
Resumo visual simplificado:

Usuário → Navegador (Cliente) → Requisição HTTP → Servidor → Resposta HTTP → Navegador → Usuário

![Diferença cliente Servidor](../assets/img/fluxo-de-requisicao.png)

### O que é um request (requisição) e um response (resposta)

### O conceito de stateless (HTTP não mantém estado)

### O que é um endpoint / rota / recurso

### Estrutura básica de uma URL

### Portas padrão: 80 (HTTP) e 443 (HTTPS)