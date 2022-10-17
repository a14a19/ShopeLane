var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

  const {preview, name, description, brand, price, photos} = productData;

  const mainImg = document.getElementById("mainImg");
  const displayImg = document.createElement("img");
  displayImg.classList = "displayImg";
  displayImg.src = preview;

  mainImg.appendChild(displayImg)

  const pName = document.getElementById("name");
  pName.innerText = `${name}`;

  const pBrand = document.getElementById("brand");
  pBrand.innerText = `${brand}`;

  const priceTxt = document.getElementById("priceTxt");
  priceTxt.innerText = `${price}`;

  const descriptionTxt = document.getElementById("description-txt");
  descriptionTxt.innerText = `${description}`;

  const previewImg = document.getElementById("previewImg");


  for(x in photos){
    const Image = document.createElement("img");

    Image.src = `${photos[x]}`;

    previewImg.appendChild(Image)

    Image.addEventListener('pointerdown', ()=>{
        displayImg.src = Image.src;
        Image.style.cssText = "border: 2px solid #009688; padding: 4px; border-radius: 6px"
    })

    Image.addEventListener('pointerout', ()=>{
        Image.style.cssText = "border: none;"
    })
    
  }

window.onload = function() {
    document.getElementById("previewImg").children[0].focus();
    document.getElementById("previewImg").children[0].style.cssText = "border: 2px solid #009688; padding: 4px; border-radius: 6px";
}

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener('click', ()=>{
    const counter = document.getElementById("counter");
    counter.innerText++;
    console.log(counter.innerText);
})

localStorage.setItem('test', counter.innerText)
