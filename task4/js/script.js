let link = document.querySelector('a');
    

link.addEventListener('click', function(e) {
    e.preventDefault();
    let modal = prompt('Введите текст, который Вы хотите увидеть в анкоре ссылки');
    this.textContent = modal;
});