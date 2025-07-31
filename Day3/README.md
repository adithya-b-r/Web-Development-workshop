# 📸 Image Gallery – JavaScript Project

A simple yet dynamic **Image Gallery** that fetches photos from a public API using JavaScript.
Built with **HTML**, **TailwindCSS**, and **Async JS** concepts.

> 🔗 API Used: [`https://picsum.photos/v2/list`](https://picsum.photos/v2/list)

---

## 🚀 Features

* Fetches random images from API
* User inputs: `page` and `limit` for image count
* Dynamic image loading with author names
* Clean and responsive UI using TailwindCSS
* Asynchronous programming with `async/await` and Promises

---

## 🧩 Tech Stack

* HTML
* TailwindCSS (CDN)
* Vanilla JavaScript
* Public API: [Picsum Photos](https://picsum.photos)

---

## 💻 UI Layout

```html
<div class="bg-gray-300 h-fit flex items-center justify-center gap-5 py-3 w-[60%] mx-auto rounded-md border-2 border-black">
  <label class="text-gray-800 font-semibold">Page</label>
  <input id="page" type="number" min="1" class="px-2">

  <label class="text-gray-800 font-semibold">Limit</label>
  <input id="limit" type="number" min="1" class="px-2">

  <button onclick="fetchImage()" class="bg-blue-600 px-2 py-1 text-white rounded-md">Load Images</button>
</div>

<div id="imgContainer" class="w-full h-[75vh] flex flex-wrap overflow-scroll p-1 gap-1 my-2">
  <p class="text-center m-auto">No images yet...</p>
</div>
```

---

## 📜 JavaScript Code

```js
const page = document.getElementById("page");
const limit = document.getElementById("limit");
const imgContainer = document.getElementById("imgContainer");

const fetchImage = async () => {
  var currentPage = page.value;
  var currentLimit = limit.value;

  showLoading();

  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${currentLimit}`);
    const images = await response.json();

    imgContainer.innerHTML = "";

    images.forEach((img) => {
      let author = img.author;
      let url = img.download_url;

      let divTag = document.createElement('div');
      divTag.className = "bg-white w-fit h-fit p-2 rounded-md";

      let imgTag = document.createElement('img');
      imgTag.className = "w-56 h-56 border-2 rounded-md";
      imgTag.loading = "lazy";
      imgTag.src = url;

      let pTag = document.createElement('p');
      pTag.className = "font-semibold text-xs";
      pTag.textContent = `Author: ${author}`;

      divTag.appendChild(imgTag);
      divTag.appendChild(pTag);
      imgContainer.appendChild(divTag);
    })
  } catch (err) {
    alert("Unable to fetch Images: " + err);
  }
}

const showLoading = () => {
  imgContainer.innerHTML = '<p class="text-center m-auto">Loading images...</p>';
}
```

---

## 📚 JavaScript Concepts Used

### 1. DOM Manipulation

* Directly access and modify elements in the DOM using methods like `getElementById`, `createElement`, and `appendChild`.

### 2. Async / Await

* Used to write asynchronous code in a readable and sequential style.
* `await` pauses the function execution until the Promise is resolved.
* In this project, we use it for fetching data:

  ```js
  const response = await fetch(...);
  const data = await response.json();
  ```

### 3. Promises

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

There are three states:

* **Pending**: initial state, neither fulfilled nor rejected
* **Fulfilled**: operation completed successfully
* **Rejected**: operation failed

#### Types of Promises:

* **Resolved Promise**: Successfully returns data
  Example:

  ```js
  Promise.resolve("Data loaded").then(console.log);
  ```
* **Rejected Promise**: Ends in an error
  Example:

  ```js
  Promise.reject("Error occurred").catch(console.error);
  ```
* **Chained Promises**:

  ```js
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```

We use `async/await` instead of `.then()` chaining to simplify the logic.

### 4. Template Literals

* Allow you to embed variables directly inside strings:

  ```js
  `https://picsum.photos/v2/list?page=${currentPage}&limit=${currentLimit}`
  ```

### 5. Event Handling

* JavaScript functions are triggered on user interaction.
* In this project:

  ```html
  <button onclick="fetchImage()">Load Images</button>
  ```

### 6. Error Handling

* Handles failed API calls or network issues using `try...catch`:

  ```js
  try {
    ...
  } catch (err) {
    alert("Error: " + err);
  }
  ```

### 7. Array Iteration

* Loop through image data using `forEach()`:

  ```js
  images.forEach((img) => { ... });
  ```

### 8. API Integration

* We fetch data from:
  [`https://picsum.photos/v2/list?page=X&limit=Y`](https://picsum.photos/v2/list)
* It returns image metadata including author name, ID, and download URL.

---

## ▶️ How to Run

1. Open `index.html` in a browser
2. Enter page number and limit
3. Click **Load Images**
4. View the image cards dynamically loaded on the screen