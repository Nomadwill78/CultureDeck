# Culture Deck — Tournament Deliverables

- Let a host set up a local pass-and-play tournament with 2–8 named players.
- Give every player a timed 2:00 turn in each of the five Black pop culture categories: Music, Film + TV, Sports, History, and Internet culture.
- Track category points, total points, correct answers, and streak bonuses independently for each player, with immediate feedback and correct-answer reveals.
- Show a clear handoff between players and a standings report after every completed category.
- Automatically advance the two players with the highest overall scores into a death match.
- Give each finalist a separate 1:00 hard-question run, with a dedicated hard-question bank and independent score.
- Crown the finalist with the highest death-match score, handle a tied final score as a shared crown, and provide replay/new-lineup actions.
- Preserve responsive, keyboard-accessible controls, visible focus states, semantic structure, and live timer/feedback status for assistive technology.

## Phase 1 expansion

- [x] Add Casual, Competitive, and Expert difficulty presets.
- [x] Let the host draft the category order before starting.
- [x] Add one optional wager per player per category.
- [x] Add a 30-second mixed-category lightning round with double base points.
- [x] Load validated supplemental questions from `public/decks/community.json`.

## Phase 2 expansion

- [x] Add optional team tournament mode with configurable Team A–D assignments and team standings.
- [x] Add host/moderator controls to pause or resume the clock, skip a question, award a 50-point bonus, and enter or exit projector mode.
- [x] Add a projector presentation mode with larger questions and answer controls and reduced surrounding chrome.
- [x] Add JSON and CSV results downloads from the champion screen.
- [x] Add Standard, Large text, High contrast, and Reduced motion accessibility presets.

## Phase 3 expansion

- [x] Autosave an active tournament locally and offer resume or discard actions after a refresh or interrupted session.
- [x] Restore the active screen, scores, settings, question position, and timer deadline from a saved tournament.
- [x] Store the 10 most recent completed tournaments locally with winner, date, player count, and final scores.
- [x] Provide a clear-history action for locally stored tournament summaries.
- [x] Import a JSON question deck during setup, validate questions against the existing schema, merge valid questions into matching categories, and persist the imported deck locally.
