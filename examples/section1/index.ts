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
function user(): void{
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
}

interface Square {
    color: string
    area: number,
}

function createSquare(config: squareConfig) : Square {
    let newSquare = {
        color: 'white',
        area: 100,
        size: '50'
    }
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
// createSquare({color: 'black'})

// 只读属性，只有创建的时候可以修改 -------------------------------------------------------
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 1 // 报错

// 数组只读
// 先定义一个普通数组
let a: number[] = [1,2,3]
// 然后再设置只读
let readOnlyA: ReadonlyArray<number> = a
a[0] = 1 //这里也会报错

