document.getElementById('backgroundBtn').addEventListener('click', function () {
    changeBackground();
});

function changeBackground() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    const currentColor = document.body.style.backgroundColor;
    let newColor;

    do {
        const randomIndex = Math.floor(Math.random() * colors.length);
        newColor = colors[randomIndex];
    } while (newColor === currentColor); // Tránh trùng lặp cùng một màu

    document.body.style.backgroundColor = newColor;
}


