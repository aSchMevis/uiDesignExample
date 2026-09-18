//Zuerst erstelle ich alle Container, Buttons und Textfelder in JS.

let body = document.querySelector("body");

//allgemeine Container (Container, die immer vorhanden sind):

let main = document.createElement("div");
let footer = document.createElement("footer");
    footer.classList.add("footerRoom");
let roomName = document.createElement("div");
    roomName.classList.add("roomName");
let logo = document.createElement("img");
    logo.src = "./images/logo.png";
    logo.alt = "ESSLINGEN UNIVERSITY";
let btnHelp = document.createElement("button");
    btnHelp.classList.add("buttonRed", "startButtonSize");
    btnHelp.textContent = "Help";
let btnOff = document.createElement("button");
    btnOff.classList.add("buttonRed", "startButtonSize", "pushRight");
    btnOff.textContent = "Off";

//Container für Start-/Shutdown-/Booting-/bootShutdown-Seite:

let btnStart = document.createElement("button");
    btnStart.classList.add("buttonBlue", "startButtonSize");
    btnStart.textContent = "Start";

let bootContainer = document.createElement("div");
    bootContainer.classList.add("containerColumn", "borderBlue");
let bootText = document.createElement("div");
    bootText.classList.add("contentText", "borderBlue");
let bootBar = document.createElement("div");
    bootBar.classList.add("borderBlue", "bootBar");
let bootBarFiller= document.createElement("div");
    bootBarFiller.classList.add("progressBlue");

let buttonContainer = document.createElement("div");
let btnYes = document.createElement("button");
let btnNo = document.createElement("button");

/*Statische Container der Raumseite:
*(Buttons werden erst innerhalb der Funktion generiert, da
*die Buttons sonst nicht dynamisch generiert werden)**/

let volumeContainer = document.createElement("div");
    volumeContainer.classList.add("containerColumn", "borderBlue", "flex1", "maxMainHeight");
let volumeTitle = document.createElement("div");
    volumeTitle.classList.add("contentText", "borderBlue", "flex1");
    volumeTitle.textContent = "VOLUME";
let volumeButtonContainer = document.createElement("div");
    volumeButtonContainer.classList.add("containerColumn", "borderBlue", "flex15");
let volumeBar = document.createElement("input");
let btnMute = document.createElement("button");
    btnMute.classList.add("buttonBlue");

let displayContainer = document.createElement("div");
    displayContainer.classList.add("containerColumn", "borderBlue", "flex3", "maxMainHeight");
let displayTitle = document.createElement("div");
    displayTitle.classList.add("contentText", "borderBlue", "flex1");
    displayTitle.textContent = "DISPLAY";
let displayButtonContainer = document.createElement("div");
    displayButtonContainer.classList.add("containerColumn", "borderBlue", "flex15");

let roomContainer = document.createElement("div");
    roomContainer.classList.add("containerColumn", "borderBlue", "flex1", "maxMainHeight");
let roomTitle = document.createElement("div");
    roomTitle.classList.add("contentText", "borderBlue", "flex1");
    roomTitle.textContent = "ROOM";
let roomButtonContainer = document.createElement("div");
    roomButtonContainer.classList.add("containerColumn", "borderBlue", "flex15");
let btnLights = document.createElement("button");
    btnLights.classList.add("buttonBlue");
let btnBlinds = document.createElement("button");
    btnBlinds.classList.add("buttonBlue");

//Container für Start-/Shutdown-/Booting-/bootShutdown-Seite:

let helpMain = document.createElement("div");
    helpMain.classList.add("mainGray", "helpMain");
let helpContainer = document.createElement("div");
    helpContainer.classList.add("containerColumn", "borderBlue");
let helpTitle = document.createElement("div");
    helpTitle.classList.add("contentText", "borderBlue", "flex2");
    helpTitle.textContent = "HELP";
let helpRow01 = document.createElement("div");
    helpRow01.classList.add("contentText", "flex3");
    helpRow01.textContent = "Aus Sicherheitsgründen";
