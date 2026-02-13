let xp = localStorage.getItem("xp") || 0;

document.getElementById("xpDisplay").innerText = "XP: " + xp;

function goToQuests() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quests").classList.remove("hidden");
}

function goToAchievements() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("achievements").classList.remove("hidden");
  document.getElementById("xpDisplay").innerText = "XP: " + xp;
}

function goHome() {
  document.getElementById("quests").classList.add("hidden");
  document.getElementById("achievements").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function startQuest() {
  xp = parseInt(xp) + 100;
  localStorage.setItem("xp", xp);
  alert("Quest completed! XP: " + xp);
}
