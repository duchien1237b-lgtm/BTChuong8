function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c16() {
    let h = { radius: 10, height: 15 };
    out('Thể tích: ' + (Math.PI * Math.pow(h.radius, 2) * h.height).toFixed(2));
    h.height = 30;
    out('Diện tích toàn phần: ' + (2 * Math.PI * h.radius * (h.radius + h.height)).toFixed(2));
}

c16();
