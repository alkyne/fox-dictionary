"use strict";

// 스크롤 산책 여우: 스크롤 진행도만큼 화면 하단을 걸어가며 발자국을 남긴다
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const fox = document.createElement("div");
  fox.id = "fox-walker";
  fox.textContent = "🦊";
  fox.setAttribute("aria-hidden", "true");
  document.body.appendChild(fox);

  let lastX = 0;
  let lastPrintX = 0;
  let facing = 1;
  let ticking = false;
  let prints = 0;

  function leavePrint(x, lift) {
    if (prints >= 10) return;
    const p = document.createElement("span");
    p.className = "fox-print";
    p.textContent = "🐾";
    p.setAttribute("aria-hidden", "true");
    p.style.left = x + 14 + "px";
    p.style.bottom = lift - 2 + "px";
    document.body.appendChild(p);
    prints++;
    setTimeout(() => { p.remove(); prints--; }, 1300);
  }

  const card = document.querySelector(".card");

  function update() {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    // 하얀 카드의 가로 범위 안에서만 산책 (뒤뚱거림 회전 여유 4px 포함)
    const rect = card ? card.getBoundingClientRect() : { left: 0, width: innerWidth, bottom: innerHeight };
    const x = rect.left + 4 + progress * Math.max(0, rect.width - 42);
    // 카드 하단 가장자리가 화면에 보이면 그만큼 여우를 카드 안쪽으로 올림
    const lift = Math.max(6, innerHeight - rect.bottom + 8);
    if (x !== lastX) facing = x > lastX ? 1 : -1;
    const wobble = Math.sin(x / 12) * 8; // 뒤뚱뒤뚱
    fox.style.bottom = lift + "px";
    fox.style.transform = `translateX(${x}px) scaleX(${facing}) rotate(${wobble}deg)`;
    if (Math.abs(x - lastPrintX) >= 48) { leavePrint(x, lift); lastPrintX = x; }
    lastX = x;
  }

  function onScrollOrResize() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  addEventListener("scroll", onScrollOrResize, { passive: true });
  addEventListener("resize", onScrollOrResize);
  update();
})();
