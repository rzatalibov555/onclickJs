// {} - object
// () - function
// [] - array // massiv
let car = {
    brand: "Chevrolet",
    model: "Cruse",
    motor: "1.4",
    color: "grey",
    type:  "sedan"
}

let human = {
    ad:"Nubar",
    soyad: "Aliverdiyeva",
    eyeColor: "Qehveyi",
    boy:"165",
    ceki:"60",
    work:"Programmer",
    
    full_info: function(){
        return "Menim adim "+this.ad+" "+this.soyad+"dir. I have " +car.brand +" "+car.model
    },
    show_info_console: function(){
        console.log("Menim adim "+this.ad+" "+this.soyad+"dir. I have " +car.brand +" "+car.model)
    }
}























































human.education = "stimul"
human.course = "Passed"


console.log(human['education'])
console.log(human.course)


// prompt(human10.full_info())
// human10.show_info_console()



// let my_var = human10.full_info();
// console.log(my_var)
// alert(human10.full_info())
// document.write(human10.full_info())

// console.log("Menim adim "+person.ad+" "+person.soyad+"dir. I have "
// +car.brand +" "+car.model)




function chBgGreen(e){
    e.style.background = "green"
}


function outChBgGreen(e){
    e.style.background = "red"
}

