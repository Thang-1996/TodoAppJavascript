const openForm = document.querySelector('.openForm');
const form = document.querySelector('#form');
const worksData = [];
const addButton = document.querySelector('.addTodo');
const renderSection = document.querySelector('#list-item');
openForm.addEventListener('click',openField);
addButton.addEventListener('click',add);

function openField(){ 
    form.classList.toggle('d-none');
}
function render(array){
    let rows = "";
  
    array.forEach(item=>{
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
let index = 1;
function add(event){
    event.preventDefault();
    let workItem = {};
    workItem["id"] = index++;
    [...inputs].forEach(item=>workItem[item.name] = item.value);
    worksData.push(workItem);
    render(worksData);
}



