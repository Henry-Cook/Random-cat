let button = document.querySelector("button");
let img = document.querySelector(".cat-img");

function newCat() {
  console.log("Clicked!!");
  apiCall();
}

button.addEventListener("click", newCat);

const apiCall = async () => {
  let config = {
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search?format=json",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "27c7f13a-a80b-4688-b203-0b966c6df3cc",
    },
  };
  let response = await axios(config);
  let imgUrl = response.data[0].url;
  try {
    img.src = imgUrl;
  } catch (error) {
    console.log("=>" + error);
  }
};
