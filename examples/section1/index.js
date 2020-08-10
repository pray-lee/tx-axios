var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Attr1;
(function (Attr1) {
    Attr1[Attr1["Red"] = 1] = "Red";
    Attr1[Attr1["Green"] = 3] = "Green";
    Attr1[Attr1["Blue"] = 5] = "Blue";
})(Attr1 || (Attr1 = {}));
// let colorName: string = Attr1[3] // 通过值取属性用string
// console.log(colorName) //Green
// let color: Attr1 = Attr1.Red // 取值用ATTR1 , 通过[] 或者 . 都可以
var color = Attr1['Red'];
console.log(color); // 1
// 函数没有返回值
function user() {
    console.log('this is my user message');
}
// never 用于抛出异常时, 程序无法继续向下执行, 或者进入死循环，永远无法结束
function error(message) {
    throw new Error(message);
}
// 强制转换类型 (类型断言)
var someValue = 'this is a string';
var strLength = someValue.length;
var str = someValue; // 把any类型改成string类型
console.log(strLength, str);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100,
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: 'black' });
// interface Point{
//     readonly x: number,
//     readonly y: boolean
// }
var p1 = { x: 10, y: 20 };
// p1.x = 1 // 报错
// 数组只读
// 先定义一个普通数组
var a = [1, 2, 3];
// 然后再设置只读
var readOnlyA = a;
a[0] = 1; //这里也会报错
var mySearch = function (sourceString, substr) {
    var result = sourceString.search(substr);
    return result > -1;
};
var myArray = ['lee', 'su'];
var myStr = myArray[0];
console.log(myStr);
// 通过工厂函数生成实例
function createClock(ctor, h, m) {
    return new ctor(h, m);
}
// 数字时钟
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('deep, deep !!!');
    };
    return DigitalClock;
}());
// 指针时钟
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('deep, deep !!!');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 15);
var analog = createClock(AnalogClock, 12, 15);
digital.tick();
analog.tick();
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    // 一个对象可以同时作为函数和对象使用，并带有额外的属性
    var counter = function (start) {
        return 'counter';
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log('reset');
    };
    return counter;
}
var c = getCounter();
console.log(c.interval);
c.reset();
console.log(c(1));
// 类
var Greeter = /** @class */ (function () {
    // 构造器
    function Greeter(message) {
        this.greeting = message;
    }
    // 公共方法
    Greeter.prototype.greet = function () {
        return 'Hello ' + this.greeting;
    };
    return Greeter;
}());
// 类继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved" + distance + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var sam = new Snake('sammy');
sam.move(40);
// 修饰符
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log('distance is ' + distance);
    };
    return A;
}());
// protected private
var Person = /** @class */ (function () {
    // private name: string // 子类不可以访问到, 编译会报错
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return this.name + 'employee';
    };
    return Employee;
}(Person));
var howard = new Employee('Howard');
// console.log(howard.getElevatorPitch())
// console.log(howard.name) // 报错
// readonly属性
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
var P1 = new Person1('lee');
console.log(P1.name);
// P1.name = '' // 报错，因为是只读的
// 存储器 get set
var passcode = '123';
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Object.defineProperty(Demo.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === '123') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of demo');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Demo;
}());
var demo = new Demo();
console.log(demo.fullName);
demo.fullName = 'demo changed';
if (demo.fullName) {
    console.log(demo.fullName);
}
