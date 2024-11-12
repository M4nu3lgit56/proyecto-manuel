document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector(".container-nav")
    const clic = document.querySelectorAll(".click")
    const menu = document.querySelector('.btn-nav')
    const contacto = document.querySelector('.form-main')

    if (contacto) {
        contacto.addEventListener('submit', function() {
            alert('Tu cita ha sido enviada. Recibiras un correo con la confirmación o negación de tu cita.')
        })
    }


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
        element.addEventListener('click', function() {
            const valor = parseInt(this.getAttribute('valor'))
            const pag = this.getAttribute('pag')

            switch (valor) {
                case 0:
                    if (JSON.parse(localStorage.getItem('openLogin')) === true) {
                        window.location.href = 'User.html'
                    } else {
                        window.location.href = pag
                    }
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                    window.location.href = pag
                    break;
                case 5:
                    if (JSON.parse(localStorage.getItem('openLogin')) === true) {
                        window.location.href = pag
                    } else {
                        window.location.href = 'register.html'
                    }
                    break;
                case 6:
                    window.open(pag, "_blank")
                    break;
            }

        })
    })
})