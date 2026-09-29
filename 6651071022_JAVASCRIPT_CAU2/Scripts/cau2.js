function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c2() {
    let y = Number(prompt('Nhập năm:'));
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        out(y + ' là năm nhuận');
    else
        out(y + ' không phải năm nhuận');
}

c2();
