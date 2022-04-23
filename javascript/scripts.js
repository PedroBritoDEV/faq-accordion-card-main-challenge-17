var questions = document.querySelectorAll('.second-content>div');


questions.forEach(item =>{

  item.addEventListener('click', () =>{
    for (i = 0; questions.length>i; i++){
      questions[i].children[0].children[0].classList.remove('active')
      questions[i].children[0].children[1].classList.add('image-rotate')
      questions[i].children[1].classList.add('hidden')
    }
    item.children[0].children[0].classList.toggle('active')
    item.children[0].children[1].classList.toggle('image-rotate')
    item.children[1].classList.toggle('hidden')
  });
});