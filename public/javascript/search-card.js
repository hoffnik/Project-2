
async function searchBtnHandler(event){
    event.preventDefault();
  
    const searchName = document.querySelector('input[name="card-name"]').value;
  
    console.log('search button clicked');
    console.log(searchName);

    const response = await fetch(`https://api.scryfall.com/cards/search?q=${searchName}`);
  
    if(response.ok){
      response.json().then(searchData =>{
        // console.log(searchData);
        for(let i = 0; i < searchData.data.length; i++){
          console.log(searchData.data[i].name);
          console.log(searchData.data[i].image_uris.normal);
          console.log(searchData.data[i].prices.usd);
        }
      });
    }
    else{
      alert(response.statusText);
    }
}



document.querySelector('.card-search-form').addEventListener('submit', searchBtnHandler);