//This is the number of items shown per page
const postsPerPage = 5;
//This is the ID of element containing the items
const postContainerID = "blog-posts-container";
//This is a common class all your items should have
const postClassName = "blog-post-container";

/*-----------Script starts here------------*/
let currentPage = 1;

const postsContainer = document.getElementById(postContainerID);

const posts = Array.from(postsContainer.getElementsByClassName(postClassName));

const totalPages = Math.ceil(posts.length / postsPerPage);

displayPage(currentPage);

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
