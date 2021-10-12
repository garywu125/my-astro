---
title: Basic Markdown
layout: ../layouts/main.astro
---

# Toggle Button

<details>
  <summary>Click to see the log report</summary>
  Adds three new logging formats to the mod_log_config format specifications, including byte quantities received, sent, and transferred (combination of received and sent quantities). Normally included in the base Apache compile.
LogIOTrackTTFB: Enables time tracking between the initial request read time and the moment the first byte response is sent.

mod_filter: Provides context-sensitive filters to the output chain by registering any number of filter providers. mod_filter is not specific to logging, but allows for extracting specific requests based on the filter provider. Context containers include: main apache config, vhost config, within directory tags, and .htaccess files.

Employing this module allows for filtering requests containing such things as certain injection criteria and which IP address it’s from.

This module is provided by default in many of the package distributions, but may require enabling. For the purposes of logging, the FilterTrace directive posts information to the error log. Directives include:

</details>


# tables

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

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"