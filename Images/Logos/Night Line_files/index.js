const TitleH1 = document.getElementById("Title");
const TitleParagraph = document.getElementById("TitleParagraph")
const TitleDiv = document.getElementById("TitleDiv")
const TextTitleDiv =  document.getElementById("TextTitleDiv")
const whatsAppButton = document.getElementById("whatsapp")

// Create the <img>
const img = document.createElement('img');
img.src  = './Images/Logos/icons8-whatsapp-48.png';
img.alt  = 'WhatsApp';
img.padding = 5;
img.margin = 5;
img.width  = 24;     // or 48 if you want original size
img.height = 24;




if (TextTitleDiv){
    TitleDiv.style.padding = "50px 10px 20px 30px";
}
if (TitleH1) {
    TitleH1.style.color = "white";
    TitleH1.style.display = "column";
    TitleH1.innerHTML = "Night Line";
}

if (TitleParagraph){
    TitleParagraph.style.color = "white"; 
    TitleParagraph.innerHTML = "¿Quienes somos? <br><br> Somos una marca reconocida que diseña y produce eventos sociales, bodas y lanzamientos de marca manejamos sonido, luces y hemos creado muchas de las mejores experiencias en Bogotá.";
}

if (whatsAppButton){
    whatsAppButton.innerHTML = "Cotiza tu evento";
    whatsAppButton.appendChild(img);
    whatsAppButton.style.margin = '5px';
    whatsAppButton.style.padding = '5px 10px';
    whatsAppButton.style.alignItems = 'center';

}