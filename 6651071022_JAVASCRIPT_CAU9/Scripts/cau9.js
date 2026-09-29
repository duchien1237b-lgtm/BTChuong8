function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c9() {
    let s = 'need not to know';
    let tu = s.split(' ');
    for (let i = 0; i < tu.length; i++) {
        tu[i] = tu[i][0].toUpperCase() + tu[i].slice(1);
    }
    out(tu.join(' '));
}

c9();
