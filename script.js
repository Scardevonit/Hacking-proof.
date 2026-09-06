const button = document.getElementById('greetButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Your demo project is running successfully.';
});
