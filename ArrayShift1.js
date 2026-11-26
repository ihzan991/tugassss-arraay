// Membuat array berisi nama-nama anggota
const namaAnggota = [
    "Ihzan",
    "Haqi",
    "Lucky a",
    "Annisa",
    "Bunga",
    "Dini",
    "Aliya",
    "Dewi",
    "Della",
    "Ashley",
    "Diandra",
    "Bunia",
];

// Menampilkan output berupa list/daftar nama di terminal/console
console.log("========================================");
console.log("       DAFTAR NAMA ANGGOTA              ");
console.log("========================================");

namaAnggota.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
});

console.log("========================================");
console.log("Jumlah anggota:", namaAnggota.length);
console.log("========================================");