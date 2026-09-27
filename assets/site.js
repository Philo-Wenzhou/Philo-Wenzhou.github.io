'use strict';
const button = document.querySelector('#language');
const translations = [...document.querySelectorAll('[data-zh]')].map(node => ({node, en:node.textContent, zh:node.dataset.zh}));
function setLanguage(language) {
  const chinese = language === 'zh';
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  for (const item of translations) item.node.textContent = chinese ? item.zh : item.en;
  button.textContent = chinese ? 'English' : '中文';
  button.setAttribute('aria-label', chinese ? 'Switch to English' : '切换为中文');
  document.title = chinese ? 'Wenxing Yi | 研究与工程实践' : 'Wenxing Yi | Research & Engineering';
  try { localStorage.setItem('wy-language', language); } catch (_) { /* Works without storage. */ }
}
button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('wy-language') === 'zh') setLanguage('zh'); } catch (_) { /* English is the static default. */ }
