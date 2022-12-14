const mainContainer= document.querySelector("main");


// Tipo de selectores
// etiqueta
// Id
// class

createGame("STRAY","img/img1.jpeg", "$ 138.165",50);
createGame("God of War: Ragnarök","img/img2.jpeg","$ 331.678",50);
createGame("Call of Duty: Warfare 2","img/img3.jpeg", "$ 257.000",50);
createGame("Triangle Strategy","img/img4.jpeg", "$ 97.000",50);
createGame("Pokémon: Arceus","img/img5.jpeg", "$ 112.000",50);
createGame("Horizon Forbidden West","img/img6.jpeg", "$ 132.000",50);
createGame("Elden Ring","img/img7.jpeg", "$ 67.000",50);
createGame("Sniper Elite 5","img/img8.jpeg", "$ 60.000",50);
createGame("Mario + Rabbids Sparks of Hope","img/img9.jpeg", "$ 78.000",50);

// areglar funcion imagen no aparece (error mal elaborado revisar )

function createGame(title, image,price, sku) {
    
    const  GameProduct= document.createElement("div");
    const  nameGame= document.createElement("h3");
    const  imgGame= document.createElement("img");
    const  priceGame= document.createElement("p");
    const  btnAddToGame= document.createElement("button");

GameProduct.classList.add("Game");

nameGame.textContent= title;

imgGame.setAttribute("src",image);
imgGame.setAttribute("alt", title);
imgGame.classList.add("imgGame");

priceGame.textContent= price; 

btnAddToGame.textContent= "Add To Cart"; 
btnAddToGame.setAttribute("id", sku);

GameProduct.appendChild(nameGame);
GameProduct.appendChild(imgGame);
GameProduct.appendChild(priceGame);
mainContainer.appendChild(GameProduct);
GameProduct.appendChild(btnAddToGame);

}