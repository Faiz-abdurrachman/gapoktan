/* ─── Booking Form Logic ─────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(bookingForm);
        const name = formData.get('name');
        const date = formData.get('date');
        const pax = formData.get('pax');
        const pkg = formData.get('package');

        // Format WhatsApp message
        const whatsappNumber = "6281234567892"; // Agrowisata WA
        const message = `Halo Karang Taruna Ngudi Luhur, saya ingin reservasi paket Agrowisata:%0A%0A` +
                        `*Nama:* ${name}%0A` +
                        `*Tanggal:* ${date}%0A` +
                        `*Jumlah Orang:* ${pax} orang%0A` +
                        `*Paket:* ${pkg}%0A%0A` +
                        `Mohon info ketersediaan dan detail pembayarannya. Terima kasih!`;

        const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Open WhatsApp in new tab
        window.open(waUrl, '_blank');
    });
});
