function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    
    // Save the current mode in cookies
    var currentMode = element.classList.contains("light-mode") ? "light" : "dark";
    setCookie("mode", currentMode, 7); // Save for 7 days
}

// Apply saved mode when the page loads
window.onload = function() {
    var savedMode = getCookie("mode");
    if (savedMode === "light") {
        document.body.classList.add("light-mode");
    }
};
