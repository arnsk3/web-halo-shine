# Project rules

- Keep deployment presentation in focused section components and retain technical evidence behind accessible disclosures so the homepage stays scannable without removing content.
- Centralize case-specific story data and render it through one accessible visual-briefing component on standard and standalone case pages to keep narrative structure and evidence labeling consistent.
- Render subject-specific case artifacts from centralized artifact data with layout families for review lanes, convergence, human decisions, provenance, permission boundaries, and control relationships so cases are visually distinct without implying authentic evidence.- Keep case-study content data in src/lib/case-studies.ts, separate from page rendering, so content edits don't touch the large page file.
- Use status tokens (--c-success/danger/warn/info) for state colors instead of hex values so every color stays themeable.
