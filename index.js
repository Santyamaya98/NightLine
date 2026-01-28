    const TitleH1 = document.getElementById("Title");
    const TitleParagraph = document.getElementById("TitleParagraph");
    const TitleDiv = document.getElementById("TitleDiv");
    const TextTitleDiv =  document.getElementById("TextTitleDiv");
    const WhatsAppButton = document.getElementById("whatsapp");
    const ExperienciasDiv = document.getElementById("ExperienciasDiv");
    const TitleExperiencias = document.getElementById("TitleExperiencias");
    const TextExperiencias = document.getElementById("TextExperiencias");
    const TextExperienciasDiv = document.getElementById("TextExperienciasDiv");
    //Images
    const LogoNightLine = document.createElement("img");
    const navId = document.getElementById("navId")
    LogoNightLine.src = "./Images/Logos/N|NightLineRed.png";
    LogoNightLine.alt  = 'LogoNightLine';
    const TitleImg = document.getElementById("TitleImg");
    TitleImg.style.maxHeight = "80%";
    // Make it small
    LogoNightLine.style.width = '100px';
    LogoNightLine.style.height = 'auto';          // Maintains aspect ratio
    LogoNightLine.style.maxWidth = '100px';       // Forces max size
    LogoNightLine.style.maxHeight = '100px';      // Forces max height
    LogoNightLine.style.objectFit = 'contain';
    // Position top-left
    LogoNightLine.style.position = 'fixed';
    LogoNightLine.style.top = '10px';
    LogoNightLine.style.left = '10px';

    // Create the <imgwa>
    const imgwa = document.createElement('img');
    imgwa.src  = './Images/Logos/icons8-whatsapp-48.png';
    imgwa.alt  = 'WhatsApp';
    imgwa.padding = 5;
    imgwa.margin = 5;
    imgwa.width  = 24;     // or 48 if you want original size
    imgwa.height = 24;

    if (navId){
        navId.append(LogoNightLine);

    }


    if (TextTitleDiv){
        TitleDiv.style.padding = "50px 10px 20px 30px"        
    }   
    if (TitleH1) {
        TitleH1.style.color = "white";
        TitleH1.style.display = "column";
        TitleH1.innerHTML = "Night Line ";
    }

    if (TitleParagraph){
        TitleParagraph.style.color = "white"; 
        TitleParagraph.innerHTML = "¿Quienes somos? <br><br> Somos una marca reconocida que diseña y produce eventos sociales, bodas y lanzamientos de marca manejamos sonido, luces y hemos creado muchas de las mejores experiencias en Bogotá.";
    }

    if (WhatsAppButton){
        WhatsAppButton.innerHTML = "Cotiza tu evento";
        WhatsAppButton.appendChild(imgwa);
        WhatsAppButton.style.margin = '5px';
        WhatsAppButton.style.padding = '5px 10px';
        WhatsAppButton.style.alignItems = 'center';

    }
    if (ExperienciasDiv){
        ExperienciasDiv.style.padding = "50px 10px 20px 30px";

    }
    if (TitleExperiencias){
        TitleExperiencias.style.color = "White";
        TitleExperiencias.style.display = "column";
        TitleExperiencias.innerHTML = "Más que eventos creamos experiencias";
    }   
    if (TextExperiencias){
        TextExperiencias.style.color = "White";
        TextExperiencias.style.display = "column";
        TextExperiencias.innerHTML = "Nos encargamos de la producción, la música y cada detalle para que tu evento fluya sin estrés y se convierta en una experiencia inolvidable.";
    }