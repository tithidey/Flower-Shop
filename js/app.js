/*service button*/
const btn1 = document.getElementById('read1');
const btn2 = document.getElementById('read2');
const btn3 = document.getElementById('read3');

const service_name1 = document.getElementById('service1').innerHTML;
console.log(service_name1);
const service_name2 = document.getElementById('service2').innerHTML;
const service_name3 = document.getElementById('service3').innerHTML;

/* Event Listener */
btn1.addEventListener('click', ()=>{
    if(service_name1){
        localStorage.setItem('Item', service_name1);
    }
});

btn2.addEventListener('click', ()=>{
    if(service_name2){
        localStorage.setItem('Item', service_name2);
    }
});

btn3.addEventListener('click', ()=>{
    if(service_name3){
        localStorage.setItem('Item', service_name3);
    }
});