let helpRow02 = document.createElement("div");
    helpRow02.classList.add("contentText", "flex3");
    helpRow02.textContent = "habe ich hier";
let helpRow03 = document.createElement("div");
    helpRow03.classList.add("contentText", "flex3");
    helpRow03.textContent = "nur einen Fülltext.";
let btnCloseHelp = document.createElement("button");
    btnCloseHelp.classList.add("buttonRed", "helpCloseButton");
    btnCloseHelp.textContent = "Close";





//---------------------------------------------------------//
// Diverse Infos, Variablen, Arrays, etc: (für dynamische Button-/Raumerstellung)
let room01InputName = ["a","b","c"];
let room02InputName = ["a", "b", "c", "d", "e", "f", "g"];
let room03InputName = ["a", "b", "c", "d"];
let room01DispName = ["Projektor"];
let room02DispName = ["Projektor", "Pult", "Whiteboard"];
let room03DispName = ["Projektor", "Pult"];
let room01KnxName = ["Lights", "Blinds", "AC"];
let room02KnxName = ["Lights", "Blinds", "Chalkboard Light"];
let room03KnxName = ["Lights", "Blinds"];
let room01 = {name: "Room 02.002", bootTime: 4000, inputs: 3, displays: 1, inputNames: room01InputName, displayNames: room01DispName, knxDevices: 3, knxNames: room01KnxName};
let room02 = {name: "Room 01.031", bootTime: 3000, inputs: 5, displays: 3, inputNames: room02InputName, displayNames: room02DispName, knxDevices: 3, knxNames: room02KnxName};
let room03 = {name: "Room 03.122", bootTime: 2000, inputs: 4, displays: 2, inputNames: room03InputName, displayNames: room03DispName, knxDevices: 2, knxNames: room03KnxName};

let currentRoom = room01;
let inputNameList = currentRoom.inputNames;
let displayNameList = currentRoom.displayNames;
let knxNameList = currentRoom.knxNames;

//---------------------------------------------------------//
//DOM generierende Funktionen:


function helpPage() {
    main.classList.add("hidden");
    main.style.display = "none";
    btnHelp.classList.add("hidden");
    btnOff.classList.add("hiddenHelp");
    helpContainer.replaceChildren(helpTitle, helpRow01, helpRow02, helpRow03, btnCloseHelp);
    helpMain.replaceChildren(helpContainer);
    body.insertBefore(helpMain, footer);
}

function closeHelpPage() {
    helpMain.remove();
    main.classList.remove("hidden");
    main.style.display = "";
    btnHelp.classList.remove("hidden");
    btnOff.classList.remove("hiddenHelp");
}

function startPage() {
    body.replaceChildren();
    main.replaceChildren();
    main.classList.remove("mainGray");
    btnHelp.classList.remove("hidden");
    main.classList.add("mainLightBlue");
    roomName.textContent = currentRoom.name;
    body.appendChild(main);
    body.appendChild(footer);
    footer.appendChild(btnHelp);
    footer.appendChild(roomName);
    footer.appendChild(logo);
    footer.appendChild(btnOff);
    btnOff.classList.add("hidden");
    main.appendChild(btnStart);
}

function startBootPage() {
    body.replaceChildren();
    main.replaceChildren();
    main.classList.remove("mainLightBlue");
    main.classList.add("mainGray");
    roomName.textContent = currentRoom.name;
    body.appendChild(main);
    body.appendChild(footer);
    btnHelp.classList.add("hidden");
    footer.appendChild(btnHelp);
    footer.appendChild(roomName);
    footer.appendChild(logo);
    footer.appendChild(btnOff);
    btnOff.classList.add("hidden");
    main.appendChild(bootContainer);
    bootText.textContent = "Booting " + currentRoom.name + ", please wait."
    bootContainer.appendChild(bootText);
    bootContainer.appendChild(bootBar);
    bootBar.appendChild(bootBarFiller);
    
    let intStep = Math.max(1, Math.round(currentRoom.bootTime / 99));

    let width = 1;
    let id = setInterval(frame, intStep);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            roomPage();
        } else {
            width++;
            bootBarFiller.style.width = width + '%';
        }
    }
}

