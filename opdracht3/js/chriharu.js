function chriharu(fase){
    console.log("chriharu.js: fase = "+ fase)
    let section = document.getElementById("chriharu");

    if(!section.init) {
        section.init = true;
        section.tl
        .add("cocktail")
        .to("#chriharu .box", {
            borderRadius: "20%",
            rotation: 360,
            backgroundColor: "#BDEAF5",
            opacity: 0.8,
            duration: 3,
            width: "7vw",
            height: "10vh",
        },"cocktail")
        .to("#chriharu .cocktailglass", {
            duration: 4, 
            left: "calc(50vw - 15vw)",
        }, "cocktail")
        .to("#chriharu .straw", {
            left: "calc(50vw - 15vw)",
            duration: 4, 
        }, "cocktail")
        .to("#chriharu .cocktailglass", {
            delay: 5,
            rotate: "90deg",
            y: 700,
        }, "cocktail")
        .to("#chriharu .straw", {
            delay: 5,
            rotate: "90deg", 
            y: 700,
        }, "cocktail")

        .add("volcano")
        .to("chriharu .box", {
            borderRadius: "50%",
            backgroundColor: "#FFC300",
            boxShadow: "0 0 20px rgba(255, 195, 0, 0.7)",
            rotation: 360,
            left: "35vw",
            top: "calc (50vh-20vw)",
            width: "10vw",
            height: "10vw",
            duration: 0.5, 
        })

        .add("sun")
        .to("#chriharu .box", {
            borderRadius: "50%",
            backgroundColor: "#FFC300",
            boxShadow: "0 0 20px rgba(255, 195, 0, 0.7)",
            rotation: 360,
            left: "35vw",
            top: "calc (50vh-20vw)",
            width: "30vw",
            height: "30vw",
            duration: 5, 
        },"sun")

        .to(".waterdrops", {
            opacity: 0,
        }, "sun")
        .add("turtle")
        .to("#chriharu .box", {
            borderRadius: "51% 49% 50% 50% / 100% 100% 0% 0% ",
            opacity: 0.8,
            backgroundColor: "#5990A7", 
            left: "45vw",
            top: "calc (50vh-20vw)",
            width: "20vw",
            height: "20vh",
            duration: 5,
            boxShadow: "none",
        }, "turtle")
        .from ("#chriharu .waterdrops", {
            opacity: 0.5,
            duration: 1,
        }, "sun") 
        .to ("#chriharu .waterdrops", {
            opacity: 0,
            top: 200,
            duration: 3,
        }, "sun")
        .to("#chriharu .box", {
            borderRadius: "50%",
            backgroundColor: "gold",
            rotation: 360,
            left: "35vw",
            top: "calc (50vh-20vw)",
            width: "30vw",
            height: "30vw",
        }, "turtle")
        .to("#chriharu .box", {
            rotation: 360,
            left: "40vw",
            top: "calc (50vh-10vw)",
            borderRadius: "50%",
            backroundImage: "url(../images/extra/schildpad-lichaam.png)",
    }, "turtle");
}}
