document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector(".container-nav")
    const clic = document.querySelectorAll(".click")
    const menu = document.querySelector('.btn-nav')
    const contacto = document.querySelector('.form-main')
    const backBtn = document.getElementById('back')
    const visibility = document.querySelector('.visibility')
    const password = document.querySelector('.pswr')
    const containerCels = document.querySelector('.container-cels')

    if (visibility) {
        visibility.addEventListener('click', function () {
            const on = visibility.classList.toggle('on')
            if (on) {
                password.removeAttribute('style')
                visibility.innerHTML = 'visibility_off'
            } else {
                password.style.WebkitTextSecurity = 'disc'
                visibility.innerHTML = 'visibility'
            }
        })
    }

    if (contacto) {
        contacto.addEventListener('submit', function () {
            alert('Tu cita ha sido enviada. Recibiras un correo con la confirmación o negación de tu cita.')
        })
    }

    if ('ontouchstart' in window || navigator.maxTouchPoints > 1) {
        if (backBtn) {
            backBtn.value = 'arrow_back'
            backBtn.classList.toggle('material-symbols-outlined')
            backBtn.removeAttribute('style')
        }
    }


    menu.addEventListener('click', function () {
        if (containerCels.classList.contains('active')) {
            nav.classList.toggle('active')
            setTimeout(() => {
                containerCels.classList.toggle('active')
            }, 400)
            console.log('cerrar')
        } else {
            containerCels.classList.toggle('active')
            setTimeout(() => {
                nav.classList.toggle('active')
            }, 400)
            console.log('abrir')
        }
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

        if (backBtn) {
            backBtn.value = 'Volver al inicio'
            backBtn.classList.toggle('material-symbols-outlined')
            backBtn.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        }
    }

    clic.forEach(element => {
        element.addEventListener('click', function () {
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