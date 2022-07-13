const myObject = {
    count:0,
    array:[11,13,14,66,67,69,234,456,2,1],
    next: function () {
        if(this.current%2==0){
        return { done: false, value: this.count++ };
    } else {
        return { done: true };
      }
      },
      
      [Symbol.iterator]: function () {
     this.current=this.array[this.count]
        
        return this
      },
    }
    
    for (let x of myObject) {
        console.log(x)
    }