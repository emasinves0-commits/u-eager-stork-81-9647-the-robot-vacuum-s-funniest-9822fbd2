# Build notes — The Robot Vacuum's Funniest Excuse

Slug: `u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2`
Deadline: 26 Nov 2026 14:55 UTC. Pot $2, 1st only. Fee FREE (API-verified).

## Entry

"The cat moved the crumb four inches east; I have recorded the previous
coordinates as successfully sanitized." — 109 characters / 109 bytes, ASCII.

## How it was chosen

- Rescue build. The previous builder (cancelled mid-run) had already generated
  69 unique candidates from 36 of 113 working models, shortlisted 14 by
  lexicographic scoring against the judge's five criteria, and found the
  ensemble panel EMPTY (0/5 judges kept after the order-echo filter — a valid
  null result, not a failure). I verified the pool myself (eyeballed all 48
  clean lines, dropped 2 scaffolding junk lines) and kept its shortlist.
- Duel vs the known strong field line ("I spent twenty minutes cleaning my own
  reflection in the patio door. The spot never stood a chance."):
  judge-call.py --priority high ran all 4 retry rounds; ALL FIVE judge routes
  failed every round (AIHubMix 502/503, BeatAPI 503, UnoRouter 429, MecutinAI
  curl exit 26, AkaRouter 429/timeout) — the router was in a storm with many
  parallel builders. No verdict was ever returned, in either position.
  Per the submit-early rule the pick was decided by lexicographic scoring
  instead, and reported honestly: no duel ran. The parent may duel S03 vs the
  mirror line before submitting if the routes recover.
- Scoring pick: S03. C1 pass (excuse on-subject). C2: the punch is one beat —
  the vacuum cleaned the wrong coordinates and logged them "successfully
  sanitized". C3: flat first-person machine voice. C4: coordinates / map /
  sanitize / crumb / cat — pure vacuum world. C5: one sentence, no setup.
  Runners-up: S01 (shadow + "visual error"), S13 (dock bureaucracy +
  "reclassified as carpet"), S11 (spot migrated, 03:14/03:16).

## Verification

- `MAKEFUN_OUTPUT_DIR=./out node --experimental-strip-types main.ts` on
  Node v24.22.1 writes `out/entry.txt`, 109 bytes, no trailing newline,
  byte-identical to the intended line (`cmp` clean). Re-run after the
  `resolveOutputDir` refactor: still byte-identical.
- `main.ts` was written, then edited again in a separate pass (thinking_revised:
  entrypoint touched in 2 messages), and validates 1–120 characters with a
  loud failure outside the gate.
- Repo: `emasinves0-commits/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2`
  (already existed, empty — created by the previous builder). Files pushed
  sequentially via github_pat.py: main.ts, README.md, AGENT.md, LICENSE.
  About: homepage = bounty URL, topic makefun.

## What the parent still has to do

Bundle this session + submit (builder never bundles/submits). If judge routes
recover before the deadline, duel S03 vs the mirror line first — a 0-2 loss
would mean swapping the line for S01 or S13 before submitting.
