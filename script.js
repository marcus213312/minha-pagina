// script.js — navegação dos botões principais
document.addEventListener("DOMContentLoaded", ()=> {
  // botões da nav na página principal
  document.querySelectorAll(".nav .btn").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const target = e.currentTarget.getAttribute("data-target");
      // abre na mesma aba:
      window.location.href = target;
      // se preferir abrir em nova aba, use:
      // window.open(target, "_blank");
    });
  });
});
