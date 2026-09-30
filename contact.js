'use strict';
(() => {
  const form = document.querySelector('#contact-form');
  const name = document.querySelector('#contact-name');
  const purpose = document.querySelector('#contact-purpose');
  const result = document.querySelector('#message-result');
  const preview = document.querySelector('#message-preview');
  const open = document.querySelector('#message-open');
  const status = document.querySelector('#message-status');
  const messages = {
    atendimento: 'Gostaria de informações sobre um primeiro atendimento.',
    agendamento: 'Gostaria de consultar a disponibilidade para agendar um atendimento.',
    acompanhamento: 'Já sou cliente e gostaria de solicitar o link de acompanhamento do meu caso no LinkLei, se disponível.'
  };
  function clearPreview() {
    result.hidden = true;
    preview.textContent = '';
    open.removeAttribute('href');
    status.textContent = '';
    name.setCustomValidity('');
  }
  form.addEventListener('input', clearPreview);
  form.addEventListener('change', clearPreview);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const firstName = name.value.trim().replace(/\s+/g, ' ');
    name.setCustomValidity(firstName ? '' : 'Informe como podemos chamar você.');
    if (!form.reportValidity() || !Object.hasOwn(messages, purpose.value)) return;
    const message = 'Olá! Meu nome é ' + firstName + '. ' + messages[purpose.value] + ' Vim pelo site da Calsolari Advocacia.';
    preview.textContent = message;
    open.href = 'https://wa.me/5511986480596?text=' + encodeURIComponent(message);
    result.hidden = false;
    status.textContent = 'Mensagem preparada. Revise o texto e abra o WhatsApp para continuar.';
    open.focus();
  });
  form.hidden = false;
  document.querySelector('#form-fallback').hidden = true;
})();
