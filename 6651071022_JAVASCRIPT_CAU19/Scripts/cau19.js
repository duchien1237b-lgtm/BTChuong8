function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c19() {
    let goc = Number(prompt('Tiền gốc:'));
    let lai = Number(prompt('Lãi suất (%/năm):'));
    let n = Number(prompt('Số năm:'));
    out('Tổng tiền: ' + (goc * Math.pow(1 + lai / 100, n)).toFixed(2));
}

c19();
