AOS.init({duration:900, once:true, easing:'ease-out-cubic'});
document.querySelectorAll('.card-3d').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const rect=card.getBoundingClientRect(); const x=e.clientX-rect.left-rect.width/2; const y=e.clientY-rect.top-rect.height/2;
    card.style.transform=`rotateY(${x/18}deg) rotateX(${-y/18}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', ()=>{card.style.transform='rotateY(-8deg) rotateX(6deg)';});
});