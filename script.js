// ===== Drawer Mobile =====
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  drawer.setAttribute('aria-hidden', !open);
});

// ===== Countdown =====
const countdown = () => {
  const countDate = new Date("December 20, 2025 15:30:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById('dd').innerText = Math.floor(gap / day).toString().padStart(2,'0');
  document.getElementById('hh').innerText = Math.floor((gap % day)/hour).toString().padStart(2,'0');
  document.getElementById('mm').innerText = Math.floor((gap % hour)/minute).toString().padStart(2,'0');
  document.getElementById('ss').innerText = Math.floor((gap % minute)/second).toString().padStart(2,'0');
};
setInterval(countdown, 1000);
countdown();

// ===== RSVP =====
document.getElementById("rsvp-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = this.name.value;
  const attendance = this.attendance.value;
  alert(`Terima kasih ${name}, konfirmasi Anda: ${attendance}`);
  this.reset();
});


// ===== Copy Gift =====
document.querySelectorAll('.gift-item button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const val = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(val).then(()=>{btn.innerText='Disalin!';setTimeout(()=>btn.innerText='Salin',1500);});
  });
});

// ===== Share =====
document.getElementById('copyLink').addEventListener('click', ()=>{
  navigator.clipboard.writeText(window.location.href).then(()=>alert('Link undangan disalin!'));
});
document.getElementById('waShare').addEventListener('click', ()=>{
  const text = `Undangan Pernikahan Panji & Jihan: ${window.location.href}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url,'_blank');
});
