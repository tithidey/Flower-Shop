/*heading select*/
const h1 = document.getElementById('h1_tag');


const divOne = document.getElementById('one');
const divTwo = document.getElementById('two');
const divThree = document.getElementById('three');
const divFour = document.getElementById('four');
const divFive = document.getElementById('five');
const divSix = document.getElementById('six');


//btn
const bday = document.getElementById('bday');
const card = document.getElementById('card');
const engage = document.getElementById('engage');
const wedding = document.getElementById('wed');

function elementChange(heading, div, source, text, decoreType, price){
    h1.innerHTML = heading;
    
    let image = div.firstElementChild;
    image.src = source;

    let h1Tag = image.nextElementSibling;
    let h1_child = h1Tag.firstElementChild;
    h1_child.textContent =  text;

    let decoration_type = h1Tag.nextElementSibling;
    decoration_type.textContent = decoreType;

    let decore_Price = div.lastElementChild;
    decore_Price.textContent = price;

}

//event listener
bday.addEventListener('click', (event)=>{
    event.preventDefault();

    elementChange('BIRTHDAY', divOne, '/images/birthday/birthday1.jpg', 'Birthday Charm', 'Birthday Decore', '$40.05');
    elementChange('BIRTHDAY', divTwo, '/images/birthday/birthday2.jpg', 'Classical Birthday', 'Simple Decore', '$25.00');
    elementChange('BIRTHDAY', divThree, '/images/birthday/birthday3.jpg', 'Standard Party', 'Standard Decore', '$50.00');
    elementChange('BIRTHDAY', divFour, '/images/birthday/birthday4.jpg', 'Highly Decore Hall', 'Birthday Decore', '$140.05');
    elementChange('BIRTHDAY', divFive, '/images/birthday/birthday5.jpg', 'Basic Birthday Party', 'Local Decore', '$35.00');
    elementChange('BIRTHDAY', divSix, '/images/birthday/birthday6.jpg', 'Surprise Birthday Plan', 'Birthday Decore', '$150.15');
     

});


card.addEventListener('click', (event)=>{
    event.preventDefault();

    elementChange('CARDS', divOne, '/images/card/card-1.jpg', 'Birthday Card', 'Card Decore', '$20.00');
    elementChange('CARDS', divTwo, '/images/card/card-2.jpg', 'Wedding Card', 'Simple Decore', '$25.00');
    elementChange('CARDS', divThree, '/images/card/card-3.jpg', 'Standard Card', 'Standard Decore', '$50.00');
    elementChange('CARDS', divFour, '/images/card/card-4.jpg', 'Surprise Card', 'Well Known', '$40.05');
    elementChange('CARDS', divFive, '/images/card/card-5.jpg', 'Basic Card', 'Local Decore', '$15.00');
    elementChange('CARDS', divSix, '/images/card/card-1.jpg', 'Surprise Birthday Card', 'Birthday Card Decore', '$50.00');
     

});


engage.addEventListener('click', (event)=>{
    event.preventDefault();

    elementChange('ENGAGEMENT', divOne, '/images/engagement/venu1.jpg', 'Family Engagement', 'Day Decore', '$210.00');
    elementChange('ENGAGEMENT', divTwo, '/images/engagement/venu2.jpg', 'Royal Venu', 'Rich Decore', '$525.00');
    elementChange('ENGAGEMENT', divThree, '/images/engagement/venu3.jpg', 'Standard Decoration', 'Standard Decore', '$250.00');
    elementChange('ENGAGEMENT', divFour, '/images/engagement/venu4.jpg', 'Simple Decoration', 'Well Known', '$140.05');
    elementChange('ENGAGEMENT', divFive, '/images/engagement/venu5.jpg', 'Basic Decoration', 'Local Decore', '$105.00');
    elementChange('ENGAGEMENT', divSix, '/images/engagement/venu6.jpg', 'Fascinating Decoration', 'Lovely Decoration', '$350.00');  

});


wedding.addEventListener('click', (event)=>{
    event.preventDefault();

    elementChange('WEDDING', divOne, '/images/wedding/wed1.jpg', 'Family Wedding', 'Day Decore', '$210.00');
    elementChange('WEDDING', divTwo, '/images/wedding/wed2.jpg', 'Simple Venu', 'Rich Decore', '$525.00');
    elementChange('WEDDING', divThree, '/images/wedding/wed3.jpg', 'Royal Decoration', 'Standard Decore', '$250.00');
    elementChange('WEDDING', divFour, '/images/wedding/wed4.jpg', 'Classic Decoration', 'Well Known', '$140.05');
    elementChange('WEDDING', divFive, '/images/wedding/wed5.jpg', 'Royal Decoration', 'Local Decore', '$105.00');
    elementChange('WEDDING', divSix, '/images/wedding/wed6.jpg', 'Fascinating Decoration', 'Lovely Decoration', '$350.00');  

});

