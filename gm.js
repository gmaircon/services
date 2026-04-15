// ================= SCRIPT.JS =================

const burger=document.getElementById('burger');
const nav=document.getElementById('nav-menu');

burger.addEventListener('click',()=>nav.classList.toggle('active'));

function openModal(title,img){
 document.getElementById('modalTitle').innerText=title;
 document.getElementById('modalImg').src=img;
 document.getElementById('modal').classList.add('show');
}

function closeModal(){
 document.getElementById('modal').classList.remove('show');
}
