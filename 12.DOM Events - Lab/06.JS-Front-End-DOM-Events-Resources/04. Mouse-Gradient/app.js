function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWIdth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWIdth / elementWidth) * 100)

        resultElement.textContent = `${progress}%`;
    });
}