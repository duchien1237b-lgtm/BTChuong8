function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c17() {
    let b = '11011011';
    let d = 0;
    for (let i = 0; i < b.length; i++) {
        d += Number(b[i]) * Math.pow(2, b.length - 1 - i);
    }
    out(b + '(2) => ' + d + '(10)');
}

c17();
