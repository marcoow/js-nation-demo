# JSNation Demo

This is an example repo to go with my talk at JSNation: "Speeding Up Your Node
Sever With Rust". It shows how a Fibonacci function built as a native extension
in Rust is several times faster than an implementation in Rust, yet can
seamlessly be used from JS code.

## How to Run

1. Build the Rust code:

```
pnpm build
```

2. Run the benchmarks:

```
pnpm bench
```
