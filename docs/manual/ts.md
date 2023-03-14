# ts

**TS 就是 JS 的超集，JS 基础的类型都包含在内**

基础类型：Boolean、Number、String、null、undefined 以及 ES6 的  Symbol 和 ES10 的 BigInt。

- - - 
## 配置环境

`npm install typescript -g`

**运行tsc 文件名**<Br/>

`tsc + 你当前的ts文件名`,会编译出对应的js文件,使用

`node + js文件名`，即可运行查看打印结果


## 字符串类型
字符串使用string定义
```js
let str:string = '123'
let muban:string = `web${str}`
console.log(js,muban)
```

## 数字类型
支持十六进制、十进制、八进制和二进制
```js
let notANumber:number = NaN;//Nan
let num:number = 123;//普通数字
let infinityNumber:number = Infinity;//无穷大
let decimal:number = 6;//十进制
let hex:number = 0xf00d;//十六进制
let binary:number = 0b1010;//二进制
let octal:number = 0o744;//八进制
```

## 布尔类型
注意，使用构造函数 Boolean 创造的对象不是布尔值：
```js
let b:boolean = false
let b:boolean = Boolean(1)
// 以上都是正确的

let createBoolean:boolean = new Boolean(1)
//这样就会报错，因为实际上new Boolean()返回的是一个Boolean对象
// 需要改成
let createBoolean:Boolean = new Boolean(1)
```
## 空值类型
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
```js
function voidFn():void{
    console.log('test void')
}
```
void类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如 **通常的异步回调函数** <br/>

```js
// 函数
function fn(): string {    //规定输出类型
 return '123'
 }
fn()

// void也可以定义undefined 和 null类型
 let u:void = undefined
 let n:void = null
```

## Null和undefined类型
```js
let u:undefined = undefined //定义undefined
let n:null = null//定义null
//但是void 类型是不可以给子类赋值的
```
>void 和 undefined 和 null 最大的区别
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：

```js
let a:void = undefined
let b:string = '1'

b = a
// 这样把a给b赋值会报错，void类型不可以分给其他类型

let a:undefined = undefined
let b:string = '1'

b = a //这样是没有问题的
```

## 本部分主要介绍数组类型的相关概念</br>

### 1、类型[]

数组类型，我们在声明时，使用类型+中括号的方式，表示这个数组中都有那些类型的数据

```js
let arr: number[] = [123]; // √  表示数组中的都是数字
let arr: number[] = [1, 2, 3, "1"]; // × 声明了数组中的类型为数字以后，是不可以出现字符串的形式的

let arr: number[] = [1, 2, 3];
arr.unshift("1"); // 同样也不允许添加其他类型的数组

var arr: number[] = [1, 2, 3]; //数字类型的数组
var arr2: string[] = ["1", "2"]; //字符串类型的数组
var arr3: any[] = [1, "2", true]; //任意类型的数组
```

### 2、数组泛型

规则 Array<类型>

```js
let arr:Array<number> = [1,2,3] === let arr:number[] = [1,2,3]
```

### 3、用接口表示数组

一般用来描述类数组

```js
interface NumberArray {
  [index: number]: number;
}
let a: NumberArray = [1, 2, 3, 4];
//表示只要索引的类型是数字时，那么值的类型必须是数字
```

### 4、多维数组

```js
let data: number[][] = [
  [1, 2],
  [3, 4],
];
```

### 5、arguments 类数组

```js
function Arr(...args: any): void {
  console.log(arguments);
  let arr: number[] = arguments; //会报错，因为arguments是一个类数组，所以不能用这种方式
}
Arr(111, 222, 333);
```

```js
function Arr(..args:any):void {
    console.log(arguments)
    let arr:IArguments = arguments
}
Arr(111, 222, 333);
```
ts内置了一个接口对象IArguments,它是ts中定义好了的类型，实际上就是：
```js
interface IArguments {
    [index:number]:any;
    length:number;
    callee:Function;
}
```

### 6、any在数组中的应用
以下的这个数组可以存在任意类型
```js
let list:any[] = ['test',true,1,{name:'wang'},[1,3]]
```

### 1、any类型
* any类型没有限定哪种类型，可以随便赋值切换类型，不需要检查类型，例如：
```js
let a:any = 123
a = '123'
a = true
```
* 声明变量的时候没有指定类型的话，则默认为any类型；
```js
let anys;
anys = '123'
anys = 123
```

***但是使用any的话其实也就是失去了ts类型检查的作用***
### 2、unknown 类型
TypeScript 3.0中引入的 unknown 类型也被认为是 top type（顶级类型） ，但它更安全。与 any 一样，所有类型都可以分配给unknown。
<br/>
unknow类型比any更加严格, 当你要使用any的时候可以尝试使用unknow

```js
//unknown 可以定义任何类型的值
let value: unknown;
 
value = true;             // √
value = 42;               // √
value = "Hello World";    // √
value = [];               // √
value = {};               // √
value = null;             // √
value = undefined;        // √
value = Symbol("type");   // √
 
//以下这样写会报错，因为unknown类型不能作为子类型,只能作为父类型;而any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
let a:unknown = '123'
let b:string = a   // ×
 
//这样就没问题 any类型是可以的
let q:any = '123'
let w:string = q   // √
 
//unknown可赋值对象只有unknown 和 any
let e:unknown = '123'  
let r:any= '456'
 
r = e
```

***另外unknown和any还有一个区别***
>**如果是unknow类型的话，我们是不能调用其属性和函数方法的；any类型的话是可以的**
```js
// 如果我们获取any类型的对象不存在的属性的时候，是不会报错的
let obj:any = {b:1}
obj.a    // √
 
 
// 如果是unknow类型的话，我们是不能调用其属性和函数方法的；any类型的话是可以的。
let obj:unknown = {b:1,ccc:():number=>213}
obj.b    // × 
obj.ccc()   // × 
```

