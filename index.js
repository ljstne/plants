const burger = document.querySelector('.menu_mobile');
const navMenu = document.querySelector('.navigation_bar');
const link = document.querySelectorAll('.nav_link')
const body = document.querySelector('body')
const header = document.querySelector('header')
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
const gardenImg = document.querySelectorAll('.garden')
const lawnImg = document.querySelector('.lawn')
const plantingImg = document.querySelectorAll('.planting')
const clickCounter = {'buttons active' : 0};
const gardenActive = {active: false}
const lawnActive = {active: false}
const plantingActive = {active: false}
const allImages = document.querySelectorAll('.imagesService');

const buttons = document.querySelectorAll('.button_service');

// buttons.forEach(button => {
//     button.addEventListener('click', function() 
//     {
//         button.classList.toggle('active');
//         let selectedButton = button.getAttribute('data-filter');
//         let selectedSecondButton = document.querySelector(`.button_service.active:not([data-filter='${selectedButton}'])`);
//         let hiddenCards = Array.from(document.querySelectorAll(`.imagesService:not([data-filter='${selectedButton}'])`));
//         let activeCards = document.querySelectorAll(`.imagesService[data-filter='${selectedButton}']`);
//         let activatedButtons = Array.from(document.querySelectorAll('.button_service.active'));
//         console.log(selectedSecondButton, 'second button');

//         for (i=0;i<hiddenCards.length;i++) {
//             if (hiddenCards[i] == selectedSecondButton) {delete hiddenCards[i]; console.log('delete worked');}
//         }

//         if (button.classList.contains('active')) {
//             hiddenCards.forEach(e => {
//                 let cardCheck = e.getAttribute('data-filter')
//                 if (activatedButtons.includes(`button.button_service.${cardCheck}__button.active`))
//                 {console.log('array working');}
//                 console.log(`button.button_service.${cardCheck}__button.active`);
//             e.classList.add('blur');
//             e.classList.remove('active');
//           });
      
//           activeCards.forEach(e => {
//             e.classList.remove('blur');
//             e.classList.add('active');
//           });
//           console.log(`activated ${selectedButton}`);

//         }
//         else if (!button.classList.contains('active')) {
//             activeCards.forEach(e => {
//             e.classList.remove('active');}
//                 )
//                 hiddenCards.forEach(e => {
//             e.classList.remove('blur')
//         })
//         console.log(`hidden ${selectedButton}`);
//     }
//         }
//         )
//     }
//     )


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


    if (gardenActive.active!=false) {
    for (i=0;i<allImages.length;i++) {
        allImages[i].style.filter = 'blur(4px)'
        }}
        if (lawnActive.active!=false) {
            for (i=0;i<allImages.length;i++) {
                allImages[i].style.filter = 'blur(4px)'
                }}
                if (plantingActive.active!=false) {
                    for (i=0;i<allImages.length;i++) {
                        allImages[i].style.filter = 'blur(4px)'
                        }}
                        if (lawnActive.active!=true && gardenActive.active!=true && plantingActive.active!=true) {
                            for (i=0;i<allImages.length;i++) {
                allImages[i].style.filter = 'blur(0px)'
                }
            }
    if (lawnActive.active!=false) {    lawnImg.style.filter = 'blur(0px)'
}
    if (plantingActive.active!=false) {
        for (i=0;i<plantingImg.length;i++) {
            plantingImg[i].style.filter = 'blur(0px)'
    }
}


if (plantingActive.active!=false) {
    for (i=0;i<plantingImg.length;i++) {
    plantingImg[i].style.filter = 'blur(0px)'
    }}
    if (gardenActive.active!=false) {
        for (i=0;i<gardenImg.length;i++) {
            gardenImg[i].style.filter = 'blur(0px)'
    }
    if (lawnActive.active!=false) {    lawnImg.style.filter = 'blur(0px)'
}


}
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




if (gardenActive.active!=false) {
    for (i=0;i<allImages.length;i++) {
        allImages[i].style.filter = 'blur(4px)'
        }}
        if (lawnActive.active!=false) {
            for (i=0;i<allImages.length;i++) {
                allImages[i].style.filter = 'blur(4px)'
                }}
                if (plantingActive.active!=false) {
                    for (i=0;i<allImages.length;i++) {
                        allImages[i].style.filter = 'blur(4px)'
                        }}

                        if (lawnActive.active!=false) {
                            for (i=0;i<allImages.length;i++) {
                                allImages[i].style.filter = 'blur(4px)'
                                }}
                                if (lawnActive.active!=true && gardenActive.active!=true && plantingActive.active!=true) {
                                    for (i=0;i<allImages.length;i++) {
                                        allImages[i].style.filter = 'blur(0px)'
                                        }
                                    }
                                    else {    lawnImg.style.filter = 'blur(4px)'
                                }
                            if (gardenActive.active!=false) {
                                for (i=0;i<gardenImg.length;i++) {
                                    gardenImg[i].style.filter = 'blur(0px)'
                            }}
                            if (plantingActive.active!=false) {
                                for (i=0;i<plantingImg.length;i++) {
                                    plantingImg[i].style.filter = 'blur(0px)'
                            }
                        }
    if (lawnActive.active!=false) {
    lawnImg.style.filter = 'blur(0px)'
    }
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



    if (gardenActive.active!=false) {
        for (i=0;i<allImages.length;i++) {
            allImages[i].style.filter = 'blur(4px)'
            }}
            if (lawnActive.active!=false) {
                for (i=0;i<allImages.length;i++) {
                    allImages[i].style.filter = 'blur(4px)'
                    }}
                    if (plantingActive.active!=false) {
                        for (i=0;i<allImages.length;i++) {
                            allImages[i].style.filter = 'blur(4px)'
                            }}
    
                            if (lawnActive.active!=false) {
                                for (i=0;i<allImages.length;i++) {
                                    allImages[i].style.filter = 'blur(4px)'
                                    }}
                                    if (lawnActive.active!=true && gardenActive.active!=true && plantingActive.active!=true) {
                                        for (i=0;i<allImages.length;i++) {
                                            allImages[i].style.filter = 'blur(0px)'
                                            }
                                        }
                                        else {    lawnImg.style.filter = 'blur(4px)'
                                    }
                                if (gardenActive.active!=false) {
                                    for (i=0;i<gardenImg.length;i++) {
                                        gardenImg[i].style.filter = 'blur(0px)'
                                }}
                                if (plantingActive.active!=false) {
                                    for (i=0;i<plantingImg.length;i++) {
                                        plantingImg[i].style.filter = 'blur(0px)'
                                }
                            }
        if (lawnActive.active!=false) {
        lawnImg.style.filter = 'blur(0px)'
        }
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

        if(cityToHide.classList.contains('selected') && !cityToHide.contains(event.target)) {cityToHide.classList.remove('selected');
        document.getElementById('city_placeholder').innerHTML = `City`;}    }
    })
})