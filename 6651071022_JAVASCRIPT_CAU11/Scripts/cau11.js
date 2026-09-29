function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function daoNguoc(n) {
    let kq = 0;
    while (n > 0) {
        kq = kq * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return kq;
}

function c11() {
    out('654321 => ' + daoNguoc(654321));
}

c11();