function roomPage() {
    body.replaceChildren();
    main.replaceChildren();
    volumeContainer.replaceChildren();
    displayContainer.replaceChildren();
    roomContainer.replaceChildren();
    volumeButtonContainer.replaceChildren();
    displayButtonContainer.replaceChildren();
    roomButtonContainer.replaceChildren();
    btnHelp.classList.remove("hidden");
    body.appendChild(main);
    body.appendChild(footer);
    main.appendChild(volumeContainer);
    main.appendChild(displayContainer);
    main.appendChild(roomContainer);
    btnOff.classList.remove("hidden");
    volumeContainer.appendChild(volumeTitle);
    volumeContainer.appendChild(volumeButtonContainer);
    displayContainer.appendChild(displayTitle);
    displayContainer.appendChild(displayButtonContainer);
    roomContainer.appendChild(roomTitle);
    roomContainer.appendChild(roomButtonContainer);

    if (((currentRoom.inputs + 1) % 2 === 0) && ((currentRoom.inputs + 1) <= 4)) {
        smallRoom();
    } else if (((currentRoom.inputs + 1) <= 6)) {
        mediumRoom();
    } else if (((currentRoom.inputs + 1) <= 9)) {
        largeRoom();
    } else {
        console.log("error");
    }

    volume();
    roomCtrl();
}

function smallRoom() {
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
            row.classList.add("containerRow", "flex2", "gap1vb", "r" + i);
            displayButtonContainer.appendChild(row);
    }
    let firstRow = document.querySelector(".r0");
        firstRow.classList.replace("flex2", "flex1");
    let lastRow = document.querySelector(".r4");
        lastRow.classList.replace("flex2", "flex1");
    let displayButtonRow = document.querySelector(".r1");
        displayButtonRow.classList.add("borderBottom", "paddingBottom");
    let inputButtonRow01 = document.querySelector(".r2");
    let inputButtonRow02 = document.querySelector(".r3");

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            let fillerRow01 = document.createElement("div");
            let fillerRow02 = document.createElement("div");
            fillerRow01.classList.add("containerRow", "flex1", "f" + i);
            fillerRow02.classList.add("containerRow", "flex1", "f" + i);
            inputButtonRow01.appendChild(fillerRow01);
            inputButtonRow02.appendChild(fillerRow02);
        } else if (i != 2) {
            let buttonContainer01 = document.createElement("div");
            let buttonContainer02 = document.createElement("div");
            let buttonContainer03 = document.createElement("div");
            let buttonContainer04 = document.createElement("div");
            buttonContainer01.classList.add("containerRow", "flex2", "btn0");
            buttonContainer02.classList.add("containerRow", "flex2", "btn1");
            buttonContainer03.classList.add("containerRow", "flex2", "btn2");
            buttonContainer04.classList.add("containerRow", "flex2", "btn3");
            inputButtonRow01.appendChild(buttonContainer01);
            inputButtonRow01.appendChild(buttonContainer02);
            inputButtonRow02.appendChild(buttonContainer03);
            inputButtonRow02.appendChild(buttonContainer04);
        } else {
            let fillerRow01 = document.createElement("div");
            let fillerRow02 = document.createElement("div");
            fillerRow01.classList.add("containerRow", "flex1", "f" + i);
            fillerRow02.classList.add("containerRow", "flex1", "f" + i);
            inputButtonRow01.appendChild(fillerRow01);
            inputButtonRow02.appendChild(fillerRow02);
        }
    }

    if (currentRoom.displays === 1) {
        let filler01 = document.createElement("div");
        let displayButton = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton.classList.add("containerRow", "flex1", "db0");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 2){
        let filler01 = document.createElement("div");
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton01.classList.add("containerRow", "flex2", "db0");
        displayButton02.classList.add("containerRow", "flex2", "db1");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 3){
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let displayButton03 = document.createElement("div");
        displayButton01.classList.add("containerRow", "flex1", "db0");
        displayButton02.classList.add("containerRow", "flex1", "db1");
        displayButton03.classList.add("containerRow", "flex1", "db2");
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(displayButton03);
    } else {
        console.log("error")
    }

    for (let i = 0; i <= currentRoom.inputs; i++) {
        if (i < currentRoom.inputs) {
            let button = document.createElement("button");
                button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
                button.classList.toggle("buttonLightBlue");
                button.textContent = inputNameList[i];
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(button);
                button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
        } else {
            let freezeButton = document.createElement("button");
                freezeButton.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
                freezeButton.classList.toggle("buttonLightBlue");
                freezeButton.textContent = "FREEZE";
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(freezeButton);
                freezeButton.addEventListener("click", function () {
                freezeButton.classList.toggle("buttonBlue");
                freezeButton.classList.toggle("buttonLightBlue");});
        }
    }

    for (let i = 0; i < currentRoom.displays; i++) {
        let button = document.createElement("button");
            button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
            button.classList.toggle("buttonLightBlue");
            button.textContent = displayNameList[i];
        let buttonContainer = document.querySelector(".db"+i);
            buttonContainer.appendChild(button);
            button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
    }
}

