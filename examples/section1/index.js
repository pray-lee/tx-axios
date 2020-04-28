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
