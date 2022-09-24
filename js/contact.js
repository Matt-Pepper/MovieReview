function clearForm() {
  document.getElementById('email').value = '';
  document.getElementById('fullName').value = '';
}

function sendAlert(name) {
  // eslint-disable-next-line no-alert
  window.alert(`Thanks ${name}, We'll be in touch shortly!`);
}

// eslint-disable-next-line no-unused-vars
function submitMessage(event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value;

  sendAlert(fullName);
  clearForm();
}
