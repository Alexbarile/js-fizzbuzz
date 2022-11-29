const container = document.querySelector('.container');

// CICLO FOR

for(let i=1; i<=100; i++){
    let element;

    // multipli di 3 e 5

    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        element = `div class="box box-red">FizzBuzz</div>`;
    }

    // multipli di 3

    else if(i % 3 == 0){
        console.log('Fizz');
        element = `div class="box box-beige">Fizz</div>`;
    }

    // multipli di 5

    else if(i % 5 == 0){
        console.log('Buzz');
        element = `div class="box box-yellow">Buzz</div>`;
    }

    else{
        console.log(i);
        element = `div class="box">${i}</div>`;
    }

    container.innerHTML += element;

}