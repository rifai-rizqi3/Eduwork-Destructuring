// Destructuring List Siswa

// Destructur array
const listSiswa = ["Rizqi", "Fadil", "Azri", "Raffi", "Aji"];
const siswa1 = listSiswa[0];
const siswa2 = listSiswa[1];
const siswa3 = listSiswa[2];
console.log(siswa1, siswa2, siswa3);

// Destructur
const [pertama, kedua, ketiga, ...lainnya] = listSiswa;
console.log(pertama, kedua, ketiga, lainnya);

// Destructur object
const tugas = {
    mapel: "Matematika",
    nilai: 90,
    halaman: 25,
    bab: 5,
    
    siswa: {
        nama: "Rizqi",
        kelas: "9"
    }
};

const mapelTugas = tugas.mapel;
const nilaiTugas = tugas.nilai;
const namaSiswa = tugas.siswa.nama;
console.log(mapelTugas, nilaiTugas, namaSiswa);

// destructur
const {
    mapel : mapelAlias,
    nilai,
    siswa: { nama },
    ...dataLainya
} = tugas;
console.log(mapelAlias, nilai, nama, dataLainya);

// contoh destructur di function parameter
function perkalian([angka1, angka2]) {
    const perkalian = angka1 * angka2;
    const pesan = `hasil perkalian kedua bilangan adalah ${perkalian}`;
    console.log(pesan);
}

function printTugas({ mapelAlias, nilai, siswa: { nama } }) {
    const pesan = `Tugas Pelajaran ${mapelAlias} Siswa dengan nama ${nama} dengan nilai ${nilai}`;
    console.log(pesan);
}

printTugas(tugas);
perkalian([5, 5]);