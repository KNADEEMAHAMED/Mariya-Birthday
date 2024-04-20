// Script for displaying virtual cake with name
document.addEventListener("DOMContentLoaded", function() {
    const showCakeButton = document.getElementById("show-cake-button");
    const virtualCake = document.getElementById("virtual-cake");

    showCakeButton.addEventListener("click", function() {
        const girlName = "Mariya Naaz";

        const cakeHtml = `
            <img src="C:\Users\Nadeem\OneDrive\Desktop\3.jpg" alt="Virtual Cake">
            <p>${girlName}!</p>
        `;
        virtualCake.innerHTML = cakeHtml;
        virtualCake.classList.remove("hidden");
    });
});
