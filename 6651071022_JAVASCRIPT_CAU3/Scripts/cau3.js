function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c3() {
    out('Số lớn nhất: ' + Math.max(15, 28, 9));
}

c3();
