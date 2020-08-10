enum Attr1 {
    Red = 1,
    Green = 3,
    Blue = 5
}

// let colorName: string = Attr1[3] // 通过值取属性用string
// console.log(colorName) //Green

// let color: Attr1 = Attr1.Red // 取值用ATTR1 , 通过[] 或者 . 都可以
let color: Attr1 = Attr1['Red']
console.log(color) // 1

// 函数没有返回值
function user(): void {
    console.log('this is my user message')
}

// never 用于抛出异常时, 程序无法继续向下执行, 或者进入死循环，永远无法结束
function error(message: string): never {
    throw new Error(message)
}

// 强制转换类型 (类型断言)
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
let str: string = someValue as string // 把any类型改成string类型
console.log(strLength, str)

// 可选参数    ----------------------------------------------------------
interface squareConfig {
    // 可选参数
    color?: string
    width?: 100

    // 额外的属性
    [propName: string]: any
}

interface Square {
    color: string
    area: number,
}

function createSquare(config: squareConfig): Square {
    let newSquare = {
        color: 'white',
        area: 100,
    }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

createSquare({color: 'black'})

// 只读属性，只有创建的时候可以修改 -------------------------------------------------------
interface Point {
    readonly x: number
    readonly y: number
}

// interface Point{
//     readonly x: number,
//     readonly y: boolean
// }

let p1: Point = {x: 10, y: 20}
// p1.x = 1 // 报错

// 数组只读
// 先定义一个普通数组
let a: number[] = [1, 2, 3]
// 然后再设置只读
let readOnlyA: ReadonlyArray<number> = a
a[0] = 1 //这里也会报错

// 接口描述 函数类型 ----------------------------------------------------
interface SearchFunc {
    (sourceString: string, substr: string): boolean
}

let mySearch: SearchFunc = (sourceString, substr) => {
    let result = sourceString.search(substr)
    return result > -1
}

// 可索引类型
interface StringArray {
    [index: number]: string
}

let myArray: StringArray = ['lee', 'su']
let myStr: string = myArray[0]
console.log(myStr)

// 类 类型 类实现接口
// 实例接口 只描述公共部分
interface ClockInterface {
    tick()
}

// 构造器接口 描述静态部分
interface ClockConstructor {
    new (h: number, m: number): ClockInterface
}

// 通过工厂函数生成实例
function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
    return new ctor(h, m)
}

// 数字时钟
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('deep, deep !!!')
    }
}

// 指针时钟
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('deep, deep !!!')
    }
}

let digital = createClock(DigitalClock, 12, 15)
let analog = createClock(AnalogClock, 12, 15)
digital.tick()
analog.tick()

// 接口继承
interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

// 逗号隔开
interface Squaree extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Squaree
square.color = 'blue'
square.sideLength = 10
square.penWidth = 10

// 混合类型
interface Counter {
    // 一个对象可以同时作为函数和对象使用，并带有额外的属性
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {
    // 一个对象可以同时作为函数和对象使用，并带有额外的属性
    let counter = function (start: number) {
        return 'counter'
    } as Counter
    counter.interval = 123
    counter.reset = function () {
        console.log('reset')
    }
    return counter
}

let c = getCounter()
console.log(c.interval)
c.reset()
console.log(c(1))

// 类
class Greeter {
    // 属性
    greeting: string

    // 构造器
    constructor(message: string) {
        this.greeting = message
    }

    // 公共方法
    greet() {
        return 'Hello ' + this.greeting
    }
}

// 类继承
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved${distance}m.`)
    }

}

class Snake extends Animal {
    constructor(name) {
        super(name)
    }

    move(distance = 5) {
        console.log('Slithering...')
        super.move(distance)
    }
}

let sam: Animal = new Snake('sammy')
sam.move(40)

// 修饰符
class A {
    public name: string

    public constructor(name: string) {
        this.name = name
    }

    public move(distance: number = 0) {
        console.log('distance is ' + distance)
    }
}

// protected private
class Person {
    protected name: string // 子类可以访问到
    // private name: string // 子类不可以访问到, 编译会报错
    constructor(name: string) {
        this.name = name
    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
    }

    getElevatorPitch() {
        return this.name + 'employee'
    }
}

let howard = new Employee('Howard')
// console.log(howard.getElevatorPitch())
// console.log(howard.name) // 报错

// readonly属性
class Person1 {
    readonly name: string
    constructor(theName: string) {
        this.name = theName
    }
}

let P1 = new Person1('lee')
console.log(P1.name)
// P1.name = '' // 报错，因为是只读的

// 存储器 get set
const passcode = '123'
class Demo {
    private _fullName: string
    get fullName(): string {
       return this._fullName
    }
    set fullName(newName: string) {
        if(passcode && passcode === '123') {
            this._fullName = newName
        }else {
            console.log('Error: Unauthorized update of demo')
        }
    }
}
let demo = new Demo()
console.log(demo.fullName)
demo.fullName = 'demo changed'
if(demo.fullName) {
   console.log(demo.fullName)
}

// 静态属性
class Grid {
    static origin = {x: 0, y: 0}

    scale: number

    constructor(scale: number) {
       this.scale = scale
    }

    caculateDistanceFromOrigin(point: {x: number; y: number}) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}

let grid1 = new Grid(1)
let grid2 = new Grid(5)

console.log(grid1.caculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.caculateDistanceFromOrigin({x: 3, y: 4}))

// 抽象类, 抽象类不可以被实例化, 抽象类中的方法不包含具体实现并且必须在派生类中实现。
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void{
        console.log('Department name: ' + this.name)
    }

    abstract printMeeting():void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
   constructor() {
       super('Accounting and Auditing')
   }

   printMeeting(): void {
       console.log('The accounting department meets each Monday at 10am.')
   }

   generateReports(): void {
      console.log('Generating accounting reports...')
   }
}

let department: Department // 允许创建一个对抽象类型的引用
// department = new Department() // 不能创建抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
// department.generateRepoorts() // 方法在生命的抽象类中不存在


// ---------------------------------高级技巧-------------------------------------------
