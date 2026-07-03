// Contact page: quote-request form state machine (idle -> submitting -> submitted/error)
// STEP 1: Create a free account at https://formspree.io using QuoteMe@BravuraDetailing.com
// STEP 2: Create a new form there, verify the email when Formspree emails you
// STEP 3: Copy the Form ID it gives you (looks like "abcdwxyz") and paste it below
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';

(function () {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  const formWrap = document.getElementById('formWrap');
  const successWrap = document.getElementById('successWrap');
  const successName = document.getElementById('successName');
  const errorEl = document.getElementById('formError');
  const submitBtn = document.getElementById('submitBtn');
  const dropoffBtn = document.getElementById('dropoffBtn');
  const mobileBtn = document.getElementById('mobileBtn');
  const serviceTypeInput = document.getElementById('serviceType');

  function setServiceType(value) {
    serviceTypeInput.value = value;
    dropoffBtn.classList.toggle('active', value === 'Drop-Off');
    mobileBtn.classList.toggle('active', value === 'Mobile');
  }
  dropoffBtn.addEventListener('click', () => setServiceType('Drop-Off'));
  mobileBtn.addEventListener('click', () => setServiceType('Mobile'));

  let submitting = false;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (submitting) return;
    submitting = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    submitBtn.style.opacity = '0.7';
    errorEl.style.display = 'none';

    const data = new FormData(form);
    const name = data.get('name') || '';

    fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone: data.get('phone') || '',
        email: data.get('email') || '',
        vehicle: data.get('vehicle') || '',
        preferredDate: data.get('date') || '',
        service: data.get('service') || '',
        serviceType: serviceTypeInput.value,
        message: data.get('message') || '',
        _replyto: data.get('email') || '',
        _subject: `New quote request from ${name || 'website visitor'}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          successName.textContent = name.trim().split(' ')[0] || 'there';
          formWrap.style.display = 'none';
          successWrap.style.display = 'block';
        } else {
          throw new Error('Non-2xx response');
        }
      })
      .catch(() => {
        submitting = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Request';
        submitBtn.style.opacity = '1';
        errorEl.textContent = 'Something went wrong sending your request — please call or text us at 480-815-4711 instead.';
        errorEl.style.display = 'block';
      });
  });
})();
