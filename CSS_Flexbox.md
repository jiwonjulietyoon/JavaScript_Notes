# Flexbox

=> Flexible Responsive Layout WITHOUT using `float` or `position`

<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

<https://www.w3schools.com/css/css3_flexbox.asp>





## Setting up

- Set `display: flex;` to the outer container (parent element)
- This enables a flex context for all direct children elements

- Parent Element = Flex Container
- Children Elements = Flex Items



## Flex Container/Parent Properties

#### flex-direction

Establishes the main-axis; whether or not items will be layed out in **horizontal rows** or **vertical columns**.

- `row` (default) : left to right in `ltr`, right to left in `rtl`
  - opp) `row-reverse`
- `column` : top to bottom
  - opp) `column-reverse`



#### flex-wrap

Fitting child items into single/multiple lines

- `nowrap` (default) : try to fit all child items into one line
- `wrap` : fit items into multiple lines (top to bottom) => no squishing items. if all items don't fit into a single line, place the excess items in the next line (from the top-left corner)
  - opp) `wrap-reverse`: similar to "wrap" except start from the bottom-left corner





#### justify-content

Horizontal align

- `flex-start` : align left
- `flex-end` : align right
- `center` : align center
- `space-between` : equal space in between items in the flexbox
- `space-around` : equal left/right margin of items in the flexbox



#### align-items

Vertical align; Flexbox height must already have been defined

- `flex-start` : align top
- `flex-end` : align bottom
- `center` : align vertical center
- `baseline` : 











//





OLD NOTES



##### Flexbox:

```html
display: flex

justify-content: [flex-start, flex-end, center, space-between, space-around]

align-items: [flex-start, flex-end, center, baseline, stretch]
align-self: (apply to specific items)

flex-direction: [row, row-reverse, column, column-reverse]

order: [positive/negative integer, defaults to 0]

flex-wrap: [nowrap, wrap, wrap-reverse]

flex-flow: row wrap, column wrap, ...

align-content: [flex-start, flex-end, center, space-between, space-around, stretch]
```

- justify-content: horizontal align
  - flex-start: align left
  - flex-end: align right
  - center: align center
  - space-between: equal space in between items in the flexbox
  - space-around: equal left/right margin of items in the flexbox
- align-items: vertical align (flexbox height must already have been defined)
  - flex-start: align top
  - flex-end: align bottom
  - center: align center (vertical center)
  - baseline: (similar to flex-start : top of flexbox is most likely the same as the baseline of the flexbox)
- flex-direction: placement order of items in the flexbox
  - row: place items from the left-end of the flexbox towards the right
  - row-reverse: place items from the right-end of the flexbox towards the left
    - when the row is reversed, "flex-start" and "flex-end" for "justify-content" will also have been reversed.
  - column: place items in a column, from the top of the flexbox towards the bottom (items may not always reach the bottom)
  - column-reverse: place items in a column, from the bottom of the flexbox towards the top (items may not always reach the top)
    - when the column is reversed, "flex-start" and "flex-end" for "align-items" will also have been reversed.
- => would be easier to define "flex-direction" first before defining "justify-content" and "align-items"
- order: designate order of items (apply to specific items)
  - the order of items default to 0; 
  - assign a negative order to push a specific item's priority to the front while leaving the rest in place.
  - and vice versa with positive orders
- flex-wrap: 
  - nowrap: fit all items into a single line
  - wrap: no squishing items. if all items don't fit into a single line, place the excess items in the next line (from the top-left corner)
  - wrap-reverse: similar to "wrap" except start from the bottom-left corner
- flex-flow: shorthand version of flex-direction and flex-wrap
- align-content: overall placement of the multiple rows of items (top/bottom/center of flexbox) OR spacing in-between the multiple rows ()
- order >> flex-wrap >> "flex-direction" >> "justify-content" >> "align-items"

