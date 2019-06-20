var products = [
    {
        "id": 1,
        "name": "Samsung",
        "quantity": 0,
        "price": 1000
    },
    {
        "id": 2,
        "name": "Sony",
        "quantity": 0,
        "price": 1200
    },
    {
        "id": 3,
        "name": "Dell",
        "quantity": 0,
        "price": 10200
    },
    {
        "id": 4,
        "name": "HP",
        "quantity": 0,
        "price": 13000
    }
];

var productslist = document.querySelector('#productlist');
//bookslist.innerHTML = templateStr;

let delStudent = function(){
let markreadindexes = document.querySelectorAll('.delProduct');
//console.log(markreadindexes)
markreadindexes.forEach(markreadindex => markreadindex.addEventListener("click", function(event){
    //console.log(Array.from(markreadindexes).indexOf(event.target));
    //books[Array.from(markreadindexes).indexOf(event.target)].alreadyRead = true;
    //console.log(books); 
    products.splice(Array.from(markreadindexes).indexOf(event.target), 1);
    appendNode(products);
}))
}

let updateQty = function(){
    let qtyindexes = document.querySelectorAll('.qty');
    //console.log(markreadindexes)
    qtyindexes.forEach(markreadindex => markreadindex.addEventListener("change", function(event){
        //console.log(Array.from(markreadindexes).indexOf(event.target));
        products[Array.from(qtyindexes).indexOf(event.target)].quantity = event.target.value;
        //console.log(books); 
        //products.splice(Array.from(qtyindexes).indexOf(event.target), 1);
        appendNode(products);
    }))
    }

    let getTotalQty = function(){
        let totQty = 0;
        products.forEach(product => totQty += Number(product.quantity));
    
        document.getElementById('totQty').innerHTML = totQty;
    }

    let getTotalPrice = function(){
        let totprice = 0;
        products.forEach(product => totprice += Number(product.price * product.quantity));
    
        document.getElementById('totPrice').innerHTML = totprice;
    }

let appendNode = function(products){
productslist.innerHTML = 
`<div class="row">
    ${getlist(products)}
</div>`;
delStudent();
updateQty();
getTotalQty();
getTotalPrice();
}

function getlist(products){
    return products.map(product => `<div class="col-md-3">
    <div class="card text-center">
    <div class="card-header">
        ${product.id}
        <button class="delProduct">X</button>
    </div>
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
        <input type="number" class="qty" /><br/><br/>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
        Quantity : ${product.quantity}
    </div>
    </div>
    </div>`).join('')
}

appendNode(products);

var addProduct = document.querySelector('#addProduct');
addProduct.addEventListener("submit", function(event){
    event.preventDefault();
    //console.log('sasa')

    var newProduct = {};

    var name = document.getElementById('productName').value;
    var qty = document.getElementById('productQty').value;
    var price = document.getElementById('productPrice').value;
    var id = products.length + 1;
    //console.log(id)

    newProduct["id"] = id;
    newProduct["name"] = name;
    newProduct["quantity"] = qty;
    newProduct["price"] = price;

    products.push(newProduct);

    appendNode(products);

})



