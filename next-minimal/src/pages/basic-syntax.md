---
title: Basic Markdown Page
layout: ../layouts/main.astro
---


# [ GFM markdown syntax refernce](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax )

> *Markdown* is a way to *style* text on the web
>

# Check if markdown application  support HTML 

` Check your Markdown application’s documentation if support HTML in Markdown documents `


# 🚀Heading

`heading 前後加空白行`


# Heading 1

## heading 2

### heading 3

#### heading 4

##### heading 5

###### heading 6

<h3 style="color:green;text-align: center ;"> My latest Medium posts </h3>

---

# 🚀Paragraph

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

# 🚀Line break (換行)
`To create a line break ( <br> ), end a line with two or more spaces, and then type return.`  

- end a line with `two or more spaces`

  We do not support Markdown’s typical double-space to  
  generate a line break due to our built-in auto-  
  linebreaking function. A regular line break will  
  generate a line break on output.  

- create a line break ( `\<br> `)

  花若盛開,蝴蝶自來.\
  人若精彩,天自安排.

  半畝方塘一鑒開,\
  天光雲影共徘徊。\
  問渠哪得清如許？\
  為有源頭活水來。


---


# 🚀HTML Symbols: HTML special characters

- HTML symbole 可以用 `symbol entity name(&copy;) 或 symbol entity number (&#124;)` 來表示

    Lorem ipsum &#124; 🚀😄😢&nbsp;&nbsp;🌸🍒&nbsp;&nbsp;🚀

    consectetur &amp; adipisicing

    &nbsp;&nbsp;圓周率 &pi; = 3.1416
    &copy; &#124; &reg; &#124; &#124; &euro; &#124; &trade;

---

# 🚀 Escaping Characters

- add a `backslash (\)` in front of the character

   \* Without the backslash, this would be a bullet in an unordered list.   

- Escaping Backtick use `double Backticks (``)` 

   > **⚠** ``Use `code` in your Markdown file.``

---

# 🚀<span style="color:blue">Text styling</span>

