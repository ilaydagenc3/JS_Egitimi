// event bubbling

// document.querySelector('.container').addEventListener('click', function(){
//     console.log('Div Container');
// });
// document.querySelector('.card-row').addEventListener('click', function(){
//     console.log('card Row');
// });
// document.querySelectorAll('.card-body')[1].addEventListener('click', function(){
//     console.log('Card Body');
// });

// event capturing veya delegation

const cardBody = document.querySelectorAll('.card-body')[1];

cardBody.addEventListener('click', run);

function run(e){
    if(e.target.className === 'fa fa-remove'){
        console.log('Silme İşlemi');
    }
    if(e.target.id === 'filter'){
        console.log('Filtreleme İşlemi');
    }
    if(e.target.id === 'clear-todos'){
        console.log('Tüm Taskları Temizleme İşlemi');
    }
    // console.log(e.target);
}