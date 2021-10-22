---
title: Extended Markdown Page
layout: ../layouts/main.astro
---

# [ GFM markdown syntax refernce](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax )

# Check if markdown application  support HTML 

` Check your Markdown application’s documentation if support HTML in Markdown documents `


# Heading

`heading 前後加空白行`


# Heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

---

# Paragraph

`paragraphs插入空白行,分隔不同的paragraph`

this is **section** one

this is paragrqph *1-1*\
this is paragraph *1-2*

this is section two

this is paragraph 2-1\
this is paragraph 2-2

this is `section three`\
~~my paragraph 3-1~~

sdfsdf [link](https://tw.news.yahoo.com/)


---

# Line break (換行)
`To create a line break ( <br> ), end a line with two or more spaces, and then type return.`  
We do not support Markdown’s typical double-space to  
generate a line break due to our built-in auto-  
linebreaking function. A regular line break will  
generate a line break on output.  
花若盛開,蝴蝶自來.\
人若精彩,天自安排.

半畝方塘一鑒開,\
天光雲影共徘徊。\
問渠哪得清如許？\
為有源頭活水來。

**為有源頭活水來。**

---

# Blockquotes (縮排)

Text that is not a quote

> this is quotation one
>
> > this is `nest` quotation
>
> this is *quotation* three\
> this is **quotation three-one**
>
> 1.  one
>
> 2.  two
>
> 3.  three
>
>     *   bullet list one
>
>     *   bullet list two'






---

# HTML Symbols: HTML special characters

HTML symbole 可以用 `symbol entity name(&copy;) 或 symbol entity number (&#124;)` 來表示

## Lorem ipsum &#124; 🚀😄😢&nbsp;&nbsp;🌸🍒&nbsp;&nbsp;🚀

## consectetur &amp; adipisicing

&nbsp;&nbsp;圓周率 &pi; = 3.1416

&copy; &#124; &reg; &#124; &#124; &euro; &#124; &trade;

---

# Escaping Characters

`add a backslash (\) in front of the character`

\* Without the backslash, this would be a bullet in an unordered list.

## use double Backticks to Escaping Backtick

**⚠** ``Use `code` in your Markdown file.``

---

# Styling text

`“Logic will get you from A to Z; imagination will get you everywhere.”`
― Albert Einstein

Life is like **riding a bicycle**. To *keep your balance*, you must **keep moving** 
― Albert Einstein

**Science without religion is lame, religion without science is blind**
― Albert Einstein

*This text is italicized*

**This text is _extremely_ important**

~~A clever person solves a problem~~. A wise person avoids it 
― Albert Einstein


# hightlight

At the command prompt, type `nano`.


---
# Blockquote with mutiple line / other elements

> this is quotation one
>
> > 🚀this is `nest` quotatiom
>
> this is *quotation* three   \
> this is **quotation three-one**
>
> 1.  😢one
>
> 2.  two😢
>
> 3.  three
>
>     *   bullet list one
>
>     *   bullet list two'
>
> > *Wrappers*
> >
> > 1.  [ ] astro
> >
> > 2.  [x] React
> >
> > 3.  [x] Vue
> >
> > 4.  [ ] Ember

> *Tools*
>
>> 1.  [x] npm
>>
>> 2.  [x] report
>>
>> 3.  [ ] text style
>>   > - `6.3 Code spans`
>>   > - _6.4 Emphasis_
>>   > - **6.4 Strong emphasis**
>>   > - ~~6.5 Strikethrough (extension)~~
>>   > - [6.6 Links](https://example.com/)
>>   > - <https://example.com/>

---

# list

## bulleted list

- Live Preview
- Scroll Sync
- Auto Indent
- Syntax Highlight
___  

## numbered list
1. Markdown
1. Preview
1. Save
___  

## nested list

- CommonMark + GFM Specifications
  - Live Preview
  - Scroll Sync
  - Auto Indent
  - Syntax Highlight
    - Markdown
    - Preview
  ___

## mixed list    

- CommonMark + GFM Specifications
  - Live Preview
  - Scroll Sync
  - Auto Indent
  - Syntax Highlight
    1. Markdown
    1. Preview
    ___    
  
## todo list

- Wrappers
    1. [ ] astro
    1. [x] React
    1. [x] Vue
    1. [ ] Ember
- tools
    1. [x] npm
    1. [x] report
    1. [ ] UI

---

# Adding Elements in List Item

*   feature 1

    *   [ ]  📝 **WYSIWYG Markdown** - Write markdown in an elegant way

    *   [ ]  🎨 **Themable** - Theme can be shared and used with npm packages

    *   [ ]  🎮 **Hackable** - Support your awesome idea by plugin

*   list item with Blockquote

    *   Programmer: [Mirone](https://github.com/Saul-Mirone)

    *   Designer: [Meo](https://www.meo.cool/)

        > call out

*   list item with Image

    ![Tux, the Linux mascot](/tux.png)

* list item with code block

   ```js
    var foo = 'bar';

    function doSomething() {
      return foo;
    }```     

---

# Code Span

this is `quoting code` , yes !!! \
not just `this`, there are still something `overthere`


# Code Blocks

```js
var foo = 'bar';

function doSomething() {
  return foo;
}
```

## astro frontmatter code block

```astro
---
// Example: Astro component scripts run at build time
const response = await fetch('http://example.com/movies.json');
const data = await response.json();
console.log(data);
---
<!-- Output the result to the page -->
<div>{JSON.stringify(data)}</div>
```

## fence code block
using  `four` backtick to create fendce code block

````

```
 front matter script in astro
```
<p> HTML paragraph </p>
````

---

# Horizontal Rules

`Horizontal Rules 前後加空白行`

---

# Link    

- Automatic URL Linking :**直接輸入 網址 / Email Addresses**

> Visit www.commonmark.org/help for more information.
>
> https://www.markdownguide.org
>
> fake@example.com

- Disabling Automatic URL Linking: **denoting the URL as code**

> `https://www.markdownguide.org`

> `fake@example.com`

-  Text link
    - **Heading id link**
    > heading id link syntax : `(#heading-id)`
    > use `-` between  word of the heading title and  all characters must be `lowercase`
    > 
    > EX. [Adding Elements in List Item](#adding-elements-in-list-item)

    - External link
    >
    > [聯外網址 國家教育研究院](https://terms.naer.edu.tw/detail/3262088/)
    > My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
    - external text link address with extra Titles
    > `聯外網址 "titles"` =>the title will appear as a **tooltip** when the user *hovers over the link*
    >
    > My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

    - Internal file link
    > [Linked logo](/favicon.ico)

    - Formatting text Links

    >  I love supporting the **[EFF](https://eff.org)**.  
    >  This is the *[Markdown Guide](https://www.markdownguide.org)*.  
    >  See the section on [`code`](#code).  


- Image link 

  > Linked logo: [![alt text](/favicon.ico)](https://terms.naer.edu.tw/detail/3262088/)


- Reference-style Links

  >  In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
  >  of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
  >  eat: it was a [hobbit-hole][1], and that means comfort.

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"


---

# Footnote

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.



# image

![The San Juan Mountains are beautiful!](/san-juan-mountains.jpg "San Juan Mountains")


# widget

[https://indify.co/widgets/live/weather/kR7lYLWALds6RrkRmkS7](https://indify.co/widgets/live/weather/kR7lYLWALds6RrkRmkS7)