
let beachButt = document.querySelector('#beach')
let bushButt = document.querySelector('#mountains')
let bushNum = document.querySelector(`.mountNum`)
let beachNum =  document.querySelector(`.beachNum`)
let resBar = document.querySelector(`.resBar`)

// axios stuffs





 beachButt.addEventListener(`click`, function(e) {
    e.preventDefault();
    console.log(`You voted ` + beachButt.id)
    let key = `beach`;
    let data =  {
        type: `number`,
        action: `++`,
    };
    axios.post('http://circuslabs.net:3000/data/' + key, data)
    .then(function (responseData) {
        console.log('here is the response data:', responseData);
        beachNum.innerHTML = responseData.data.data.value
        if (beachNum.innerHTML > bushNum.innerHTML){
            console.log(`Beach is winning`)
            let resSum = beachNum.innerHTML - bushNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 + resAdjust
            resBar.style.right = resLog + `%`
        } else if (beachNum.innerHTML < bushNum.innerHTML){
            console.log(`Mountains is winning`)
            let resSum = bushNum.innerHTML - beachNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 - resAdjust
            resBar.style.right = resLog + `%`
        } else if (bushNum.innerHTML === beachNum.innerHTML){
            console.log(`tied`)
            resBar.style.right = `55%`
        }
    })
    .catch(function (error) {
        console.warn('axios encountered an error!', error);
    });

})
bushButt.addEventListener(`click`, function(e) {
    e.preventDefault();
    console.log(`You voted ` + bushButt.id)
    let key = `mountains`;
    let data =  {
        type: `number`,
        action: `++`,
    };
    axios.post('http://circuslabs.net:3000/data/' + key, data)
    .then(function (responseData) {
        console.log('here is the response data:', responseData);
        bushNum.innerHTML = responseData.data.data.value
        if (beachNum.innerHTML > bushNum.innerHTML){
            console.log(`Beach is winning`)
            let resSum = beachNum.innerHTML - bushNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 + resAdjust
            resBar.style.right = resLog + `%`
        } else if (beachNum.innerHTML < bushNum.innerHTML){
            console.log(`Mountains is winning`)
            let resSum = bushNum.innerHTML - beachNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 - resAdjust
            resBar.style.right = resLog + `%`
        } else if (bushNum.innerHTML === beachNum.innerHTML){
            console.log(`tied`)
            resBar.style.right = `55%`
        }
    })
    .catch(function (error) {
        console.warn('axios encountered an error!', error);
    });
})

let calVal = function() {
    axios.get('http://circuslabs.net:3000/data/mountains')
    .then(function (response) {
        console.log('here is the response data for key:', response);
        console.log(response.data.data.value)
        bushNum.innerHTML = `X`
        setTimeout(() => {
            mn = response.data.data.value
            bushNum.innerHTML = mn
        }, 1300);
    })
    .catch(function (error) {
        console.warn(`axios ncountered an error!`)
    })
    axios.get('http://circuslabs.net:3000/data/beach').then(function (response) {
        console.log('here is the response data for key:', response);
        console.log(response.data.data.value)
        beachNum.innerHTML = `X`
        setTimeout(() => {
            bn = response.data.data.value
            beachNum.innerHTML = bn
        }, 1300);
    })

    setTimeout(() => {
        if (beachNum.innerHTML > bushNum.innerHTML){
            console.log(`Beach is winning`)
            let resSum = beachNum.innerHTML - bushNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 + resAdjust
            resBar.style.right = resLog + `%`
        } else if (beachNum.innerHTML < bushNum.innerHTML){
            console.log(`Mountains is winning`)
            let resSum = bushNum.innerHTML - beachNum.innerHTML;
            console.log(resSum)
            let resAdjust = resSum * 2.5
            let resLog = 55 - resAdjust
            resBar.style.right = resLog + `%`
        } else if (bushNum.innerHTML === beachNum.innerHTML){
            console.log(`tied`)
            resBar.style.right = `55%`
        }
    }, 2000);
}

calVal();