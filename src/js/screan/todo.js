const toDoForm = document.getElementById("comment-form");
const toDoList = document.getElementById("comment-list");
const toDoInput = document.querySelector("#comment-form input");

const TODOS_KEY = "todos";

let toComment = [];

function savedToComment() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toComment));
}

function deleteToComment(event) {
  const li = event.target.parentElement;
  li.remove();
  const li_ID = li.id;

  toComment = toComment.filter((toDo) => toDo.id !== parseInt(li_ID));
  savedToComment();
}

function paintToComment(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("comment_li");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("comment_span");
  const div = document.createElement("div");
  div.classList.add("comment-list_button");

  const button = document.createElement("button");
  button.classList.add("commentlist_delete_button");
  button.addEventListener("click", deleteToComment);
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToCommentSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toComment.push(newTodoObj);
  paintToComment(newTodoObj);
  savedToComment();
}

toDoForm.addEventListener("submit", handleToCommentSubmit);

const savedToCommentss = localStorage.getItem(TODOS_KEY);

if (savedToCommentss !== null) {
  const parseToComments = JSON.parse(savedToCommentss); // localStorage에 받은것들을 배열로 저장
  toComment = parseToComments;
  parseToComments.forEach(paintToComment);
}
