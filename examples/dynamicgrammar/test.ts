var foo = 123;

class Awesome {
    public test() { }
    public test2(a: number, b: string, c: Awesome) { }
}

var bar: Awesome;

interface IAwesome<T> {
    awesome: T;
}
var bas: IAwesome<any>;
