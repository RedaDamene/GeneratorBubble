counterHit = document.querySelector('#counter');
let counter = 0;

const generate = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 60 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener('click', () => {;
        counter++;
        counterHit.textContent = counter;
        bubble.remove();
    })

    setTimeout(() => {
        bubble.remove();
    }, 9000);
}

setInterval(generate, 100000);