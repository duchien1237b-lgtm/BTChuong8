function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c4() {
    let kq = '';
    for (let i = 1; i < 100; i += 2) {
        if (i != 5 && i != 7 && i != 93) kq += i + ' ';
    }
    out(kq);
}

c4();
