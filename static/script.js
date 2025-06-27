//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
      x.className = "responsive";
  } else {
      x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
      document.getElementById("html").classList.add("barra-progreso1");
      document.getElementById("js").classList.add("barra-progreso2");
      document.getElementById("bd").classList.add("barra-progreso3");
      document.getElementById("ps").classList.add("barra-progreso4");
  }

}
 


// Enviar correo con API
const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission

btn.value = 'Sending...'; // Update button text for user feedback

const serviceID = 'default_service';
const templateID = 'template_2j2hnub';

emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Send Email'; // Reset button text
    alert('¡Mensaje enviado!'); // Success message in Spanish

    // Clear form fields (optional)
    form.reset();
  }, (err) => {
    btn.value = 'Send Email'; // Reset button text
    alert(JSON.stringify(err)); // Error message
  });
});




  // Traducciones en varios idiomas

  document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    en: {
          inicio:'START', 
          sobremi:'ABOUT ME',
          servicios:'SERVICES',
          potafolio:'PROJECTS',
          contacto: 'CONTACT',
          bem_vindo: 'Wellcome',
          soy: "I'm Edmilson Carlos, Python Developer",
          descricao: "I am passionate about technology",
          projectos: 'Go to Projects',

          sobre_mim: 'About me',
          hola:"Hello, I'm Edmilson Carlos",
          desenvolvedor:'Python Developer',
          informacao_big:"Hello, my name is Edmilson Luís Carlos Nascimento and I am a computer engineer. I am dedicated to the creation of web pages, computer vision systems with artificial intelligence, computer maintenance and repairs. I have more than 2 years of experience, I offer personalized solutions for each client, ensuring their technological needs are met." ,
          baixar_cv:"DOWNLOAD CV",
          serviços:'MY SERVICES',
          creacion:'Creation of web pages',
          utilizo:'I use the best tools (technologies) for web development',
          programacao:'Python Programming',
          python:'Python is a very versatile language, and for this reason I use it to develop different projects.',
          cv_descriçao:'Computer vision, or artificial vision, is the most challenging field and one of the fastest growing within artificial intelligence.',
          basico:'Installation of Operating Systems and Maintenance',
          basico1: 'I install operating systems such as Windows and Linux, in addition to this I maintain your computer.',
          redes_sociais:'Social Network Management',
          redes_info:'I offer basic social media management services, helping to improve online presence.',
          videos:'Video editing',
          videos_info:'I edit advertising videos using practical tools such as CapCut, combining creativity with my computer science knowledge.',
          habilidades:'TECHNOLOGICAL SKILLS',
          mis_proyectos:'My Projects',
          frutas:'Fruit_Detector',
          web:'Web Development',
          otros:'Others',
          ver: 'See',
          barberia:'Website_(barbershop)',
          contacto:'CONTACT',
          nombre:'Name',
          enviar:'Send',
          footer1:'Passion for Quality.',
          footer2:'Created by Edmilson Carlos'
     
    },
    es: {

          inicio:'INICIO',
          sobremi:'SOBRE MI',
          servicios:'SERVICIOS',
          potafolio:'PROYECTOS',
          contacto: 'CONTACTO', 
          bem_vindo: 'Bienvenido',
          soy: "Soy Edmilson Carlos, Desarrollador Python",
          descricao: "Soy un apasionado por la tecnologia",
          projectos: 'Ir a PROYECTOS',

          sobre_mim: 'Sobre Mi',
          hola:"Hola, Soy Edmilson Carlos",
          desenvolvedor:'Desarrollador Python',
          informacao_big:"Hola, mi nombre es Edmilson Luís Carlos Nascimento y soy ingeniero informático. Me dedico a la creación de páginas web, sistemas de visión por computador con inteligencia artificial, mantenimiento de ordenadores y reparaciones. Tengo más de 2 años de experiencia, ofrezco soluciones personalizadas para cada cliente, asegurándome de satisfacer sus necesidades tecnológicas." ,
          baixar_cv:"DESCARGAR CV",
          serviços:'MIS SERVICIOS',
          creacion:'Creación de páginas Web',
          utilizo:'Utilizo las mejores herramientas (tecnologías) para el desarrollo web',
          programacao:'Programación Python',
          python:'Python es un lenguaje muy versátil, y por este motivo lo utilizo para desarrollar distintos proyectos.',
          cv_descriçao:'La visión por computador, o visión artificial, es el campo con más desafíos y uno de los que más crece dentro de la inteligencia artificial.',
          basico:'Instalación de Sistemas Operativos Y Mantenimiento',
          basico1: 'Instalo sistemas operativos como Windows y Linux, además de esto realizo el mantenimiento de tu ordenador.',
          redes_sociais:'Gestión de Redes Sociales',
          redes_info:'Ofrezco servicios básicos de gestión de redes sociales, ayudando a mejorar la presencia en línea.',
          videos:'Edición de videos',
          videos_info:'Realizo edición de videos publicitarios utilizando herramientas prácticas como CapCut, combinando creatividad con mis conocimientos en informática.',
          habilidades:'HABILIDADES TECNOLÓGICAS',
          mis_proyectos:'Mis Proyectos',
          frutas:'Detector_de_Frutas',
          web:'Desarrollo Web',
          otros:'Otros',
          ver: 'Ver',
          barberia:'Página Web_(barbería)',
          contacto:'CONTACTO',
          nombre:'Nombre',
          enviar:'Enviar',
          footer1:'Pasión por la Calidad.',
          footer2:'Creado por Edmilson Carlos'
    }
  };


// Language switch buttons
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');

    // Function to switch language
    function switchLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                // Special handling for the specific span
                if (element.id === "mySpan") {
                    element.innerHTML = translations[lang][key];
                    element.style.color = "red";
                    element.style.fontSize = "20px";
                    element.style.fontWeight = "bold";
                    element.style.textDecoration = "underline";
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Add event listeners to language buttons
    if (btnEn && btnEs) {
        btnEn.addEventListener("click", () => {
            switchLanguage("en");
            btnEn.classList.add("hidden");
            btnEs.classList.remove("hidden");
        });
        
        btnEs.addEventListener("click", () => {
            switchLanguage("es");
            btnEs.classList.add("hidden");
            btnEn.classList.remove("hidden");
        });
    }
});









//Actualizar el año(FOOTER)

//Obtener el año actual
const currentYear = new Date().getFullYear();

// Insertarlo en el span con id "current-year"
document.getElementById('current-year').textContent = currentYear;

