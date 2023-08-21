document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  })
});

function buildToDo(todo) {

  if (todo === '') {
    alert('You must submit Todo!')
  } else {
    let li = document.createElement('li');
  li.innerHTML = `${todo} `
  let exitBtn = document.createElement('button');
  exitBtn.innerHTML = 'x'
  exitBtn.addEventListener('click', handleDelete)

  li.appendChild(exitBtn);
  document.querySelector('#tasks').appendChild(li);
  }

  
}

function handleDelete(e) {
  e.target.parentNode.remove();
}