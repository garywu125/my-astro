---
title: Extended Markdown
layout: ../layouts/main.astro
---

# Styling markdown with inline HTML 

- text color /underline(u element)

🚀 🍎 🧡 🍏 Some Markdown text with <span style="color:blue">some *blue* text</span>. 

🚀 🍎 🧡 🍏 <u style="color:red">Some Markdown text</u> with <span style="color:blue">some *blue* text</span>.

⚠️WARNING⚠️, 🔴IMPORTANT❗🔴 or 🔥NEW🔥.

<span style="color:green"> **Green Bold.** </span>

<font color='red'> Red HTML </font>

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

# Toggle Button

<details>

<summary> <em>List of groceries</em> </summary>

* Vegetables
* orange
* pineapple

</details>


<details>
  <summary>Epcot Center</summary>

  Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.

花若盛開,蝴蝶自來.\
人若精彩,天自安排.

半畝方塘一鑒開,\
天光雲影共徘徊。\
問渠哪得清如許？\
為有源頭活水來。

手把青秧插滿田，\
低頭便見水中天；\
六根清凈方為道，\
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

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
| el | `HTMLElement` | [Duck Duck Go](https://duckduckgo.com) |
| el | `Link To Heading ID` | [blockquote](#blockquote) |
| el | `Link To Heading ID` | [javascript code block](#javascript-code-block) |


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

