var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var html = document.querySelector('html')

button1.addEventListener('click', function() {
    html.style.backgroundColor = 'black';
    html.style.color = 'white';
});

button2.addEventListener('click', function() {
    html.style.backgroundColor = 'white';
    html.style.color = 'black';
})