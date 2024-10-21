document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rafraîchissement par défaut

  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const dateNaissance = document.getElementById('dateNaissance').value;
  const adresse = document.getElementById('adresse').value;
  const email = document.getElementById('email').value;

  // Validation du formulaire
  if (nom.length < 5 || prenom.length < 5 || adresse.length < 5 || !isValidDate(dateNaissance) || !isValidEmail(email)) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  // Ajout au localStorage
  contactStore.add(nom, prenom, dateNaissance, adresse, email);
  
  // Afficher la liste des contacts
  displayContactList();
  
  // Réinitialiser le formulaire
  document.getElementById('userForm').reset();
});

// Validation email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Validation date (ne doit pas être dans le futur)
function isValidDate(date) {
  const today = new Date();
  const inputDate = new Date(date);
  return inputDate <= today;
}

// Affichage du nombre de caractères en temps réel
function calcNbChar(id) {
  document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
}

// Fonction pour afficher la liste des contacts dans le tableau HTML
function displayContactList() {
  const contactListString = localStorage.getItem('contactList'); // Récupère la liste des contacts stockée dans localStorage
  const contactList = contactListString ? JSON.parse(contactListString) : [];

  const tbody = document.querySelector("table tbody"); // Sélectionne le corps du tableau
  tbody.innerHTML = "";  // Vider le tableau avant de le remplir

  // Boucle sur la liste des contacts et les insère dans le tableau
  contactList.forEach(contact => {
    tbody.innerHTML += `
      <tr>
        <td>${contact.name}</td>
        <td>${contact.firstname}</td>
        <td>${contact.date}</td>
        <td>${contact.adress}</td>
        <td>${contact.mail}</td>
      </tr>`;
  });
}


// Charger la liste des contacts au chargement de la page
window.onload = function () {
  displayContactList();
};
