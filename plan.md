# Culture Deck — Phase 3 Plan

## Scope

Phase 3 strengthens Culture Deck as a repeatable community event tool without adding a database or account system. It adds browser-local continuity, a lightweight tournament archive, and host-importable question decks.

## Outcomes

1. **Resume a live tournament after refresh**
   - Autosave the active tournament state to local storage.
   - Show a resume action on the home screen when a live snapshot exists.
   - Restore the active screen, player turn, question position, scores, settings, and timer deadline.
   - Let the host discard a stale snapshot.

2. **Keep a local tournament history**
   - Save completed tournament summaries locally.
   - Show recent completed events on the home screen.
   - Limit history to the most recent 10 events and provide a clear-history action.
   - Include date, winner/shared crown, player count, and final scores.

3. **Import reusable question decks**
   - Add a JSON file picker in setup.
   - Validate imported categories and questions using the existing question schema.
   - Merge valid imported questions into matching categories and report the import count.
   - Keep the built-in deck usable when a file is invalid or unavailable.

## Design decisions

Reuse the existing editorial visual language. Phase 3 controls appear as a compact operations panel in setup and a resume/history panel on the home screen. All persistence uses `localStorage`; no credentials, external services, or server-side data are introduced.

## Project structure

- `app.js`: state serialization, resume/history actions, imported-deck validation, and lifecycle hooks.
- `index.html`: home resume/history panel and setup deck-import controls.
- `styles.css`: compact Phase 3 operations styling and responsive behavior.
- `README.md` / `TODO.md`: user-facing documentation and completion checklist.
