---
title: How I Made This Blog - Dev Log 1
author: kanekos
date: 2025-12-04
tags: ["projects", "blog", "blog dev log"]
image: /posts/images/blog-dev-log/canva_blog.png
imageAlt: Blog UI Design
description: A documentation of how I put this blog together. May or may not have a sequel depending on when or what new features I add to the blog in the future.
---

I thought it'd be interesting to document how I put this blog together, although it is nothing particularly special. So here is the first installment of a dev log of sorts for this blog, to be updated later as I add more features to it (maybe). Note that everything here is my own process and is really not a guideline for best pratices. It is simply what worked for me in the most convenient way, balancing between what is familiar/ easy for me, and trying to learn new things.

<hr class="dotted-divider">

### 💻 Blog UI Design

This is the first step when I add any new page on this website, which is to design what it looks like first. A professional would use something like Figma. I use [Canva](https://www.canva.com/). The design doesn't need to include every detail (even the colours are off!), but I find it very helpful to have an idea of how the page should look like instead of experimenting as I am coding.

<div class="post-body-img-container">
    <img src="{{ '/posts/images/blog-dev-log/canva_blog.png' | url }}" class="post-body-img-l" />
    <p class="post-img-caption">Canva UI Design for Blog</p>
</div>
<br>

### 💻 Blog HTML Template

After I have the rough UI designs, I just straight into coding the page in HTML. I add whatever CSS I need at this stage. I also used [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) through a CDN, because I've used it so much I include it by default, but you don't really need to use it at all. In fact, I'm not sure if it is even advisable to use Bootstrap anymore in modern front end development. Unfortunately, I love Bootstrap so I will continue using it.

I created one template page for the main page (with the list of posts), and one template page to be used for the individual post. You can view the HTML templates I've made for this blog [here](https://github.com/kanekos99/blog-template).

I also add any Javascript I need at this point, which is only the [comment widget](https://virtualobserver.moe/ayano/comment-widget) in this case. I won't go into detail on how I set it up because the widget page itself already explains it very well, but I absolutely love this widget for how customisable it is!

I also try to keep my page as responsive as possible. This means having to shift some UI elements like moving the buttons on the sidebar in the desktop view to the top in the mobile view.

<div class="post-body-img-container">
    <img src="{{ '/posts/images/blog-dev-log/btn_sidebar.png' | url }}" class="post-body-img-l" />
    <p class="post-img-caption">Desktop view</p>
</div>
<br>

<div class="post-body-img-container">
    <img src="{{ '/posts/images/blog-dev-log/btn_topbar.png' | url }}" class="post-body-img-l" />
    <p class="post-img-caption">Mobile view</p>
</div>
<br>

Again, I am not the best at responsive design. I just try to come up with something that doesn't look horrible to me.

### 💻 11ty-fying My Site

With the HTML templates mostly complete, I start converting them into something I can use with [Eleventy](https://www.11ty.dev/), which is a static site generator and [the whole reason I built this site](/blog/posts/2025-12-03-Hello-World/). Anyway, because the 11ty documentation page is horrible, I followed Youtube tutorials for this part, a list of which I have compiled [here](/blog/posts/2025-12-04-11ty-Resources/).

I don't think I can offer a better explanation of what needs to be done in text than [this video](https://www.youtube.com/watch?v=4wD00RT6d-g), so I won't go into detail for this part. But the end result is that I had some source code that 11ty could compile into static HTML pages.

You can view my source code for this blog in my [Github repository](https://github.com/kanekos99/blog).

### 💻 Blog Index Page

This is [the landing page](/blog/), which will display all posts, sorted in a chronological order, with the most recent ones at the top. It has pagination, but unfortunately there are too few posts right now on this site to demonstrate it.

### 💻 Blog Tag Pages

Every tag has their own HTML page that displays all the posts under that tag ([example](/blog/tag/projects/)). This is a built-in feature of 11ty that I found to be incredibly useful, so I didn't have to go write my own custom JS tagging system.

For how to do this, you can try this tutorial [here](https://www.youtube.com/watch?v=kRQr9W7WcVc).

### 💻 Tag List Page

[This page](/blog/taglist/) simply displays a list of all current tags used on this blog. It is automatically updated whenever I add a new tag to a post. I don't think there is built-in way for 11ty to get all your tags, but this custom function in the .eleventy.js config did the trick for me:

```
  eleventyConfig.addCollection("allTags", function (collectionApi) {
    let tagSet = new Set();

    collectionApi.getAll().forEach((item) => {
      if (Array.isArray(item.data.tags)) {
        item.data.tags.forEach((tag) => {
          if (tag !== "post") {
            tagSet.add(tag);
          }
        });
      }
    });

    return [...tagSet].sort();
  });
```

<br>

(There might be a better way to do this, but I haven't found it.)
<br>

With that, I have a collection (collection.allTags) which contains all the tags I've ever used. Note that this excludes the tag "post", which I have included on every post by default.

### 💻 Archive Page

Similar to the tag list page, [this page](/blog/archive/) displays all the posts ever in this site. Really it's just a flattened version of the landing page, so it is created in basically the same manner, but only displaying the date and title of each post.

### 💻 Pagination

I... I will update this section when I have more than five posts on this blog.

### 💻 Fixing Broken Links

The biggest problem I faced when I started to use 11ty was that I had no idea how to handle links. After I got the generated HTML files and dumped them on Neocities, all the links, including those to my CSS and Javascript files, were just completely broken. When I tried to search up this issue online, there didn't seem to be any straightforward answer to this problem either.

This issue seemed to be that I was deploying my blog under kanekos.neocities.org<b>/blog/</b>, instead of simply kanekos.neocities.org/ — because I keep all of the files related to this blog in their own folder, instead of the root directory.

So this has seemed to work for me:

I added a path prefix in the .eleventy.js config file.

```
  return {
    dir: {
      input: "src",
      output: "public/blog",
    },
    pathPrefix: "/blog/",
  };
```
I also updated all URLs to this format:

{% raw %}
```<link rel="stylesheet" type="text/css" href="{{ '/styles/main.css' | url }}"/> ```<br>
```<script src="{{ '/scripts/pagination.js' | url }}"></script>```<br>
```<a class="filter-item" href="{{ '/tag/resources' | url }}"> resources</a>```
{% endraw %}

By appending ```| url``` at the end of every link, 11ty will convert the URLs to include the root directory of your site. For example, in my case, this would be /blog/ - so the URL in the generated HTML page will be <b>/blog/</b>styles/main.css

If you have encountered a similar issue, feel free to let me know how you have resolved it, as I am still not certain if this is the correct approach.

### 💻 Posts
Every post on this blog is created by inserting content written in a Markdown file into a common template. I mean, that is just how 11ty works, so it is nothing special. Other than the content of the post itself, you can also display "meta" information, such as the post date and the post tags, which is defined in the header portion of the Markdown file (also known as the front matter).

**Example for this post**
```
---
title: How I Made This Blog - Dev Log 1
author: kanekos
date: 2025-12-04
tags: ["projects", "blog", "blog dev log"]
image: /posts/images/blog-dev-log/canva_blog.png
imageAlt: Blog UI Design
description: A documentation of how I put this blog together.
---
```
As you can see, these same tags are displayed at the bottom of this post.

On the other hand, something new that I did learn about posts is the flexibility of what you can do in Markdown.

### 💻 Markdown
Did you know you can include HTML directly in Markdown? Because I did not. One problem I had with writing posts in Markdown is that I wanted to include images, which means I had to have a way of styling them. Being able to add HTML directly in Markdown makes this super simple, of course. 

If I wanted to add any special styling for any particular text, I can simply add a HTML tag around it, assign a class to it, and then style it in CSS.

<span class="demo-text-markdown">Like this</span>

Technically inline CSS should work perfectly fine as well.

On the other hand, if you want to apply changes across all posts - e.g. change the colour of all links in posts - then simply finding the right element to target in CSS will be sufficient. 

INSERT IMAGE HERE

<hr class="dotted-divider">

### 🌟 Future Plans

For my own reference, here is a to-do list of features I plan to add to this blog in the near future:

- Microblog - this will be a list of my status.cafe statues, probably extracted using the Surfing Waves RSS widget
- Update graphics - I gotta stop reusing that same Catnekos png
- Credits and footer
- Pop up modal for images
- Multiple images in one row (?)
- Fix styling for code blocks in posts
````
