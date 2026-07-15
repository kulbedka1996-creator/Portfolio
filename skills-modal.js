// ===== Модалка «Скиллы» =====
(function(){
  const tpl = `
  <div class="skills-modal" id="skillsModal" role="dialog" aria-modal="true" aria-label="Скиллы">
    <div class="sm-backdrop"></div>
    <div class="sm-sheet">
      <img class="sm-bg" src="skills-assets/modal-bg.png" alt="">
      <button class="sm-close" aria-label="Закрыть">&#10005;</button>
      <div class="sm-head">
        <h2>Скиллы</h2>
        <p>От структуры до работающего проекта</p>
      </div>

      <div class="sm-card c-webux">
        <img src="skills-assets/card-webux.png" alt="">
        <div class="ct">
          <h3>Web /&nbsp;UX/UI</h3>
          <div class="sm-item"><span class="num">1</span>Анализ задачи и референсов</div>
          <div class="sm-item"><span class="num">2</span>Структура сайта / интерфейса</div>
          <div class="sm-item"><span class="num">3</span>Прототипирование</div>
          <div class="sm-item"><span class="num">4</span>Адаптивные макеты</div>
          <div class="sm-item"><span class="num">5</span>Компоненты и UI-kit</div>
          <div class="sm-item"><span class="num">6</span>Интерактивные прототипы</div>
          <div class="tools">Figma&nbsp;&nbsp;·&nbsp;&nbsp;Tilda</div>
        </div>
      </div>

      <div class="sm-card c-visual">
        <img src="skills-assets/card-visual.png" alt="">
        <div class="ct">
          <h3>Visual design</h3>
          <div class="cols">
            <div class="sm-item"><span class="num">1</span>Визуальная концепция</div>
            <div class="sm-item"><span class="num">3</span>Работа с фотографией</div>
            <div class="sm-item"><span class="num">2</span>Композиция и типографика</div>
            <div class="sm-item"><span class="num">4</span>Графические материалы</div>
          </div>
          <div class="tools">Figma&nbsp;&nbsp;·&nbsp;&nbsp;Photoshop&nbsp;&nbsp;·&nbsp;&nbsp;Illustrator</div>
        </div>
      </div>

      <div class="sm-card c-motion">
        <img src="skills-assets/card-motion.png" alt="">
        <div class="ct">
          <h3>Motion / Content</h3>
          <div class="row">
            <div class="sm-item"><span class="num">1</span>Микроанимация</div>
            <div class="sm-item"><span class="num">2</span>Монтаж</div>
            <div class="sm-item"><span class="num">3</span>Анимация графики</div>
          </div>
          <div class="tools">Premiere Pro&nbsp;&nbsp;·&nbsp;&nbsp;After Effects&nbsp;&nbsp;·&nbsp;&nbsp;CapCut</div>
        </div>
      </div>

      <div class="sm-card c-ai">
        <img src="skills-assets/card-ai.png" alt="">
        <div class="ct">
          <h3>AI</h3>
          <div class="row">
            <div class="sm-item"><span class="num">1</span>AI-визуалы и видео</div>
            <div class="sm-item"><span class="num">2</span>Исследование и поиск идей</div>
            <div class="sm-item"><span class="num">3</span>Вайб-кодинг</div>
          </div>
          <div class="tools">ChatGPT&nbsp;&nbsp;·&nbsp;&nbsp;Higgsfield&nbsp;&nbsp;·&nbsp;&nbsp;Nano Banana&nbsp;&nbsp;·&nbsp;&nbsp;Seedance&nbsp;&nbsp;·&nbsp;&nbsp;Kling&nbsp;&nbsp;·&nbsp;&nbsp;Codex&nbsp;&nbsp;·&nbsp;&nbsp;Claude Code</div>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', tpl);
  const modal = document.getElementById('skillsModal');

  function openModal(origin){ modal.classList.add('open'); document.body.style.overflow='hidden'; if(window.refreshBackdrop)window.refreshBackdrop(); var sheet=modal.querySelector('.sm-sheet'); if(!sheet)return; if(origin){ var s=origin.getBoundingClientRect(),t=sheet.getBoundingClientRect(); var dx=(s.left+s.width/2)-(t.left+t.width/2), dy=(s.top+s.height/2)-(t.top+t.height/2); sheet.style.transition='none'; sheet.style.transform='translate('+dx+'px,'+dy+'px) scale(.12) rotate(-8deg)'; sheet.getBoundingClientRect(); sheet.style.transition='transform .5s cubic-bezier(.34,1.45,.5,1)'; sheet.style.transform='none'; setTimeout(function(){ sheet.style.transition=''; sheet.style.transform=''; },520); } else { sheet.style.animation='none'; sheet.getBoundingClientRect(); sheet.style.animation='sheetCut .24s ease'; setTimeout(function(){ sheet.style.animation=''; },260); } }
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; if(window.refreshBackdrop)window.refreshBackdrop(); }

  window.modalOpeners = window.modalOpeners || {};
  window.modalOpeners.skills = openModal;
  window.modalClosers = window.modalClosers || {};
  window.modalClosers.skills = closeModal;

  const skillsBtn = document.querySelector('.note.n1');
  if (skillsBtn) skillsBtn.addEventListener('click', e => { e.preventDefault(); openModal(skillsBtn); });

  modal.querySelector('.sm-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.sm-close').addEventListener('click', closeModal);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // мини-стикер «Проекты» переключает модалки
  modal.querySelectorAll('.mini[data-open]').forEach(b=>{
    b.addEventListener('click', ()=>{
      if(b.classList.contains('active')) return;
      const t=b.dataset.open;
      if(window.modalOpeners[t]) window.modalOpeners[t]();
      modal.classList.remove('open'); if(window.refreshBackdrop)window.refreshBackdrop(); // общий фон держится константой
    });
  });
})();
