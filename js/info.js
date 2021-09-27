const imageDiv = document.getElementById('image_show');
const product_price = document.getElementById('product_price');

function infoSet(name, price){
    if(name === 'Sunshine Rose & Alstroemeria Bouquet'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-21.jpg"/>';
        product_price.innerHTML = price;
    }
    else if(name === 'Afternoon Mimosas Bouquet of Orange Asiatic Lilies'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-22.jpg"/>';
        product_price.innerHTML = price;
    }
    else if(name === 'GlobalRose 50 Fresh Cut Pink Roses'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-23.jpg"/>';
        product_price.innerHTML = price;
    }
    else if(name === 'Elegant Summer Bouquet'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-24.jpg"/>';
        product_price.innerHTML = price;
    }
    else if(name === 'Dreamland Pink Bouquet'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-25.jpg"/>';
        product_price.innerHTML = price;
    }
    else if(name === 'Pure Paradise Bouquet'){
        imageDiv.innerHTML = '<img src="/images/shop/shop-26.jpg"/>';
        product_price.innerHTML = price;
    }
    
}

function getInformation(){
    let name = localStorage.getItem('HEADING');
    let price = localStorage.getItem('PRICE');
    let id = localStorage.getItem('ID');
    console.log(name, price);
    
    infoSet(name, price);

}
getInformation();