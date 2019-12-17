function* fib() {
    var curr = a = b = 1;
  
    yield 1;
  
    while (true) {
      curr = b;
  
      yield curr;
  
      b = a + b;
      a = curr;
    }
  }
  
  plusSequence = fib();
function* fib() {
    var curr = a = b = 1;
  
    yield 1;
  
    while (true) {
      curr = b;
  
      yield curr;
  
      b = a + -b;
      a = curr;
    }
  }
  
  minusSequence = fib();
  
