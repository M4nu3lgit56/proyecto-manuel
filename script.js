document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector(".container-nav");
    const clic = document.querySelectorAll(".click")

    if (!('ontouchstart' in window) && navigator.maxTouchPoints === 0) {
        nav.addEventListener('mouseenter', function () {
            const body = document.getElementById("body-element");
            body.classList.add('body-movement');
        });

        nav.addEventListener('mouseleave', function () {
            const body = document.getElementById("body-element");
            body.classList.remove('body-movement');
        });
    }

    clic.forEach(element => {
        element.addEventListener('click', function () {
            const valor = parseInt(this.getAttribute('valor'))
            const pag = this.getAttribute('pag')

            switch (valor) {
                case 0:
                    window.location.href = pag
                case 1:
                    window.location.href = pag
                case 2:
                    window.location.href = pag
                case 3:
                    window.location.href = pag
                case 4:
                    window.location.href = pag
                case 5:
                    window.location.href = pag
                case 6:
                    window.open(pag, "_blank")
            }

        })
    })
})