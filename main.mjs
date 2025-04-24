import { Bench } from "tinybench";
import { fib as rustFib } from "./index.js";

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

const bench = new Bench({ name: "Fibonacci", time: 10 });

bench
  .add("Node", () => {
    fib(30);
  })
  .add("Rust", async () => {
    rustFib(30);
  });

await bench.run();

console.log(bench.name);
console.table(bench.table());
