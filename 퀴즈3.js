class Counter {
  #value;
  constructor(startVaule) {
    if (isNaN(startVaule) || startVaule < 0) {
      this.#value = 0;
    } else {
      this.#value = startVaule;
    }
  }

  get vaule() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();

console.log(counter.vaule);
