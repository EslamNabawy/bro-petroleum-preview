const forms = document.querySelectorAll<HTMLFormElement>('form[data-lead-form]');

forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = form.querySelector<HTMLDivElement>('[data-form-status]');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const endpoint = form.dataset.endpoint;
    if (!status || !button || !endpoint) return;
    button.disabled = true;
    button.textContent = 'Sending…';
    status.hidden = true;
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const result = await response.json() as { message?: string };
      status.textContent = result.message ?? (response.ok ? 'Request received.' : 'The request could not be submitted.');
      status.hidden = false;
      status.classList.toggle('form__status--error', !response.ok);
      if (response.ok) {
        form.reset();
        document.dispatchEvent(new CustomEvent('bro:form-submitted', { detail: { form: endpoint.includes('recruitment') ? 'recruitment' : 'rfq' } }));
      }
    } catch {
      status.textContent = 'The network request failed. Please try again or contact BRO directly.';
      status.hidden = false;
      status.classList.add('form__status--error');
    }
    button.disabled = false;
    button.textContent = endpoint.includes('recruitment') ? 'Submit application' : 'Send RFQ request';
  });
});
