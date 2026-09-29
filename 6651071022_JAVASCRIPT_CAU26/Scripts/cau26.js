function $(id) {
    return document.getElementById(id);
}

function canChi() {
    let s = $('nd').value.trim();
    if (s == '' || isNaN(s) || s.indexOf('.') != -1 || Number(s) < 1) {
        alert('Năm phải là số nguyên dương!');
        $('cc').value = '';
        return;
    }
    let y = Number(s);
    let can = [
        'Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'
    ];
    let chi = [
        'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ',
        'Mùi'
    ];
    $('cc').value = can[y % 10] + ' ' + chi[y % 12];
}
