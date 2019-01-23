function updateIndicator() {
     document.getElementById('online').textContent = navigator.onLine ? 'online' : 'offline';
}


window.addEventListener('load', updateIndicator);
window.addEventListener('online', updateIndicator);
window.addEventListener('offline', updateIndicator);

