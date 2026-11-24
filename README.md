# Dad Joke Showdown

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/sandytaztaz-hue/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/sandytaztaz-hue/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun: a single dad joke of at most 200 characters, judged pairwise by a judge model that picks the one that lands the bigger groan.

## The joke

> My dad argued with the self-checkout for ten minutes. It said 'unexpected item in the bagging area' and he said, 'Son, I've been the unexpected item in this family for forty years.'

181 characters — inside the 200-character cap, with the punchline at the end.

## How it works

`main.ts` (Node 22) writes the joke to `entry.txt` in the output directory, resolved in this order: the `MAKEFUN_OUTPUT_DIR` environment variable, then an `--output` command-line flag, then `/output` by default.

```sh
node main.ts --output ./out
```

The program writes exactly the joke above, nothing else — no trailing
newline, no extra files — so the output is deterministic: run it twice
into two directories and the two `entry.txt` files are byte-identical.

## License

MIT — see [LICENSE](LICENSE).
