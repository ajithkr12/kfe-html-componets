function openPopup(popupId, overlayId) {
  document.getElementById(popupId).style.display = "block";
  document.getElementById(overlayId).style.display = "block";
}

function closePopup(popupId, overlayId) {
  document.getElementById(popupId).style.display = "none";
  document.getElementById(overlayId).style.display = "none";
}
