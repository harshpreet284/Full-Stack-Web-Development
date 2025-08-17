function outerFunction() {
    let name = "Harshpreet Singh"; // let => block scoped
    function innerFunction() {
      console.log(name); 
    }
    return innerFunction;
  }
    let inner = outerFunction();
    inner();