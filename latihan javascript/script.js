console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favorit: " + hewan);

let favorit = prompt("Apa hewan favoritmu?");
alert("Hewan favorit: " + "!");

const judul = document.querySelector("#judul h1")
console.log(judul.textContent);
judul.textContent = "Mengenal Hewan Nusantara"

//BLOK 1 : TOMBOL SUKA 
let jumlahSuka = 0;
const tombolSuka = document.querySelector(".btn-suka");
const teksSuka = document.querySelector(".jumlah-suka");

function tambahSuka() {
    jumlahSuka = jumlahSuka + 1;
    teksSuka.textContent = jumlahSuka;
}
tombolSuka.addEventListener("click", tambahSuka);

// BLOK 2: BACA SELENGKAPNYA
const tombolBaca = document.querySelector(".btn-baca");
const teksLengkap = document.querySelector(".selengkapnya");

function bukaTutup() {
    teksLengkap.classList.toggle("sembunyi");
    if (teksLengkap.classList.contains("sembunyi")) {
        tombolBaca.textContent = "Baca Selengkapnya";
    } else {
        tombolBaca.textContent = "Tutup"; 
    }
}

tombolBaca.addEventListener("click", bukaTutup);

// BLOK 3: BACA SELENGKAPNYA
const tombolGelap = document.querySelector("#tombol-gelap");

function gantiMode() {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        tombolGelap.textContent = "Mode Terang";
    } else {
        tombolGelap.textContent = "Mode Gelap";
    }
}

tombolGelap.addEventListener("click", gantiMode);
