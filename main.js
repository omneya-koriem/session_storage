// list of products to be shown in index.html and selected products to be shown in cart.html
var list_of_products = [
    {
        Name: "prod_01",
        Price: 4000 +" LE",
        Code: 001,
        Quantity: 10,
        Product_Image: "<img src='https://picsum.photos/id/0/5616/3744' class='product_image'>"
    },
    {
        Name: "prod_02",
        Price: 14000 + " LE",
        Code: 002,
        Quantity: 10,
        Product_Image: "<img src='https://picsum.photos/id/119/3264/2176' class='product_image'>"
    },
    {
        Name: "prod_03",
        Price: 2500 +" LE",
        Code: 003,
        Quantity: 10,
        Product_Image: "<img src='https://picsum.photos/id/250/4928/3264' class='product_image'>"
    },
    {
        Name: "prod_04",
        Price: 900 +" LE",
        Code: 004,
        Quantity: 10,
        Product_Image: "<img src='https://picsum.photos/id/20/3670/2462' class='product_image'>"
    }
];
var list_of_selected_products = [];

for (i=0; i<list_of_products.length; i++){
    //creating HTML element with id and class
    var product_div = document.createElement("div");
    var product_id = document.createAttribute("id");
    product_id.value = "prod_" + i;
    product_div.setAttributeNode(product_id);
    document.getElementById("all_products_container").appendChild(product_div);
    document.getElementById(product_id.value).classList.add("sameProductDesign");
    //rendering each object within the HTML Element
    var stringified_product = JSON.stringify(list_of_products[i]);
    var readable_stringified_product = JSON.parse(stringified_product);
    //console.log(readable_stringified_product)
    var button_id = "button_" + i;
    var div_id = "div_" +i;
    document.getElementById(product_id.value).innerHTML =  
                        "<div class='prodInfo_container' id= "+div_id+"> "+readable_stringified_product.Product_Image+" "+ "<br>" + 
                        "<h2 class ='productDetails'> Product Details: </h2>" +
                        "<p class = 'prodInfo_title'> Name: </p>" + readable_stringified_product.Name + "<br>" +
                        "<p class = \'prodInfo_title\'> Price: </p> " + readable_stringified_product.Price + "<br>" +
                        "<p class = \'prodInfo_title\'> Code: </p>" + readable_stringified_product.Code + "<br>" +
                        "<p class = \'prodInfo_title\'> Quantity: </p>" + readable_stringified_product.Quantity + "<br></div>" +
                         "<button class='addToCartButton' id= "+ button_id +"' onclick='sessionStorageCounter(event); selectedItem(this)'>Add item to my cart</button><hr>" ;
}
function sessionStorageCounter(event) {
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.clickcount){
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        var cartCounter = document.getElementsByClassName('prodNum');
            for (i=0; i< cartCounter.length; i++){
            cartCounter[i].innerHTML = sessionStorage.clickcount;
            console.log(cartCounter[i]);
        }    
        //document.getElementsB('prodNum').innerHTML = sessionStorage.clickcount;
        //console.log(choosenProduct);
       // sessionStorage.setItem("button_id", "")        
    } else {
        document.getElementById('countNotSupport').innerHTML ="Sorry Your Browser does not support this feature"
    }
}
function selectedItem(element){
    element.classList.remove("addToCartButton");
    element.classList.add("clickedButton");
    element.innerHTML = "Item added successfully";
    element.onclick = null;
}
