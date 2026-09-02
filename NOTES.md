# Version History

A brief, dated log of everything discussed for the shed improvement project. Newest entries are added at the top.

## 2026-09-02 (repo cleanup + agent context)
- Canonical photo paths: `photos/exterior.jpg` and `photos/interior-roof.jpg` (moved out of `Photos/Untitled/`).
- Removed unrelated iPhone dump `Photos/FullSizeRender.{heic,mov,png}` (motorcycle group Live Photo, not the shed) and `.DS_Store`. Added `.gitignore`.
- Added `.cursorrules` (and `.cursor/rules/shed-project.mdc`) so future agents get the locked decisions, layout, and "commit to main, no PRs" workflow without rediscovering them.
- Notes already live on **`main`** via Mac commit `2907cea` ("starting repo"). Work goes straight to `main`; do not open pull requests unless asked.

## 2026-09-02 (main branch)
- All notes/photos/diagrams now live on **`main`**.
- Earlier Cloud Agent runs started from **mobile with no GitHub repo attached** could not push; the first successful GitHub copy was the Mac `starting repo` commit, not a merge of `cursor/organize-shed-repo-e0be`.

## 2026-09-02 (GitHub + local path)
- Canonical GitHub repo: https://github.com/jplineb/Outside-Shed-Project.git
- Canonical local folder (Mac): `/Users/jp/Documents/dev/Outside Shed Project`
- `git remote add origin` done in this workspace. Push from the agent **failed** — no GitHub credentials (`gh` not logged in; HTTPS username prompt; SSH publickey denied). Files are committed locally on `cursor/organize-shed-repo-e0be` and still need a first push from a logged-in machine.

## 2026-09-02 (repo layout)
- Flattened the project to the **repo root** so files are obvious: `README.md`, `TODO.md`, `NOTES.md`, `photos/`, `diagrams/`. Removed the nested `shed-project/` folder.
- Progress tracking: checkboxes in `TODO.md` + dated bullets in `NOTES.md` + git commits.
- Branch: `cursor/organize-shed-repo-e0be`. No GitHub remote in this environment yet (not logged into `gh`).

## 2026-09-02 (radiant barrier diagram)
- User asked what “staple to the rafters, not the OSB” actually means. Added diagrams: `diagrams/radiant-barrier-diagram.png` and `diagrams/radiant-barrier.svg`.
- Correct way: perforated foil stretched across the **bottom of the 2x4s**, leaving the rafter bay as an air gap. Heat from the hot deck reflects instead of radiating into the room.
- Wrong way: foil glued or stapled tight to the OSB — no air gap, so it just becomes another hot layer.
- Blue mark on the deck is a layout line, not a cable (earlier misread).

## 2026-09-02 (interior roof photo)
- Photo saved as `photos/interior-roof.jpg`. **Open rafters, no ceiling** — radiant barrier is a staple-up job.
- Bare OSB roof deck and OSB upper walls, 2x4 rafters to a ridge board, no insulation. Small existing vent near the peak. Daylight through at least one corner / roof-to-wall joint — envelope gaps are not only at the foundation.
- Correction: the blue mark on the OSB is a **layout/chalk line**, not a cable. No mystery wiring in that photo.
- Barrier method locked: staple perforated foil radiant barrier to the **bottom of the rafters**, foil facing an air gap (the bay between OSB and foil). Do **not** glue foil to the OSB — that kills the gap and the cooling. Don't bury the existing ridge vent.
- Exhaust fan can mount in a rafter bay or a gable; exposed framing also makes later solar wiring easy.
- Open question about rafters vs ceiling is resolved.

## 2026-09-02 (tools, heat, barrier, nest)
- Tools: **battery-only in the shed**. Anything that needs high voltage stays in the primary garage. Solar does not need to run compressors or corded saws — size it for lights, tool-battery charging, and a fan (small inverter is enough).
- Comfort: must be **workable**. Currently **~105°F midday**. Not chasing true climate control / AC.
- Reflective tin decision: **interior radiant barrier**, not a metal roof overlay or exterior tin walls.
- Nest is **still active** under the gutters — this is the immediate first job (dusk/dawn treatment, wait, scrape, fix gutter guards). Don't start roof/eave work until it's gone.
- Heat plan: radiant barrier under the roof (with an air gap) + exhaust fan (jalousie as intake, exhaust high) + lighter exterior paint when we repaint. Realistic DIY target is knocking that 105°F down into the high 80s / low 90s plus a personal fan — workable, not office-cool. Wall foam later if needed.
- Sequence updated to phases: 0 nest → 1 measure/junk/clean → 2 gaps + door + paint → 3 radiant barrier + fan → 4 modest solar.
- Still open: dimensions; whether the interior roof is open rafters or a ceiling; gap width; roof-vent leaks; dry vs humid climate.

## 2026-09-02 (photo + decisions)
- User wants **as much DIY as possible**.
- Use locked in: **bike / house-project workspace**, not just storage.
- No power to the building; **solar is the likely path**.
- Yellow jacket nest is **under the gutters**.
- Door: **bottoms rotting, frame still good** — repair the slabs, don't replace the opening.
- Foundation: **concrete slab, cinder blocks on top, building on the blocks**. Visible gap where T1-11 siding meets the block line.
- Exterior photo saved as `photos/exterior.jpg`: faded tan T1-11 siding, white trim, dark shingle gable roof, white gutters + downspout, double doors (one open), small 3-pane jalousie window, possible vent/skylight near the ridge. Sunny, unshaded roof — decent solar site. Broom/shovel against the wall suggest a roughly 8–12 ft building.
- Working plan taking shape:
  1. Nest first (dusk/dawn spray, wait, then scrape; then fix loose gutter guards).
  2. Measure, junk out, clean walls.
  3. Pest/draft seal at the block line (hardware cloth + trim/flashing, not foam-only).
  4. Cut-and-patch or kick-plate the door bottoms; add a sweep.
  5. Paint after repairs.
  6. Ventilation + modest solar last. For a bike shop, an exhaust fan + sealing + radiant barrier is the DIY cooling path; a window AC would eat a lot of solar. Size solar around lights, charging, and a fan unless we need 120V tools.
- Still open: dimensions; summer heat / comfort target; cordless vs corded tools; solar starting size; where the reflective tin goes; gap width; whether the nest is active; whether the roof vent leaks.

## 2026-09-02 (shaping ideas)
- Started thinking through the todos rather than just listing them.
- Working sequence idea: **safety first** (yellow jacket nest) → junk out → clean walls → seal gaps and fix the door → paint / reflective tin → then power, cooling, and exhaust. Utilities last so we're not wiring or mounting fans into a space that's still rotting, gappy, or full of junk.
- Climate idea: sealing gaps + reflective tin + an exhaust fan is a low-power "keep it bearable" package. A real cooler (AC / mini-split) only makes sense if the shed has a defined use that needs it, and if we're bringing in actual electrical service.
- Biggest unknown that changes everything else: **what the shed is for**. Power, cooling, door quality, and how much to spend all hang off that.
- Questions posed: intended use; existing power; nest location/size; door salvage vs replace; foundation type and gap size; where reflective tin would go; budget/DIY vs hire.

## 2026-09-02
- Project kicked off.
- Captured the initial todo list: interior cleanup, yellow jacket nest removal, junk removal, dry-rotting door repair, repaint, power, cooling, exhaust fan, reflective tin, and foundation gap sealing. See [TODO.md](TODO.md) for the full grouped checklist.
- Open question: exact shed/shack dimensions not yet measured.
