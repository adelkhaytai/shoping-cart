const product = [
    {
        id: 0,
        image: 'img/product1.jpg',
        title: 'Ti_shirt',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 120,
    },
    {
        id: 1,
        image: 'img/product2.jpg',
        title: 'Air Pods Pro',
        text : 'Les AirPods Pro sont des écouteurs sans-fil Bluetooth conçus par Apple, sortis le 30 octobre 20191,2. ',

        price: 60,
    },
    {
        id: 2,
        image: 'img/product7.jpg',
        title: 'back-pack',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 230,
    },
    {
        id: 3,
        image: 'img/ee-3.jpg',
        title: 'camera',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 1000,
    },
    {
        id: 4,
        image: 'img/product3.jpg',
        title: 'winter-coat',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 100,
    },
    {   
        id: 5,
        image: 'img/product8.jpg',
        title: 'shoe',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 100,
    },
    {
        id: 6,
        image: 'img/product4.jpg',
        title: 'perfume-adidas',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 100,
    },
    {
        id: 7,
        image: 'img/product5.jpg',
        title: 'sunglasses',
        text : 'Adidas (anciennement Gebrüder Dassler Schuhfabrik) est une firme allemande fondée en 1949 par Adolf Dassler, ',
        price: 100,
    }
];

const categories = [...new Set(product.map((item)=>{return item}))]
    let i=0;
document.getElementById('root').innerHTML = 
categories.map((item)=>
{
    var {image, title, price,text} = item;
    return(
        `<div class='box'>  

            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>

        <div class='bottom'>
        <p class='tex'>${text} </p>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")' class='bb'>Add to cart</button> " +
        `</div>
        <Button onclick="Toggle1()" id="btnh1" class="butt"><i class="fa-solid fa-heart"></i></Button>
        </div>`)}).join('')  
        var btnvar1 = document.getElementById('btnh1');

        function Toggle1(){
                 if (btnvar1.style.color =="red") {
                     btnvar1.style.color = "grey"
                 }
                 else{
                     btnvar1.style.color = "red"
                 }
        }


        var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0; 

    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            var quantityrow = document.getElementById('quantity')
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='color:black;font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i style='color:black;' class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
                
        }).join('');
    }
}





