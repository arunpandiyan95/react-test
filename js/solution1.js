var books = [
    {
        "id": 1,
        "title": "React1",
        "author": "Prasdeep",
        "alreadyRead": false
    },
    {
        "id": 2,
        "title": "React2",
        "author": "Arun",
        "alreadyRead": false
    },
    {
        "id": 3,
        "title": "React3",
        "author": "Ananth",
        "alreadyRead": false
    },
    {
        "id": 4,
        "title": "React4",
        "author": "Dinesh",
        "alreadyRead": false
    }
];

var bookslist = document.querySelector('#bookslist');
//bookslist.innerHTML = templateStr;

let markRead = function() {
    var liArr = document.getElementsByTagName("li");
    let markreadindexes = document.querySelectorAll('.markread');
    //console.log(markreadindexes)
    markreadindexes.forEach(markreadindex => markreadindex.addEventListener("click", function(event){
        //console.log(Array.from(markreadindexes).indexOf(event.target));
        //books[Array.from(markreadindexes).indexOf(event.target)].alreadyRead = true;
        //console.log(books);    
        //appendNode(books);
        liArr[Array.from(markreadindexes).indexOf(event.target)].style.color = 'red'; 
    }))
}


    
let appendNode = function(books){
bookslist.innerHTML = 
`<ul>
    ${getlist(books)}
</ul>`;

markRead();
}

function getlist(){
    return books.filter(book => book.alreadyRead == false).map(book => `<li>${book.title} by ${book.author}</li><input type="checkbox" class="markread" >`).join('')
}

appendNode(books);


