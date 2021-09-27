// /*select elements*/
const relate1 = document.getElementById('relate_1');
const relate2 = document.getElementById('relate_2');


const button_1 = document.getElementById('btn_1');
const idName_1 = document.getElementsByClassName('flower_1')[0].id;
const  heading_1 = button_1.textContent;
const price_1 = document.getElementById('price1').textContent;

const button_2 = document.getElementById('btn_2');
const idName_2 = document.getElementsByClassName('flower_2')[0].id;
const heading_2 = button_2.textContent;
const price_2 = document.getElementById('price2').textContent;

const button_3 = document.getElementById('btn_3');
const idName_3 = document.getElementsByClassName('flower_3')[0].id;
const heading_3 = button_3.textContent;
const price_3 = document.getElementById('price3').textContent;


const button_4 = document.getElementById('btn_4');
const idName_4 = document.getElementsByClassName('flower_4')[0].id;
const heading_4 = button_4.textContent;
const price_4 = document.getElementById('price4').textContent;


const button_5 = document.getElementById('btn_5');
const idName_5 = document.getElementsByClassName('flower_5')[0].id;
const heading_5 = button_5.textContent;
const price_5 = document.getElementById('price5').textContent;


const button_6 = document.getElementById('btn_6');
const idName_6 = document.getElementsByClassName('flower_6')[0].id;
const  heading_6= button_6.textContent;
const price_6 = document.getElementById('price6').textContent;


/*Add function */
function setInfo(heading, price, id){
    localStorage.setItem('HEADING', heading);
    localStorage.setItem('PRICE', price);
    localStorage.setItem('ID', id);
}


button_1.addEventListener('click', ()=>{
    setInfo(heading_1, price_1, idName_1);
});
relate1.addEventListener('click', ()=>{
    setInfo(heading_1, price_1, idName_1);

});


button_2.addEventListener('click', ()=>{
    setInfo(heading_2, price_2, idName_2);

});

relate2.addEventListener('click', function(){
    setInfo(heading_2, price_2, idName_2);

});


button_3.addEventListener('click', function(){
    setInfo(heading_3, price_3, idName_3);

});

button_4.addEventListener('click', function(){
    setInfo(heading_4, price_4, idName_4);

});

button_5.addEventListener('click', function(){
    setInfo(heading_5, price_5, idName_5);

});

button_6.addEventListener('click', function(){
    setInfo(heading_6, price_6, idName_6);

});


