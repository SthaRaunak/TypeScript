class ExampleClass<T> {
  private values: T[] = [];
  //Setting the argument for this method to be the generic
  setValue(value: T): void {
    this.values.push(value);
  }
  // 👇 Setting the argument for this method to be the generic
  getValues(): T[] {
    return this.values;
  }
}
// using number as type to replace generic 'T'
const example = new ExampleClass<number>();

// only pass in numbers. Any other type will error
example.setValue(4);

example.setValue(20);

const values = example.getValues();

console.log(values);
