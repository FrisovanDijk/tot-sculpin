Twenty of Time Sculpin blog
=====================

Run Sculpin local

    vendor\bin\sculpin generate --watch --server

Run production deploy

```
vendor\bin\sculpin generate --env=prod
```

--------

# ToT Blog post documentation

## YAML Frontmatter

```
layout: choose layout style ([name] from [name].twig in _views), default is blogpost
title: title of blog post
subtitle: the subtitle
intro: Introduction paragraph
(optional) readtime: estimated reading time of the article
(optional) updated: last update date of article
(optional) heroimg: image file. imgpath is added automatically
(optional) color: color for the blog post/page
(optional) author: list of authors, add as many as required
    1: author number
        name: author name
        text: text below name
        img: file name relative to assets/authors
(optional for pages) bgimg: background pattern image
```

### `LAYOUT`

The following standard layouts are available:

- `page`, which gives a light background over the entire <article>
- `blogpost`, which gives the standard look of the light content block starting after the title
- `wideimg`, which is a blogpost but allows images to extend beyond the lighter content block

### `heroimg`

The `heroimg` variable requires two thing: the variable name to the hero image and a social media image called `social.png` in the same folder.

### YAML EXAMPLE

```
---
layout: blogpost
title: Pay attention to the title
subtitle: This is a subtitle
intro: This is the introduction text of a post
readtime: 11 min
heroimg: "malware_featured.png"
color: "#9933cc"
author:
    1:
        name: "Friso van Dijk"
        text: "Text and illustrations"
        img: "frisovandijk2.jpg"
---
```

## Page elements

### Blog images

For images with no caption use markdownextra:

```
![alt](filename){.class}
```

Class is either `.imgleft`, `.imgright`, `.imgcenter`, `.imgwide`

Use `<figure>` for images with caption as follows:

```
<figure class='imgcenter'>
    <img src='something.png' alt='something'>
    <figcaption>caption</figcaption>
</figure>
```

### Quotes

Use html:

```
<blockquote class="left">
     It is better to risk saving a guilty man than to condemn an innocent one.
     <p><cite>&mdash; Voltaire</cite></p>
</blockquote>
```

Only use `left` or `right` class if not centered.

### Infocard

Simple description and expanded. Works with HTML inside elements.

```
{{ infocard.make("description", "expanded") }}

{{ infocard.make('', '') }}
```

### Page snippets

```
{{ snippet.link( "snippet title"    // Snippet title, use 'none' if empty
                , "url"             // URL the snippet links to
                , "page title"      // Title of the page
                , "image (480x200)" // Snippet image, use 'none' if empty
                , "snippet text"    // (optional) Snippet text, none if empty (to reach target)
                , ' '               // (optional) link target, any text will make it _self.
                                    // Default link target is _blank
) }}
```

### Image gallery

Work in progress