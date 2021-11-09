document.getElementById("send").addEventListener("click", function() {
  document.querySelector(".row2").style.display = "flex";
  document.querySelector(".row").style.display = "none";
})

var minGruppe=['Sussi', 'Xenia', 'Nanna', 'Oliver', 'Jonna'];

  if (minGruppe.length = 5) {
    console.log("Gruppen består af " + minGruppe.length + " medlemmer");

  } else {
    console.log("For få medlemmer, skaf en ekstra!");
}
