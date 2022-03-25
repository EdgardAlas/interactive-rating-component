(function () {
  const form = document.getElementById('form');
  const selectedValue = document.getElementById('value');
  const firstCard = document.getElementsByClassName('card')[0];
  const secondCard = document.getElementsByClassName('card')[1];

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const opcion = this.opcion.value;

    if (!opcion) {
      return;
    }

    firstCard.classList.add('card--d-none');
    secondCard.classList.remove('card--d-none');
    selectedValue.innerText = opcion;
  });
})();
