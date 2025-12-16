const btnPT = document.getElementById('btn-pt');
const btnEN = document.getElementById('btn-en');
const downloadBtn = document.getElementById('download-pdf');

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const rec = T[key];
    if(rec && rec[lang]) el.textContent = rec[lang];
  });
  btnPT.classList.toggle('active', lang==='pt');
  btnEN.classList.toggle('active', lang==='en');
}

btnPT.addEventListener('click', ()=> applyLang('pt'));
btnEN.addEventListener('click', ()=> applyLang('en'));
applyLang('pt');

// PDF com html2pdf.js
downloadBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const element = document.body;
  html2pdf().set({
    margin: 10,
    filename: 'Joao_Fonseca_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save();
});

console.log("script.js carregado OK");
