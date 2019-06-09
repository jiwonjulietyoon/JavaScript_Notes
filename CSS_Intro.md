

## 3 types of CSS Styling (CSS 선언 방식 3가지)

=> In order of priority:

__1. Inline__

`<p style="color: red; font-size: 20px;">Inline Style CSS</p>`

__2. Internal Style Sheet__

`<style></style>` inside the `<head></head>` tag

__3. External Style Sheet__

`<link rel="stylesheet" href="style.css">`





## CSS priorities

__By Selector__

1. `!important`
2. `#id`
3. `.class`
4. `tag`
5. `*global`

__By Method__

1. inline style tags
2. internal style sheet
3. external style sheet

+) whatever is declared last overrides whatver was declared previously













_______

# Miscellaneous CSS Tips



## Set Height Based on Width

__HTML__

```html
<div class="outer-container">
    <div class="inner-container">
        
    </div>
</div>
```

**CSS**

```css
.outer-container {
    width: 100%;
    padding-top: 80%;
    position: relative;
}
.inner-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

`.outer-container` `padding-top` => h/w (in "width:height" ratio)

- e.g) 16:9 ratio => 9/16 = 0.5625 => **padding-top: 56.25%;**





## Background : 2 colors, no gradient

```css
background: linear-gradient(to right, #007bff 50%, #181818 50%);
```





