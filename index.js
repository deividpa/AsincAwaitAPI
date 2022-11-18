const getImagen = async () => {
  const APIKey = "purMBIhqH6ky12aZCh1QFOKpfeOXufq2";
  const resp = await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${APIKey}`
  );
  console.log(resp);
  const { data } = await resp.json();

  const container = document.getElementById("container");
  const newIMG = document.createElement("IMG");
  newIMG.src = data.images.original.url;
  container.append(newIMG);
};

getImagen();
