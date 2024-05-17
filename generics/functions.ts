//Generics are most used in functions

interface ObjOne {
  prop1: string;
  prop2: number;
}
interface ObjTwo {
  prop3: string;
  prop4: string;
}

//Defining our function with a generic type (T)

async function fetchData<T>() {
  const res = await fetch("randomapiurl");
    //telling TS that response is of type T (generic);
  const data = (await res.json()) as T;
  return data;
}

async function random() {
  await fetchData<ObjOne>(); // The returned data would have a type of ObjOne
  await fetchData<ObjTwo>(); // The returned data would have a type of ObjTwo
}
