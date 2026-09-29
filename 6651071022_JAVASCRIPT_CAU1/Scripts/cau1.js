function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c1() {
    let a = 5;
    let b = 6;
    let c = 7;
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(s);
    alert('The area of the triangle is: ' + s.toFixed(2));
    out('The area of the triangle is: ' + s.toFixed(2));
}

c1();
