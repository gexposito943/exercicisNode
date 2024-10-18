const EventEmitter = require('events');

class Counter extends EventEmitter {
  constructor(maxim) {
    super();
    this.counter = 0; 
    this.maxim = maxim; 
  }

  start() {
    // Inicia un interval que s'executa cada segon
    this.interval = setInterval(() => {
      this.counter++; 
      this.emit('tick', this.counter); 

      // Verifica si ja hem arribat al màxim
      if (this.counter >= this.maxim) {
        this.emit('end', this.counter); 
        clearInterval(this.interval); // Acaba 
      }
    }, 1000);
  }
}

module.exports = Counter; 
