document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const text = "I'm a full stack developer";  
    let i = 0;

    function eraseText() {
        textElement.innerText = text.slice(0, i);
        i--;
        if (i >= 0) {
            setTimeout(eraseText, 100);
        } else {
            setTimeout(writeText, 1000); 
        }
    }

    function writeText() {
        textElement.innerText = text.slice(0, i);
        i++;
        if (i <= text.length) {
            setTimeout(writeText, 150); 
        } else {
            setTimeout(eraseText, 1000); 
        }
    }

    writeText();
});
