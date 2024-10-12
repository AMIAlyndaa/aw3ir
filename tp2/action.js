document.getElementById('inscriptionForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

 
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const dateNaissance = document.getElementById('date_naissance').value;
  const sexe = document.querySelector('input[name="sexe"]:checked').value;
  const pays = document.getElementById('pays').value;

  
  const params = new URLSearchParams({
    nom: nom,
    prenom: prenom,
    email: email,
    date_naissance: dateNaissance,
    sexe: sexe,
    pays: pays,
  });

 
  window.location.href = 'action.html?' + params.toString();
});
