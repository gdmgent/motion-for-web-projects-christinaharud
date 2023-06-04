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
            width: "7vw",
            height: "10vh",
        },"cocktail")
        .to("#chriharu .cocktailglass", {
            left: "calc(50vw - 15vw)",
            duration: 0.8,
        }, "cocktail")
        .to("#chriharu .straw", {
            left: "calc(50vw - 15vw)",
            duration: 0.8,
        }, "cocktail")
        .to("#chriharu .cocktailglass", {
            delay: 0.7,
            rotate: "90deg",
            y: 700,
        }, "cocktail")
        .to("#chriharu .straw", {
            delay: 0.7,
            rotate: "90deg", 
            y: 700,
        }, "cocktail")

        .add("vulcano")
        .to("chriharu .box .vulcano", {
            borderRadius: "50%",
            backgroundColor: "#FFC300",
            boxShadow: "0 0 20px rgba(255, 195, 0, 0.7)",
            rotation: 360,
            left: "35vw",
            top: "calc (50vh-20vw)",
            width: "30vw",
            height: "30vw",
        }, "vulcano") 

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
        },"sun")

        .add("underwater")
        .to("#chriharu .box", {
            backgroundColor: "#5990A7", 
            left: "45vw",
            top: "calc (50vh-20vw)",
            width: "20vw",
            height: "20vh",
            boxShadow: "none",
            backroundImage: "url(../images/extra/schildpad-lichaam.png)",
        }, "underwater")
        .to("#chriharu .turtle-body", {
            opacity: 1,
            zIndex: 100,
        }, "underwater")
        .to("#chriharu .turtle-head", {
            opacity: 1,
            zIndex: 100,
        },"underewater")
}}
