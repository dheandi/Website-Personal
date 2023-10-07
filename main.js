// Mendapatkan elemen navbar
var navbar = document.querySelector(".navbar");

// Menambahkan event listener untuk mengubah background navbar saat di-scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) { // Jarak scroll saat navbar berubah warna (sesuaikan dengan kebutuhan Anda)
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

