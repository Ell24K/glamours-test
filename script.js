document.addEventListener("DOMContentLoaded", function () {
    const recruitmentForm = document.getElementById("recruitmentForm");

    if (recruitmentForm) {
        recruitmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil data dari input form
            let nama = document.getElementById("nama").value;
            let umur = document.getElementById("umur").value;
            let nick = document.getElementById("nick").value;
            let level = document.getElementById("level").value;
            let gender = document.getElementById("gender").value;
            let asal = document.getElementById("asal").value;
            let alasan = document.getElementById("alasan").value;
            let invitedBy = document.getElementById("invitedBy").value;
            let adminSelect = document.getElementById("adminSelect").value; // Ambil nomor admin

            // Pastikan admin dipilih
            if (!adminSelect) {
                alert("Silakan pilih admin yang ingin dikirimkan formulir!");
                return;
            }

            // Form msg
            let message = 
    `❕*Glamourside Formulir*❕%0A%0A` +
    `✠ *Nama:* ${nama}%0A` +
    `✠ *Umur:* ${umur} th%0A` +
    `✠ *Nick HH:* ${nick}%0A` +
    `✠ *Level HH:* ${level}%0A` +
    `✠ *Gender:* ${gender}%0A` +
    `✠ *Asal Kota:* ${asal}%0A` +
    `✠ *Alasan:* ${alasan}%0A` +
    `✠ *Invited By:* ${invitedBy}%0A%0A` +
    `❕ *Syarat* ❕%0A` +
    `Ⴐ *SS Bio* (💌 wajib)%0A` +
    `Ⴐ *SS Alt* (ava slot)%0A` +
    `Ⴐ *Wajib Memakai Kode/Hashtag* %0A%0A` +
    `᭄ *Follow IG GS:* https://www.instagram.com/glamourside_01%0A` +
    `᭄ *Discord:* https://discord.gg/tjdSJzFfba%0A%0A` +
    `⁖℘ *Terima kasih sudah mengisi formulir, selamat datang di GlamourSide!*`;

            // CODER: LUTPI SIKMA
            let whatsappURL = `https://wa.me/${adminSelect}?text=${message}`;
            window.open(whatsappURL, "_blank");
        });
    }
});
