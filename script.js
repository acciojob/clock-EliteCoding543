//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    timer.textContent = now.toLocaleString();
}

updateTimer(); // Show immediately
setInterval(updateTimer, 1000); // Update every second