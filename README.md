# Culture Deck

A local pass-and-play trivia tournament game built for Black pop culture: 2 to 8 named players, timed turns across five categories (Music, Film + TV, Sports, History, Internet culture), per-player scoring with streak bonuses, standings after each category, and a death-match final for the top two players.

Run with `node server.mjs` (`npm start`). See TODO.md for the tournament deliverables checklist.

## Phase 1 features

The setup screen now supports Casual, Competitive, and Expert difficulty presets, optional category-order drafting, and one optional wager per player per category. After the five category rounds, players can compete in a 30-second lightning round with double base points before entering sudden death.

The built-in question bank can be extended without editing `app.js`. Add valid questions to `public/decks/community.json` under an existing category. Each question needs `text`, an `answers` array, and a `correct` answer that exactly matches one of the choices; `note` is optional. Invalid entries are ignored safely, and the game remains playable if the external deck is unavailable.
