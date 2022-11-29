const container = document.querySelector('.container');

// CICLO FOR

for(let i=1; i<=100; i++){
    

    // multipli di 3 e 5

    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }

    // multipli di 3

    else if(i % 3 == 0){
        console.log('Fizz');
    }

    // multipli di 5

    else if(i % 5 == 0){
        console.log('Buzz');
    }

    else{
        console.log(i);
    }

    

}