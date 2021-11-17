---
title: Extended Markdown
layout: ../layouts/main.astro
---

# 🚀<span style="color:blue">Text styling</span>

- Monospaced (固定寬度字形)

    <samp>The quick brown fox jumps over the lazy dog.</samp>

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



- image sizing

<img src="san-juan-mountains.jpg" alt="Kitten"
	title="A great mountain" width="150" height="100" />


# Add video/audio using HTML tag

<audio controls>
  <!-- <source src="horse.ogg" type="audio/ogg"> -->
  <source src="markdown_audio.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> 

<br>

<video width="320" height="240" controls>
  <source src="markdown_video.mp4" type="video/mp4">
  <!-- <source src="movie.ogg" type="video/ogg"> -->
Your browser does not support the video tag.
</video>

<br>

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
</video>


# *Commment Block*

<!-- comment block -->

# Toggle list

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

# Task List

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

# Heading IDs

EX. [🚀 My Great Heading](#my-great-heading)

 
----



# tables

```
:---:  ⇒ Center alignment
:---   ⇒ Left alignment
---:   ⇒ Right alignment

```

- `<table>` tag to create a **Box.**

<table align="center"><tr><td>The quick brown fox jumps over the lazy dog.</td></tr></table>

- **Table without header**

<table>
<tr>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
</tr>
</table>

- **Display two tables side by side.**

<table>
<tr>
<th>Heading 1</th>
<th>Heading 2</th>
</tr>
<tr>

<td>

| A | B | C |
|--|--|--|
| 1 | 2 | 3 |

</td><td>

| A | B | C |
|--|--|--|
| 1 | 2 | 3 |

</td></tr> </table>

- **Format cell in table**

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
| el | `HTMLElement` | [Duck Duck Go](https://duckduckgo.com) |
| el | `Link To Heading ID` | [blockquote](#blockquote) |
| el | `Link To Heading ID` | [javascript code block](#javascript-code-block) |


- **Create a table with multiple lines using the HTML \<br/> tag.**

| A | B | C |
|---|---|---|
| 1 | 2 | 3 <br/> 4 <br/> 5 |

| Format   | Tag example |
| -------- | ----------- |
| Headings | =heading1=<br>==heading2==<br>===heading3=== |
| New paragraph | A blank line starts a new paragraph |
| Source code block | // all on one line<br>  if (foo) bar else   baz  |



- 🍍🍍🍍 Copy a table from Excel or Google Sheets 

https://thisdavej.com/copy-table-in-excel-and-paste-as-a-markdown-table/

| language | range | appear |
|---|:----:|--------:|
| English  | 10    | 15     |
| 中文       | 20    | 25     |
| 日文       | 30    | 35     |
| English  | 10    | 15     |
| 中文       | 20    | 25     |
| 日文       | 30    | 35     |
| English  | 10    | 15     |
| 中文       | 20    | 25     |
| 日文       | 30    | 35     |



- *Merge cell using \<table> element*

<table>
  <tr>
    <td colspan="2" align='center' >總部庫存</td>
    <td colspan="2" align='center'>經銷商庫存</td>
  </tr>
  <tr>
    <td>（在產線上）生產中</td>
    <td>已下線（到總部的庫存中）</td>
    <td>（用大卡車從總部）在途中（運往經銷商4S店）</td>
    <td>已到店（進去4S店的庫存）</td>
  </tr>
</table>

<table>
   <tr>
      <td>language</td>
      <td>range</td>
      <td>appear</td>
   </tr>
   <tr>
      <td>English</td>
      <td>10</td>
      <td>15</td>
   </tr>
   <tr>
      <td></td>
      <td>10</td>
      <td>15</td>
   </tr>
   <tr>
      <td></td>
      <td>10</td>
      <td>15</td>
   </tr>
   <tr>
      <td><b>合計</b></td>
      <td><b>30</b></td>
      <td><b>45</b></td>
   </tr>
   <tr>
      <td>中文</td>
      <td>20</td>
      <td>25</td>
   </tr>
   <tr>
      <td></td>
      <td>20</td>
      <td>25</td>
   </tr>
   <tr>
      <td></td>
      <td>20</td>
      <td>25</td>
   </tr>
   <tr>
      <td><b>合計</b></td>
      <td><b>60</b></td>
      <td><b>75</b></td>
   </tr>
   <tr>
      <td>日文</td>
      <td>30</td>
      <td>35</td>
   </tr>
   <tr>
      <td></td>
      <td>30</td>
      <td>35</td>
   </tr>
   <tr>
      <td></td>
      <td>30</td>
      <td>35</td>
   </tr>
   <tr>
      <td><b>合計<b></td>
      <td><b>90</b></td>
      <td><b>105</b></td>
   </tr>
</table>

# Diff viewer

````diff
MISH's Live stream
- lots of people came today
+ lots more people came today!
````

```diff
function addTwoNumbers (num1, num2) {
-  return 1 + 2
+  return num1 + num2
}
```

---



# Footnote

- A note[^1]

[^1]: A frist note.

- Here's a simple footnote,[^2] and here's a longer one.[^bignote]

[^2]: This is the second footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.    

    Add as many paragraphs as you like.

---    

