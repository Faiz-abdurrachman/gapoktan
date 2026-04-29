/* ─── Counter Logic ──────────────────────────────────── */

function initCounters() {
    const counterElements = document.querySelectorAll('.counter-number');
    
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    counterElements.forEach(el => counterObserver.observe(el));
}

/**
 * Animates a counter from 0 to target value
 */
function animateCounter(element, target) {
    let current = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / target));
    
    // For smaller numbers, we want more precision in timing
    const increment = target > 100 ? Math.ceil(target / 100) : 1;
    const intervalTime = duration / (target / increment);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('id-ID');
            clearInterval(timer);
        } else {
            element.textContent = current.toLocaleString('id-ID');
        }
    }, Math.max(intervalTime, 16)); // Cap at ~60fps
}
