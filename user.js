window.addEventListener('load', function () {
    const user_camp = document.getElementById('user');
    const user = document.querySelector('.user-btn');
    const register = document.getElementById('register-form');
    const login = document.getElementById('login-form');
    const closeLogin = document.getElementById('closeLogin');

    if (closeLogin) {
        closeLogin.addEventListener('click', function () {
            localStorage.setItem('openLogin', JSON.stringify(false))
            window.location.href = 'index.html'
        })

        function back() {
            window.location.href = 'index.html'
        }

        const nameInfo = document.getElementById('nameInfo');
        const nameUser = document.getElementById('nameUser');
        const emailInfo = document.getElementById('emailInfo');
        const pswInfo = document.getElementById('pswInfo');
        const genderInfo = document.getElementById('genderInfo');

        const password = localStorage.getItem('password') || "";
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(element => element.psw === password);

        if (foundUser) {
            nameInfo.textContent = foundUser.name;
            nameUser.textContent = foundUser.name;
            emailInfo.textContent = foundUser.email;
            pswInfo.textContent = foundUser.psw;
            genderInfo.textContent = foundUser.gender;
        }
    }

    if (register) {
        register.addEventListener('submit', function (event) {
            event.preventDefault();

            const userR = document.getElementById('usuario').value;
            const emailR = document.getElementById('email').value;
            const pswR = document.getElementById('psw').value;
            const genderR = document.getElementById('gender').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const exists = users.some(user => user.email === emailR || user.name === userR);

            if (exists) {
                alert('El Usuario o correo electronico ya está registrado.');
            } else {
                const newUser = {
                    name: userR,
                    email: emailR,
                    psw: pswR,
                    gender: genderR
                };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                alert('Registro exitoso');
                window.location.replace('login.html');
            }
        });
    } else if (login) {
        login.addEventListener('submit', function (event) {
            event.preventDefault();

            const UoELogin = document.getElementById('usuarioLogin').value;
            const pswLogin = document.getElementById('pswLogin').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const validUser = users.some(user => (user.name === UoELogin || user.email === UoELogin) && user.psw === pswLogin);

            if (validUser) {
                localStorage.setItem('openLogin', JSON.stringify(true))
                const password = pswLogin;
                localStorage.setItem('password', password);
                alert('Inicio de Sesión exitoso.');
                window.location.replace('index.html');
            } else {
                alert('Usuario no encontrado.');
            }
        });
    }

    if (user) {
        const password = localStorage.getItem('password') || "";
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (JSON.parse(localStorage.getItem('openLogin')) === true) {
            if (password) {
                const foundUser = users.find(element => element.psw === password);

                if (foundUser) {
                    user_camp.textContent = foundUser.name;
                    user_camp.classList.add('text-nav')
                    user.classList.remove('click');
                    user.classList.add('user')
                    console.log(user_camp.classList)
                    console.log(user.classList)
                }

            }
        } else {
            user_camp.textContent = "Registrarse";
            user.addEventListener('click', function () {
                const pag = this.getAttribute('pag');
                window.location.href = pag;
            });
        }
    }
});