>***总结：***

>>1、any类型可以视作我们在写js，条件宽松，可以任意赋值给其他类型或被赋值,以及像对待js对象那样去调用。

>>2、当我们不确定类型时，使用unknown类型会会更严格、更安全。它是top type,这也意味着它不能作为子类型去给其他类型赋值（除了unknown和any类型），只能作为父类型被赋值。

>>3、我们不能调用unknown类型的属性和函数方法

在ts里面，声明函数的时候，参数类型和函数返回类型都要写，并且参数不能多传，也不能少传，必须按照约定的类型来
```js
const fn = (name:string,age:number):string => {
    return name + age
}
fn('张三',18)
```
以上就是表示，我们声明了一个fn函数，接收两个参数：name（字符串类型）、age(数字类型)。这个函数输出结果是字符串格式的

### 1、函数的可选参数
有时候我们定义的函数的某一个形参，可能在以后调用这个函数的时候，对于这个参数传不传，是不确定的。那么这个时候就用到了可选参数操作符？

我们可以用？来表示这个参数为可选参数，后面在调用的时候，传不传都是可以的
```js
const fn = (name:string,age?:number):string => {
    return name+age
}
fn('zhangsan',18)
```

### 2、函数参数的默认值
ts中定义函数的形参的默认值和js定义默认参数是差不多的，只不过多了类型说明
```js
const fn = (name:string = '开心的拍起了肚皮'):string => {
    return name
} 
fn()   //这样函数内部的name默认值就是'开心的拍肚皮'
```

### 3、接口的方式定义函数
下面我们是定义Add接口，定义函数两个参数name（字符串类型）、age(数值类型)，该函数返回字符串类型的结果
```js
interface Add {
    (name:string,age:number):string
}
const fnAdd : Add = (name:string,age:number) : string =>{
    return name + age
}
fn('张三'，18)
```

这一章主要介绍ts关于对象是如何进行类型声明和约束的

### 1、对象的类型

首先js中，我们可以任意声明一个对象，并且可以对其属性和方法进行添加、读取、删除等操作。</br>
但是在ts中,我们定义对象的方式要用到 <font color="#3eaf7c" size="4">***interface***</font> (接口),我们用它来定义一种约束，使用这个接口的数据的格式都要满足这种约束。</br>
例如：
```js
interface Person {
    name:string,
    age:number,
}
const obj:Person = {
    name:'zhangsan',
    age:18,
}
```
上面我们就是定义一个叫Person的约束，它规定的对象结构是：里面有字符串类型的name属性，和number类型的age属性,然后我们声明了一个Person类型的obj对象</br>

上面这样写是没有问题的，但是假如我们在使用Person接口约束时，定义的对象的属性缺少age属性，那么将会出现以下情况:</br>

><font color="#3eaf7c" size="4">**使用接口约束的时候不能多一个属性也不能少一个属性，必须与接口保持一致**</font>

### 2、interface 合并与继承

* 当interface重名时，会默认自动合并，如下，我们在给变量x赋值时，满足了name和age两个属性。

```js
//重名interface  可以合并
interface A {name:string}
interface A {age:number}
var x:A = {name:'xx',age:20}
```

* interface之间的继承

如下，interfaceA
```js
interface A{
    name:string
}
 
interface B extends A{  //通过继承将A的属性继承过来
    age:number
}
 
let obj:B = {
    age:18,
    name:"string"
}
```

### 3、interface中定义一个可选属性

我们前面介绍了，当接口里约定了某些属性后，我们后面依据这个接口定义的对象是不能多或少任一个属性的，
但是如果有些属性，我们不确定它是否真的存在或需要的话，我们就需要用到可选属性，
将接口内的某个属性通过 ？操作符定义为可选属性

```js
//可选属性的含义是该属性可以不存在
interface Person {
    b?:string,    //表示b属性可以不存在
    a:string
}
 
const person:Person  = {
    a:"213"
}
```

### 4、任意属性[propName: string]

需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

在下面的demo中，我们用Q声明的变量obj，添加了新的属性c并没有报错，
这是因为我们在Q中定义了[propName: string]: any;

它允许我们添加新的任意属性(属性的数据类型还是要与之前我们定义的[propName: string]: any保持一致的)

```js
interface Q {
    b?:string,
    a:string,
    [propName: string]: any;
}
 
const obj:Q  = {
    a:"213",
    c:"123"
}
```

### 5、只读属性 readonly
**readonly 只读属性  是不允许被赋值的，只能读取**
```js

//属性a是只读的不允许重新赋值
interface Int {
    b?: string,
    readonly a: string,
    [propName: string]: any;
}
 
const obj: Int = {
    a: "213",
    c: "123"
}
obj.a = 123    //会报错，如下图
```


### 6、添加函数

```js
interface Int {
    b?: string,
    readonly a: string,
    [propName: string]: any;
    fn():void          //定义了函数fn
}
const obj: Int = {
    a: "213",
    c: "123",
    fn:()=>{
        console.log(123)
    }
}
```

>总结：
>>* 这一章我们学习了ts中约束对象的接口定义后，一般情况下我们在根据这个接口定义对象时，数据的格式要满足这种约束，不能多或者少
>>* 接口可以通过extends继承、；
>>* 通过？操作符定义接口中某个属性为可选属性；
>>* 给接口添加[propName:string]:any 使得我们可以添加新的任意属性；
>>* 属性名前添加readonly 来规定只读属性
>>* 添加函数





