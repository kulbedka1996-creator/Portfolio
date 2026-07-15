// ===== Модалка «Контакты» =====
(function(){
  const arrowUp = `<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5 8.5 1.5M3 1.5h5.5V7" stroke="#f2e8df" stroke-width="1.3" stroke-linecap="round"/></svg>`;

  const tpl = `
  <div class="contacts-modal" id="contactsModal" role="dialog" aria-modal="true" aria-label="Контакты">
    <div class="cm-backdrop"></div>
    <div class="cm-sheet">
      <img class="cm-bg" src="skills-assets/modal-bg.png" alt="">
      <button class="cm-close" aria-label="Закрыть">&#10005;</button>
      <div class="cm-head">
        <h2>Контакты</h2>
        <p>Открыта к работе в креативной команде</p>
      </div>

      <svg class="cm-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4.2C15.4 9.4 10.6 13.9 5.4 18.7M6 10.6C5.5 13.4 5.2 16.1 4.9 19c2.8-.4 5.4-.2 8.1-.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div class="cm-card">
        <img src="contacts-assets/card-beige.png" alt="">
        <div class="ct">
          <h3>Давайте<br>познакомимся</h3>
          <p class="cm-sub">Веб-дизайнер · сайты, интерфейсы</p>
          <a class="cm-tgbtn" href="https://t.me/Kulbeda_design" target="_blank" rel="noopener">
            <img src="resume-assets/button.png" alt="">
            <span>Написать в Telegram ${arrowUp}</span>
          </a>
          <a class="cm-handle" href="https://t.me/Kulbeda_design" target="_blank" rel="noopener">@Kulbeda_design</a>
        </div>
      </div>

      <a class="cm-strip cm-s1" href="mailto:Kulbeda.Anastasia@yandex.ru">
        <img class="bg" src="resume-assets/strip.png" alt="">
        <div class="txt"><h4>Email</h4><p>Kulbeda.Anastasia@yandex.ru</p></div>
      </a>
      <div class="cm-clip"><img src="resume-assets/clip.png" alt=""></div>

      <a class="cm-strip cm-s2" href="https://vk.com/kulbeda_design" target="_blank" rel="noopener">
        <img class="bg" src="contacts-assets/strip-blue.png" alt="">
        <div class="txt"><h4>VK</h4><p>Kulbeda_design</p></div>
      </a>

      <a class="cm-strip cm-s3" href="https://t.me/Coolbedka" target="_blank" rel="noopener">
        <img class="bg" src="resume-assets/strip.png" alt="">
        <div class="txt"><h4>Telegram-канал</h4><p>@Coolbedka</p></div>
      </a>

      <div class="cm-open">
        <img src="contacts-assets/sticker-purple.png" alt="">
        <span>OPEN<br>TO<br>WORK</span>
      </div>

      <div class="cm-tape">
        <img src="contacts-assets/tape.png" alt="">
        <div class="txt">Работа в штате<span class="cm-dot"></span>Проектная работа<span class="cm-dot"></span>Удалённо</div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', tpl);
  const modal = document.getElementById('contactsModal');

  function openModal(origin){ modal.classList.add('open'); document.body.style.overflow='hidden'; if(window.refreshBackdrop)window.refreshBackdrop(); var sheet=modal.querySelector('.cm-sheet'); if(!sheet)return; if(origin){ var s=origin.getBoundingClientRect(),t=sheet.getBoundingClientRect(); var dx=(s.left+s.width/2)-(t.left+t.width/2), dy=(s.top+s.height/2)-(t.top+t.height/2); sheet.style.transition='none'; sheet.style.transform='translate('+dx+'px,'+dy+'px) scale(.12) rotate(-8deg)'; sheet.getBoundingClientRect(); sheet.style.transition='transform .5s cubic-bezier(.34,1.45,.5,1)'; sheet.style.transform='none'; setTimeout(function(){ sheet.style.transition=''; sheet.style.transform=''; },520); } else { sheet.style.animation='none'; sheet.getBoundingClientRect(); sheet.style.animation='sheetCut .24s ease'; setTimeout(function(){ sheet.style.animation=''; },260); } }
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; if(window.refreshBackdrop)window.refreshBackdrop(); }

  window.modalOpeners = window.modalOpeners || {};
  window.modalOpeners.contacts = openModal;
  window.modalClosers = window.modalClosers || {};
  window.modalClosers.contacts = closeModal;

  const btn = document.querySelector('.note.n4');
  if (btn) btn.addEventListener('click', e => { e.preventDefault(); openModal(btn); });

  modal.querySelector('.cm-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.cm-close').addEventListener('click', closeModal);
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
