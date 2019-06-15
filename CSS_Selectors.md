### Selectors

##### 4 (General) Selectors

- => `#id`, `.class`, `tag`, `*`(all)

##### Group Selector

- => `selector, selector { }`

##### Descendant Selector

- => `(기준)selector (적용)selector { }`
- Select all elements that are descendants of a specified element.

##### Child Selector

- =>  `(기준)selector > (적용)selector { }`
- Select all elements that are the immediate children of a specified element.

##### Adjacent Selector

- => `(기준)selector + (적용)selector { }`
- Select all elements that are the adjacent siblings of a specified element.
- Sibling elements must have the same parent element, and "adjacent" means "immediately following"

##### General Sibling Selector

- => `(기준)selector ~ (적용)selector { }`
- Select all elements that are siblings of a specified element.
- 기준 선택자의 동생들 (on the same level, but comes below the 기준selector)

##### Attribute Selector

- => `input[attribute="value"] { }`
- Select elements with a specified attribute value

##### Nth Child Selector

- 선택자랑 매칭되면서 AND n번째 요소인 것
- => `selector:first-child() { }`
- => `selector:last-child() { }`
- => `selector:nth-child(#) { }`
  - n번째 요소
  - if # == `2n` : even numbers  (`2n+1` for odd numbers)
  - other multiples of number also work with formula  `an+b`
- e.g) `.tmp:first-child() { }`
  - Select the element with `class = tmp`, ONLY IF it is the first child among all child elements of its parent element.

##### Nth-of-type Selector

- => `selector:nth-of-type(#)`
- 선택자 & 타입 둘 다 매칭되는 모든 요소 중 #번째 요소인 것