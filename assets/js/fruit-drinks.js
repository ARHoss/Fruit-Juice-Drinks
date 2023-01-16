//fetch using halal drinks api

let data;

function getFetch(){
    const url = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(halalDrinks => {
            console.log(data)

            data = halalDrinks;

            
            getFiveRandomNumbers();

            setInterval(getFiveRandomNumbers, 10000);
            

            

            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


getFetch();



function getFiveRandomNumbers(){

    let num = [];

    for(let i=0; i<5; i++){
        num.push(Math.floor(Math.random()*58));
    }

    console.log(num);

    document.querySelector('#first').children[0].children[0].innerText = data.drinks[num[0]].strDrink;
    document.querySelector('#first').children[1].children[0].src = data.drinks[num[0]].strDrinkThumb;

    document.querySelector('#second').children[0].children[0].innerText = data.drinks[num[1]].strDrink;
    document.querySelector('#second').children[1].children[0].src = data.drinks[num[1]].strDrinkThumb;

    document.querySelector('#third').children[0].children[0].innerText = data.drinks[num[2]].strDrink;
    document.querySelector('#third').children[1].children[0].src = data.drinks[num[2]].strDrinkThumb;

    document.querySelector('#fourth').children[0].children[0].innerText = data.drinks[num[3]].strDrink;
    document.querySelector('#fourth').children[1].children[0].src = data.drinks[num[3]].strDrinkThumb;

    document.querySelector('#fifth').children[0].children[0].innerText = data.drinks[num[4]].strDrink;
    document.querySelector('#fifth').children[1].children[0].src = data.drinks[num[4]].strDrinkThumb;


}