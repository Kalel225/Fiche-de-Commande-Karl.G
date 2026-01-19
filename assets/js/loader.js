setTimeout(() => { 
    document.getElementById("loading-container").classList.add("fade-out");
    setTimeout (() => { 
        window.location.href = ""
    }, 600);
}, 1500);