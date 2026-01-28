const TitleH1 = document.getElementById("Title");
const TitleParagraph = document.getElementById("TitleParagraph");
const TitleDiv = document.getElementById("TitleDiv");
const TextTitleDiv =  document.getElementById("TextTitleDiv");
const whatsAppButton = document.getElementById("whatsapp");





//Images
const LogoNightLine = document.createElement("img");
LogoNightLine.src = "./Images/Logos/N|NightLineRed.png";
LogoNightLine.alt  = 'LogoNightLine';
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




if (TextTitleDiv){
    TitleDiv.style.padding = "50px 10px 20px 30px";
    TextTitleDiv.insertBefore(LogoNightLine, TextTitleDiv.firstChild);
    
}   
if (TitleH1) {
    TitleH1.style.color = "white";
    TitleH1.style.display = "column";
    TitleH1.innerHTML = "Night Line <br><br>";
}

if (TitleParagraph){
    TitleParagraph.style.color = "white"; 
    TitleParagraph.innerHTML = "¿Quienes somos? <br><br> Somos una marca reconocida que diseña y produce eventos sociales, bodas y lanzamientos de marca manejamos sonido, luces y hemos creado muchas de las mejores experiencias en Bogotá.";
}

if (whatsAppButton){
    whatsAppButton.innerHTML = "Cotiza tu evento";
    whatsAppButton.appendChild(imgwa);
    whatsAppButton.style.margin = '5px';
    whatsAppButton.style.padding = '5px 10px';
    whatsAppButton.style.alignItems = 'center';

}