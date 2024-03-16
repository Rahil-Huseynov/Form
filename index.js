// const form = document.getElementById('formId');

// const taskContainer = document.getElementById('task_div');

// let tasks = [];

// form.addEventListener('submit', (e) => {

//   e.preventDefault();

//   const data = new FormData(e.target);

//   const formValues = {};


//   for (let [key, value] of data.entries()) {

//     formValues[key] = value;

//   }

//   function addTask() {

//     tasks.push(formValues);

//   }

//   function listTasks() {

//     tasks.forEach((task, index) => {

//       const taskElement = document.getElementById('task_div_name');

//       const taskElement1 = document.getElementById('task_div2_description')

//       taskElement.innerHTML = `Task Name: ${task.name}`;

//       taskElement1.innerHTML = `Task description: ${task.description}`


//     });

//     document.getElementById('button').addEventListener('click', function (){

//         if(document.getElementById('task_cointainer_list').style.display == 'none'){

//             document.getElementById('task_cointainer_list').style.display = 'block';

//         }
//         else{
//             document.getElementById('task_cointainer_list').style.display = 'block';
//         }
//     })

// }



//  console.log(listTasks()) 

//   addTask();
//   listTasks();
// });













// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const form = document.getElementById('formId');

const taskContainer = document.getElementById('taskContainer');

let tasks = [];

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {

        formValues[key] = value;
    }

    formValues.id = Math.trunc(Math.random() * 1000)

    tasks.push(formValues);


    listTasks();
});

function listTasks() {

    taskContainer.innerHTML = '';

    tasks.forEach((task, index) => {

        const allElement = document.createElement('div');

        const AlltaskElement = document.createElement('div');

        const deleteButton = document.createElement('button');

        deleteButton.classList.add('deleteButton')

        deleteButton.addEventListener('click', () => {
            removeFunc(task.id)
        })
        
        const removeFunc = (id) => {

            tasks = tasks.filter(tasks => tasks.id !== id);
    
            listTasks()       

        }


        const text = document.createElement('p');

        const taskElement = document.createElement('div');

        const text1 = document.createElement('p');

        const taskElement1 = document.createElement('div');

        text.textContent = `Task Name:`

        taskElement.textContent = `${task.name}`;

        text1.textContent = `Description:`

        taskElement1.textContent = `${task.description}`;

        AlltaskElement.appendChild(text);

        AlltaskElement.appendChild(taskElement);

        AlltaskElement.appendChild(text1);

        AlltaskElement.appendChild(taskElement1);

        AlltaskElement.appendChild(deleteButton);

        allElement.appendChild(AlltaskElement)

        taskContainer.appendChild(allElement)

        deleteButton.innerText = 'Delete'

        taskContainer.style.display = 'grid'

        taskContainer.style.justifyContent = 'center'

        AlltaskElement.style.border = '10px solid black'

        AlltaskElement.style.paddingBottom = '1rem'

        AlltaskElement.style.marginBottom = '1rem'

        AlltaskElement.style.marginTop = '1rem'

        taskElement.style.paddingTop = '1rem'

        taskElement.style.paddingBottom = '1rem'

        taskElement1.style.paddingTop = '1rem'

        taskElement1.style.paddingBottom = '1rem'

        AlltaskElement.style.background = 'white'

        AlltaskElement.style.paddingTop = '2rem'

        AlltaskElement.style.paddingBottom = '2rem'

        AlltaskElement.style.paddingRight = '2rem'

        AlltaskElement.style.paddingLeft = '2rem'

        AlltaskElement.style.width = '400px'


    });

}