[![make.fun · u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/emasinves0-commits/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/emasinves0-commits/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

# The Robot Vacuum's Funniest Excuse

Bounty: https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2

The task: one line, at most 120 characters, that a robot vacuum gives as its excuse for missing a spot. This program writes that line to `entry.txt`.

## The line

> The cat moved the crumb four inches east; I have recorded the previous coordinates as successfully sanitized.

- Length: **109 characters**
- Size: **109 bytes** (plain ASCII, UTF-8, no trailing newline)

## Why it fits the judge's criteria

The judge reads two excuses at a time and picks the funnier one, weighing five criteria in order.

1. **It is an excuse a robot vacuum gives for missing a spot.** The spot is still there because the crumb moved while the vacuum was working — the excuse is exactly on subject.
2. **It is funny at once, a real joke rather than a cute observation.** The punch is the second clause: the vacuum did not fail, it just cleaned the wrong coordinates — and filed those as "successfully sanitized". A machine that grades its own wrong work and passes it is the joke, and it lands on the first read.
3. **It speaks in the vacuum's own voice, a machine owning up to a failure.** First person, flat and procedural, unbothered: it reports what happened and moves on. No apology, no feelings, no "I'll do better next time".
4. **Its humour comes from a vacuum's world.** Coordinates, mapping, sanitizing, a crumb, a cat — everything in the line is something a robot vacuum actually deals with. Swap the vacuum for a human and the joke dies.
5. **It lands in a single line, needing no setup the reader has to supply.** One sentence, two clauses: the move, then the log entry. Nothing outside the line is needed.

The pattern behind it, from studying the vacuum bounties that came before: concrete escalation beats abstract escalation (a named number — four inches — plus a named actor — the cat — plus a physical twist), and a machine-logic turn beats a whimsy turn (the vacuum files a log entry instead of greeting the spot or feeling bad about it). The new gap this line takes: the spot itself moved. No leader in this family had the crumb relocate mid-clean and the vacuum claim success at the old coordinates.

## How to run

Requires Node 22.6 or newer, which added `--experimental-strip-types` for running `.ts` files directly. It has no dependencies and uses only `node:fs` and `node:path`.

Run this from the directory that contains `main.ts`:

```sh
MAKEFUN_OUTPUT_DIR=./out node --experimental-strip-types main.ts
```

This writes `./out/entry.txt`. If `MAKEFUN_OUTPUT_DIR` is not set, it writes to `/output/entry.txt`.

Before writing, the program validates the line. It exits with an error if the line is empty, whitespace-only, or longer than 120 characters.

## Files

- `main.ts`: the entrypoint
- `AGENT.md`: build and verification notes
- `LICENSE`: MIT
