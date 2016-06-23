document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('input').innerHTML = event.target.name.value;
});
