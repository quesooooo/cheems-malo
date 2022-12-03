let count = 0

const countClicks = document.querySelector(".click-container > h1")
function countClick() {
    count++
    countClicks.textContent= `Clicks: ${count}` 

    if( count === 10 ){
        
        const img = document.querySelector("img")
        img.classList.add("cheems2")
        img.src = "./assets/cheems.png"

    }else if( count === 40 ){

        const img2 = document.querySelector("img")
        img2.src = "./assets/cheems2.png"

    }else if( count === 70 ){

        const img3 = document.querySelector("img")
        img3.classList.add("cheems3")
        img3.src = "./assets/cheems3.png"

    }else if( count === 100 ){

        const img4 = document.querySelector("img")
        img4.classList.add("cheems4")
        img4.src = "./assets/cheems4.png"

    }else if( count === 120 ){
        const bigger1 = document.querySelector("img")
        bigger1.classList.add("big")
        bigger1.src = "./assets/cheems4.png"

    }else if( count === 125 ){
        const bigger2 = document.querySelector("img")
        bigger2.classList.add("big2")
        bigger2.src = "./assets/cheems4.png"
        window.alert("Chrome dejo de funcionar");
        alert("Chrome dejo de funcionar");
        setTimeout(function(){
            window.close();
        },1750)
    }
    

}