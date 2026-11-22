(function () {
  var $ = function (s) { return document.querySelector(s); };
  var modal = $('#my-modal');

  function openModal() {
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    $('#close-my-modal-btn').focus();
  }
  function closeModal() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
  }

  $('#booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    openModal();
    this.reset();
  });
  $('#close-my-modal-btn').addEventListener('click', closeModal);
})();
