let BookId=0;

function Book(Title,Author,Pages,ID){
    if(!new.target){
        throw new Error("not a proper constructor calling")
    }
    this.Title=Title;
    this.Author=Author;
    this.Pages=Pages;
    BookId+=1;
    this.ID=String(BookId).padStart(4, '0');
}

const myLibrary=[
    new Book("football","miki",210),
    new Book("dancing","kal",210)
];

function addBook(title,author,pages){
    let book =new Book(title,author,pages);
    myLibrary.push(book);
    addTable(myLibrary);
}

addTable(myLibrary);

function addTable(myLibrary){
    let table= document.querySelector('.library_table');
    table.innerHTML="";
    myLibrary.forEach(book=>{
        let row=`
        <tr>
            <td>${book.Title}</td>
            <td>${book.Author}</td>
            <td>${book.Pages}</td>
            <td>${book.ID}</td>
            <td class="remove" style="cursor: pointer;" data-id="${book.ID}">REMOVE</td>
        </tr>
        `;
        table.innerHTML+=row;
    })
}

 let remove=document.querySelector('.remove');
        remove.addEventListener('click',(e)=>{
          const bookIDToBERemoved=e.target.getAttribute('data-id');
          const BookToBeRemoved=myLibrary.find(book => book.ID === bookIDToBERemoved);
          myLibrary.splice(myLibrary.indexOf(BookToBeRemoved),1);
          addTable(myLibrary);
        })

let button=document.querySelector('.add');
button.addEventListener('click',()=>{
    let div=document.createElement('div');
    div.classList.add('addInfo');
    let form=document.createElement('form')

    let label_title=document.createElement('label');
    let input_title=document.createElement('input');
    label_title.textContent="Title: ";
    input_title.type="text";

    let label_author=document.createElement('label');
    let input_author=document.createElement('input');
    label_author.textContent="author: ";
    input_author.type="text";

    let label_pages=document.createElement('label');
    let input_pages=document.createElement('input');
    label_pages.textContent="pages: ";
    input_pages.type="text";

    let submit= document.createElement('button')
    submit.textContent="ADD";

    form.appendChild(label_title);
    form.appendChild(input_title);
    form.appendChild(label_author);
    form.appendChild(input_author);
    form.appendChild(label_pages);
    form.appendChild(input_pages);
    form.appendChild(submit);

    div.appendChild(form);
    document.body.appendChild(div);

    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        if(input_author.value && input_pages.value && input_title.value){
            let title=input_title.value;
            let author=input_author.value;
            let pages=Number(input_pages.value);
            addBook(title,author,pages);
            div.remove();
        }
        else{
            alert("pleas fill the inputs")
        }
    })
})