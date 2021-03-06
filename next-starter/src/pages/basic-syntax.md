---
title: Basic Markdown Page
layout: ../layouts/main.astro
---


# [ GFM markdown syntax refernce](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax )

> *Markdown* is a way to *style* text on the web
>

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

<h3 style="color:green;text-align: center ;"> My latest Medium posts </h3>

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

# <span style="color:blue">text styling</span>

`“Logic will get you from A to Z; imagination will get you everywhere.”`
― Albert Einstein

Life is like **riding a bicycle**. To *keep your balance*, you must **keep moving** 
― Albert Einstein

**Science without religion is lame, religion without science is blind**
― Albert Einstein

*This text is italicized*

**This text is _extremely_ important**

<span style="color:green">~~A clever person solves a problem~~</span>. A wise person avoids it 
― Albert Einstein


- Monospaced

<samp>The quick brown fox jumps over the lazy dog.</samp>

- Underlined

<u>The quick brown fox jumps over the lazy dog.</u>


- Strike-through

~~The quick brown fox jumps over the lazy dog.~~
Strikethrough uses two tildes. ~~Scratch this.~~
Strikethrough uses two tildes. <del>Scratch this.</del>

- Text color /Underline(u element)

🚀 🍎 🧡 🍏 Some Markdown text with <span style="color:blue">some *blue* text</span>. 

🚀 🍎 🧡 🍏 <u style="color:red">Some Markdown text</u> with <span style="color:blue">some *blue* text</span>.

⚠️WARNING⚠️, 🔴IMPORTANT❗🔴 or 🔥NEW🔥.

<span style="color:green"> **Green Bold.** </span>

<font color='red'> Red HTML </font>


- Hightlight

At the command prompt, type `nano`.

---


# Alignments


- text alignment

<h3 style="color:green;text-align: center ;"> My latest Medium posts </h3>



<div > your-text-here </div><br>
<div style="text-align: center;"> your-text-here </div><br>
<div style="text-align: right;"> your-text-here </div><br>
<div style="text-align: justify;"> your-text-here </div><br>


<div style="text-align:right;">The derogatory term “scrub” means several different things. One definition is someone (especially a game player) who is not good at something (especially a game). By this definition, we all start out as scrubs, and there is certainly no shame in that. I mean the term differently, though. A scrub is a player who is handicapped by self-imposed rules that the game knows nothing about. A scrub does not play to win. </div><br>


<div style="text-align:justify;">Now, everyone begins as a poor player—it takes time to learn a game to get to a point where you know what you’re doing. There is the mistaken notion, though, that by merely continuing to play or “learn” the game, one can become a top player. In reality, the “scrub” has many more mental obstacles to overcome than anything actually going on during the game. The scrub has lost the game even before it starts. He’s lost the game even before deciding which game to play. His problem? He does not play to win.</div> 

- image alignment

<p align="left">
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" 
height="100" border="10"/>
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10" style="float:right;"/>
</p>

<p align="right">
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10"/>
</p>

<p align="center">
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10"/>
</p>

- table alignment

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


# Centered Text And Images

<p align="center">
  <b>Some Links:</b><br>
  <a href="#">Link 1</a> |
  <a href="#">Link 2</a> |
  <a href="#">Link 3</a>
  <br><br>
  <img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10">
</p>

# Create Box using `<table>` tag

<table align="center" style="border: solid;"><tr><td>The quick brown fox jumps over the lazy dog.</td></tr></table>

## definition list

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. HTML <em>tags</em> do <b>work</b>, in most cases.</dd>
</dl>

<dl>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. HTML tags work, in most cases.</dd>

  <dt>Markdown in HTML</dt>
  <dd>

  Does *not* work **very** well. HTML tags work, in most cases.

  </dd>
</dl>

---

# 🚀🚀🚀 Blockquote with callout

> **Note:** This is how you write a note.
>
> It can have multiple lines.

> **Warning:** This is how you write a warning.
>
> It can have multiple paragraphs.


> **Callout:** **This is how you write a callout**.
>
> It can have multiple paragaphs.

# Blockquote with mutiple line / other elements