function mediumRoom() {
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
            row.classList.add("containerRow", "flex2", "gap1vb", "r" + i);
            displayButtonContainer.appendChild(row);
    }
    let firstRow = document.querySelector(".r0");
        firstRow.classList.replace("flex2", "flex1");
    let lastRow = document.querySelector(".r4");
        lastRow.classList.replace("flex2", "flex1");
    let displayButtonRow = document.querySelector(".r1");
        displayButtonRow.classList.add("borderBottom", "paddingBottom");
    let inputButtonRow01 = document.querySelector(".r2");
    let inputButtonRow02 = document.querySelector(".r3");

            let buttonContainer01 = document.createElement("div");
            let buttonContainer02 = document.createElement("div");
            let buttonContainer03 = document.createElement("div");
            let buttonContainer04 = document.createElement("div");
            let buttonContainer05 = document.createElement("div");
            let buttonContainer06 = document.createElement("div");
            buttonContainer01.classList.add("containerRow", "flex1", "btn0");
            buttonContainer02.classList.add("containerRow", "flex1", "btn1");
            buttonContainer03.classList.add("containerRow", "flex1", "btn2");
            buttonContainer04.classList.add("containerRow", "flex1", "btn3");
            buttonContainer05.classList.add("containerRow", "flex1", "btn4");
            buttonContainer06.classList.add("containerRow", "flex1", "btn5");
            inputButtonRow01.appendChild(buttonContainer01);
            inputButtonRow01.appendChild(buttonContainer02);
            inputButtonRow01.appendChild(buttonContainer03);
            inputButtonRow02.appendChild(buttonContainer04);
            inputButtonRow02.appendChild(buttonContainer05);
            inputButtonRow02.appendChild(buttonContainer06);

    if (currentRoom.displays === 1) {
        let filler01 = document.createElement("div");
        let displayButton = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton.classList.add("containerRow", "flex1", "db0");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 2){
        let filler01 = document.createElement("div");
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton01.classList.add("containerRow", "flex2", "db0");
        displayButton02.classList.add("containerRow", "flex2", "db1");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 3){
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let displayButton03 = document.createElement("div");
        displayButton01.classList.add("containerRow", "flex1", "db0");
        displayButton02.classList.add("containerRow", "flex1", "db1");
        displayButton03.classList.add("containerRow", "flex1", "db2");
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(displayButton03);
    } else {
        console.log("error")
    }

    for (let i = 0; i <= currentRoom.inputs; i++) {
        if (i < currentRoom.inputs) {
            let button = document.createElement("button");
                button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
                button.classList.toggle("buttonLightBlue");
                button.textContent = inputNameList[i];
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(button);
                button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
        } else {
            let freezeButton = document.createElement("button");
                freezeButton.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i)
                freezeButton.classList.toggle("buttonLightBlue");
                freezeButton.textContent = "FREEZE";
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(freezeButton);
                freezeButton.addEventListener("click", function () {
                freezeButton.classList.toggle("buttonBlue");
                freezeButton.classList.toggle("buttonLightBlue");});
        }
    }

    for (let i = 0; i < currentRoom.displays; i++) {
        let button = document.createElement("button");
            button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
            button.classList.toggle("buttonLightBlue");
            button.textContent = displayNameList[i];
        let buttonContainer = document.querySelector(".db"+i);
            buttonContainer.appendChild(button);
            button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
    }
}

