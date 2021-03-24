const openForm = document.querySelector('.openForm');
const form = document.querySelector('#form');
const worksData = [];
const addButton = document.querySelector('.addTodo');
const renderSection = document.querySelector('#list-item');
const deleteButtons = document.querySelectorAll('.deleteTodo');
openForm.addEventListener('click',openField);
addButton.addEventListener('click',add);

function openField(){ 
    form.classList.toggle('d-none');
}
function getLocalStorage(){
    let getWorks = localStorage.getItem('todoList');
    if(!getWorks){
        array = [];
    }else{
        array = JSON.parse(getWorks);
    }
}

render();
function render(){
    getLocalStorage();
    let rows = "";
  
    array.forEach((item)=>{
        rows += '<tr>'+
        '<td>'+item.id+'</td>'+
        '<td>'+item.workName+'</td>'+
        '<td>'+item.startAt+'</td>'+
        '<td>'+item.endAt+'</td>'+
        '<td>'+item.createBy+'</td>'+
        '<td>'+'<a class="btn btn-danger deleteTodo" data-id="'+item.id+'">'+'<i class="fas fa-times text-white"></i>'+'</a>'+'</td>'+
        '<td>'+'<a class="btn btn-warning editTodo" data-id="'+item.id+'">'+'<i class="fas fa-edit text-white"></i>'+'</a>'+'</td>'+
        '<td>'+'<a class="btn btn-info viewTodo" data-id="'+item.id+'">'+'<i class="fas fa-info text-white"></i>'+'</a>'+'</td>'+
        '</tr>';
    })
    renderSection.innerHTML = rows;
}
let inputs = form.getElementsByTagName('input');
function add(event){
    event.preventDefault();
    let workItem = {};
    [...inputs].forEach(item=>workItem[item.name] = item.value);
    getLocalStorage();
    workItem["id"] = array.length +1;
    array.push(workItem);
    localStorage.setItem('todoList',JSON.stringify(array));
    render();
}

function deleteTodo(id){
    console.log(id);
    getLocalStorage();
    console.log(array[id]);
    // array.filter((item)=>{
    //     return item.id != id;
    // })
    // localStorage.setItem('todoList',JSON.stringify(array));
    // render();
    // console.log(array);
}
let deleteAction = renderSection.querySelectorAll('.deleteTodo');
[...deleteAction].forEach(item=>{
    item.addEventListener('click',()=>{
        deleteTodo(item.getAttribute('data-id'));
    })
})





