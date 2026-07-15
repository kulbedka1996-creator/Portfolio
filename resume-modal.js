// ===== Модалка «Резюме» =====
(function(){
  const dot = `<span class="rm-dot"></span>`;

  const tpl = `
  <div class="resume-modal" id="resumeModal" role="dialog" aria-modal="true" aria-label="Резюме">
    <div class="rm-backdrop"></div>
    <div class="rm-sheet">
      <img class="rm-bg" src="skills-assets/modal-bg.png" alt="">
      <button class="rm-close" aria-label="Закрыть">&#10005;</button>
      <div class="rm-head">
        <h2>Резюме</h2>
        <p>Коротко обо мне и моём опыте</p>
      </div>

      <div class="rm-name">
        <h3>Кульбеда Анастасия</h3>
        <span class="rm-plaque"><img src="resume-assets/plaque.png" alt=""><span>Веб-дизайнер</span></span>
        <p class="rm-desc">Создаю сайты, интерфейсы и Digital-проекты<br>с цельной визуальной системой и анимацией</p>
      </div>

      <div class="rm-photo"><img src="resume-assets/photo.png" alt="Анастасия Кульбеда"></div>
      <div class="rm-clip"><img src="resume-assets/clip.png" alt=""></div>

      <a class="rm-btn" href="resume-assets/resume.pdf" download>
        <img src="resume-assets/button.png" alt="">
        <span>Скачать резюме PDF &#8595;</span>
      </a>

      <div class="rm-exp-head">
        <div class="hwrap"><h3>Опыт</h3><span class="rm-line"></span></div>
        <span class="rm-plaque2"><img src="resume-assets/plaque.png" alt=""><span>2+ года в дизайне</span></span>
      </div>

      <div class="rm-exp">
        <div class="rm-exp-row">
          <span class="rm-year"><img src="skills-assets/card-webux.png" alt=""><span>2025 -<br>сейчас</span></span>
          <div class="rm-exp-title"><span class="bul">Веб-дизайнер</span><span class="bul">Проектная работа</span></div>
          <p class="rm-exp-desc">Сайты, лендинги. Структура, прототипы,<br>визуальная концепция и адаптивные макеты</p>
        </div>
        <div class="rm-exp-row">
          <span class="rm-year"><img src="skills-assets/card-webux.png" alt=""><span>2023 -<br>2025</span></span>
          <div class="rm-exp-title"><span class="bul">ФГБУ «Росдетцентр»</span><span class="bul">«Навигаторы детства»</span></div>
          <p class="rm-exp-desc">Digital-коммуникации, презентации, соцсети,<br>видео и материалы для мероприятий</p>
        </div>
      </div>

      <div class="rm-edu-head"><h3>Образование</h3><span class="rm-line"></span></div>
      <div class="rm-edu">
        <div class="rm-edu-row">
          <img class="strip" src="resume-assets/strip.png" alt="">
          <div class="cnt"><span class="yr">2026</span><span class="vline"></span>
            <span class="txt"><b class="en">UX/UI-дизайн</b><span class="esc">Kutuzova School</span></span></div>
        </div>
        <div class="rm-edu-row">
          <img class="strip" src="resume-assets/strip.png" alt="">
          <div class="cnt"><span class="yr">2024</span><span class="vline"></span>
            <span class="txt"><b class="en">Графический дизайн</b><span class="esc">Школа Кима Воронина</span></span></div>
        </div>
        <div class="rm-edu-row">
          <img class="strip" src="resume-assets/strip.png" alt="">
          <div class="cnt"><span class="yr">2020</span><span class="vline"></span>
            <span class="txt"><b class="en">Высшее образование</b><span class="esc">ТюмГУ</span></span></div>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', tpl);
  const modal = document.getElementById('resumeModal');

  function openModal(origin){ modal.classList.add('open'); document.body.style.overflow='hidden'; if(window.refreshBackdrop)window.refreshBackdrop(); var sheet=modal.querySelector('.rm-sheet'); if(!sheet)return; if(origin){ var s=origin.getBoundingClientRect(),t=sheet.getBoundingClientRect(); var dx=(s.left+s.width/2)-(t.left+t.width/2), dy=(s.top+s.height/2)-(t.top+t.height/2); sheet.style.transition='none'; sheet.style.transform='translate('+dx+'px,'+dy+'px) scale(.12) rotate(-8deg)'; sheet.getBoundingClientRect(); sheet.style.transition='transform .5s cubic-bezier(.34,1.45,.5,1)'; sheet.style.transform='none'; setTimeout(function(){ sheet.style.transition=''; sheet.style.transform=''; },520); } else { sheet.style.animation='none'; sheet.getBoundingClientRect(); sheet.style.animation='sheetCut .24s ease'; setTimeout(function(){ sheet.style.animation=''; },260); } }
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; if(window.refreshBackdrop)window.refreshBackdrop(); }

  window.modalOpeners = window.modalOpeners || {};
  window.modalOpeners.resume = openModal;
  window.modalClosers = window.modalClosers || {};
  window.modalClosers.resume = closeModal;

  const btn = document.querySelector('.note.n3');
  if (btn) btn.addEventListener('click', e => { e.preventDefault(); openModal(btn); });

  modal.querySelector('.rm-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.rm-close').addEventListener('click', closeModal);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  modal.querySelectorAll('.mini[data-open]').forEach(b=>{
    b.addEventListener('click', ()=>{
      if(b.classList.contains('active')) return;
      const t=b.dataset.open;
      if(window.modalOpeners[t]) window.modalOpeners[t]();
      modal.classList.remove('open'); if(window.refreshBackdrop)window.refreshBackdrop(); // общий фон держится константой
    });
  });
})();
