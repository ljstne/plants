const burger = document.querySelector('.menu_mobile');
const navMenu = document.querySelector('.header_nav');
const link = document.querySelectorAll('.nav_link')
const body = document.querySelector('body')
const header = document.querySelector('header');

burger.addEventListener ('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.addEventListener('click', function (event) {
    if (!burger.contains(event.target) &&
    !navMenu.contains(event.target)
    && 
    !header.contains(event.target)
            )
    {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    }
}
)
}
)

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

const gardenButton = document.querySelector('.garden__button')
const lawnButton= document.querySelector('.lawn__button')
const plantingButton= document.querySelector('.planting__button')
const gardenImg = Array.from(document.querySelectorAll(".imagesService[data-filter='garden']"))
const lawnImg = document.querySelector(".imagesService[data-filter='lawn']")
const plantingImg = Array.from(document.querySelectorAll(".imagesService[data-filter='planting']"))
const clickCounter = {'buttons active' : 0};
const gardenActive = {active: false}
const lawnActive = {active: false}
const plantingActive = {active: false}
const allImages = document.querySelectorAll('.imagesService');

const cardsSelector = () => {
    if (gardenActive.active!=false) {

        allImages.forEach(img=>{img.classList.add('blur')})

     }
            if (lawnActive.active!=false) {
                allImages.forEach(img=>{img.classList.add('blur')})
            }
                    if (plantingActive.active!=false) {
                        allImages.forEach(img=>{img.classList.add('blur')})
                    }
    
                            if (lawnActive.active!=false) {
                                allImages.forEach(img=>{img.classList.add('blur')})
                            }
                                    if (lawnActive.active!=true && gardenActive.active!=true && plantingActive.active!=true) {
                                             allImages.forEach(img=>{img.classList.remove('blur')})

                                        }
                                        else {    lawnImg.classList.add('blur')
                                    }
                                if (gardenActive.active!=false) {
                                    gardenImg.forEach(img=> {img.classList.remove('blur')})
                                }
                                if (plantingActive.active!=false) {
                                        plantingImg.forEach(img=> {img.classList.remove('blur')})
                                }
                            if (lawnActive.active!=false) {
                                lawnImg.classList.remove('blur')
                                }
}


gardenButton.addEventListener('click', () => {
    gardenButton.classList.toggle('active');

    if(gardenButton.classList.contains('active')) {clickCounter["buttons active"] += 1}
    if(!gardenButton.classList.contains('active')) {clickCounter["buttons active"] -= 1}
    if (clickCounter["buttons active"] > 2) {
        gardenButton.classList.toggle('active');
        clickCounter["buttons active"] -= 1;
        return false}

    if(gardenButton.classList.contains('active')) {gardenActive.active=true;}
    else {gardenActive.active=false}

    cardsSelector();
}
)


lawnButton.addEventListener('click', () => {
    lawnButton.classList.toggle('active');

    if(lawnButton.classList.contains('active')) {clickCounter["buttons active"] += 1}
    if(!lawnButton.classList.contains('active')) {clickCounter["buttons active"] -= 1}
    if (clickCounter["buttons active"] > 2) {
        lawnButton.classList.toggle('active');
        clickCounter["buttons active"] -= 1;
        return false}
    if(lawnButton.classList.contains('active')) {lawnActive.active=true;}
    else {lawnActive.active=false}



    cardsSelector();

    }
)

plantingButton.addEventListener('click', () => {
    plantingButton.classList.toggle('active');

    if(plantingButton.classList.contains('active')) {clickCounter["buttons active"] += 1}
    if(!plantingButton.classList.contains('active')) {clickCounter["buttons active"] -= 1}
    if (clickCounter["buttons active"] > 2) {
        plantingButton.classList.toggle('active');
        clickCounter["buttons active"] -= 1;
        return false}

    if(plantingButton.classList.contains('active')) {plantingActive.active=true;}
    else {plantingActive.active=false}

    cardsSelector();

})


const pricesSelects = document.querySelectorAll('.select_item');
const orderOne = document.querySelector(`.order_button[data-filter=one]`)
const orderTwo = document.querySelector(`.order_button[data-filter=two]`)
const orderThree = document.querySelector(`.order_button[data-filter=three]`)

pricesSelects.forEach(select => {select.addEventListener('click', function(event) {
    let lastSelect = document.querySelector(`.select_item.active:not([data-filter='${select}'])`);
    if (lastSelect && lastSelect != select) {lastSelect.classList.remove('active')};
    // let buttonClick;
    // buttonOrder.forEach(button => {button.addEventListener('click', function() {buttonClick = true})});
    // let buttonOrder = Array.from(select.querySelectorAll('.order_button'));
    // let buttonCheck = false;
    // buttonOrder.forEach(e => {addEventListener('click', function() {
    //     buttonCheck = true;
    // })})

if (!orderOne.contains(event.target)&&!orderTwo.contains(event.target)&&!orderThree.contains(event.target)) {
select.classList.toggle('active')}
})})


const dropdownSelectCity = document.querySelector('.city_dropdown');
const dropdownSelectList = document.querySelector('.dropdown_hidden');
const citiesSelect = Array.from(document.querySelectorAll('.city_option'));
const cityOptionInfo = Array.from(document.querySelectorAll('.city_info'))

dropdownSelectCity.addEventListener('click', function(event) {

    dropdownSelectCity.classList.toggle('active');
    dropdownSelectList.classList.toggle('active');
    // for (city in citiesSelect) {city}
    citiesSelect.forEach (city => {city.classList.toggle('active');

    city.addEventListener('click', function() {
        cityOptionInfo.forEach(cityoption => {
            if (cityoption.classList.contains('selected')) {cityoption.classList.remove('selected')}
        })
        city.classList.add('selected')
        let selectedOption = document.querySelector('.selected');
        let selectedCity = selectedOption.getAttribute('data-filter')
        document.getElementById('city_placeholder').innerHTML = `${selectedCity}`;
        city.classList.remove('selected')
        let cityToShow = document.querySelector(`.city_info[data-filter="${selectedCity}`);

    

        // cityOptionInfo.forEach(cityinfo=> {
            cityToShow.classList.add('selected')
            // let lastCitySelected = document.querySelector(`.city_info.selected:not([data-filter='${cityToShow}'])`);
            // if (lastCitySelected && lastCitySelected != cityToShow) {
                // lastCitySelected.classList.remove('selected');
        // console.log('last not equal to selected');};
        // })
    })
    })
  

    body.addEventListener('click', function(event) {
        if(!dropdownSelectCity.contains(event.target)
        && !dropdownSelectList.contains(event.target)
        // && !citiesSelect.contains(event.target)
        )
        {    dropdownSelectCity.classList.remove('active');
        dropdownSelectList.classList.remove('active');
        citiesSelect.forEach (city => {city.classList.remove('active')})
        let cityToHide = document.querySelector(`.city_info.selected`);

        if(cityToHide && cityToHide.classList.contains('selected') && !cityToHide.contains(event.target)) {cityToHide.classList.remove('selected');
        document.getElementById('city_placeholder').innerHTML = `City`;}
    }
    })
})
