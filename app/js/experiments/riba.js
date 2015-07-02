var Person = function(name) {
    this.name = name;
};

Person.prototype.greet = function() {
    console.log('Hello, my name is: ' + this.name);
};

Developer = function(name, skills) {
    Person.apply(this, arguments);

    this.greet = function() {
        console.error(123123);
    };

    this.skills = skills || [];
};

// Developer.prototype = new Person().constructor.prototype;
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

var person = new Person('Vasya');
var developer = new Developer('Petya', ['js', 'css', 'html']);

person.greet();
developer.greet();

console.log('person', person);
console.log('person.constructor', person.constructor);
console.log('person.constructor.prototype', person.constructor.prototype);

console.log('================');

console.log('developer', developer);
console.log('person.constructor', developer.constructor);
console.log('person.constructor.prototype', developer.constructor.prototype);

console.log('================');

console.log('Person', Person);
console.log('Person.prototype', Person.prototype);

console.log('================');

console.log('Developer', Developer);


console.log(Object.prototype.toString.call([]));