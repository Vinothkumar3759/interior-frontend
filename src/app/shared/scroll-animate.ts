import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

export function initScrollAnimations(platformId: Object) {

  // 🚨 IMPORTANT: Run ONLY in browser
  if (!isPlatformBrowser(platformId)) {
    return;
  }

  const elements = document.querySelectorAll(
    '.fade-up, .slide-left, .slide-right, .reveal'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => observer.observe(el));
}
