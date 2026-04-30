// 目前為 MVP，保留空間給未來擴充

// Example: smooth scroll（可選）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// 在原本的 JS 中加入「隨機撒花」或「角色出現」的效果
document.addEventListener('DOMContentLoaded', () => {
  // 建立一個浮動的小插圖 (如果之後你有角色圖檔)
  const floatingChar = document.createElement('div');
  floatingChar.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.3s;
  `;
  floatingChar.innerHTML = "₍ᐢˊo  oˋᐢ₎"; // 簡單的顏文字代表
  document.body.appendChild(floatingChar);

  floatingChar.addEventListener('mouseover', () => {
    floatingChar.style.transform = 'scale(1.2) rotate(10deg)';
  });
  
  floatingChar.addEventListener('mouseleave', () => {
    floatingChar.style.transform = 'scale(1) rotate(0deg)';
  });
});
