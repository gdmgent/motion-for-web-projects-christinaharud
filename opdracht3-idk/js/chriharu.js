function christinaharud(fase){
    console.log("chriharu.js: fase = "+ fase)
    let section = document.getElementById("christinaharud");

    if(!section.init) {
        section.init = true;
        //eigen animatie schrijven
        console.log("christinaharud.js: init");
        section.tl
        .to("#christinaharud .box", {
            borderRadius: "50%",
            backgroundColor: "#FFC300",
            boxShadow: "0 0 20px rgba(255, 195, 0, 0.7)",
            rotation: 360,
            left: "30vw",
            top: "calc (50vh-20vw)",
            width: "40vw",
            height: "40vw",
            duration: 1,
        })
        .add("deel1")
        .to("#christinaharud .box", {
            borderRadius: "50%",
            backgroundColor: "red",
            rotation: 360,
            left: "30vw",
            top: "calc (50vh-20vw)",
            width: "40vw",
            height: "40vw",
            duration: 5,
        }, "deel1")
        .from("#christinaharud p:first-of-type", {
            opacity: 0,
            duration: 1,
            x: -300,
        }, "deel1")
        .to("#christinaharud .box", {
            borderRadius: "0",
            backgroundColor: "white",
            rotation: 360,
            left: "40vw",
            top: "calc (50vh-10vw)",
            width: "20vw",
            height: "20vw",
            duration: 1,
    });
}}
