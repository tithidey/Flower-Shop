/*header*/
const h1 = document.getElementById('h1_tag');
const imageDiv = document.querySelector('.item-picture');


function getInfo(){
    const heading = localStorage.getItem('Item');
    console.log(heading);
    h1.innerHTML = heading;

    if(heading == 'Subscription Service'){
        imageDiv.innerHTML = '<img src="/images/subscribe/photo1.jpg" alt="photo1">'
    }else if(heading == 'Seasonal Flowers'){
        imageDiv.innerHTML = '<img src="/images/subscribe/photo2.jpg" alt="photo1">'
        
    }else {
        imageDiv.innerHTML = '<img src="/images/subscribe/photo3.jpg" alt="photo1">'
    }
}

getInfo();