function largeRoom() {
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("div");
            row.classList.add("containerRow", "flex1", "gap1vb", "r" + i);
            displayButtonContainer.appendChild(row);
    }
    let displayButtonRow = document.querySelector(".r0");
        displayButtonRow.classList.add("borderBottom", "paddingBottom");
    let inputButtonRow01 = document.querySelector(".r1");
    let inputButtonRow02 = document.querySelector(".r2");
    let inputButtonRow03 = document.querySelector(".r3");

            let buttonContainer01 = document.createElement("div");
            let buttonContainer02 = document.createElement("div");
            let buttonContainer03 = document.createElement("div");
            let buttonContainer04 = document.createElement("div");
            let buttonContainer05 = document.createElement("div");
            let buttonContainer06 = document.createElement("div");
            let buttonContainer07 = document.createElement("div");
            let buttonContainer08 = document.createElement("div");
            let buttonContainer09 = document.createElement("div");
            buttonContainer01.classList.add("containerRow", "flex1", "btn0");
            buttonContainer02.classList.add("containerRow", "flex1", "btn1");
            buttonContainer03.classList.add("containerRow", "flex1", "btn2");
            buttonContainer04.classList.add("containerRow", "flex1", "btn3");
            buttonContainer05.classList.add("containerRow", "flex1", "btn4");
            buttonContainer06.classList.add("containerRow", "flex1", "btn5");
            buttonContainer04.classList.add("containerRow", "flex1", "btn6");
            buttonContainer05.classList.add("containerRow", "flex1", "btn7");
            buttonContainer06.classList.add("containerRow", "flex1", "btn8");
            inputButtonRow01.appendChild(buttonContainer01);
            inputButtonRow01.appendChild(buttonContainer02);
            inputButtonRow01.appendChild(buttonContainer03);
            inputButtonRow02.appendChild(buttonContainer04);
            inputButtonRow02.appendChild(buttonContainer05);
            inputButtonRow02.appendChild(buttonContainer06);
            inputButtonRow03.appendChild(buttonContainer07);
            inputButtonRow03.appendChild(buttonContainer08);
            inputButtonRow03.appendChild(buttonContainer09);

    if (currentRoom.displays === 1) {
        let filler01 = document.createElement("div");
        let displayButton = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton.classList.add("containerRow", "flex1", "db0");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 2){
        let filler01 = document.createElement("div");
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let filler02 = document.createElement("div");
        filler01.classList.add("containerRow", "flex1");
        displayButton01.classList.add("containerRow", "flex2", "db0");
        displayButton02.classList.add("containerRow", "flex2", "db1");
        filler02.classList.add("containerRow", "flex1");
        displayButtonRow.appendChild(filler01);
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(filler02);
    } else if (currentRoom.displays === 3){
        let displayButton01 = document.createElement("div");
        let displayButton02 = document.createElement("div");
        let displayButton03 = document.createElement("div");
        displayButton01.classList.add("containerRow", "flex1", "db0");
        displayButton02.classList.add("containerRow", "flex1", "db1");
        displayButton03.classList.add("containerRow", "flex1", "db2");
        displayButtonRow.appendChild(displayButton01);
        displayButtonRow.appendChild(displayButton02);
        displayButtonRow.appendChild(displayButton03);
    } else {
        console.log("error")
    }

    for (let i = 0; i <= currentRoom.inputs; i++) {
        if (i < currentRoom.inputs) {
            let button = document.createElement("button");
                button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
                button.classList.toggle("buttonLightBlue");
                button.textContent = inputNameList[i];
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(button);
                button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
        } else {
            let freezeButton = document.createElement("button");
                freezeButton.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i)
                freezeButton.classList.toggle("buttonLightBlue");
                freezeButton.textContent = "FREEZE";
            let buttonContainer = document.querySelector(".btn"+i);
                buttonContainer.appendChild(freezeButton);
                freezeButton.addEventListener("click", function () {
                freezeButton.classList.toggle("buttonBlue");
                freezeButton.classList.toggle("buttonLightBlue");});
        }
    }

    for (let i = 0; i < currentRoom.displays; i++) {
        let button = document.createElement("button");
            button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
            button.classList.toggle("buttonLightBlue");
            button.textContent = displayNameList[i];
        let buttonContainer = document.querySelector(".db"+i);
            buttonContainer.appendChild(button);
            button.addEventListener("click", function () {
                button.classList.toggle("buttonBlue");
                button.classList.toggle("buttonLightBlue");});
    }
}