- Monospaced font (using the browser's default monospaced font )

<p>When the process is complete, the utility will output the text
<samp>Scan complete. Found <em>N</em> results.</samp> You can then
proceed to the next step.</p>

- sup / sub (默認比當前字體稍小)

  x<sub>1</sub>+y<sub>2</sub><sup>3</sup>=15

- Bold/Italic (粗體/斜體)

    Life is like **riding a bicycle**. To *keep your balance*, you must **keep moving** 
    ― Albert Einstein

    **Science without religion is lame, religion without science is blind**
    ― Albert Einstein

    *This text is italicized*

    <span style="color:green">**This text is _extremely_ important**</span>


- Underlined (畫底線)

    <u>The quick brown fox jumps over the lazy dog.</u>


- Strike-through (畫刪除線)

    ~~The quick brown fox jumps over the lazy dog.~~
    Strikethrough uses two tildes. ~~Scratch this.~~
    Strikethrough uses two tildes. <del>Scratch this.</del><br>
    <br>    
    <span style="color:green">~~A clever person solves a problem~~</span>. A wise person avoids it 
    ― Albert Einstein

- Text color (文字顏色)

    🚀 🍎 🧡 🍏 Some Markdown text with <span style="color:blue">some *blue* text</span>.     

    ⚠️WARNING⚠️, 🔴IMPORTANT❗🔴 or 🔥NEW🔥.

    <span style="color:green"> **Green Bold.** </span> <font color='red'> Red HTML </font><br><br>

   🚀 🍎 🧡 🍏 <u style="color:red">Some Markdown text</u> with <span style="color:blue">some *blue* text</span>

- Hightlight Text (反白顯示)

     At the command prompt, type `nano`. 

    `“Logic will get you from A to Z; imagination will get you everywhere.”`
     ― Albert Einstein
 
     ⚠ Use `code` in your Markdown file

     A class method is an instance method of the class object. When a new class is created, an object of type `Class` is initialized and assigned to a global constant (Mobile in this case).


---


# 🚀Alignments


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
| :------| -----------:|
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

# 🚀Blockquotes (縮排)

Text that is not a quote

> this is quotation one
>
> > this is `nest` quotation
>
> this is *quotation* three\
> this is **quotation three-one**

 1.  one

 2.  two

 3.  three

     *   bullet list one

     *   bullet list two'


---
# 🚀 Blockquote with callout

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

# 🚀list



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

## Toggle list

  <details>

  <summary> <em>List of groceries</em> </summary>

  * Vegetables

  * orange

  * pineapple

  </details>


<details>
  <summary>Epcot Center</summary>

  - Epcot

    Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.

  - 天助自助

    花若盛開,蝴蝶自來.\
    人若精彩,天自安排.

  - 朱熹

    半畝方塘一鑒開,
    天光雲影共徘徊。\
    問渠哪得清如許？
    為有源頭活水來。

  - 布袋和尚

    手把青秧插滿田，
    低頭便見水中天；\
    六根清凈方為道，
    退步原來是向前。

  ```js
  var foo = 'bar';

  function doSomething() {
    return foo;
  }
  ```

</details>

<details>
  <summary>Click to see the log report</summary>

    Adds three new logging formats to the mod_log_config format specifications, including byte quantities received, sent, and transferred (combination of received and sent quantities). Normally included in the base Apache compile.
    LogIOTrackTTFB: Enables time tracking between the initial request read time and the moment the first byte response is sent.

    mod_filter: Provides context-sensitive filters to the output chain by registering any number of filter providers. mod_filter is not specific to logging, but allows for extracting specific requests based on the filter provider. Context containers include: main apache config, vhost config, within directory tags, and .htaccess files.

    Employing this module allows for filtering requests containing such things as certain injection criteria and which IP address it’s from.

    This module is provided by default in many of the package distributions, but may require enabling. For the purposes of logging, the FilterTrace directive posts information to the error log. Directives include:

</details>      
        
---

# Adding Elements in List Item

*   feature 1

    *   [ ]  📝 **WYSIWYG Markdown** - Write markdown in an elegant way

    *   [ ]  🎨 **Themable** - Theme can be shared and used with npm packages

    *   [ ]  🎮 **Hackable** - Support your awesome idea by plugin

*   list item with Blockquote

    *   Programmer: [Mirone](https://github.com/Saul-Mirone)

    *   Designer: [Meo](https://www.meo.cool/)

        call out

*   list item with Image

    ![Tux, the Linux mascot](/tux.png)

* list item with code block

   ```js
    var foo = 'bar';

    function doSomething() {
      return foo;
    }```     

  ---

  ```jsx
  import Router from 'next/router'

  function MyComponent() {
    const [show, setShow] = useState(false)

    useEffect(() => {
      console.log(2)
    }, [])

    return <>...</>
  }
  ```

# 🚀Code Span

this is `quoting code` , yes !!! \
not just `this`, there are still something `overthere`


# 🚀Code Block 

- Code blcok Syntax Highlighting 

  ```js
  var foo = 'bar';

  function doSomething() {
    return foo;
  }
  ```

 - 🚀Diff viewer

    ```diff
    MISH's Live stream
    - lots of people came today
    + lots more people came today!
    ```

    ```diff
    function addTwoNumbers (num1, num2) {
    -  return 1 + 2
    +  return num1 + num2
    }
    ```


- astro frontmatter code block

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

- fence code block
  using  `four` backtick to create fendce code block

  ````

  ```
  front matter script in astro
  ```
  <p> HTML paragraph </p>
  ````

  ---

# 🚀Horizontal Rules

`Horizontal Rules 前後加空白行`

---

# 🚀Link    

## Auto URL/EMAIL link

- Automatic URL/Email Linking :`直接輸入 網址 / Email Addresses

  www.example.com, https://example.com, and contact@example.com.

  Visit www.commonmark.org/help for more information.

  https://www.markdownguide.org

  fake@example.com

- Disabling Automatic URL Linking: `denoting the URL as code`

   `https://www.markdownguide.org`

  `fake@example.com`


## Create a links with target blank in markdown

```html

  <a href="url" target="_blank">link</a>

```


## Create a links via Text/Image

### <span style="color:blue">Text link</span>
- **Heading id link**    
     heading id link syntax : `(#heading-id)`
     use `-` between  word of the heading title and  all characters must be `lowercase`
     
     EX. [Adding Elements in List Item](#adding-elements-in-list-item)

- **External link**
    
     [聯外網址 國家教育研究院](https://terms.naer.edu.tw/detail/3262088/)
     My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
    - external text link address with extra Titles
     `聯外網址 "titles"` =>the title will appear as a **tooltip** when the user *hovers over the link*
    
     My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

     - Internal file link
     [Linked logo](/favicon.ico)

    - Formatting text Links

      I love supporting the **[EFF](https://eff.org)**.  
      This is the *[Markdown Guide](https://www.markdownguide.org)*.  
      See the section on [`code`](#code).  


- <span style="color:red">Using Reference for Links</span>

    - [hobbit-hole][1]
    - [common-hobbit-hole][1]
    - [breed-hobbit-hole][2]


     In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
     of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
     eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

     In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
     of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
     eat: it was a [hobbit-hole][1], and that means comfort.


     [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
     [2]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Breed Hobbit lifestyles"


     1. Check out my [Github Profile][github]
     2. Don't forget to star [Repo][github]

     [github]: https://github.com/6aravind "Github Profile"


### <span style="color:blue">Image link <span>

  > Linked logo: [![alt text](/favicon.ico)](https://terms.naer.edu.tw/detail/3262088/)

---

# 🚀Footnote reference

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.   

    Add as many paragraphs as you like.


# 🚀Embed image

- **Create Embed image via Markdown | HTML**

  ![The San Juan Mountains are beautiful!](/san-juan-mountains.jpg "San Juan Mountains") 

  <a href="https://docs.astro.build/zh-tw/getting-started/">
    <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" style="float:right;width:104px;height:142px;">
  </a>

  <div style="width:150px; height:100px">
     <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
  </div>



- **Float Right/left Image**

  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Pineapple" style="float:right;width:100px;height:170px;margin-left:15px;">
  In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.
  In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.
  <br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,  vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus  vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.


  But it could take some time to prepare such a cost estimate. In the meantime, Democratic leadership is relying on a White House analysis saying the bill is fully paid for, based in part on the non-partisan Joint Committee on Taxation.
  <figure style="float: left;
  width: 30%;  
  text-align: center;
  font-style: italic;
  font-size: smaller;
  text-indent: 0;
  border: thin silver solid;
  margin: 0.5em;
  padding: 0.5em;
  ">
  <img src="https://cdn.cnn.com/cnnnext/dam/assets/211105111946-02-biden-jobs-report-1105-medium-plus-169.jpg" alt="Trulli" style="width:100%">
  <figcaption align = "center">Biden turns the screws on Democrats with a call for the House to pass his economic agenda 'right now'</figcaption>
</figure>House Budget Chairman John Yarmuth, a Democrat from Kentucky, told CNN he expected a CBO score to take about 10-14 days, and wouldn't be done until the week before Thanksgiving. Some think it could slip until the week of Thanksgiving, though preliminary estimates could be done earlier.
Schrader, who signed onto the letter calling for a CBO score, left Pelosi's office earlier on Friday and told CNN "we have no resolution that I know" when asked if he is ready to vote on Build Back Better.

In one sign of progress for leadership, after meeting in Pelosi's office, Democratic Rep. Carolyn Bourdeaux of Georgia tweeted that she is not against voting for the social spending bill and that the CBO score is not a red line for her.

"There are a lot of rumors swirling. Let me be clear — this bill is paid for and it has a number of my priorities in it. If it comes to the Floor today — I will support the Build Back Better Act," she said.

<div style="margin-top:150px"></div>

- **Positioning image in github markdown table**

> <table>
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

- **Align Images Horizontally**

|First Image|Second Image|
|:-:|:-:|
|![First Image](https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?h=750&w=1260 "夕陽")|![Second Image](https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?h=750&w=1260 "落日")|


- **Add image caption**

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

# 🚀embed GIF and SVG.

<span style="color:red;"> SVG Tag can not display </span>
<br>
<div height="200" >
    <img src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif" />
    <img src="astro-logo.gif"  width="200" />
    <img src="https://img.shields.io/badge/theultimatemarkdowncheatsheet-brightgreen.svg"  style="float:right"/>
</div>
<!-- <svg
  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
  style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
  <linearGradient id="gradient">
    <stop class="begin" offset="0%"/>
    <stop class="end" offset="100%"/>
  </linearGradient>
  <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
  <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
</svg> -->


# 🚀embed diagrams(.svg) in GitHub markdown

 ![embeded diagram](schema.drawio.svg)

 https://github.com/jgraph/drawio/wiki/Embed-Diagrams

# 🚀Embed video 

<video width="320" height="240" controls autoplay  muted>
  <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
</video>

<video width="320" height="240" controls >
  <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
</video>

[酷影集](https://www.youtube.com/watch?v=I1UMhpr8Q6g)

# 🚀Embed youtube

- **play youtube video via copy share link on the youtube url**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I1UMhpr8Q6g" title="帶台灣酒飛到國外！帛琉人要開始進口了？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


- **thumbnail Youtube Video: Life as an Engineer - WFH**

[![][thumbnail1]](https://youtu.be/Rgx8dpiPwpA "Life as an Engineer - WFH1")
[![][thumbnail2]](https://youtu.be/Rgx8dpiPwpA "Life as an Engineer - WFH2")

[thumbnail1]: https://raw.githubusercontent.com/6aravind/tidbits/main/assets/images/markdown_Life%20as%20Engineer.png
[thumbnail2]: https://raw.githubusercontent.com/6aravind/tidbits/main/assets/images/markdown_Life%20as%20Engineer.png

# 🚀Embed audio 

<audio controls >  
  <source src=" https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

<audio controls autoplay muted  >  
  <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>


