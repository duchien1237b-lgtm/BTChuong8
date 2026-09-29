function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function c5() {
    let n = Number(prompt('Nhập số nguyên dương:'));
    if (isPrime(n)) alert(n + ' là số nguyên tố');
    else alert(n + ' không phải số nguyên tố');
}

c5();
