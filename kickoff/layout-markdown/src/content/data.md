---
title: Introduction
---

GitHub Flavored Markdown
========================

GitHub is transitioning to what we're calling "GitHub Flavored Markdown" (GFM) for messages, issues, and comments. It differs from standard Markdown (SM)
in a few significant ways and adds some additional functionality.

If you're not already familiar with Markdown, you should spend 15 minutes and go over the excellent [Markdown Syntax Guide](http://daringfireball.net/projects/markdown/syntax) at Daring Fireball.

If you prefer to learn by example, see the following source and result:

* [Source](sample_content.html)
* [Result](http://github.com/mojombo/github-flavored-markdown/issues/#issue/1)

Differences from traditional Markdown
-------------------------------------

### Newlines

The biggest difference that GFM introduces is in the handling of linebreaks. With SM you can hard wrap paragraphs of text and they will be combined into a single paragraph. We find this to be the cause of a huge number of unintentional formatting errors. GFM treats newlines in paragraph-like content as real line breaks, which is probably what you intended.

The next paragraph contains two phrases separated by a single newline character:

    Roses are red
    Violets are blue

becomes

Roses are red  
Violets are blue

### Multiple underscores in words

It is not reasonable to italicize just _part_ of a word, especially when you're dealing with code and names often appear with multiple underscores. Therefore, GFM ignores multiple underscores in words.

    perform_complicated_task
    do_this_and_do_that_and_another_thing

becomes

perform\_complicated\_task  
do\_this\_and\_do\_that\_and\_another\_thing

A bit of the GitHub spice
-------------------------

In addition to the changes in the previous section, certain references are auto-linked:

    * SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
    * User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
    * User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2
    * \#Num: #1
    * User/#Num: mojombo#1
    * User/Project#Num: mojombo/god#1

becomes

<ul>
<li>SHA: <a href="/mojombo/github-flavored-markdown/commit/be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2">be6a8cc</a></li>
<li>User@SHA ref: <a href="/mojombo/github-flavored-markdown/commit/be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2">mojombo@be6a8cc</a></li>
<li>User/Project@SHA: <a href="/mojombo/god/commit/be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2">mojombo/god@be6a8cc</a></li>
<li>#Num: <a href="/mojombo/github-flavored-markdown/issues/#issue/1" class="internal">#1</a></li>
<li>User/#Num: <a href="/mojombo/github-flavored-markdown/issues/#issue/1">mojombo#1</a></li>
<li>User/Project#Num: <a href="/mojombo/god/issues/#issue/1">mojombo/god#1</a></li>
</ul>