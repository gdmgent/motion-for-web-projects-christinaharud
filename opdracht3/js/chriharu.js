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
            duration: 2,
        },"cocktail")
        .to("#chriharu .cocktailglass", {
            scale: 1,
            x: "0vw",
            y: "0vh",
            duration: 4, 
            
        }, "cocktail")
        .to("#chriharu .straw", {
            scale: 1,
            x: "0vw",
            y: "0vh",
            duration: 4, 
        }, "cocktail")
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
            opacity: 1,
            duration: 3,
        }, "jellyfish") 
        .to ("#chriharu .waterdrops", {
            opacity: 0,
            top: 200,
            duration: 5,
        }, "jellyfish")
        .add("deel3") 
        .to("#chriharu .box", {
            borderRadius: "50%",
            backgroundColor: "gold",
            rotation: 360,
            left: "35vw",
            top: "calc (50vh-20vw)",
            width: "30vw",
            height: "30vw",
        }, "deel3")
        .to("#chriharu .box", {
            borderRadius: "0",
            backgroundColor: "white",
            rotation: 360,
            left: "40vw",
            top: "calc (50vh-10vw)",
            width: "20vw",
            height: "20vw",  
    });
}}
