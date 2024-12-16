function prosesData() {
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const jurusan = document.getElementById('jurusan').value;
    const nilai = parseInt(document.getElementById('nilai').value);
    let keterangan;

    // Menentukan keterangan berdasarkan nilai
    if (nilai >= 80) keterangan = 'A (Sangat Baik)';
    else if (nilai >= 70) keterangan = 'B (Baik)';
    else if (nilai >= 60) keterangan = 'C (Cukup)';
    else if (nilai >= 50) keterangan = 'D (Kurang)';
    else keterangan = 'E (Gagal)';

    // Validasi input kosong
    if (!nama || !nim || isNaN(nilai)) {
        alert('Harap lengkapi semua field!');
        return;
    }

    // Menampilkan output hasil
    document.getElementById('output').innerHTML = `
        <h5 class="text-center">Hasil Input Data</h5>
        <hr>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Jurusan:</strong> ${jurusan}</p>
        <p><strong>Nilai:</strong> ${nilai}</p>
        <p><strong>Keterangan:</strong> ${keterangan}</p>
    `;
}