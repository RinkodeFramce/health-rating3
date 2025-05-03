// js/theme.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Проверяем сохранённую тему
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      body.classList.add("dark");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Меняем иконку
    }
  
    // Переключение темы по клику
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
  
      // Сохраняем тему в localStorage
      const isDark = body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
  
      // Меняем иконку
      toggleBtn.innerHTML = isDark 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    });
  });