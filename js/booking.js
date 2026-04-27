/* ─── Booking Form Logic ─────────────────────────────── */

function initBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm || bookingForm._bound) return;
    bookingForm._bound = true;

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        const name = formData.get('name');
        const date = formData.get('date');
        const pax  = formData.get('pax');
        const pkg  = formData.get('package');

        const whatsappNumber = "6281234567892";
        const message = `Halo Karang Taruna Ngudi Luhur, saya ingin reservasi paket Agrowisata:%0A%0A` +
                        `*Nama:* ${name}%0A` +
                        `*Tanggal:* ${date}%0A` +
                        `*Jumlah Orang:* ${pax} orang%0A` +
                        `*Paket:* ${pkg}%0A%0A` +
                        `Mohon info ketersediaan dan detail pembayarannya. Terima kasih!`;

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingForm);
} else {
    initBookingForm();
}
