// Fungsi untuk mengirim formulir konsultasi
function submitForm(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var addressInput = document.getElementById('adress');
    var phoneInput = document.getElementById('phone');
    var pekerjaanInput = document.getElementById('pekerjaan');
  
    // Memeriksa apakah semua kolom formulir telah diisi
    if (nameInput.value === '' || emailInput.value === '' || addressInput.value === '' || phoneInput.value === '' || pekerjaanInput.value === '') {
      alert('Harap isi semua kolom ');
      return;
    }
  
    // Menampilkan pesan bahwa pesan telah terkirim
    alert('Data Anda telah di simpan');
  
    // Mengosongkan kolom formulir setelah pesan terkirim
    nameInput.value = '';
    emailInput.value = '';
    addressInput.value = '';
    phoneInput.value = '';
    pekerjaanInput.value = '';
  }
  
  // Mendapatkan referensi elemen formulir dan menambahkan event listener pada saat submit
  var form = document.getElementById('getstarted');
  form.addEventListener('submit', submitForm);
  