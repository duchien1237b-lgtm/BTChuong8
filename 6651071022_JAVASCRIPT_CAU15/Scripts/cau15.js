function out(s) {
    document.getElementById('out').textContent += s + '\n';
}

function c15() {
    let u = { Name: 'Max', Age: 20 };
    out('a) ' + u.Name + ', ' + u.Age);
    u.Surname = 'Lee';
    out('b) ' + u.Name + ' ' + u.Surname + ', ' + u.Age);
    u.Age = 30;
    out('c) ' + u.Name + ' ' + u.Surname + ', ' + u.Age);
}

c15();
