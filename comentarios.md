# Reset CSS
  Essa parte é importante pois todos os navegadores possuem valores padrão diferentes de padding, entre outras coisas
  Resetar o CSS do documento é importante para que não haja problemas de renderização entre diferentes navegadores
  Assim, trabalhamos em cima de um mesmo padrão  

  O * é o seletor que se refere a todo o documento que está sendo renderizado

# box-sizing: border-box; 
  O box-sizing vai ditar como vai ser o comportamento da largura e altura dos elementos dentro dessa caixa
  Esse código quer dizer que a largura e altura definidas para essa caixa serão o seu tamanho
  Com isso, os elementos dentro dessa caixa deverão respeitar esse tamanho

# Declarando variáveis no CSS (:root)
  No CSS, para declarar uma variável, devemos colocá-la dentro do :root, que representa a raíz do documento HTML
  Para usá-la, é preciso fazer como no exemplo abaixo:
    background: var(--preto);

  É uma boa prática, pois caso seja necessário alterar uma propriedade usada várias, será preciso alterá-la em vários lugares
  Porém, se o valor daquela propriedade estiver em uma variável, basta alterar o valor da variável 1x

  A variável fica assim:
    --variavel: valor;

# linear-gradient() e RGBA
  A função linear-gradient() do CSS cria uma imagem de transição progressiva entre 2 ou mais cores ao longo de uma linha.
  Resulta em um objeto do tipo <gradient>, que é um tipo especial de <image>
  Explicação -> https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()

  Já o RGBA define cores RGB com opacidade - elemento Alpha
  *** rgba(red, green, blue, alpha) ***
  Descrição:
    - red: Define a intensidade do vermelho como um inteiro entre 0 e 255, ou como porcentagem entre 0% e 100%
    - green: Define a intensidade do verde como um inteiro entre 0 e 255, ou como porcentagem entre 0% e 100%
    - blue: Define a intensidade do azul como um inteiro entre 0 e 255, ou como porcentagem entre 0% e 100%
    - alpha: Define a opacidade como um numéro entre 0.0 (totalmente transparente) e 1.0 (totalmente opaco)

# Anotações flexbox
  As divs não herdam o display: flex; do elemento pai, pois cada div tem com padrão o display: block;
  Portanto, é preciso informar novamente o display: flex; para cada div, caso seja necessário.
  Esse link explica melhor -> https://www.w3schools.com/css/css_display_visibility.asp

# CSS Transition
  O transition permite alteração no propriedades de um elemento de forma suave, durante um tempo determinado
  Para que o transition funcione, é preciso especificar 2 coisas:
    - a propriedade CSS que você quer adicionar como efeito
    - a duração do efeito (se não for especificada, o efeito não vai funcionar, pois o valor padrão da duração é 0)

  https://www.w3schools.com/css/css3_transitions.asp

# Carousel
  No site da Netflix, a lista de filmes é passada em formato de Carrossel (Carousel em inglês).
  Para implementar essa funcionalidade, é preciso utilizar uma biblioteca JavaScript.
  
  Nesse site, há uma lista de 5 bibliotecas JS carousel - https://dev.to/mycodemagic/top-10-javascript-carousel-libraries-1ech

  A primeira é a Swiper - https://swiperjs.com/

  Neste projeto, a lib usada é a Owl Carousel 2 (Carrossel Coruja 2).

# Onde carregar um código JavaScript em um documento HTML?
  Link explicação - https://pt.stackoverflow.com/questions/1109/onde-devo-colocar-um-c%C3%B3digo-javascript-em-um-documento-html#:~:text=Colocar%20um%20no%20head,j%C3%A1%20estar%C3%A1%20pronto%20para%20agir.

  O código JavaScript é carregado no documento HTML através da tag <script> -> <script src="<link>"></script>
  Há 2 lugares para carregar o código JS:
    - No <head>;
    - Ao final do <body>;
  
  Quando o browser encontra a tag <script>, ele não faz mais nada enquanto o script não for carregado e executado.
  Carregar um <script> ao final do body permite que o conteúdo seja carregado antes da execução do script. 

# Lições:
  Saber sempre aonde quer chegar. Ter sempre um protótipo, um mockup da tela que está sendo desenvolvida. 
  Testar em várias resoluções de tela e trabalhar bem na responsividade em cima delas. 
