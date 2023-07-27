// Mendapatkan referensi ke form dan element-input yang diperlukan
const form = document.getElementById('layananaduan');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Menambahkan event listener pada form ketika dikirim
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan aksi default (pengiriman form)

    // Mendapatkan nilai dari input nama, email, dan pesan
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Menampilkan data dalam alert
    alert(`Terima kasih! Berikut adalah detail aduan Anda:\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`)});