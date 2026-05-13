const services = document.querySelectorAll('.service');

function showServices(){

services.forEach(service => {

const position = service.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

service.style.opacity = '1';
service.style.transform = 'translateY(0)';

}

});

}

window.addEventListener('scroll', showServices);

showServices();