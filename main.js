document.addEventListener('DOMContentLoaded', function() {
    const inputTarget = document.getElementById('input-target');
    const previewTitle = document.getElementById('preview-title');
    const btnPublish = document.getElementById('btn-publish');

    // Realtime preview nama di spanduk atas
    inputTarget.addEventListener('input', function(e) {
        const value = e.target.value.trim();
        previewTitle.textContent = value ? `HADIAH BUAT ${value.toUpperCase()}` : 'HADIAH BUAT ...';
    });

    // Membuat link berisi data saat tombol diklik
    btnPublish.addEventListener('click', function() {
        const targetName = inputTarget.value.trim();
        const template = document.getElementById('input-template').value;
        const surat = document.getElementById('input-surat').value.trim();
        const musik = document.getElementById('input-musik').value.trim();

        if (!targetName) {
            alert('Masukkan nama penerima kado terlebih dahulu!');
            return;
        }

        // Kumpulkan data dalam satu objek
        const kadoData = {
            n: targetName,
            t: template,
            s: surat || "Selamat hari istimewa!",
            m: musik
        };

        // Mengubah objek menjadi string teks acak yang aman (Base64)
        const jsonString = JSON.stringify(kadoData);
        const encodedData = btoa(unescape(encodeURIComponent(jsonString)));

        // Buat URL lengkap yang mengarah ke halaman kado.html bawaan data tersebut
        const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
        const linkKadoAkhir = `${baseUrl}kado.html?data=${encodedData}`;

        // Berikan link ke user
        alert(`🎉 LINK KADO BERHASIL DICIPTAKAN!\n\nSalin link di bawah ini dan langsung kirimkan ke WhatsApp dia:\n\n${linkKadoAkhir}`);
        
        // Opsional: Langsung salin otomatis ke clipboard HP
        navigator.clipboard.writeText(linkKadoAkhir);
    });
});
