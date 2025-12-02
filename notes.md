User experience flow

Pre-Intro
- Loading bar with text (Loading...)
- Butterfly dream svg on the right side

Intro
- Zoomed out, angled view of guqin with no lights or special effects, slight glow behind the guqin. Button that says “Enter” in the middle.

Intro to Neutral transition
- User clicks button. Staff lines and philosopher orbs (with directional lights, visible reflections on Guqin) appear while guqin chord plays. Camera tweens to position over left end of zither. Perpendicular lines appear marking the centuries.
- On mobile, the guqin and the timeline are positioned vertically; on desktop, horizontally. Everything else functions the same.

Neutral
- no hover: philosopher icons are visible on each orb
- hover:
  - energy sound effect
  - orb glows more brightly
  - romanized name appears in white text under orb
  - if user hasn't clicked any orb yet, show text on bottom of screen: "click a philosopher to change to their view"

Neutral to Perspective transition
- click on orb:
  1. (await for all of these before the next set)
    - philosopher-specific chord
    - zither blurs and darkens into background, non-important orbs disappear
    - important orbs rearrange into shape in center of screen
  2. 
    - props appear (e.g. arrows lerp to full length)
    - term-specific info appears on bottom third of screen
    - main description appears on right half of screen
    - exit button/back arrow appears on this pane. Revert to neutral when clicked

Philosopher picking flow (from specific view of X):
- no hover: only icons
- hover over Y:
  - energy sound effect (concurrently)
  - orb glows more brightly
  - romanized name hover text
  - if user hasn't clicked any orb yet from specific view, show text on bottom of screen: "click a philosopher to learn about X's view of them"
- click on Y:
  - orb stays lit, others darken
  - right pane now shows information about X's view on Y
    - exit button/back arrow is on this pane. Revert to previous right pane when clicked
- click on X: either revert to default specific view, or do nothing if already in specific view

---

Goal: Views
- Need to position all orbs (including selected orb) relative to invisible axis near center of screen
- Would be nice to have props (like x and y axis for Mencius, butterfly effect for Zhuangzi)
- Need to be able to draw edges between orbs
    - This could be a field just for convenience

To achieve this, we have the following fields in each philosopher:
- displayPosition [x,y,z]: how to position this relative to the invisible axis
- views [{targetId: id, quote: string, explanation: string, display: {brightness: float, position: [x,y,z]}}]
- relationships [{from: id, to: id, emphasis: float, kind: string}]: edges to draw in the diagram
- some sort of field for passive rotation of the axis
- some sort of field for a function that allows for custom movement of the base orb (Zhuangzi's orb fluttering around)

Mencius view
- Mozi on left (-1, 0)
- Gaozi on left (-0.5,0)
- Confucius above (0, 1)
- Mencius (0, 0.5)
- Yang Zhu (1, 0)
Laozi view:
- Very faint Confucius orb to one side (tradition is the decline of the way)
- Neiye, also faint
Xunzi view:
- Shen Dao, Mozi, Zhuangzi, Huizi, all scattered in a big sphere
- Confucius at the center
- Xunzi rotating around Confucius close to center
Zhuangzi view:
- Confucius, Mozi (or just Gaozi and Mencius?), Huizi all spinning around in a triangle
- Laozi is in the direct center of them, or maybe spinning around with the others
- Zhuangzi's orb is to the center and above them with a butterfly visual effect, maybe an animated billboard? (the orb itself doesn't move)