function shutdownBootPage() {
    body.replaceChildren();
    main.replaceChildren();
    main.classList.remove("mainLightBlue");
    main.classList.add("mainGray");
    roomName.textContent = currentRoom.name;
    body.appendChild(main);
    body.appendChild(footer);
    btnHelp.classList.add("hidden");
    btnOff.classList.add("hidden");
    footer.appendChild(btnHelp);
    footer.appendChild(roomName);
    footer.appendChild(logo);
    footer.appendChild(btnOff);
    main.appendChild(bootContainer);
    bootText.textContent = "Shutting down " + currentRoom.name + ", please wait."
    bootContainer.appendChild(bootText);
    bootContainer.appendChild(bootBar);
    bootBar.appendChild(bootBarFiller);
    
    let intStep = Math.max(1, Math.round(currentRoom.bootTime / 99));

    let width = 1;
    let id = setInterval(frame, intStep);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            startPage();
        } else {
            width++;
            bootBarFiller.style.width = width + '%';
        }
    }
}

function volume() {
    volumeBar.type = "range";
    volumeBar.min = "0";
    volumeBar.max = "100";
    volumeBar.value = "50";
    btnMute.textContent = "MUTE";
    volumeBar.classList.add("progressBar", "flex3");
    btnMute.classList.add("buttonBlue", "buttonRed", "flex1");
    btnMute.classList.toggle("buttonRed");
    volumeButtonContainer.appendChild(volumeBar);
    volumeButtonContainer.appendChild(btnMute);

    volumeBar.addEventListener("input", () => {
        sendAudioValue(volumeBar.value);
    });
    btnMute.addEventListener("click", () => {
            btnMute.classList.toggle("buttonBlue");
            btnMute.classList.toggle("buttonRed");
        });

};

function roomCtrl() {
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("div");
            row.classList.add("containerRow", "flex1", "rr" + (3-i));
            roomButtonContainer.appendChild(row);
    }

    for (let i = 0; i < currentRoom.knxDevices; i++) {
            let button = document.createElement("button");
                button.classList.add("buttonBlue", "buttonLightBlue", "buttonFill", "button"+i);
                button.classList.toggle("buttonLightBlue");
                button.textContent = knxNameList[i];
            let buttonContainer = document.querySelector(".rr"+i);
                buttonContainer.appendChild(button);
                button.addEventListener("click", function () {
                    button.classList.toggle("buttonBlue");
                    button.classList.toggle("buttonLightBlue");});
    }
}





startPage();

btnStart.addEventListener("click", startBootPage);
btnOff.addEventListener("click", shutdownBootPage);
btnHelp.addEventListener("click", helpPage);
btnCloseHelp.addEventListener("click", closeHelpPage);