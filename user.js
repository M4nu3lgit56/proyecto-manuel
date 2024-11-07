window.addEventListener('load', function() {
    const user_camp = document.getElementById("user")
    const username = localStorage.getItem("username")
    const user = document.querySelector('.user-btn')
    
    if (username) { 
        user_camp.textContent = username
        user.classList.remove('click')
    } else {
        user_camp.textContent = "Registrarse"
        user.addEventListener('click', function() {
        const pag = this.getAttribute('pag')
            window.location.href = pag})
    }
})
