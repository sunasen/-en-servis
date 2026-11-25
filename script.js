const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

const cfg=window.SEN_CONTACT||{};
for (const el of document.querySelectorAll('[data-contact]')) {
 const k=el.dataset.contact, v=(cfg[k]||'').trim();
 if (!v) continue;
 const digits=v.replace(/\D/g,'').replace(/^0/,'90');
 el.href=k==='email'?'mailto:'+v:k.startsWith('phone')?'tel:+'+digits:k.startsWith('whatsapp')?'https://wa.me/'+digits:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(v);
 el.querySelector('strong').textContent=v;
}
if(cfg.hours) document.querySelector('[data-hours]').textContent=cfg.hours;

if(!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.section,.service-card').forEach(e=>{e.classList.add('reveal');observer.observe(e);});}

const photoDialog=document.querySelector('#photo-dialog');document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{photoDialog.querySelector('img').src=b.dataset.photo;photoDialog.showModal()}));photoDialog.querySelector('button').addEventListener('click',()=>photoDialog.close());photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)photoDialog.close()});
