var students = [
    {
        "name": "Prasdeep"
    },
    {
        "name": "Arun"
    },
    {
        "name": "Ananth"
    },
    {
        "name": "Dinesh"
    }
];

var studentlist = document.querySelector('#studentlist');
//bookslist.innerHTML = templateStr;

let delStudent = function(){
let markreadindexes = document.querySelectorAll('.delstudent');
//console.log(markreadindexes)
markreadindexes.forEach(markreadindex => markreadindex.addEventListener("click", function(event){
    //console.log(Array.from(markreadindexes).indexOf(event.target));
    //books[Array.from(markreadindexes).indexOf(event.target)].alreadyRead = true;
    //console.log(books); 
    students.splice(Array.from(markreadindexes).indexOf(event.target), 1);
    appendNode(students);
}))
}

let appendNode = function(students){
studentlist.innerHTML = 
`<ul>
    ${getlist(students)}
</ul>`;

delStudent();
}

function getlist(){
    return students.map(student => `<li>${student.name}</li><button class="delstudent">X</button>`).join('')
}

appendNode(students);

var addstudent = document.querySelector('#name');
addstudent.addEventListener("change", function(event){
    
    var name = event.target.value;

    var newName = {};

    newName['name'] = name;

    students.push(newName);
    //console.log(students);
    event.target.value = '';
    appendNode(students);
})


