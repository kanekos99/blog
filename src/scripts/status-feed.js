const statusLists = document.querySelectorAll(".status-list");
const statusLoading = document.querySelectorAll(".status-loading");

function getStatusFeed() {
  fetch("https://status.cafe/users/kanekos.atom")
    .then((response) => response.text())
    .then((xml) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "application/xml");
      const entries = xmlDoc.querySelectorAll("entry");
      entries.forEach((entry) => {
        const status = entry.querySelector("title")?.textContent;
        const statusText = entry.querySelector("content")?.textContent;

        const date = entry.querySelector("published")?.textContent;
        const dateObject = new Date(date);
        const localDate = dateObject.toLocaleString();

        const statusArray = status.split(" ");
        const statusUser = statusArray[0];
        const statusEmoji = statusArray[1];

        let statusItemHTML = `
            <div class="status-item">
                <div class="status-user">
                    <a href="https://status.cafe/users/kanekos">${statusUser}</a>
                    ${statusEmoji}
                </div>
                <div class="status-text">
                    ${statusText}
                </div>
                <div class="status-date">${localDate}</div>
            </div>
        `;

        //apply for both mobile and desktop view
        statusLists.forEach((statusList) => {
          statusList.innerHTML += statusItemHTML;
        });

        //hide loader and show status list
        statusLoading.forEach((loader) => {
          loader.classList.add("fade-out");
          setTimeout(() => (loader.style.display = "none"), 100);
        });

        statusLists.forEach((list) => {
          list.style.display = "block";
          setTimeout(() => list.classList.add("fade-in"), 200);
        });
      });
    });
}

getStatusFeed();
