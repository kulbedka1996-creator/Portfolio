// ===== Модалка «Проекты» =====
(function(){
  const arrow = `<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5 8.5 1.5M3 1.5h5.5V7" stroke="#000060" stroke-width="1.3" stroke-linecap="round"/></svg>`;

  const cases = [
    {cls:'pm-c1', img:'projects-assets/stereo.png',  title:'Stereo<br>room',   tags:['E-commerce','UX/UI'],
     url:'https://www.behance.net/gallery/244896173/STEREO-ROOM-online-vinyl-store'},
    {cls:'pm-c2', img:'projects-assets/noxi.png',    title:'Noxi AI',          tags:['Mobile app','UX/UI'],
     url:'https://www.behance.net/gallery/246233843/Noxi-AI-Sleep-Calm-App-Concept'},
    {cls:'pm-c3', img:'projects-assets/offtrail.png',title:'OFFtrail',         tags:['Promo landing','Web design'],
     url:'https://www.behance.net/gallery/246960855/OFFtrail-Promo-Landing-Page'},
    {cls:'pm-c4', img:'projects-assets/teatr.png',   title:'Театр<br>Trip&amp;play', tags:['Website redesign','UX/UI'],
     url:'https://www.behance.net/gallery/248147893/Tripandplay-Theatre-Website-Redesign'}
  ];

  const cardsHtml = cases.map(c=>`
    <a class="pm-card ${c.cls}" href="${c.url}" target="_blank" rel="noopener">
      <img class="pm-paper" src="projects-assets/card.png" alt="">
      <img class="pm-cover" src="${c.img}" alt="">
      <span class="pm-grain"></span>
      <div class="pm-info">
        <h3>${c.title}</h3>
        <div class="pm-tags">${c.tags.map(t=>`<span class="pm-tag">${t}</span>`).join('')}</div>
        <span class="pm-link">Смотреть кейс ${arrow}</span>
      </div>
    </a>`).join('');

  const tpl = `
  <div class="projects-modal" id="projectsModal" role="dialog" aria-modal="true" aria-label="Проекты">
    <div class="pm-backdrop"></div>
    <div class="pm-sheet">
      <img class="pm-bg" src="projects-assets/modal-bg.png" alt="">
      <button class="pm-close" aria-label="Закрыть">&#10005;</button>
      <div class="pm-head">
        <h2>Проекты</h2>
        <p>Кейсы на Behance</p>
      </div>
      ${cardsHtml}
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', tpl);
  const modal = document.getElementById('projectsModal');

  function openModal(origin){ modal.classList.add('open'); document.body.style.overflow='hidden'; if(window.refreshBackdrop)window.refreshBackdrop(); var sheet=modal.querySelector('.pm-sheet'); if(!sheet)return; if(origin){ var s=origin.getBoundingClientRect(),t=sheet.getBoundingClientRect(); var dx=(s.left+s.width/2)-(t.left+t.width/2), dy=(s.top+s.height/2)-(t.top+t.height/2); sheet.style.transition='none'; sheet.style.transform='translate('+dx+'px,'+dy+'px) scale(.12) rotate(-8deg)'; sheet.getBoundingClientRect(); sheet.style.transition='transform .5s cubic-bezier(.34,1.45,.5,1)'; sheet.style.transform='none'; setTimeout(function(){ sheet.style.transition=''; sheet.style.transform=''; },520); } else { sheet.style.animation='none'; sheet.getBoundingClientRect(); sheet.style.animation='sheetCut .24s ease'; setTimeout(function(){ sheet.style.animation=''; },260); } }
  function closeModal(){ modal.classList.remove('open'); document.body.style.overflow=''; if(window.refreshBackdrop)window.refreshBackdrop(); }

  window.modalOpeners = window.modalOpeners || {};
  window.modalOpeners.projects = openModal;
  window.modalClosers = window.modalClosers || {};
  window.modalClosers.projects = closeModal;

  const btn = document.querySelector('.note.n2');
  if (btn) btn.addEventListener('click', e => { e.preventDefault(); openModal(btn); });

  modal.querySelector('.pm-backdrop').addEventListener('click', closeModal);
  modal.querySelector('.pm-close').addEventListener('click', closeModal);
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // мини-стикер «Скиллы» переключает модалки
  modal.querySelectorAll('.mini[data-open]').forEach(b=>{
    b.addEventListener('click', ()=>{
      if(b.classList.contains('active')) return;
      const t=b.dataset.open;
      if(window.modalOpeners[t]) window.modalOpeners[t]();
      modal.classList.remove('open'); if(window.refreshBackdrop)window.refreshBackdrop(); // общий фон держится константой
    });
  });
})();
