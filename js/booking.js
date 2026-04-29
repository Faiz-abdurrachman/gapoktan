/* ─── Booking Form Logic ─────────────────────────────── */

function initBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm || bookingForm._bound) return;
    bookingForm._bound = true;

    // Reset error border when user starts typing/selecting
    bookingForm.addEventListener('input', (e) => {
        if (e.target.classList.contains('field-error')) {
            e.target.classList.remove('field-error');
        }
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Basic Validation
        let isValid = true;
        const requiredFields = ['name', 'date', 'pax', 'package', 'wa'];
        
        requiredFields.forEach(fieldId => {
            const input = document.getElementById(fieldId);
            if (!input || !input.value.trim()) {
                if (input) input.classList.add('field-error');
                isValid = false;
            } else {
                if (input) input.classList.remove('field-error');
            }
        });

        if (!isValid) {
            const firstError = bookingForm.querySelector('.field-error');
            if (firstError) {
                firstError.focus();
            }
            return; // Stop form from submitting to WA
        }

        // 2. Process Data
        const formData = new FormData(bookingForm);
        const name  = formData.get('name');
        const date  = formData.get('date');
        const pax   = formData.get('pax');
        const pkg   = formData.get('package');
        const wa    = formData.get('wa');
        const pesan = formData.get('pesan') || '';

        // ⚠️ TODO-KLIEN: Ganti nomor di bawah dengan nomor WA Tim Agrowisata yang asli
        const whatsappNumber = "6281234567893";

        const lines = [
            `Halo Karang Taruna Ngudi Luhur, saya ingin reservasi Agrowisata:%0A`,
            `*Nama:* ${name}`,
            `*Tanggal:* ${date}`,
            `*Jumlah Orang:* ${pax} orang`,
            `*Paket:* ${pkg}`,
            `*Nomor WA:* +62${wa}`,
        ];
        if (pesan.trim()) lines.push(`*Catatan:* ${pesan}`);
        lines.push(`%0AMohon info ketersediaan jadwal. Terima kasih!`);

        const message = lines.join('%0A');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
}

