const fek = document.querySelector('.fek')
const addtext = document.querySelector('.addtext')
const imgbox = document.querySelector('.imgbox')
const xene = document.querySelector('.new button span')
const button = document.querySelector('.new button')
const list_new = document.getElementById('list-new')
const list_li = document.querySelectorAll('.action')

button.addEventListener('click',open)
fek.addEventListener('mousedown',open)
function open(){
    xene.classList.toggle('active')
    fek.classList.toggle('active')
    list_new.classList.toggle('active')
    addtext.classList.remove('active')
}
list_li.forEach(li => {
    li.addEventListener('click',function(){
        if(li.dataset.value == 'text'){
            addtext.classList.toggle('active')
        }
        else if(li.dataset.value == 'img'){
            addtext.classList.toggle('active')
            imgbox.classList.toggle('active')
        }
    })
    
});

const con = document.querySelector('.con')
const con_div = document.querySelectorAll('.con div')
const content_ul = document.querySelector('.content ul')

con.addEventListener('click',function(){
    con.classList.toggle('active')
    content_ul.classList.toggle('active')
    con_div.forEach(div => {
        div.classList.toggle('active')
    });
})




const add = document.getElementById('add')
const title = document.getElementById('title')
const textarea = document.getElementById('textarea')
const taskprans = document.getElementById('taskprans')

function addtask(){
    let title_v = title.value;
    let textarea_v = textarea.value;
    if(title.value == '' && textarea.value == ''){
        alert('you must a text');
    }else{
        const li_t = document.createElement('li')
        const h3_t = document.createElement('h3')
        const p_t = document.createElement('p')
        const btns_t = document.createElement('div')

        btns_t.classList.add('btns')
        h3_t.classList.add('tasktitle')

        h3_t.innerHTML = title_v;
        p_t.innerHTML = textarea_v;
        btns_t.innerHTML = `
           <button data-action="viwe">✔ </button>
           <button data-action="delete"> 🗑 </button>
        `

        
        li_t.appendChild(h3_t);
        li_t.appendChild(p_t);
        li_t.appendChild(btns_t);

        taskprans.appendChild(li_t)

    }
    title.value = '';
    textarea.value = '';
    stetask();
}
const search = document.getElementById('search')
const tasktitle = document.querySelectorAll('.tasktitle')


tasktitle.forEach(h3title => {            
    function saerchfun(){       
        h3title.classList.remove('active')
        console.log(h3title.textContent)
        console.log(search.value)
        h3title.classList.remove('active')
        if(h3title.textContent.includes(search.value)){
            h3title.classList.add('active')
        }
    }
    search.addEventListener('keydown',saerchfun)
});

taskprans.addEventListener('click',function(e){
   if(e.target.dataset.action === 'delete'){
        e.target.parentElement.parentElement.remove();
        stetask();
    }
    else if(e.target.dataset.action === 'viwe'){
        e.target.parentElement.parentElement.classList.add('ceke');
        e.target.parentElement.innerHTML = '<button data-action="todo" style="border: 2px solid #030404;background: transparent;color:black;"> ✔ </button> <button style="border: 2px solid #030404;background: transparent;color:black;" data-action="delete">✖</button>'
        stetask();
    }
    else if(e.target.dataset.action === 'todo'){
        e.target.parentElement.parentElement.classList.remove('ceke');
        e.target.parentElement.innerHTML = `
           <button data-action="viwe">✔ </button>
           <button data-action="delete"> 🗑 </button>
        `
        stetask();
    }
})

add.addEventListener('click',addtask);


function stetask(){
    localStorage.setItem('newtodolist', taskprans.innerHTML);
}
function loadltask(){
    taskprans.innerHTML = localStorage.getItem('newtodolist');
}

loadltask();
