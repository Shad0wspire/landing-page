function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}
