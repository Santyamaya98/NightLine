    const TitleH1 = document.getElementById("Title");
    const TitleParagraph = document.getElementById("TitleParagraph");
    const TitleDiv = document.getElementById("TitleDiv");
    const TextTitleDiv =  document.getElementById("TextTitleDiv");
    const WhatsAppButton = document.getElementById("whatsapp");
    const ExperienciasDiv = document.getElementById("ExperienciasDiv");
    const TitleExperiencias = document.getElementById("TitleExperiencias");
    const TextExperiencias = document.getElementById("TextExperiencias");
    const TextExperienciasDiv = document.getElementById("TextExperienciasDiv");
    const queHacemosTitle = document.getElementById("queHacemosTitle");
    const queHacemosText = document.getElementById("queHacemosText");
    const clientesTitle = document.getElementById("clientesTitle");
    const clientesText = document.getElementById("clientesText");
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
        TitleParagraph.innerHTML = "Somos una marca reconocida que diseña y produce eventos sociales, bodas y lanzamientos de marca manejamos sonido, luces y hemos creado muchas de las mejores experiencias en Bogotá.";
    }

    if (WhatsAppButton){
        WhatsAppButton.innerHTML = "Cotiza tu evento";
        WhatsAppButton.appendChild(imgwa);
        WhatsAppButton.style.margin = '5px';
        WhatsAppButton.style.padding = '5px 10px';
        WhatsAppButton.style.alignItems = 'center';

    }
    if (ExperienciasDiv){
        ExperienciasDiv.style.padding = "10px 10px 10px 10px";
        ExperienciasDiv.style.maxWidth = "50rem";

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

    if (queHacemosText){
        queHacemosText.style.color = "black";
        queHacemosText.style.display = "column";
        queHacemosText.innerHTML = "";
    }

    // Data for images
const imageData = [
    {
        title: "Eventos Sociales",
        description: "Celebraciones como 15 años, aniversarios y fiestas privadas, producidas con puntualidad, orden y una presentación impecable, para que todo se vea bien organizado y se disfrute con total tranquilidad."
    },
    {
        title: "Bodas",
        description: "Producción integral para bodas donde cada detalle técnico y musical fluye sin estrés, cuidando los tiempos, el ambiente y la experiencia, para que los novios solo se concentren en disfrutar su gran día."
    },
    {
        title: "Promoción de marcas",
        description: "Eventos corporativos y activaciones de marca diseñadas para conectar con el público y fortalecer el posicionamiento."
    },
    {
        title: "Paola Suarez",
        description: "Quería darles las gracias por todo. Fue una experiencia increíble, todo estuvo espectacular y mi amiga quedó completamente feliz. De verdad superaron nuestras expectativas. Fue el mejor cumpleaños!"
    },
    {
        title: "Juan Carlos Gómez",
        description: "Gracias  Night Line pudimos disfrutar nuestra boda al 100%. Todo fluyó perfecto. No tuvimos que preocuparnos por nada y eso nos permitió vivir el momento sin estrés. Fue una tranquilidad total contar con ustedes."
    },
    {
        title: "Isabel Lancheros",
        description: "Un equipo profesional, organizado y creativo. Night Line se encargó de toda la producción y logró un gran impacto en nuestros clientes creando una experiencia impecable para nuestra marca."
    }
];

// Function to populate the grid
function populateImageQueHacemosGrid() {
    // Set main title and text
    queHacemosTitle.textContent = '¿Qué Hacemos?';
    clientesTitle.textContent = 'Clientes Satisfechos';
    clientesText.textContent = 'Lo que nuestros clientes dicen de nosotros:';
    clientesTitle.style.color = 'black';
    queHacemosTitle.style.color = 'black';
    queHacemosTitle.style.margin = "15px";
    queHacemosTitle.style.padding= "1px";
    queHacemosText.textContent = "Contamos con una amplia experiencia en:";
    
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');
    
    // Populate each grid item with data
    gridItems.forEach((item, index) => {
        if (imageData[index]) {
            item.querySelector('.image-title').textContent = imageData[index].title;
            item.querySelector('.image-description').textContent = imageData[index].description;
        }
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateImageQueHacemosGrid);