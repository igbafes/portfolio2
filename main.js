const button = document.querySelector('button');
const body = document.querySelector ('body');
 const span = document.querySelector('.mode');

    span.addEventListener('click',() => {
    body.classList.toggle('dark');
    body.classList.toggle('dom');
     
  });