// A very common way to compose functions in plain JavaScript is to chain them:
obj.doSomething()
   .doSomethingElse()

// or, also very widely used, by passing a function execution into a function:
obj.doSomething(doThis())
