# Culture Deck

A local pass-and-play trivia tournament game built for Black pop culture: 2 to 8 named players, timed turns across five categories (Music, Film + TV, Sports, History, Internet culture), per-player scoring with streak bonuses, standings after each category, and a death-match final for the top two players.

Run with `node server.mjs` (`npm start`). See TODO.md for the tournament deliverables checklist.

## Phase 1 features

The setup screen now supports Casual, Competitive, and Expert difficulty presets, optional category-order drafting, and one optional wager per player per category. After the five category rounds, players can compete in a 30-second lightning round with double base points before entering sudden death.

The built-in question bank can be extended without editing `app.js`. Add valid questions to `public/decks/community.json` under an existing category. Each question needs `text`, an `answers` array, and a `correct` answer that exactly matches one of the choices; `note` is optional. Invalid entries are ignored safely, and the game remains playable if the external deck is unavailable.

## Phase 2 event tools

Phase 2 adds optional team tournament mode, host controls for pausing, skipping, awarding a 50-point bonus, and entering projector mode, plus Standard, Large text, High contrast, and Reduced motion accessibility presets. Completed tournaments can be downloaded as JSON or CSV from the champion screen. Team assignments and event settings are configured before the roster is locked.

## Phase 3 continuity tools

Phase 3 keeps the game useful for recurring community events without requiring an account or database. An active tournament autosaves in the browser and can be resumed after a refresh or interrupted session. Completed events are kept in a local recent-history list capped at 10 tournaments, with a clear-history action. Hosts can also import a JSON question deck during setup; valid questions for the five existing categories are merged into the current game and persisted locally for future sessions.
