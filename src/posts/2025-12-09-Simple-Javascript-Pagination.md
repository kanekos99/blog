---
title: Simple Javascript Pagination
author: kanekos
date: 2025-12-09
tags: ["resources", "coding"]
description: A simple pagination function in vanilla Javascript - works on static HTML pages with no libraries required.
---

This is a custom pagination feature that I have wrote in Javascript, which I am also using on this blog. I thought I would share the code here, in case someone might find it useful, since it is relatively simple and customisable. 

It is based on [this tutorial](https://www.geeksforgeeks.org/javascript/create-a-pagination-using-html-css-and-javascript/) from GeeksForGeeks, with some slight modifications.

You can find a demo of this on CodePen: [Link](https://codepen.io/kanekos99/pen/myPamRm)

<hr class="dotted-divider">

To start off, you will need all the elements that you want to paginate to be in one HTML file.

Here is an example:

```
<div id="post-container">
  <div class="post">Item 1</div>
  <div class="post">Item 2</div>
  <div class="post">Item 3</div>
  <div class="post">Item 4</div>
  <div class="post">Item 5</div>
  <div class="post">Item 6</div>
  <div class="post">Item 7</div>
  <div class="post">Item 8</div>
  <div class="post">Item 9</div>
  <div class="post">Item 10</div>
</div>
```

At the bottom of all the elements you want to pagination, include this:

```
<div id="pagination">
</div>
```
_(Note: Try not to change the ID for this. If you want to do so, you will have to modify it in the script below as well.)_


This is the element that will contain the pagination buttons. The buttons themselves will be dynamically appended in Javascript.


This is the Javascript code:

<details>
    <summary class="code-block">
        <b>View code</b>
    </summary>

```
//This is the number of items shown per page
const postsPerPage = 3;
//This is the ID of element containing the items
const postContainerID = "post-container";
//This is a common class all your items should have
const postClassName = "post";

/*-----------Script starts here------------*/
let currentPage = 1;

const postsContainer = document.getElementById(postContainerID);

const posts = Array.from(postsContainer.getElementsByClassName(postClassName));

const totalPages = Math.ceil(posts.length / postsPerPage);

displayPage(currentPage);

//Only show pagination if you have more than one page worth of items
if (posts.length > postsPerPage) {
  appendPaginationControls();
}

function displayPage(page) {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  posts.forEach((post, index) => {
    if (index >= startIndex && index < endIndex) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

//This adds the next and previous buttons and the pagination numbers
function appendPaginationControls() {
  const pagination = document.getElementById("pagination");

  //append previous button
  const prevLink = document.createElement("a");
  prevLink.href = "#";
  prevLink.id = "prev";
  prevLink.classList.add("disabled");

  const prevLinkText = document.createTextNode("previous");

  prevLink.appendChild(prevLinkText);
  pagination.appendChild(prevLink);

  prevLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
      updatePagination();
    }
  });

  //append number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.classList.add("page-link");
    if (i === 1) {
      pageLink.classList.add("active");
    }
    pageLink.dataset.page = i;
    pageLink.textContent = i;

    pagination.appendChild(pageLink);

    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      const page = parseInt(pageLink.getAttribute("data-page"));
      if (page !== currentPage) {
        currentPage = page;
        displayPage(currentPage);
        updatePagination();
      }
    });
  }

  //append next button
  const nextLink = document.createElement("a");
  nextLink.href = "#";
  nextLink.id = "next";

  const nextLinkText = document.createTextNode("next");

  nextLink.appendChild(nextLinkText);
  pagination.appendChild(nextLink);

  nextLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
      updatePagination();
    }
  });
}

function updatePagination() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pageLinks = document.querySelectorAll(".page-link");

  window.location.hash = currentPage;

  if (currentPage === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentPage === totalPages) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }

  pageLinks.forEach((link) => {
    const page = parseInt(link.getAttribute("data-page"));
    link.classList.toggle("active", page === currentPage);
  });
}

/*--------optional: only if you want the pages to change based on the url like yourwebsite.com/blog#1 and so on ----------*/

window.addEventListener("hashchange", () => {
  handleHashChange(window.location);
});

window.addEventListener("DOMContentLoaded", () => {
  handleHashChange(window.location);
});

function handleHashChange(windowLocation) {
  const pageNumber = Number(windowLocation.hash.slice(1));
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    displayPage(currentPage);
    updatePagination();
  }
}
```

</details>
</br>
This is the only part that you will need to modify:

```
//This is the number of items shown per page
const postsPerPage = 3;

//This is the ID of element containing the items you want to pagination
const postContainerID = "post-container"

//This is a common class all the items you want to paginate should have
const postClassName = "post"
```

_(Of course, if you're familiar with Javascript and there are other parts of the code that you want to change, feel free to do so as well.)_

Include the Javascript code in a separate JS file and link it in your HTML page, or just add it to any JS file you're already using.

Finally, create a new CSS file or in your existing CSS file, add these two classes:

```
/*feel free to modify with your own customisations*/

/*reduce opacity next and prev button when they 
are disabled and make them unclickable*/
.disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: default;
}

/*bolds the active page number*/
.active {
  font-weight: 900;
}
```

You can add whatever other customisations you want, or edit the default ones I have given above. To customize the pagination buttons, you can use these CSS selectors:
* Previous button: `#prev`
* Page number buttons: `.page-link`
* Next button: `#next`


<b>Optional</b> - If you want to use icons for the previous and next buttons instead of text and are also using FontAwesome, you can replace the `appendPaginationControls()` function with this instead:

<details>
    <summary class="code-block">
        <b>View code</b>
    </summary>

```
function appendPaginationControls() {
  const pagination = document.getElementById("pagination");

  //append previous button
  const prevLink = document.createElement("a");
  prevLink.href = "#";
  prevLink.id = "prev";
  prevLink.classList.add("disabled");

  const prevIcon = document.createElement("i");
  prevIcon.classList.add("fa", "fa-caret-left");
  prevIcon.setAttribute("aria-hidden", "true");

  prevLink.appendChild(prevIcon);
  pagination.appendChild(prevLink);

  prevLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
      updatePagination();
    }
  });

  //append number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.classList.add("page-link");
    if (i === 1) {
      pageLink.classList.add("active");
    }
    pageLink.dataset.page = i;
    pageLink.textContent = i;

    pagination.appendChild(pageLink);

    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      const page = parseInt(pageLink.getAttribute("data-page"));
      if (page !== currentPage) {
        currentPage = page;
        displayPage(currentPage);
        updatePagination();
      }
    });
  }

  //append next button
  const nextLink = document.createElement("a");
  nextLink.href = "#";
  nextLink.id = "next";

  const nextIcon = document.createElement("i");
  nextIcon.classList.add("fa", "fa-caret-right");
  nextIcon.setAttribute("aria-hidden", "true");

  nextLink.appendChild(nextIcon);
  pagination.appendChild(nextLink);

  nextLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
      updatePagination();
    }
  });
}
```

</details>
</br>
And that is all! Let me know if you have tried this or if you're facing any issues!

