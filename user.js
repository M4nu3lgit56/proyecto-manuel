window.addEventListener('load', function() {
    const user_camp = document.getElementById("user");
    const username = localStorage.getItem("username"); 
    
    if (username) { 
        user_camp.textContent = username;
    } else {
        user_camp.textContent = "Registrarse";
    }
});
