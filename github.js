 // Fungsi async untuk mengambil data followers dari API GitHub
 async function getFollowers() {

    // Ambil nilai username dari input field dengan id="username"
    const username = document.getElementById('username').value;

    // Buat URL endpoint API GitHub berdasarkan username
    const url = `https://api.github.com/users/${username}/followers`;

    // Ambil elemen HTML tempat daftar followers akan ditampilkan
    const list = document.getElementById('followersList');

    // Bersihkan isi list sebelumnya (jika ada)
    list.innerHTML = '';

    try {
      // Lakukan request ke API GitHub
      const response = await fetch(url);

      // Jika status response tidak OK (misalnya 404 atau 500), lempar error
      if (!response.ok) throw new Error("User not found or API error");

      // Ubah response menjadi format JSON
      const followers = await response.json();

      // Jika followers kosong, tampilkan pesan "No followers found."
      if (followers.length === 0) {
        list.innerHTML = `<li class="list-group-item text-center text-muted">No followers found.</li>`;
      }

      // Loop untuk setiap follower yang didapat dari API
      followers.forEach(follower => {
        // Buat elemen <li> untuk satu follower
        const item = document.createElement('li');

        // Tambahkan class bootstrap untuk styling dan align
        item.className = 'list-group-item d-flex align-items-center';

        // Isi elemen <li> dengan avatar dan link ke profil GitHub follower
        item.innerHTML = `
          <img src="${follower.avatar_url}" alt="${follower.login}" class="rounded-circle me-3" width="40" height="40">
          <a href="${follower.html_url}" target="_blank" class="text-decoration-none fw-semibold">${follower.login}</a>
        `;

        // Tambahkan item follower ke dalam list
        list.appendChild(item);
      });

    } catch (error) {
      // Jika terjadi error (misal user tidak ditemukan), tampilkan pesan error
      list.innerHTML = `<li class="list-group-item text-danger text-center">${error.message}</li>`;
    }
  }