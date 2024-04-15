function getQuery() {
  let search = new URLSearchParams(window.location.search);
  return search.get("query");
}

function populateSearchField() {
  const $searchElem = document.querySelector("input[type=\"search\"]");
  $searchElem.value = getQuery();
}

function buildIndex() {
  return lunr(function () {
    this.field("id");
    this.field("title", { boost: 10 });
    this.field("date");
    this.field("image");
    this.field("content");

    Object.keys(window.store).forEach((key) => {
      this.add({
        id: key,
        title: window.store[key].title,
        image: window.store[key].image,
        date: window.store[key].date,
        content: window.store[key].content,
      });
    });
  });
}

function getSearchResults() {
  const index = buildIndex();
  const query = getQuery();
  return index.search(query);
}

function displaySearchResults() {
  const $container = document.querySelector(".archive");
  const template = document.querySelector("#search-result");

  const results = getSearchResults();

  if (results.length === 0) {
    const $message = document.createElement("p");
    $message.textContent = "Your search did not return any results."

    $container.appendChild($message);
  }

  results
    .map(result => window.store[result.ref])
    .forEach((result) => {
      console.log(result);
      const clone = template.content.cloneNode(true);

      const $a = clone.querySelector("h1 a");
      $a.href = result.url;
      $a.textContent = result.title;

      const $image = clone.querySelector("a img");
      $image.src = result.image;
      $image.alt = `Image of ${result.title}.`;

      const $imageLink = clone.querySelector("a:has(img)");
      $imageLink.href = result.url;

      const $date = clone.querySelector("time");
      $date.textContent = result.date;

      $container.appendChild(clone);
    });
}

window.addEventListener("load", populateSearchField);
window.addEventListener("load", displaySearchResults);
