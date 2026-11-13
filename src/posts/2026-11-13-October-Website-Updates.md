---
title: "October Website Updates"
author: kanekos
date: 2026-11-13
tags: ["personal", "projects"]
image: /posts/images/2026-oct/homepage.png
description: October Monthly Update Part 1 — Changes I've made to my Neocities site in the month of October.
---

_This was supposed to be part of my monthly update post for October (which I'm writing in November, don't worry about it), but it was getting a bit too long, so I've split it into two. In this post, I'll mainly be discussing my website updates. If you'd rather read about random bullshit I did in Shanghai, you can check out [this post](/blog/posts/2026-11-13-Shanghai-Trip/) instead._

<details>
  <summary class="quick-nav">
      Quick Nav
  </summary> 
  <ul class="content-nav">
      <li><a href="#gallery">Art Gallery</a></li>
      <li><a href="#sketchlog">Sketch Log</a></li>
      <li><a href="#home">Home Page</a></li>
      <li><a href="#games">Games Page</a></li>
      <li><a href="#ocs">OC Gallery</a></li>
      <li><a href="#future">Future Plans</a></li>
  </ul>
</details>

<hr class="dotted-divider">

In October, my primary focus project-wise was the development of my [Neocities website](https://kanekos.neocities.org/). The following are pages I've updated or newly added:

### [Art Gallery](https://kanekos.neocities.org/gallery/) <a name="gallery"></a>

{% imgBlock "/posts/images/2026-oct/gallery-update.png", "" %}

This page was long overdue for an update since I don't add new art to it regularly, so I did a bulk upload of new images.

I added a new section to showcase my [animations](https://kanekos.neocities.org/gallery/#animation) (well, what few there are). For better organisation, I also separated my [character designs](https://kanekos.neocities.org/gallery/#charas) into their own section, instead of putting them in the original art or sketches section.

I classified my character designs into reference sheets and draft sketches but there honestly isn't much of a difference between the two. It's purely vibes-based.

Finally, I applied for the [NEONET Arts Collective Web Ring](https://dumbiee.neocities.org/webring/art/) so I added the widget for that!

### [Sketch Log](https://kanekos.neocities.org/sketchlog/) <a name="sketchlog"></a>

{% imgBlock "/posts/images/2026-oct/sketchlog.png", "" %}

Since my gallery page is more of an art portfolio showcase than a space for me to showcase my latest art, I decided to finally revamp my ancient sketch log page, where I can dump any and all of my art. Any new art, that is. I will not be retroactively posting old artworks here... And since I didn't get much of a chance to draw in October, being busy working on this website, it's still pretty empty thus far.

The UI of this page is more or less inspired by Tumblr (makes me wonder why I don't just use Tumblr instead 😂). I debated between making this page using a static site generator like 11ty or using pure Javascript. Pure Javascript won in the end because I wanted to be able to add new posts easily. 

I can create a new post by uploading my images somewhere, and then submitting a Google Form which adds my post to a Google Sheet. The website then fetches all posts from the Google Sheet and displays them on this page (which is why there's a loading screen). It's kind of like how the comments on this blog work.

Because I didn't use an SSG, I had to code my own tagging and pagination system, which was an absolute pain in the ass. Oh and I guess you can leave a comment on posts as well.

If this sounds way too complicated or over-engineered for such a simple static page, well, it is... But hopefully I will be more motivated to update this page since I don't have to modify any code to add a new post. And I can do it from mobile as well. 

The downside is that any updates to this page won't show in my Neocities activity ¯&#92;&#95;(ツ)&#95;/¯

### [Home Page](https://kanekos.neocities.org/) <a name="home"></a>

{% imgBlock "/posts/images/2026-oct/homepage.png", "" %}

Next is an update to my home page. While I liked the minimalistic style of my old home page, I felt that it was hard to tell if there were any new updates to the site, like if there was any new art added, for example, or if there were any new posts on my blog. 

Additionally, since I was adding new pages to the site, the directory section (which used to be a single column) was getting a bit long, so that needed a redesign as well.

For the first point, I added the Noticeboard section, which would summarise all the latest site updates, as well as showcase my art. As of now, all of this relies on Javascript since I'll definitely be too lazy to manually update this page. However, I will need to implement some kind of cache-busting to make sure the latest scripts are pulled in for everyone whenever there is an update...

{% imgBlock "/posts/images/2026-oct/directory.png", "" %}

As for the directory, I transformed it into a two column layout. This layout is a little more annoying as I'm limited on the amount of description text I can write for each item, or it wouldn't look nice. But it is more condensed now so all the items are more easily visible at a glance.

{% imgBlock "/posts/images/2026-oct/neighbourhood.png", "" %}

On top of that, I added a Neighbourhood section where I can display buttons to other sites and webring widgets, as I've been meaning to apply to webrings for some time.

And finally, there is a minor change to the UI of the Changelog section to give it more space.

### [Games Page](https://kanekos.neocities.org/games/) <a name="games"></a>

{% imgBlock "/posts/images/2026-oct/games.png", "" %}

Just a simple static page to compile all of the games I've made. Of which there aren't that many... Technically I could have added all of them to my home page directory, but I wanted to make a separate page for better organisation.

### [OC Gallery](https://kanekos.neocities.org/oc-gallery/) <a name="ocs"></a>

{% imgBlock "/posts/images/2026-oct/oc-gallery.png", "" %}

Last but not the least, I finally have a page to showcase my OCs!

I haven't uploaded that many characters yet as I've been focusing on filling up the profiles of those that I have added. Most of the art and writing here have been migrated over from Toyhouse or Unvale or Art Fight so there's not that much new per se. Still, the profiles here should reflect the latest, most up-to-date information about my characters.

{% imgBlock "/posts/images/2026-oct/chara-profile.png", "" %}

My character profile templates are pretty basic but functional since I'm focusing on adding more OCs rather than customisation. It is also pretty modular, in that most of the sections are optional. This way I can quickly add a new character who maybe only has a one line descriptor and one image, or I can make a completely decked out profile with trivia, relationships, AUs, a complete backstory, etc.

This page was built using 11ty, the same as this blog. I think I would die making it otherwise. The downside is that I don't have one centralised place to give me an overview of all profiles and manage them in a table form. I don't know if it is possible for 11ty to generate something like that...?

One aspect I'm still struggling with is the gallery. Right now I manage the images for all my characters in one JSON file. However, this is a little annoying to edit. I don't have a better solution for now so I guess I'll stick to it.

{% imgBlock "/posts/images/2026-oct/oc-gallery-2.png", "" %}

### Future Plans <a name="future"></a>

To wrap up this section, here are some of my future plans for my site, in order of priority:

- Cache busting for home page
- An archive page to showcase past versions of pages
- Add a new interactive shrine
- Apply to more webrings
- Add more OCs to the OC gallery
- Add a page for writing
- Add a separate page for comics (instead of putting them in my gallery page)
