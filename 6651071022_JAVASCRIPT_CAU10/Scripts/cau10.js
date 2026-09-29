function c10() {
    let n = Number(prompt('Nhập n:'));
    let tong = 0;
    while (n > 0) {
        tong += n;
        n = Math.floor(n / 2);
    }
    alert('Tổng = ' + tong);
}

c10();
