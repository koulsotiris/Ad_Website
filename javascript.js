//Ελεγχος κωδικου
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
//Ελεγχος ημερομηνίας γέννησης
let birthdateInput = document.getElementById("birthdate");
let passwordError = document.getElementById("passwordError");
let birthdateError = document.getElementById("birthdateError");
//Ελεγχος τηλεφώνου
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");


//Συνάρτηση για έλεγχο κωδικού
function validatePassword() {
  if ((password.value !== confirm_password.value) && (confirm_password.value != "")) {
    passwordError.innerHTML = '<i class="fa fa-exclamation-circle"></i> Οι κωδικοί δεν ταιριάζουν';
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    confirm_password.setCustomValidity("Οι κωδικοί δεν ταιριάζουν");
  } else {
    // Επαναφορά χρωμάτων 
    passwordError.textContent = ""; // Clear the error message
    password.style.borderColor = "#ccc";
    confirm_password.style.borderColor = "#ccc";
    confirm_password.setCustomValidity("");
  }
}

//Συνάρτηση για έλεγχο ημερομηνίας γεννησης
function validateAge() {
  let enteredDate = new Date(birthdateInput.value);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - enteredDate.getFullYear();

  if (currentDate.getMonth() < enteredDate.getMonth() ||
    (currentDate.getMonth() === enteredDate.getMonth() && currentDate.getDate() < enteredDate.getDate())) {
    age--;
  }

  if (age < 18) {
    birthdateError.innerHTML = '<i class="fa fa-exclamation-circle"></i> Απαραίτητη ηλικία 18+';
    birthdateInput.style.borderColor = "red";
    birthdateInput.setCustomValidity("Απαραίτητη ηλικία 18+");
  } else {
    birthdateError.textContent = "";
    birthdateInput.style.borderColor = "#ccc";
    birthdateInput.setCustomValidity("");
  }
}

//Συνάρτηση για έλεγχο τηλεφώνου
function validatePhone() {
  let phoneNumber = phoneInput.value;

  // Έλεγχος αν υπαρχουν 10 ψηφια χωρις γράμματα
  if (/^[0-9]{10}$/.test(phoneNumber) || (phoneNumber == "")) {
    phoneError.textContent = "";
    phoneInput.style.borderColor = "#ccc"; // Reset border color
    phoneInput.setCustomValidity("");
  } else {
    phoneError.innerHTML = '<i class="fa fa-exclamation-circle"></i> Απαραίτητα 10 ψηφία χωρίς εισαγωγή γραμμάτων';
    phoneInput.style.borderColor = "red";
    phoneInput.setCustomValidity("Εισαγάγετε έναν έγκυρο αριθμό τηλεφώνου με 10 ψηφία.");
  }
}

password.addEventListener('input', validatePassword);
confirm_password.addEventListener('input', validatePassword);
birthdateInput.addEventListener('input', validateAge);
phoneInput.addEventListener('input', validatePhone);


// Λίστα με περιοχές οι οποίες θα χρησιμοποιηθούν για auto complation
let areasList = [
  'Αθήνα',
  'Θεσσαλονίκη',
  'Παγκράτι',
  'Πάτρα',
  'Πειραιάς',
  'Λάρισσα',
  'Βόλος'
];

let jobList = [
  'Πωλητής',
  'Μάγειρας',
  'Μεταφορές',
  'Ταχυδρόμος',
  'Εστίαση',
  'Τηλεφωνιτής',
  'Λογιστής',
  'Προσωπικό Ασφαλείας',
  'Προγραμματιστής'
];

function autocomplete(input, list, suggestionsContainerId) {
  let suggestionsContainer = document.getElementById(suggestionsContainerId);

  input.addEventListener('input', function () {
    closeList(suggestionsContainer);

    if (!this.value) {
      return;
    }

    // Clear existing suggestions
    suggestionsContainer.innerHTML = '';

    // Iterate through the list and find matches
    for (let i = 0; i < list.length; i++) {
      if (list[i].toUpperCase().includes(this.value.toUpperCase())) {
        // If a match is found, create a suggestion <div> and add it to the suggestions <div>
        let suggestion = document.createElement('div');
        suggestion.innerHTML = list[i];
        suggestion.addEventListener('click', function () {
          input.value = this.innerHTML;
          closeList(suggestionsContainer);
        });
        suggestion.style.cursor = 'pointer';
        suggestionsContainer.appendChild(suggestion);
      }
    }
  });

  // Close the suggestion list when clicking outside the input and suggestions container
  document.body.addEventListener('click', function (event) {
    if (!input.contains(event.target) && !suggestionsContainer.contains(event.target)) {
      closeList(suggestionsContainer);
    }
  });
}

function closeList(suggestionsContainer) {
  suggestionsContainer.innerHTML = '';
}

autocomplete(document.getElementById('question2'), jobList, 'suggestions2');
autocomplete(document.getElementById('question3'), areasList, 'suggestions3');

// Checks if all elements of the form are filled
function validateForm() {
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var birthdate = document.getElementById('birthdate').value;
  var phone = document.getElementById('phone').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('confirm_password').value;

  if (fullname === '' || email === '' || address === '' || birthdate === '' || phone === '' || username === '' || password === '' || confirm_password === '') {
    alert('Παρακαλώ συμπληρώστε όλα τα πεδία!');
    return false;
  } else {
    alert('Επιτυχής εγγραφή χρήστη.');
    return true;
  }
}

 // Το autocomplete αυτο το βαλαμε για καθαρα θεμα διευκολυνσης στην διορθωση
function autocompleteForm() {
  // Επιλεγμενες τιμές για το autocomplete
  const autocompleteData = {
    fullname: "Fullname",
    email: "Pxxxxxxx@gmail.com",
    address: "28ης Οκτωβρίου 76",
    birthdate: "2001-11-14",
    phone: "69xxxxxxxx",
    username: "OrestisS",
    password: "password",
    confirm_password: "password",
    question2: "Προγραμματιστής",
    question3: "Athens"
  };

  // Κάνουμε το autocomplete για κάθε πεδίο της φόρμας
  Object.keys(autocompleteData).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.value = autocompleteData[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const autocompleteButton = document.getElementById('autocompleteButton');
  if (autocompleteButton) {
    autocompleteButton.addEventListener('click', function(event) {
      event.preventDefault();
      autocompleteForm();
    });
  }
});