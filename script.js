// NAVBAR SHADOW

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 20){

        navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";

    }

});


// BUTTON BELI

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Ditambahkan ✓";
        button.style.background = "#9bbf9b";

        setTimeout(() => {

            button.innerHTML = "Beli";
            button.style.background = "#d9a5a5";

        }, 2000);

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");

    let kosong = false;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            kosong = true;

        }

    });

    if(kosong){

        alert("Isi semua form terlebih dahulu 🥐");

    } else {

        alert("Pesan berhasil dikirim 💌");

        contactForm.reset();

    }

});


// SOCIAL ICON EFFECT

const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-10px) rotate(8deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0px) rotate(0deg)";

    });

});