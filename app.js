const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('carta-aberta', toggle.checked);
});
