# Block Level v.s. Inline Elements in HTML



### Block Level

=> For creating the overall layout

- div, h1~h6, p, form, table...
- Takes up the entire row by default
  - Multiple block level elements are stacked vertically
- Can specify width & height (regardless of content size)
  - Default size:  `width: 100%; height: 0;`
  - When content size surpasses the designated width and height, "overflow" occurs
- Can specify margin & padding for all top, bottom, left, right
- Can include inline elements





### Inline

=> For manipulating text

- SPAN, IMG
  - b, strong : bold
  - i, em : italic
  - u, ins : underline
  - del : thick strike-through
  - s : thin strike-through
  - mark : highlight
  - q : (quotes) double quoted
  - small : smaller text
  - sub : (subscript) smaller text below the normal line
  - sup : (superscript) small text above the normal line
  - textarea
  - block : block quotes
  - pre : 
- Can NOT specify custom width and height; the size is dependent on the amount of content (including any padding)
- Can NOT specify margin & padding top, bottom
  - width, height, margin-top/bottom are NOT applied even if specified
  - margin-left/right can be applied
  - padding-top/bottom, if specified, will be rendered (along with padding-left/right). However, the inline element will only take up space for its content and padding-left/right. Thus, any padding-top/bottom will overlap with surrounding elements.
- Does NOT take up the entire row by itself
  - Multiple inline elements are stacked horizontally





### display: inline-block

- Elements stacked horizontally (instead of taking up entire row), while being able to specify width, height, margin, and padding
- Space in between elements are caused by:
  - margin-left/right
  - whitespace between `<div>` (or other tags)



### `display: none;` vs `visibility: hidden;` vs `opacity: 0;`

`display: none;`

- does NOT render element in HTML, does NOT occupy any space

`visibility: hidden;`

- occupies space (blank space is rendered instead of the element itself)
- does NOT allow mouse events (no click, mousedown, etc.)

`opacity: 0;`

- Occupies space, allows mouse events
- can create transparency or fade in/out effects