> Astro hydrated component 先脫水選擇加水的時機加水
> 
> 
> > NO JS by default: ,脫掉所有的javascript & client component . 可選擇opt in. 的時机 ,重新ydrate javascript so you can decide when to shipped to the end-user. each component will load separately and is not dependent upon another component loading.
> > 
> > - one
> > - two
> > - three
> >     
> >     > **Astro 元件的語法** : **Astro’s HTML-like component syntax which is similar to HTML + JSX.**
> >     > 
> > - four

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
  
## Task list

- Wrappers
    1. [ ] astro
    1. [x] React
    1. [x] Vue
    1. [ ] Ember
- Tools
    1. [x] npm
    1. [x] report
    1. [ ] UI


- Nested task list
    - [ ]  astro
    - [x]  React
    - [x]  Vue
    - [ ]  tools
        - [x]  npm
        - [x]  report
        - [ ]  UI
        
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

```jsx:file.jsx
import Router from 'next/router'

function MyComponent() {
	const [show, setShow] = useState(false)

	useEffect(() => {
    console.log(2)
	}, [])

	return <>...</>
}
```

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

## Auto URL/EMAIL link

- Automatic URL Linking :**直接輸入 網址 / Email Addresses**

> www.example.com, https://example.com, and contact@example.com.
>
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

    Add as many paragraphs as you like.



# 🚀🚀🚀image

![The San Juan Mountains are beautiful!](/san-juan-mountains.jpg "San Juan Mountains") 

<a href="https://docs.astro.build/zh-tw/getting-started/">
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" style="float:right;width:104px;height:142px;">
</a>

<div style="width:150px; height:100px">
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
</div>

## embed GIF and SVG.

<img src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif" /><br>
<img src="https://img.shields.io/badge/theultimatemarkdowncheatsheet-brightgreen.svg" />

## Float Right Image

>In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.

><img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Pineapple" style="float:right;width:170px;height:170px;margin-left:15px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.


## Positioning image in github markdown table

<table>
   <tr>
      <td>- Identifying cutomer needs (requirments)</td>
      <td rowspan="11">
        <img src="https://user-images.githubusercontent.com/74305823/118094261-783e8280-b409-11eb-8f50-8ed0b304fef0.png" width="300"/>
     </td>
   </tr>
   <tr>
      <td>- market analysis (requirements)</td>
   </tr>
   <tr>
      <td>- defining goals (requirements)</td>
   </tr>
   <tr>
      <td>- Establishing functions (Prodct concept)</td>
   </tr>
   <tr>
      <td>- Task Specifications (Prodct concept)</td>
   </tr>
   <tr>
      <td>- Conceptualizatoin (Solution concept)</td>
   </tr>
   <tr>
      <td>- Evaluating Alternatives</td>
   </tr>
   <tr>
      <td>- Emnodiment Design</td>
   </tr>
   <tr>
      <td>- Analysis and Optimization</td>
   </tr>
   <tr>
      <td>- Experiment</td>
   </tr>
   <tr>
      <td>- Marketing</td>
   </tr>
</table>

## Add image caption 

<figure align = "center">
  <img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHw%3D&w=1000&q=80" alt="Trulli" style="width:100%">
  <figcaption align = "center"><b>Fig.1 - 4K Mountains Wallpaper</b></figcaption>
</figure>

<p align = "center" >
<img src = "https://c4.wallpaperflare.com/wallpaper/382/758/444/turkey-dreams-of-cappadocia-avanos-nevsehir-wallpaper-preview.jpg">
</p>
<p align = "center" >
  <span style="color:red;background-color:yellow">Fig.1 - 4K Mountains Wallpaper</span>
</p>



# video 

<video width="320" height="240" controls autoplay  muted>
  <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
</video>

<video width="320" height="240" controls >
  <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
</video>

[酷影集](https://www.youtube.com/watch?v=I1UMhpr8Q6g)


🚀🚀🚀 play youtube video via copy share link on the youtube url

<iframe width="560" height="315" src="https://www.youtube.com/embed/I1UMhpr8Q6g" title="帶台灣酒飛到國外！帛琉人要開始進口了？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# audio 

<audio controls >  
  <source src=" https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

<audio controls autoplay muted  >  
  <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>



# widget

[酷影集](https://www.youtube.com/watch?v=I1UMhpr8Q6g)


# <span style="color:red">Reference link</span>

- [hobbit-hole][1]
- [common-hobbit-hole][1]
- [breed-hobbit-hole][2]


> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.
>In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
[2]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Breed Hobbit lifestyles"


