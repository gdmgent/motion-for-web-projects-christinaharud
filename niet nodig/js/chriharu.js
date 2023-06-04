function chriharu(fase){
    console.log("chriharu.js: fase = "+ fase)
    let section = document.getElementById("chriharu");

    if(!section.init) {
        section.init = true;
        //eigen animatie schrijven
        section.tl
        .add("cocktail")
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
            duration: 5, //hoogte van content = duur van de tijdlijn (binnen section sections maken). Aantal adds komen niet perse overeen met aantal sections
        },"sun")
        .to(".waterdrops", {
            opacity: 0,
        }, "sun")
        .add("jellyfish")
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
        }, "jellyfish")
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
