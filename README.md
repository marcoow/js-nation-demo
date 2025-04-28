# JSNation Demo

This is an example repo to go with my talk at JSNation: "Speeding Up Your Node
Sever With Rust". It calculates the highest score from an input JSON file with
1m score records.

## How to Run

1. Build the Rust code:

```
pnpm build
```

2. Start the server:

```
pnpm start
```

3. Request the highscore:

for the Node implementation:

```
curl -i localhost:3000/highscore
```

for the Rust implementation:

```
curl -i localhost:3000/highscore.rs
```

## Hot to Diagnose

Use [clinic.js](https://clinicjs.org) to diagnose the Node endpoint:

```
clinic doctor --on-port 'autocannon localhost:$PORT/highscore' -- node main.mjs
```

…as well as the Rust endpoint:

```
clinic doctor --on-port 'autocannon localhost:$PORT/highscore.rs' -- node main.mjs
```

This will run a load test against each endpoint (using
[`autocannon`](https://github.com/mcollina/autocannon) with its default
settings) and present a report afterwards.
