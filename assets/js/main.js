
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (btn && links) btn.addEventListener('click', () => links.classList.toggle('open'));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const canvas = document.getElementById('spectrumCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const DPR = window.devicePixelRatio || 1;
  function size() {
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width * DPR;
    canvas.height = r.height * DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  function draw(t=0){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    const g = ctx.createLinearGradient(0,0,w,0);
    g.addColorStop(0,'#22b8ff'); g.addColorStop(.45,'#6de3ff');
    g.addColorStop(.72,'#7a5cff'); g.addColorStop(1,'#d94df2');
    ctx.strokeStyle = g; ctx.lineWidth = 2.4;
    for(let k=0;k<6;k++){
      ctx.beginPath();
      for(let x=0;x<=w;x+=3){
        const phase = x/w*13 + t*.0014 + k*.65;
        const envelope = Math.exp(-Math.pow((x-w*.54)/(w*.42),2));
        const y = h*.52 + Math.sin(phase)*20*envelope + Math.sin(phase*2.2)*7 + (k-2.5)*9;
        x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
      }
      ctx.globalAlpha=.19+k*.09; ctx.stroke();
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  size(); window.addEventListener('resize',size); requestAnimationFrame(draw);
}
