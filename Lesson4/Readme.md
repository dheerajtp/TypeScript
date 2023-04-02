## Lesson 4

### Literal Types

In TypeScript, a literal type is a type that represents a specific value. Literal types can be used to narrow down the possible values of a variable, parameter, or property to a specific set of values.

```
let userName: 'dheerajtp' | 'dheerajtp3' | 'darylDixon';

userName = 'darylDixon'
```

### Type aliases

In TypeScript, a type alias is a way to give a name to a type. This can make your code more readable and maintainable by providing a descriptive name for a complex or long type.

To create a type alias, you use the type keyword followed by the name of the alias and the type it represents. For example:

```
type StringOrNumber = string | number ;
```

**Both Type aliases and Literal's help to make our code DRY [Don't Repeat Your Code]**

### Functions

while defining a function we need to specify the type of parameters which we may pass and we can specify the return type of that function if the functions return any value and if not we can define the type as **void**

```
const sum = (a:number,b:number):number=>{
    return a+b
}


const logMessage(message:any):void => {
    console.log(message)
}
```

### Function Signature

In TypeScript, a function signature is a type that describes the types of the parameters and the return value of a function. Function signatures are used to define the shape of a function, without providing an implementation.

```

type mathFunction = (a:number,b:number)=>number

let multiplication = (a,b)=>{
    return a*b
}
```

- Function Signature using interface

```
interface concatination{
    (a:string,b:any):string
}

let stringConcatination:concatination = (a,b)=>{
    return a+b
}
```

### Optional Parameters

```
let addAll=(a:number,b:number,c?:number):number=>{
    return c!=="undefined" ? a+b+c :a+b;
}
```

### Default Parameters

```
let sumAll = (a:number,b:number,c:number = 5){
    return a+b+c
}
```


### Rest Parameters

```
let total = (...numbers:number[]):number => {
    return numbers.reduce((prev,current)=>prev+current,0)
}
```


-- never - return type if some error happens such as infinite loop 