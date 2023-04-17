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

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price, text} = item;
    return(
        `<div class='box'>
        <i class="fa-solid fa-heart red"></i>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <p class='tex'>${text}</p>
        <h2>$ ${price}.00</h2>`+
        "<button class='bb' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

let hearts = document.getElementsByClassName('fa-heart')
for( let heart of hearts){
    heart.addEventListener('click',function(){
        heart.classList.toggle('red')
    })
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
            let qty = document.getElementById('quant')
            total=total+price;  
            // total = (quant * price)+total
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <i class="fa-solid fa-plus"></i>
                <p id="quant" class='qty'>0</p>
                <i class="fa-solid fa-minus"></i>
                <div>
                <h2 style='font-size: 15px;'>$</h2>
                <h2 style='font-size: 15px;' class="price">${price}</h2>
                </div>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    let btnplus = document.getElementsByClassName('fa-plus')
    for (let plus of btnplus){
        plus.addEventListener('click',function(){
            plus.nextElementSibling.innerHTML++
        sum()
        })
    }   

    let btnminus = document.getElementsByClassName('fa-minus')
    for (let minus of btnminus){
        minus.addEventListener('click',function(){
            if(minus.previousElementSibling.innerHTML>0){
                minus.previousElementSibling.innerHTML--
            }
            sum()
        })
}

function sum(){
    let qty = document.querySelectorAll('.qty')
    let price = document.querySelectorAll('.price')

    let sum = 0

    for( let i = 0 ; i<qty.length; i++){
        sum += qty[i].innerHTML*price[i].innerHTML
    }
    document.getElementById('total').innerHTML = "total: $" + sum
}

}