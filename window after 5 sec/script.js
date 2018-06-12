var delay_popup = 1000;
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);
document.getElementById("closeModal").onclick = closeModalWindow;
function closeModalWindow () {
	document.getElementById('bg_popup').style.display='none'; return false;
}
