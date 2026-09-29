function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c18() {
    let n = Number(prompt('Nhập n:'));
    let f = 1;
    for (let i = 2; i <= n; i++) f *= i;
    out(n + '! = ' + f);
}

c18();
