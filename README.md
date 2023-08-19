# Demo k6 - The best developer experience for load testing

Install k6
```bash
brew install k6
```

## demo-01 simple-example

```bash
k6 run demo-01-simple-example.js
```

```bash
k6 run --vus 10 --duration 10s demo-01-simple-example.js
```

## demo-02 configuration

```bash
k6 run demo-02-configuration.js
```
## demo-03 stages

```bash
k6 run demo-03-stages.js
```

## demo-04 check

```bash
k6 run demo-04-check.js
```

## demo-05 post

```bash
k6 run demo-05-post.js
```

## demo-06 metric

```bash
k6 run demo-06-metric.js
```

## demo-07 counter

```bash
k6 run demo-07-counter.js
```

## demo-08 thresholds

```bash
k6 run demo-08-thresholds.js
```

## demo-09 test

```bash
k6 run demo-09-test.js
```

## demo-10 tags-and-group

```bash
k6 run --out csv=test_results.csv demo-10-tags-and-group.js
```

## demo-11 cloud

```bash
k6 cloud demo-11-cloud.js
```