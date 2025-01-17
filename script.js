const newTask = document.getElementById('new_task');
const addTask = document.getElementById('add_task');
const tasks = document.querySelector('.tasks');
const item = document.querySelector('.item');



newTask.addEventListener('keyup', () => {
    if(newTask.value.trim() != 0){
        addTask.classList.add('active');
    } else{
        addTask.classList.remove('active')
    }
})

addTask.addEventListener('click', () => {
    if(newTask.value.trim() != 0){
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
       <p>${newTask.value}</p>

                <div class="buttons">
                    <i class='bx bx-check'></i>
                    <i class='bx bx-trash'></i>
                </div>
        `
        tasks.appendChild(newItem);
        newTask.value = '';
    } else{
        Toastify({
            text: "Insira uma tarefa!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#121212",
            },
          }).showToast();
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-trash')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('bx-check')
    ) {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})