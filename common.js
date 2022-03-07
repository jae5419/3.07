const todoInput=document.querySelector("#todoInput");
const todoList=document.querySelector("#todoList");
const count=document.querySelector("#count");
todoList.style.listStyle="none";

function addList(e) {
  e.preventDefault();
  let li=document.createElement("li");

  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.addEventListener("click", todoCheck);
  checkbox.addEventListener("click", todoCount);

  const text=document.createTextNode(todoInput.firstElementChild.value);

  const button=document.createElement("button");
  button.textContent="X";
  button.addEventListener("click", todoDelete);
  button.addEventListener("click", todoCount);

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(button);

  todoList.appendChild(li);
  todoInput.firstElementChild.value="";
}

todoInput.addEventListener("submit", addList);

function todoCheck(e) {
  if (e.target.checked)
  {
    e.target.parentNode.style.color="gray";
  }
  else
  {
    e.target.parentNode.style.color="black";
  }
}

function todoDelete(e) {
  e.target.parentNode.remove();
}

function todoCount() {
  let cnt=0;
  
  for (let i=0; i<todoList.childNodes.length; i++)
  {
    if (todoList.childNodes[i].firstChild.checked)
    {
      cnt++;
    }
  }
  count.textContent="오늘 완료한 할일 : "+cnt+"개";
}
