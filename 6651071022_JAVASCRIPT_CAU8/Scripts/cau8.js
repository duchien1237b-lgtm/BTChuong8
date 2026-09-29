function c8() {
    let n = Number(prompt('Nhập số có 2 chữ số:'));
    let u = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    let chuc = Math.floor(n / 10);
    let donvi = n % 10;
    let s;
    if (chuc == 1) s = 'mười';
    else s = u[chuc] + ' mươi';

    if (donvi == 1 && chuc > 1) s += ' mốt';
    else if (donvi == 5) s += ' lăm';
    else if (donvi > 0) s += ' ' + u[donvi];
    alert(n + ': ' + s);
}

c8();
