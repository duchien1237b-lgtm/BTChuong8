function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function luyThua(b, n) {
    let kq = 1;
    for (let i = 0; i < n; i++) kq *= b;
    return kq;
}

function c12() {
    out('2^10 = ' + luyThua(2, 10));
}

c12();
