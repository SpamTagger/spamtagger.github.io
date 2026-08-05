# <img src="https://raw.githubusercontent.com/SpamTagger/SpamTagger/refs/heads/main/www/user/templates/default/images/st_logo.svg" alt="SpamTagger Logo" style="height:2em; vertical-align:middle;"> SpamTagger Website

This repository contains the source code for [spamtagger.github.io](https://spamtagger.github.io), mirrored at [spamtagger.org](https://spamtagger.org).

## How it works

Most content which appears on the website is dynamically loaded by reading in various Markdown files from our public GitHub repositories, then converting them to HTML as follows:

* `index.html` provides the basic structure of the home page, including a couple of `md` divs which are to be dynamically loaded.
* `js/main.js` provides the initial content to be loaded based on the URL path and arguments with `loadMd('hostname', 'org', 'repo', 'path', 'document.md', 'div_id');`.
* `js/md2html.js` provides the `loadMd` function with a reasonable amount of RegEx substitutions to transform the Markdown to HTML.
* The translation to HTML is fairly literal and not a lot is done to make the Markdown segments conform to the website, so this needs to be mostly handled within the Markdown. However, converted tags are give `markdown-*` classes which can be styled (done here with `css/md.css`).

## Features

Currently the following markdown conversions are supported:

* Headings, h1 (`#`) through h6 (`######`)
* Images with or without accompanying headings, alt text and text descriptions. Liberties can be taken with this to have entire HTML blocks that don't render in GitHub like [this](https://raw.githubusercontent.com/SpamTagger/.github/refs/heads/main/profile/WEBSITE.md).
* Links (opened in new window).
* Inline `code` elements (`\`code\``).
* **bold** elements (`**bold**` or `__bold__`)
* *emphasized* elements (`*emphasis*` or `_emphasis_`)
* ++inserted text++ (`++insert++`)
* ~~strikethrough~~ (`~~strikethrough~~`)
* Unordered lists (leading `* ` or `- `)
* Ordered lists (leading `1. `)
* Tables ([see Markdown docs](https://www.markdownlang.com/extended/tables.html))
* [abbreviations]: (`[abbreviation]: long text`) added to bottom of document
* Quote blocks (can be nested):

> `> Quote block` or:

    `   Four leading spaces`

## TODO

* Proper checkbox bullets for `* [ ]` lists
* Footnotes (and footnote style images)
* Emoticon -> emoji conversion
* Typographic replacements (use unicode in the source document instead)
* Definitions (dt/dd) blocks
* Proper checkbox list bullets
* Any plugins/extensions
* More robust classes, eg. for list numbers
* Quite a bit of re-factoring for speed and readability

## Usage

The basics of the website should be fairly easy to repurpose for other projects which already have good Markdown marketing and documentation. Just set up some markdown elements with `<div id="unique_id" class="md">` and load the content to that div with `loadMd('hostname', 'org', 'repo', 'path', 'file', 'unique_id');`. You can do this:

* Upon the dom loading with: `document.addEventListener("DOMContentLoaded", () => { loadMd(...) };`
* Or on click with `<script onClick="loadMd(...);">`
* Upon the page anchor changing, as done here with `addEventListener('hashchange', loadHash);`

This site functions as a single-page website by using the page anchor to both set the initial contents of the page as well as to replace the existing contents of via the event listener.
