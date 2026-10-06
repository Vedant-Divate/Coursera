function showPopup(show) {
  var popup = document.getElementById('popup');
  if (show) {
    popup.classList.add('show');
  } else {
    popup.classList.remove('show');
  }
}

function addRecommendation() {
  var message = document.getElementById('new_recommendation');
  var nameInput = document.getElementById('rec_name');
  var text = message ? message.value.trim() : '';

  if (text === '') {
    alert('Please enter a recommendation message.');
    return;
  }

  var name = nameInput && nameInput.value.trim() !== '' ? nameInput.value.trim() : 'Anonymous';

  var allRecs = document.getElementById('all_recommendations');
  var recDiv = document.createElement('div');
  recDiv.setAttribute('class', 'recommendation');

  // Keep same format as existing recommendations: quoted text
  var openQuote = document.createElement('span');
  openQuote.innerHTML = '&#8220;';
  var closeQuote = document.createElement('span');
  closeQuote.innerHTML = '&#8221;';

  var textNode = document.createTextNode(' ' + text + ' — ' + name + ' ');

  recDiv.appendChild(openQuote);
  recDiv.appendChild(textNode);
  recDiv.appendChild(closeQuote);

  allRecs.appendChild(recDiv);

  // Clear form
  message.value = '';
  if (nameInput) nameInput.value = '';

  // Task 3: showPopup is triggered only when a new recommendation is submitted
  showPopup(true);
}
