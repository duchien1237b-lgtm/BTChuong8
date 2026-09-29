function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function c13() {
    let n = Number(prompt('Nhập n:'));
    let kq = '';
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            kq += i + ' ';
        }
    }
    out(kq);
}

c13();
