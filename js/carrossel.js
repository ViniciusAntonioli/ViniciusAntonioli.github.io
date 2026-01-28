const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
const fraseMeio = document.querySelector('.middle-text')

let counter = 0;
const size = 100; // Moveremos 100% da largura a cada slide


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;

    slide.style.transform = `translateX(${-100 * counter}%)`;

    // 3. Atualiza as classes das bolinhas
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    mudaTexto();

  })
})

function moveCarousel() {
  counter++;
  
  // Se chegar na última imagem, volta para a primeira
  if (counter >= images.length) {
    counter = 0;
  }

  mudaTexto();


  // Move a faixa de imagens
  slide.style.transform = `translateX(${-size * counter}%)`;

  // Atualiza os círculos (indicadores)
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter].classList.add('active');
}

// Executa a função a cada 3000ms (3 segundos)
setInterval(moveCarousel, 3000);

function mudaTexto() {
  // 1. Começa a sumir com o texto
  fraseMeio.classList.add('fade-out');

  // 2. Espera o tempo da transição (ex: 500ms) para trocar o texto e voltar
  setTimeout(() => {
    switch (counter) {
      case 0:
        fraseMeio.innerHTML = 'Aniversários';
        break;
      case 1:
        fraseMeio.innerHTML = 'Eventos Escolares';
        break;
      case 2:
        fraseMeio.innerHTML = 'Eventos promocionais/Inaugurações';
        break;
    }
    
    // 3. Mostra o texto novamente com a nova palavra
    fraseMeio.classList.remove('fade-out');
  }, 500); // Esse tempo deve ser igual ao do transition no CSS
}