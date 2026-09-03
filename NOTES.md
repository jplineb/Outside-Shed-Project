# Version History

A brief, dated log of everything discussed for the shed improvement project. Newest entries are added at the top.

## 2026-09-03 (first measurements)
- Foundation **16 ft (door/eave walls) × 12 ft (gables)**. ~192 sq ft. Bigger than the 8–12 ft guess. Plan: [diagrams/floor-plan.svg](diagrams/floor-plan.svg).
- Door: opening **48 × 75.5"**; each leaf **~24-1/16 × 75"**; closed exterior pair **46 × 75"**. Double door, keep the frame, repair bottoms. Bikes / mower / wheelbarrow fit.
- Window (jalousie): **18 × 22"**.
- Wall top-to-bottom **87"**. Block stem **8.5"**. Stud **74 × 1.5 × 3.5"** (2×4). Sill **5.5 × 1.5 × Y** (that's a **2×6** plate; Y not taped). 74 + 1.5 + 3" (likely double top plate) = 78.5"; 87 − 8.5 = 78.5" — so 87" is probably **top of wall to bottom of the block**.
- Hardware cloth: **56 ft** of perimeter. One 24"×25 ft roll of 1/4" cloth, ripped into 8" strips, covers it with leftover for jambs.
- Still need: roof pitch or one rafter / ridge height (foil + solar), gap width at the block line, whether the 2×6 is treated, Y if we replace plate.

## 2026-09-03 (no bug bomb)
- Don't buy a fogger / bug bomb. This shed is full of exits (block-line gap, jalousie, soffit vents, ridge vent, doors). The fog mostly leaves. It will not treat the **yellow jacket nest under the gutters** (that's a dusk/dawn nest spray, Phase 0). It doesn't soak the sill gap or droppings. Gas cans in the shed + a fogger is a fire hazard. Stick with: nest spray outside, then wet-clean, crack-and-crevice residual, baits, DE/boric in the gap, then seal with hardware cloth.

## 2026-09-03 (sill seal plan)
- Salvageable-path sealing is now a Phase 2 sequence in [TODO.md](TODO.md). Cross-section: [diagrams/sill-seal.svg](diagrams/sill-seal.svg).
- Stack (locked): **1/4" hardware cloth in the wall-to-block gap** (pests) + **Z-flashing or a PT/PVC skirt** that drips past the block (weather). Optional foam only *behind* the cloth. Never foam-only — it holds water on the plate and mice chew it.
- Order: probe / sister first → clean the gap → cloth all the way around including door jambs → flashing/skirt → door sweep + kick plate last.
- Extra water fix from [photos/exterior.jpg](photos/exterior.jpg): the **downspout dumps on the foundation corner**. Elbow + 4–6 ft extension (or a splash block) before we blame the siding. Keep grass/soil off the T1-11.
- Still need the gap width measured. Hairline vs 2" only changes how wide the cloth/skirt is, not the stack.

