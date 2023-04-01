## Lesson 3

Types of arrays : 

1. String array :

an array containing all string.

```
let stringArray:string[] = ['string1','string2']
```

2. Union Type Array

an array containing more than one type 

```
let unionArray:(string|number)[] = ['string1',1984]
```

3. Any Type Array 

if we have initialized an empty array it will be infered as an any type array.


```
let any=[];

let onlyStringEmptyArray : string[] = [];
```

4. Tuple

if we want to restrict the type of value at a particular position of an array. 

```
let tupleArray = [string,number,boolean] =["stringvalue',26,true]
```


### Objects

Objects can be defined as 

```
let myObj:object;
```         

#### Object annotation

In TypeScript, object annotation is a way to define the structure or shape of an object. It allows you to specify the properties and their types that an object should have

```
type Guitarist = {
    name:string,
    active:boolean,
    album:(string|number)[]
}

let evh:Guitarist ={
    name:"Name",
    active:false,
    album:[1984,5150]
}
```

To make a property optional :

```
let objectWithOptional = {
    name:string,
    active?:boolean
}

```


#### Type vs Interface

In TypeScript, both type and interface are used to define the shape or structure of an object, but they have some differences in terms of their capabilities and use cases.

```
type Person = {
  name: string;
  age: number;
}

type Employee = Person & {
  id: number;
  salary: number;
}

type PeopleById = {
  [id: number]: Person;
}

```

- Person is a simple object type with two properties, name and age.
- Employee is a more complex type that extends Person and adds two more properties, id and salary.
- PeopleById is a mapped type that defines an object with numeric keys, where each value is of type Person.



Interfaces, on the other hand, are used to describe the shape of an object or class. They are defined using the interface keyword and can include properties, methods, and index signatures.

```
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  id: number;
  salary: number;
}

interface PeopleById {
  [id: number]: Person;
}

```

- Person is an interface that describes an object with two properties, name and age.
- Employee is an interface that extends Person and adds two more properties, id and salary.
- PeopleById is an interface that defines an object with numeric keys, where each value is of type Person.


```
The main difference between type and interface is that type is more flexible and can define complex types that interfaces cannot, such as unions, intersections, and mapped types. On the other hand, interfaces are more suitable for describing the shape of objects and classes and can be extended and implemented by other interfaces and classes. In general, it's recommended to use interfaces for public-facing APIs and types for internal implementation details.

```


### Enums

```
enum Grades {
  A,
  B,
  C,
  D,
  U
}
```