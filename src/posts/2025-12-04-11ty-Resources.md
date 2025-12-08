---
title: Helpful 11ty Coding Tutorials
author: kanekos
date: 2025-12-04
tags: ["resources", "blog", "coding"]
imageAlt: 11ty logo
description: Do you get frustrated when you follow a coding tutorial but it just doesn't work for you for no explicable reason? Here is a compilation of all the resources and tutorials I used while building this blog that mostly worked out of the box for me or with minimal tweaks.
---

As a disclaimer, these tutorials/ resources probably require some knowledge of HTML, CSS and Javascript, so they might not be of much use if you're starting from the very basics. But if you're like me and have built many pages in plain HTML, CSS and Javascript, but rarely use any node-related frameworks, then they are pretty easy to follow along.

<hr class="dotted-divider">

<div class="tutorial-post">

### Basic 11ty tutorial

- [**Turning a HTML page template into an 11ty site**](https://www.youtube.com/watch?v=4wD00RT6d-g)<br>
  > If you already have a page template that is written in HTML and CSS (or you know how to create one), this Youtube tutorial shows you how you can turn it into an 11ty site. Goes into the basics of 11ty, including installation process. Also includes a guide on how to use Git and Netlify to deploy and update your blog. Not too relevant for me since I don't use Netlify, but still interesting nonetheless.
  > <br>

### Basic blog features

- [**Creating tag pages**](https://www.youtube.com/watch?v=kRQr9W7WcVc)<br>
  > A Youtube tutorial for creating pages like [this](/blog/tag/resources/) to allow people to filter your posts by tags.
- [**Pagination with 11ty**](https://www.youtube.com/watch?v=ZUguRkGz-3Q)<br>
  > A short Youtube tutorial on how to paginate your posts using 11ty's built-in pagination functions. I didn't use this in the end and opted for a custom JS pagination instead because I wanted to paginate my tag pages as well, which this doesn't seem to be capable of (as far as I am aware, but do let me know if that is possible too.)
- [**Javascript Pagination**](https://www.geeksforgeeks.org/javascript/create-a-pagination-using-html-css-and-javascript/)<br>
  > I used this as a base for implementing a custom Javascript pagination function for this blog. You can check out this post for my [pagination function](/blog/posts/2025-12-09-Simple-Javascript-Pagination/)!
- [**Ayano's Comment Widget**](https://virtualobserver.moe/ayano/comment-widget)<br>
  > The widget that I'm using for the comments section on my posts! It fetches comments that are stored in a google sheet so no third party service required. Pretty easy to set up and super customisable. Much better than any other third party static site comments feature that I've found. Unfortunately it doesn't work for newer Neocities sites that have a more restrictive CORS policy, but it's totally functional if you have an older website like mine, or if you use some other hosting platform like Github Pages.

### Deployment

- [**Deploying 11ty site to github pages**](https://www.youtube.com/watch?v=x4rRO12swrw)<br>
  > I like to host mirrors of my websites on Github Pages for testing since it's super convenient, but it's a little harder to do with statically generated sites. This Youtube tutorial shows how to deploy your 11ty site onto Github Pages through a Github action. Also helped me to fix an issue with broken links on the statically generated pages. <br>
  >
  > > Do note that the Github workflow build file they have used in the video is no longer working for newer versions of 11ty - you can find a build file that worked for me [here](https://github.com/kanekos99/blog/blob/main/.github/workflows/build.yml) instead. <br>
  > >
  > > > Also make sure to enable **"Read and write permissions"** under Workflow Permissions on Github (you can find this under your repository's Settings > Actions > General)

### Other Resources

- [**Petrapixel's 11ty tutorial**](https://petrapixel.neocities.org/coding/eleventy-tutorial)<br>
  > Maybe a simpler to follow tutorial if you want to learn the basics of 11ty, and if you prefer reading.
- [**The Official 11ty Documentation**](https://www.11ty.dev/)<br>
  > I am adding this here in this list not because I found it helpful, but just to complain about how confusing it is. I might be stupid, but I found nothing in here that helped me to understand how to actually use their framework to create a proper website, or how to resolve the various issues that I faced like broken links etc. Honestly, I'd recommend referring to their documentation only if you have a decent understanding of how it works already.

<hr class="dotted-divider">

If I have missed out any, I'll update it in this post later. For a rundown of how I put everything together to create this blog, you can check out this post [here](/blog/posts/2025-12-05-Blog-Dev-Log-1/).

</div>
