function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c14() {
    let s = { Name: 'Nguyễn Văn A', NumberID: '12345', Gender: 'Nam' };
    out('Name: ' + s.Name);
    out('NumberID: ' + s.NumberID);
    out('Gender: ' + s.Gender);
}

c14();
