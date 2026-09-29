function c6() {
    let a = Number(prompt('a:'));
    let b = Number(prompt('b:'));
    let c = Number(prompt('c:'));
    let kq;
    if (a == 0) {
        if (b == 0) kq = (c == 0) ? 'Vô số nghiệm' : 'Vô nghiệm';
        else kq = 'x = ' + (-c / b);
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) kq = 'Vô nghiệm';
        else if (delta == 0) kq = 'Nghiệm kép x = ' + (-b / (2 * a));
        else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            kq = 'x1 = ' + x1 + ', x2 = ' + x2;
        }
    }
    alert(kq);
}

c6();
