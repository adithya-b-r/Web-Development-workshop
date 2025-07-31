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

    console.log(response)
    console.log(images)

    imgContainer.innerHTML = "";

    images.forEach((img) => {
      let author = img.author;
      let url = img.download_url;
      // console.log(`${author}, ${url}`);

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