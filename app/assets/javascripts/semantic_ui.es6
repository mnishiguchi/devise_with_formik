window.App || (window.App = {});

// semantic-ui messages
document.addEventListener('click', function(event) {
  if (event.target.matches('.message .close')) {
    event.target.parentNode.style.display = 'none';
  }
});
