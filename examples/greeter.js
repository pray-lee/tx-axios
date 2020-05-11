var User = /** @class */ (function() {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());

function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('xiaoyong', 'lee');
console.log(greeter(user));

function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100,
        size: '50'
    };
    return newSquare;
}