## 2026-09-03 (is the wet sill a teardown?)
- From [photos/interior-sill.jpg](photos/interior-sill.jpg): **not unsaveable**. Dark 6–10" tide mark + surface mold/mineral + debris on the plate is splash/wicking. The plate is still a recognizable member (anchor bolt still in it). Studs look full-section above the stain. Roof and walls in the other shots are still standing square.
- **Unsaveable for this shed** = repair cost approaches a new box, not “it will fall over tomorrow.” Tear down if: screwdriver goes through the **middle** of most studs (not just the last 2"); the sill is mush in long stretches **and the wall has dropped** (door out of square, ridge sag); rot runs **>18–24" up** on most of the perimeter; or you’d have to re-side + re-plate + sister everything and a comparable new shed is cheaper.
- **Typical save** if the probe is only punky at the last few inches: sister stud bottoms, replace/sister plate in sections, cut the bottom 12" of shot sheathing and add a treated kick / skirt, then seal the block line. Stain ≠ rot — confirm with a screwdriver before buying lumber.

## 2026-09-03 (back soffit vents)
- New shot: [photos/exterior-back.jpg](photos/exterior-back.jpg). Back eave has **two rectangular louvered soffit vents**. Front gutter/eave side has **none**.
- These feed the **roof cavity**, not the room: outside air in at the soffit → up the rafter bays → out the existing ridge vent. That is exactly the air gap the radiant barrier needs. Do **not** staple foil over the eave path, stuff the soffit, or paint the louvers shut.
- They do **not** replace the exhaust fan. Soffit + ridge cools the hot deck; the fan still moves air through the occupied space (jalousie in, exhaust high on the opposite side or gable).
- After the nest is gone: knock the cobwebs off so they actually pull.

## 2026-09-03 (interior photos)
- Three new shots: [photos/interior.jpg](photos/interior.jpg) (room), [photos/interior-rafters.jpg](photos/interior-rafters.jpg) (looking up), [photos/interior-sill.jpg](photos/interior-sill.jpg) (wall base). Bike is already in there — matches the locked use. Also mower, wheelbarrow, patio chairs, ladder, shelves of cans, gas cans. Phase 1 junk-out is still a real job.
- Lumber and corrugated sheets are stored **across the collar ties**. That has to come down before the radiant-barrier staple-up.
- **Sill plate is there:** 2x4 studs on a wood plate on the slab/block. Treated or not still unknown.
- Bottom ~6–10" of studs and sheathing is dark-stained (moisture wicking). White crusty patches (mold or mineral). Crumbly brown pile on the plate — dirt, punky rot, or insect frass. Probe it: hard wood = clean, dry, then seal the leak; soft/punky = sister those bottoms. Do **not** foam or trim over wet/rotten wood.
- Pull the gas cans out of the 105°F box until the shed is ventilated. Yellow cord on a joist is leftover, not house power. Daylight still visible at the ridge.

## 2026-09-02 (progress site)
- Added a static site at the repo root (`index.html`) so GitHub Pages can show live progress. It fetches `TODO.md` and `NOTES.md` plus the photos/diagram — checking boxes in `TODO.md` and pushing to `main` updates the page.
- Publish: GitHub → Settings → Pages → deploy from **`main` / root**. The repo is currently **private**; a public URL needs the repo set to public (simplest) or GitHub Pro. Intended URL: https://jplineb.github.io/Outside-Shed-Project/

## 2026-09-02 (cheap battery bank)
- Yes: a **USB-C power bank** (~20,000–27,000 mAh, look for real **~70–100 Wh** on the label) is enough for a USB fan + LED work light for a cleanup session. Charge it in the garage. Skip a phone-brick 10,000 mAh pack.
- Do **not** expect it to run a 20" box fan, shop vac, or anything through a cheap inverter — those loads need the GFCI house cord or a ~200–300 Wh LiFePO4 “power station” (~$150–250). Fake Amazon 50,000 mAh / “1000W” bricks are not worth it. Cordless tool-battery fans (Milwaukee/DeWalt/etc.) are even simpler if those packs already exist.

## 2026-09-02 (cleanup shopping list)
- Phase 1 now has a **cleanup sequence + shopping list** for dust, bugs, and animal droppings. Wet-down droppings before scooping (no dry sweep). Shop vac + disinfectant; PPE (N95, gloves). Interior bug spray/baits only — exterior yellow jacket nest stays Phase 0. After the wet clean, optional DE/boric acid in the wall-to-block gap until Phase 2 seals it.

## 2026-09-02 (temp light + cool for cleanup)
- For Phase 1 junk-out / wall cleaning, the nearest outlet is far and there is still **no power in the shed**. Do **not** pull a long cord for AC, a swamp cooler, or a generator-as-shop. Work **early or late** (also cooler, and nest-safer), doors + jalousie open for cross-breeze.
- Lighting: headlamp + rechargeable LED work light (matches battery-only tools).
- Cooling: cordless / USB fan, or a small **power station** charged in the garage and carried out (lights + fan for a session). If a shop vac or corded fan is needed, one **outdoor-rated** extension cord with **GFCI** at the house (or in-line) is fine as a **temporary** run — 12/3 if it's a long pull. Coil it up when you leave. Permanent solar still waits until after envelope + radiant barrier.

## 2026-09-02 (climate)
- Summers here are **very humid** (South Carolina). Evaporative / swamp cooler is off the table — those only work in dry air. Stick with radiant barrier + exhaust fan + lighter paint; no AC.
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
