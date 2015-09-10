(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);


    function mainController($scope) { 

        $scope.activeProject;
        $scope.show = false;
        $scope.fullscreen = { bool: false};

        $scope.infofilm = {
            title: "Om medieteknik",
            description: "",
            subtitle: "Informationsfilm om medieteknik"
        };

        $scope.projects = [
        {
            title: "Medusa 3D-scannerbås",
            description: "Medusa är ett projekt som utfördes i kursen Medietekniskt kandidatarbete. Ett utvecklingsteam bestående av sju personer fick i uppgift att utveckla ett mjukvarusystem för ett 3D-scannerbås för att skapa en modell av användaren i färg. Båset skulle innehålla flera djupkameror för att scanna användaren. Den erhållna punktdatan skulle användas för att skapa en solid tredimensionell modell. Användaren skulle även ha möjlighet att interagera med systemet via ett enkelt gränssnitt. Gränssnittet skulle ha som användningsområde att starta scanning, spara- och kasta modell och göra om scanningsprocessen.",
            subtitle: "3D-scannerbås, ett kandidatarbete",
            color: "#3E4F5B",
            source: "././projects/movies/medusa.mp4",
            type: "video",
            year: 3
        },
        {
            title: "Mr Carrot",
            description: "Spelet går i princip ut på att rädda sina morotskompisar från maskarna som anfaller. Ett stort fokus låg på det grafiska och spelet gjordes i grafikmotorn Ogre 3D. Spelet programmerades sedan i C++. Kursen som spelet är gjort i heter 3D Datorgrafik. ",
            subtitle: "Spel i 3D med fokus på estetiken",
            color: "#3E4F5B",
            source: "././projects/movies/mr_carrot.mp4",
            type: "video",
            year: 2
        },
        {
            title: "Legohemsida",
            description: "Projektet var att skapa en LEGO-hemsida som skulle vara kopplad till en databas. Hemsidan skulle fungera som ett slags uppslagsverk för LEGO-fantaster där de kunde kolla upp olika legosatser och vilka bitar de olika satserna innehåller. Flera programmeringsspråk skulle användas, HTML, CSS, PHP, JavaScript och MySQL för att skapa hemsidan. HTML användes för att skapa strukturen på hemsidan, var de olika blocken ska ligga osv. CSS var till för att bestämma utseendet, hur bilderna och texterna skulle utformas definerades där. JavaScript användes för att göra hemsidan dynamisk, som att när musen förs över objekten i listorna ändras färgen på texten på objektet. PHP och MySQL är språk som används vid arbete med databaser, som i detta fall handlade om LEGO. ",
            subtitle: "Hemsida från grundkurs i webbutveckling",
            color: "#3BC0C3",
            source: ["././projects/pictures/lego/1.png", "././projects/pictures/lego/2.png", "././projects/pictures/lego/3.png", "././projects/pictures/lego/4.png"],
            type: "pictures",
            year: 1
        },
        {
            title: "SPH fluidsimulering",
            description: "Projektet är en simulering av en fluid i 2 dimensioner. Tekniken som används kallas Smoothed Particle Hydrodynamics, det innebär att fluiden ses som partiklar som rör sig över ett rutnät. Partiklarna påverkar varandra och väggarna med olika krafter och utifrån rutnätet beräknas varje partikels nästa position och tillsammans rör sig partiklarna som en fluid. Webbapplikationen är egentligen ett sidoprojekt utifrån ett projekt som är gjort i C++/OpenGL till kursen Modelleringsprojekt. ",
            subtitle: "Webbaserad simulering av en fluid",
            color: "#3BC0C3",
            source: "././projects/webb/sph_fluid/app",
            type: "webb",
            year: 3
        },
        {
            title: "A glance at happiness",
            description: "Projektgruppen bestod av 5 medieteknikstudenter från årskurs 1. Projektet är en del av kursen Digitala Medier. Fokus för A Glance At Happiness låg på att under den korta tiden som filmen utspelar sig ändå lyckas skapa en känslomässig kontakt mellan tittaren och huvudpersonen Bop. Tanken var att åskådaren skulle kunna känna någon slags empati med Bop, som stöter på motgång efter motgång. En av de större utmaningarna var att lyckas förmedla känslor, då Bop varken pratar eller gör ansiktsuttryck. Detta löstes bland annat genom att arbeta med ett tydligt kroppsspråk. Filmen skapades bland annat av 3D-motiontracking med programmet 'boujou' och simulering med 'endorphin'. Data från dessa exporterades sedan till modelering- och animeringsprogrammet 'Cinema4D' där karaktären modelerades och animerades mot filmklippen som bakgrund. Sedan ljussattes scenerna och exporterades för klippning och redigering i 'Adobe After effects'. I princip allt ljud är pålagt efteråt och musiken är skriven av oss.",
            subtitle: "Animerad film från introduktionskurs",
            color: "#3BC0C3",
            source: "././projects/movies/a_glance.mp4",
            type: "video",
            year: 1
        },
        {
            title: "Isande diskant",
            description: "Isande Diskant är ett kortfilm som utspelar sig i ett samhälle där musik klassas som, och är, en olaglig och farlig drog samt ett kompisgängs möte med ett missbruk. Filmen är gjord i kursen Digitala Medier.",
            subtitle: "Spelfilm från introduktionskurs",
            color: "#B0B6BA",
            source: "././projects/movies/isande_diskant.mp4",
            type: "video",
            year: 1

        }, 
        {
            title: "Ladybug",
            description: "Ladybug skapades som kandidatarbete. Det är ett spel som utnyttjar ytan av flera Android-skärmar samtidigt. Alla spelare har sin egna telefon/surfplatta och skjuter bollar mot en surfplatta i mitten av alla spelare. För att surfplattan i mitten ska veta vart du som spelare är behöver du bara dra ditt finger från mittenplattan till din egen telefon/surfplatta.",
            subtitle: "Multiplayerspel för Android-enheter",
            color: "#F16161",
            source: "././projects/movies/ladybug.mp4",
            type: "video",
            year: 3
        }, 
        {
            title: "Mote.fm",
            description: "Mote.fm är ett projekt som startade i kursen Kommunikation och användargränssnitt. Det är en tjänst för att demokratisera Spotifys uppspelningskö. Vem som helst kan skapa en lista och bjuda in sina vänner att komma med låtförslag och rösta på de förslagen som redan finns. Låtarna med flest röster spelas sedan först. Syftet är att förenkla valet av musik då det är flera personer som lyssnar tillsammans, till exempel på fest eller på ett café. Efter kursen vann projektet två priser i C Awards – priset för bästa kreativ teknisk tillämpning och priset för bästa affärsidé. Efter detta har projektet vidareutvecklats från att ha varit en enkel prototyp till att använda ett robust system i kombination med Android och iOS-appar. För att utveckla projektet ur ett affärspespektiv och nå en större publik har universitetet och InnovationskontorEtt varit till stor hjälp.",
            subtitle: "Mote.fm är en demokratisk, portabel jukebox.",
            color: "#F0F0F1",
            source: "././projects/movies/mote_fm.mp4",
            type: "video",
            year: 2
        },
        {
            title: "Penguins Maze",
            description: "Penguins Maze är inspirerat av brädspelet Labyrint, och är ett multiplayer-spel där varje spelare kontrollerar varsin pingvin i en labyrint av isblock. Labyrinten går att påverka genom att sätta in nya isblock i sidorna av labyrinten, och det gäller för varje spelare att fånga fler fiskar än sina motståndare. Ett drag görs genom att först sätta in ett isblock och sedan klicka dit man vill gå med sin pingvin. Man kan välja att spela 'Classic mode' med endast en fisk i taget på planen, eller 'Fish feast' då hela planen är full av fiskar. Vidare kan man välja antal spelare (2-4), och det finns en kort 'Learn to play'-guide om man inte har spelat spelet tidigare. Gränssnittet är implementerat i Java, med hjälp av Swing biblioteket. Alla bilder och animationer är egenproducerade, precis som musiken. För ljudeffekterna har vi använt oss av samplingar hämtade från ett bibliotek, men redigerade för att passa till resten av spelet.",
            subtitle: "Multiplayerspel med fokus på användarvänlighet",
            color: "#F16161",
            source: "././projects/movies/penguins_maze.mp4",
            type: "video",
            year: 2
        },
        {
            title: "Splash",
            description: "",
            subtitle: "Multiplayerspel med .., ett kandidatarbete",
            color: "#3E4F5B",
            source: "././projects/movies/splash.mp4",
            type: "video",
            year: 3
        },
        {
            title: "Continuous",
            description: "Applikationen är ett interaktivt visualiseringsverktyg där matematiska koncept förklaras på ett enkelt sätt. Målgruppen är universitets studenter och är byggd på modern 3D grafik som körs i en webbläsare.",
            subtitle: "Webbaserat visualiseringsverktyg av matematiska koncept",
            color: "#3E4F5B",
            source: "././projects/webb/continuous",
            type: "webb",
            year: 3
        },
        {
            title: "Skurk",
            description: "",
            subtitle: "En interaktiv visualisering av brottsstatistik",
            color: "#F16161",
            source: "././projects/webb/skurk",
            type: "webb",
            year: 4
        },
        {
            title: "WebtherGL",
            description: "WebtherGL är en webbapplikation som visar SMHI:s väderprognoser i 3D och skapades i kursen 3D-datorgrafik.  Datan hämtas med hjälp av SMHI:s API separat och sparas i en databas, datan renderas sedan på hemsidan. Innehåller simuleringar för: moln, temperatur, nederbörd, vind, luftfukighet. Genom att klicka på platser på kartan kan man även få 10-dagarsprognoser.",
            subtitle: "Webbaserad 3D-visualisering av väderdata",
            color: "#3E4F5B",
            source: "././projects/webb/webther",
            type: "webb",
            year: 2
        },
        {
            title: "Procedural Planet Generation",
            description: "Användaren får bestämma ett antal parametrar och utifrån dessa ritas en realtids uppdaterad modell av en planet ut. Projektet är webbaserat och gjord i kursen Procedurella metoder för bilder.",
            subtitle: "Webbaserad realtidsrenderad planet",
            color: "#F16161",
            source: "././projects/webb/oscar/webgl",
            type: "webb",
            year: 4
        },
        {
            title: "DooVR",
            description: " ",
            subtitle: "",
            color: "#B0B6BA",
            source: "././projects/movies/doo.mp4",
            type: "video",
            year: 3
        },
        {
            title: "I see fire",
            description: "Det som ses på webbsidan är procedurellt genererad eld som är skrivit i WebGL och shaders i GLSL. Noise kan bli genererat och manipulerat på många olika sätt för att skapa visuella effekter. Det användas för att öka realismen i datorgrafik, detta då objekt inte har exempelvis en perfekt yta. Kan även användas för att slumvis ändra strukturen på moln eller eld.",
            subtitle: "Procedurell eld gjort i webGL och GLSL",
            color: "#B0B6BA",
            source: "././projects/webb/fire",
            type: "webb",
            year: 4
        },
        {
            title: "Polygon",
            description: "En polygongrafisk rymdvärld i webbläsaren, gjort i kursen 3D Datorgrafik. Där idén var att skapa en känsla snarare än ett spelmoment. Världen är byggd i WebGL med hjälp av javascriptsbiblioteket Three.js.",
            subtitle: "Interaktiv musikvideo i 3D",
            color: "#B0B6BA",
            source: "././projects/webb/polygon",
            type: "webb",
            year: 2
        },
        {
            title: "Bildmosaik",
            description: "Ett projekt som gjordes i grupp om två i kursen bilddatabaser. Givet en inbild ska programmet återskapa denna bild genom att ersätta områden i inbilden med olika databasbilder. Mosaikbilden som skapas kommer därmed innehålla en mängd olika databasbilder. På nära avstånd kommer varje enskild databasbild att synas men på ett längre avstånd kommer mosaikbilden i sin helhet att efterlikna orginalbilden. Analysera bilder för att hitta färg, viktiga områden och sen hitta bästa matchning i databasen.",
            subtitle: "Applikationen skapar en mosaikbild som innehåller bilder från en databas",
            color: "#F0F0F1",
            source: ["././projects/pictures/mosaik/1.png", "././projects/pictures/mosaik/2.png", "././projects/pictures/mosaik/3.png"],
            type: "pictures",
            year: 4
        },
        {
            title: "Raytracing",
            description: "Ett projekt där ett program programmerades som simulerar hur ljus studsar i ett rum och renderar ut det som en bild. Projektet är gjort i kursen Advanced Global Illumination and Rendering.",
            subtitle: "Simulering av hur ljus studsar i ett rum",
            color: "#F0F0F1",
            source: ["././projects/pictures/ray/1.png", "././projects/pictures/ray/2.png"],
            type: "pictures",
            year: 4 
        },
        {
            title: "Visualizing Space Weather",
            description: "Exjobbaren programmerade delar i projektet Open Space på NASA tillsammans med Linköpings Universitet. Programmet ska kunna visa och flyga omkring i vårt universum i 3D med t.ex planeter, solstormar, stjärnor och rymdfarkoster.",
            subtitle: "Exjobb i sammarbete med NASA",
            color: "#F0F0F1",
            source: ["././projects/pictures/space/1.png", "././projects/pictures/space/2.png"],
            type: "pictures",
            year: 5 
        },
        {
            title: "",
            description: "",
            subtitle: "",
            color: "#B0B6BA",
            source: "././projects/movies/anton.mp4",
            type: "video",
            year: 5 
        }
        ];

        $scope.changeView = function(project) {

            $scope.show = !$scope.show;
            $scope.activeProject = project;
        }
        
        $scope.checkFullscreen = function() {
            return $scope.fullscreen == true;
        }

        $scope.getProjectsFromYear = function(year)
        {
            var tmpArray = [];
            for (var i = 0; i < $scope.projects.length; i++) {
                if($scope.projects[i].year == year)
                    tmpArray.push($scope.projects[i])
            };

            return tmpArray;
        }
    }
})();