const Counter = require('./counter');

function configuration(config) {
  const { maxim } = config; 
  const counter = new Counter(maxim); 

  // de cada segon (tick)
  counter.on('tick', (count) => {
    console.log(`Contador actual: ${count}`); 
  });

  // Fa que arribem al límit del contador
  counter.on('end', (count) => {
    console.log(`El cronòmetre ha arribat a ${count}`); 
  });

 
  counter.start();
}

// Configuració des d'un objecte
const config = {
  maxim: 10, 
};

configuration(config);
