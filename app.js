// جلب XP من التخزين أو البداية من 0
let xp = parseInt(localStorage.getItem("xp")) || 0;

// قائمة المهام المكتملة لتظهر في الإنجازات
let completedQuests = JSON.parse(localStorage.getItem("completedQuests")) || [];

// دالة تحديد المستوى حسب XP
function getLevel(xp) {
  if (xp >= 1000) return 4;
  if (xp >= 500) return 3;
  if (xp >= 200) return 2;
  return 1;
}

// دالة جلب XP المطلوب للوصول للـ Level التالي
function getXPForNextLevel(level) {
  switch(level) {
    case 1: return 200;
    case 2: return 500;
    case 3: return 1000;
    default: return 1000; // أقصى مستوى
  }
}

// دالة تحديث Progress Bar والنص
function updateProgress() {
  const level = getLevel(xp);
  const xpNext = getXPForNextLevel(level);
  const percent = Math.min((xp / xpNext) * 100, 100);

  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("levelDisplay").innerText =
    "Level: " + level + " | XP: " + xp + " / " + xpNext;
}

// تحديث Progress عند بداية الصفحة
updateProgress();

// تحديث قائمة الإنجازات
function updateAchievements() {
  const list = document.getElementById("completed-quests");
  list.innerHTML = "";
  completedQuests.forEach((quest, index) => {
    const li = document.createElement("li");
    li.textContent = quest;
    list.appendChild(li);
  });
  document.getElementById("xpDisplay").innerText =
    "Level: " + getLevel(xp) + " | XP: " + xp;
}

// دوال التنقل بين الصفحات
function goToQuests() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quests").classList.remove("hidden");
}

function goToAchievements() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("achievements").classList.remove("hidden");
  updateProgress();
  updateAchievements();
}

function goHome() {
  document.getElementById("quests").classList.add("hidden");
  document.getElementById("achievements").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  updateProgress();
}

// دالة إكمال أي مهمة بمكافأة محددة
function completeQuest(xpReward, questName) {
  xp += xpReward;
  localStorage.setItem("xp", xp);

  completedQuests.push(questName);
  localStorage.setItem("completedQuests", JSON.stringify(completedQuests));

  alert(questName + " اكتملت! + " + xpReward + " XP");
  updateProgress();
  updateAchievements();
}
