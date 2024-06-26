let currentPanel = 2;
const panelWidth = 530; // Largura de cada painel
const totalPanels = 3; // Número total de painéis




function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

window.addEventListener('load', function() {
    updateCarousel();
});


function updateCarousel() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
        if (index == currentPanel - 1) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    })    
    const carousel = document.getElementById('carousel');
    const translateValue = -panelWidth * (currentPanel -2);
    carousel.style.transform = `translateX(${translateValue}px)`;
    panelContainer.style.width = `${panelWidth}px`; 
}



function selectProduct(event, name, price) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Salva os dados do produto na Local Storage
    localStorage.setItem('selectedProduct', JSON.stringify({ name: name, price: price }));

    // Redireciona para a página de detalhes do produto
    window.location.href = './item.html';
}
