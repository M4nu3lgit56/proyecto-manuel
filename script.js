document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector(".container-nav");
    const clic = document.querySelectorAll(".click")
    const menu = document.querySelector('.btn-nav')

    menu.addEventListener('click', function () {
        nav.classList.toggle('active')
    })

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
        element.addEventListener('click', function (element) {
            const valor = parseInt(this.getAttribute('valor'))
            const pag = this.getAttribute('pag')

            switch (valor) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    window.location.href = pag
                    break;
                case 6:
                    window.open(pag, "_blank")
                    break;
            }

        })
    })
})