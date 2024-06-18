function FizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return numero;
    }else if (numero % 5 === 0 && numero % 3 === 0) {
    return 'FizBuzz';
    }else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else if (numero % 5 === 0 && numero % 3 === 0) {
        return 'FizBuzz';
    } else if (!numero % 5 && numero % 3) {
        return 'numero';
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i));
}
