function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c21() {
    let thu = [
        'Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'
    ];
    let d = new Date(2023, 8, 1);
    out('01/09/2023 là ' + thu[d.getDay()]);
}

c21();
