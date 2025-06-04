document.addEventListener("DOMContentLoaded", () => {
  console.log("Clock starting...");

  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(`Time: ${hours}:${minutes}:${seconds}`);

    // Remove transition effect at the 59/60 second mark to prevent hand flip
    if (seconds === 0) {
      secondHand.style.transition = "none";
      minsHand.style.transition = "none";
      hourHand.style.transition = "none";
    } else {
      secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
      minsHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
      hourHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }
  }

  setInterval(setDate, 1000);
  setDate(); // Call once initially
});
