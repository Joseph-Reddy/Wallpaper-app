// For a prototype you can keep small images in /images. For production, host them in Azure Blob Storage & use URLs.
const wallpapers = [
  { id:1, title:"Aurora", thumb:"images/aurora-thumb.jpg", full:"images/aurora.jpg" },
  { id:2, title:"Mountains", thumb:"images/mtn-thumb.jpg", full:"images/mtn.jpg" },
  { id:3, title:"City Night", thumb:"images/city-thumb.jpg", full:"images/city.jpg" }
];

const gallery = document.getElementById('gallery');
wallpapers.forEach(w=>{
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<img loading="lazy" src="${w.thumb}" alt="${w.title}"><div class="meta">${w.title}</div>`;
  card.addEventListener('click', ()=>openModal(w));
  gallery.appendChild(card);
});

const modal = document.getElementById('modal'), closeBtn = document.getElementById('close');
const modalImg = document.getElementById('modal-img'), downloadBtn = document.getElementById('download-btn');

function openModal(w){
  modal.classList.remove('hidden');
  modalImg.src = w.full;
  downloadBtn.href = w.full;
  downloadBtn.setAttribute('download', `${w.title}.jpg`);
  modal.setAttribute('aria-hidden','false');
}
closeBtn.addEventListener('click', ()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); });
window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeBtn.click(); });
