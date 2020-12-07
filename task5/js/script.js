const fieldInput = document.querySelector('input'),
      button = document.querySelector('button'),
      duplicateField = document.querySelector('#duplicateField');

fieldInput.addEventListener('input', addTextField);
button.addEventListener('click', clearForm);

function addTextField() {
    duplicateField.textContent = this.value;
};

function clearForm() {
    console.log(fieldInput.value);
    duplicateField.textContent = '';
    fieldInput.value = '';
}