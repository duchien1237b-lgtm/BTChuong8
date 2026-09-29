function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c7() {
    let d = Number(prompt('Ngày:'));
    let m = Number(prompt('Tháng:'));
    let y = Number(prompt('Năm:'));
    let t = new Date(y, m - 1, d + 1); 
    console.log('Ngày kế tiếp: ' + t.getDate() + '/' + (t.getMonth() + 1) + '/' + t.getFullYear());
    out('Xem kết quả ở Console (F12)');
}

c7();
