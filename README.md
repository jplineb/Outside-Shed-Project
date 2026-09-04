# Shed Improvement Project

DIY conversion of the backside shed into a **bike / house-project workspace**.

**Where this lives**

| Copy | Path |
|------|------|
| GitHub | https://github.com/jplineb/Outside-Shed-Project |
| Your Mac | `/Users/jp/Documents/dev/Outside Shed Project` |

Open `README.md` first. Agent context lives in [`.cursorrules`](.cursorrules). There is no nested `shed-project/` folder.

**Progress site:** `index.html` (reads `TODO.md` + `NOTES.md` live). After GitHub Pages is on: [https://jplineb.github.io/Outside-Shed-Project/](https://jplineb.github.io/Outside-Shed-Project/)

```
.
├── README.md      ← you are here (map + current snapshot)
├── TODO.md        ← checkboxes; this is how we track progress
├── NOTES.md       ← dated discussion / decision log (newest first)
├── index.html     ← progress site (GitHub Pages)
├── site.css
├── site.js
├── .cursorrules   ← project memory for Cursor agents
├── photos/        ← site photos
│   ├── exterior.jpg
│   ├── exterior-back.jpg
│   ├── interior.jpg
│   ├── interior-roof.jpg
│   ├── interior-rafters.jpg
│   └── interior-sill.jpg
└── diagrams/      ← how-to drawings
    ├── radiant-barrier-diagram.png
    ├── radiant-barrier.svg
    ├── sill-seal.png
    ├── sill-seal.svg
    ├── floor-plan.png
    └── floor-plan.svg
```

**How to track progress**
1. Do the work.
2. Check it off in [TODO.md](TODO.md) (`- [x]`).
3. Add a short dated bullet in [NOTES.md](NOTES.md).
4. Commit and push to **`main`**. No pull requests unless asked.
5. The progress site updates on the next refresh (it fetches `TODO.md` / `NOTES.md`).

**Turn on GitHub Pages** (one-time, in the GitHub UI — agents cannot flip this switch):
1. Repo **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: **`main`**, folder: **`/` (root)**. Save.
4. The site is private-repo-blocked on free GitHub unless you **change the repo to public** (or have GitHub Pro). Public is the simple way to share progress.

---

## Current snapshot

- **Next action:** treat the **active yellow jacket nest** under the gutters (dusk/dawn). Don't start eave/roof work until it's gone. Interior cleanup (dust, bugs, droppings) shopping list is in [TODO.md](TODO.md) Phase 1.
- **Use:** bikes + house projects; cordless tools only. High-voltage work stays in the primary garage.
- **Comfort:** must be workable. Currently ~**105°F** midday. Path = interior radiant barrier + exhaust fan + lighter paint. No AC. Very humid SC summers — swamp cooler won't work.
- **Power:** none on site. Modest solar later (lights, charging, fan). Cleanup sessions: battery lights/fan or a GFCI outdoor cord — not AC on a long run.
- **Door:** 48 × 75.5" opening, two ~24" leaves. Bottoms rotting, frame good — repair, don't replace the opening.
- **Foundation:** **16 × 12 ft** slab + ~8.5" cinder-block stem. Sill is a **2×6** (5.5 × 1.5). Bottom ~6–10" of 74" 2×4 studs/sheathing is moisture-stained — probe before sealing. Saveable-looking. Seal = **hardware cloth in the gap + flashing/skirt**, not foam-only. Downspout dumps on the corner — move it. See [diagrams/sill-seal.png](diagrams/sill-seal.png) and [diagrams/floor-plan.png](diagrams/floor-plan.png).
- **Roof inside:** open 2x4 rafters, bare OSB. Back eave has **two soffit vents**; front gutter/eave has none. Take lumber off the collar ties before the foil. Don't block the soffit or ridge. Roof face / pitch still unmeasured.
- **Dimensions:** 16 × 12 foundation, 87" top-of-wall to bottom-of-block (2×6 sill + 74" 2×4 + **double top plate** + 8.5" block). Centered 48 × 75.5" door with an **18 × 22" jalousie on each side**. Studs run to the sheathing. Still need roof pitch and the wall-to-block gap.

## Known facts

- Approach: DIY as much as possible
- Exterior: faded tan T1-11 siding, white trim, dark shingle gable roof, white gutters, **two** 18×22 jalousies flanking a centered double door, small ridge vent, **two soffit vents on the back eave and none on the front gutter/eave**
- Size: **16 ft eave × 12 ft gable**, ~192 sq ft. 2×4 walls, 2×6 sill, ~8.5" block.
- Photos: [photos/exterior.jpg](photos/exterior.jpg), [photos/exterior-back.jpg](photos/exterior-back.jpg), [photos/interior.jpg](photos/interior.jpg), [photos/interior-roof.jpg](photos/interior-roof.jpg), [photos/interior-rafters.jpg](photos/interior-rafters.jpg), [photos/interior-sill.jpg](photos/interior-sill.jpg)
