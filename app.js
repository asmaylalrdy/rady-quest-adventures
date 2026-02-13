function updateProgress() {
  const level = getLevel(xp);
  const xpNext = getXPForNextLevel(level);
  const percent = Math.min((xp / xpNext) * 100, 100);

  const bar = document.getElementById("progress-bar");
  bar.style.width = percent + "%";

  // تغيير اللون حسب المستوى
  bar.className = ""; // إزالة أي كلاس سابق
  bar.classList.add("level-" + level);

  document.getElementById("levelDisplay").innerText =
    "Level: " + level + " | XP: " + xp + " / " + xpNext;
}
