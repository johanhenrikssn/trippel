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
            source: "././projects/movies/presentationsfilm.mp4",
            type: "video"

        };

        $scope.projects = [
        {
            title: "Medusa 3D-scannerbås",
            domain: "Datorgrafik",
            description: "Medusa är ett projekt som utfördes i kursen Medietekniskt kandidatarbete. Ett utvecklingsteam bestående av sju personer fick i uppgift att utveckla ett mjukvarusystem för ett 3D-scannerbås för att skapa en modell av användaren i färg. Båset skulle innehålla flera djupkameror för att scanna användaren. Den erhållna punktdatan skulle användas för att skapa en solid tredimensionell modell. Användaren skulle även ha möjlighet att interagera med systemet via ett enkelt gränssnitt. Gränssnittet skulle ha som användningsområde att starta scanning, spara- och kasta modell och göra om scanningsprocessen.",
            color: "#3E4F5B",
            thumbnail: "url(././projects/movies/medusa.png)",
            source: "././projects/movies/medusa.mp4",
            type: "video",
            year: 3,
            course: "Kandidatarbete"
        },
        {
            title: "Mr Carrot",
            domain: "Datorgrafik, Spel",
            description: "Spelet går i princip ut på att rädda sina morotskompisar från maskarna som anfaller. Ett stort fokus låg på det grafiska och spelet gjordes i grafikmotorn Ogre 3D. Spelet programmerades sedan i C++. Kursen som spelet är gjort i heter 3D Datorgrafik. ",
            color: "#3E4F5B",
            thumbnail: "url(././projects/movies/mr_carrot.png)",
            source: "././projects/movies/mr_carrot.mp4",
            type: "video",
            year: 2,
            course: "3D-Datorgrafik"
        },
        {
            title: "Legohemsida",
            domain: "Användargränssnitt, Webb",
            description: "Projektet var att skapa en LEGO-hemsida som skulle vara kopplad till en databas. Hemsidan skulle fungera som ett slags uppslagsverk för LEGO-fantaster där de kunde kolla upp olika legosatser och vilka bitar de olika satserna innehåller. Flera programmeringsspråk skulle användas, HTML, CSS, PHP, JavaScript och MySQL för att skapa hemsidan. HTML användes för att skapa strukturen på hemsidan, var de olika blocken ska ligga osv. CSS var till för att bestämma utseendet, hur bilderna och texterna skulle utformas definerades där. JavaScript användes för att göra hemsidan dynamisk, som att när musen förs över objekten i listorna ändras färgen på texten på objektet. PHP och MySQL är språk som används vid arbete med databaser, som i detta fall handlade om LEGO. ",
            color: "#3BC0C3",
            thumbnail: "url(././projects/pictures/lego/thumb.jpg)",
            source: ["././projects/pictures/lego/1.png", "././projects/pictures/lego/2.png", "././projects/pictures/lego/3.png", "././projects/pictures/lego/4.png"],
            type: "pictures",
            year: 1,
            course: "Elektronisk publicering"
        },
        {
            title: "SPH fluidsimulering",
            domain: "Datorgrafik, Simulering",
            description: "Projektet är en simulering av en fluid i 2 dimensioner. Tekniken som används kallas Smoothed Particle Hydrodynamics, det innebär att fluiden ses som partiklar som rör sig över ett rutnät. Partiklarna påverkar varandra och väggarna med olika krafter och utifrån rutnätet beräknas varje partikels nästa position och tillsammans rör sig partiklarna som en fluid. Webbapplikationen är egentligen ett sidoprojekt utifrån ett projekt som är gjort i C++/OpenGL till kursen Modelleringsprojekt. ",
            color: "#3BC0C3",
            thumbnail: "url(././projects/webb/sph_fluid/thumb.png)",
            source: "././projects/webb/sph_fluid/app",
            type: "webb",
            year: 3,
            course: "Modellering och simulering"
        },
        {
            title: "A glance at happiness",
            domain: "Film, Specialeffekter",
            description: "Kursen digitala medier är en kurs som går tidigt under utbildningen, och studenterna ges där möjlighet att prova på många områden som faller in under medieteknik. Fokus för A Glance At Happiness låg på att under den korta tiden som filmen utspelar sig ändå lyckas skapa en känslomässig kontakt mellan tittaren och huvudpersonen Bop. En av de större utmaningarna var att lyckas förmedla känslor, då Bop varken pratar eller gör ansiktsuttryck. Detta löstes bland annat genom att arbeta med ett tydligt kroppsspråk. Filmen skapades bland annat av 3D-motiontracking med programmet 'boujou' och simulering med 'endorphin'. Data från dessa exporterades sedan till modelering- och animeringsprogrammet 'Cinema4D' där karaktären modelerades och animerades mot filmklippen som bakgrund. Sedan ljussattes scenerna och exporterades för klippning och redigering i 'Adobe After effects'. I princip allt ljud är pålagt efteråt och musiken är skriven av medlemmarna i gruppen. ",
            color: "#3BC0C3",
            thumbnail: "url(././projects/movies/a_glance.png)",
            source: "././projects/movies/a_glance.mp4",
            type: "video",
            year: 1,
            course: "Digitala medier"
        },
        {
            title: "Isande diskant",
            domain: "Film",
            description: "Isande Diskant är ett kortfilm som utspelar sig i ett samhälle där musik klassas som, och är, en olaglig och farlig drog samt ett kompisgängs möte med ett missbruk. Filmen är gjord i kursen Digitala Medier.",
            color: "#B0B6BA",
            thumbnail: "url(././projects/movies/isande_diskant.png)",
            source: "././projects/movies/isande_diskant.mp4",
            type: "video",
            year: 1,
            course: "Digitala medier"
        }, 
        {
            title: "Ladybug",
            domain: "Spel, App",
            description: "Ladybug skapades som kandidatarbete. Det är ett spel som utnyttjar ytan av flera Android-skärmar samtidigt. Alla spelare har sin egna telefon/surfplatta och skjuter bollar mot en surfplatta i mitten av alla spelare. För att surfplattan i mitten ska veta vart du som spelare är behöver du bara dra ditt finger från mittenplattan till din egen telefon/surfplatta.",
            color: "#F16161",
            thumbnail: "url(././projects/movies/ladybug.png)",
            source: "././projects/movies/ladybug.mp4",
            type: "video",
            year: 3,
            course: "Kandidatarbete"
        }, 
        {
            title: "Mote.fm",
            domain: "Användargränsnitt, App",
            description: "Mote.fm är ett projekt som startade i kursen Kommunikation och användargränssnitt. Det är en tjänst för att demokratisera Spotifys uppspelningskö. Vem som helst kan skapa en lista och bjuda in sina vänner att komma med låtförslag och rösta på de förslagen som redan finns. Låtarna med flest röster spelas sedan först. Syftet är att förenkla valet av musik då det är flera personer som lyssnar tillsammans, till exempel på fest eller på ett café. Efter kursen vann projektet två priser i C Awards – priset för bästa kreativ teknisk tillämpning och priset för bästa affärsidé. Efter detta har projektet vidareutvecklats från att ha varit en enkel prototyp till att använda ett robust system i kombination med Android och iOS-appar. För att utveckla projektet ur ett affärspespektiv och nå en större publik har universitetet och InnovationskontorEtt varit till stor hjälp.",
            color: "#F0F0F1",
            thumbnail: "url(././projects/movies/mote_fm.png)",
            source: "././projects/movies/mote_fm.mp4",
            type: "video",
            year: 2,
            course: "Kommunikation och användargränssnitt"
        },
        {
            title: "Penguins Maze",
            domain: "Användargränsnitt, Spel",
            description: "Penguins Maze är inspirerat av brädspelet Labyrint, och är ett multiplayer-spel där varje spelare kontrollerar varsin pingvin i en labyrint av isblock. Labyrinten går att påverka genom att sätta in nya isblock i sidorna av labyrinten, och det gäller för varje spelare att fånga fler fiskar än sina motståndare. Ett drag görs genom att först sätta in ett isblock och sedan klicka dit man vill gå med sin pingvin. Man kan välja att spela 'Classic mode' med endast en fisk i taget på planen, eller 'Fish feast' då hela planen är full av fiskar. Vidare kan man välja antal spelare (2-4), och det finns en kort 'Learn to play'-guide om man inte har spelat spelet tidigare. Gränssnittet är implementerat i Java, med hjälp av Swing biblioteket. Alla bilder och animationer är egenproducerade, precis som musiken. För ljudeffekterna har vi använt oss av samplingar hämtade från ett bibliotek, men redigerade för att passa till resten av spelet.",
            color: "#F16161",
            thumbnail: "url(././projects/movies/penguins_maze.png)",
            source: "././projects/movies/penguins_maze.mp4",
            type: "video",
            year: 2,
            course: "Kommunikation och användargränssnitt"
        },
        {
            title: "Splash",
            domain: "App, Spel",
            description: "",
            color: "#3E4F5B",
            thumbnail: "url(././projects/movies/splash.png)",
            source: "././projects/movies/splash.mp4",
            type: "video",
            year: 3,
            course: "Kandidatarbete"
        },
        {
            title: "Continuous",
            domain: "Visualisering, Webb",
            description: "Applikationen är ett interaktivt visualiseringsverktyg där matematiska koncept förklaras på ett enkelt sätt. Målgruppen är universitets studenter och är byggd på modern 3D grafik som körs i en webbläsare.",
            color: "#3E4F5B",
            thumbnail: "url(././projects/webb/continuous/thumb.png)",
            source: "././projects/webb/continuous",
            type: "webb",
            year: 3,
            course: "3D-Datorgrafik"
        },
        {
            title: "Skurk",
            domain: "Visualisering, Webb",
            description: "Genom att kombinera tre olika datakällor med brottsstatistik skapades en interaktiv visualisering av statistiken över landet. Konceptet Data mining användes för att hitta mönster och samband i datamängden. Med hjälp av dessa mönster kunde på så vis brottsprofiler för olika kommuner och län tas fram. Den interaktiva applikationen visualiserade sedan dessa slutsatser med hjälp av diverse webbtekniker, bland annat javascriptsbiblioteket D3js och Bootstrap. ",
            color: "#F16161",
            thumbnail: "url(././projects/webb/skurk/thumb.png)",
            source: "././projects/webb/skurk",
            type: "webb",
            year: 4,
            course: "Digitala medier"
        },
        {
            title: "WebtherGL",
            domain: "Datorgrafik, Webb",
            description: "WebtherGL är en webbapplikation som visar SMHI:s väderprognoser i 3D och skapades i kursen 3D-datorgrafik.  Datan hämtas med hjälp av SMHI:s API separat och sparas i en databas, datan renderas sedan på hemsidan. Innehåller simuleringar för: moln, temperatur, nederbörd, vind, luftfukighet. Genom att klicka på platser på kartan kan man även få 10-dagarsprognoser.",
            color: "#3E4F5B",
            thumbnail: "url(././projects/webb/webther/thumb.png)",
            source: "././projects/webb/webther",
            type: "webb",
            year: 2,
            course: "3D-Datorgrafik"
        },
        {
            title: "Procedural Planet Generation",
            domain: "Datorgrafik, Webb",
            description: "Användaren får bestämma ett antal parametrar och utifrån dessa ritas en realtids uppdaterad modell av en planet ut. Projektet är webbaserat och gjord i kursen Procedurella metoder för bilder.",
            color: "#F16161",
            thumbnail: "url(././projects/webb/oscar/webgl/thumb.png)",
            source: "././projects/webb/oscar/webgl",
            type: "webb",
            year: 4,
            course: "Procedurella metoder för bilder"
        },
        {
            title: "DooVR",
            domain: "Virtual reality",
            description: " ",
            color: "#B0B6BA",
            thumbnail: "url(././projects/movies/doo.png)",
            source: "././projects/movies/doo.mp4",
            type: "video",
            year: 3,
            course: "Kandidatarbete"
        },
        {
            title: "I see fire",
            domain: "Datorgrafik, Specialeffekter, Webb",
            description: "Det som ses på webbsidan är procedurellt genererad eld som är skrivit i WebGL och shaders i GLSL. Noise kan bli genererat och manipulerat på många olika sätt för att skapa visuella effekter. Det användas för att öka realismen i datorgrafik, detta då objekt inte har exempelvis en perfekt yta. Kan även användas för att slumvis ändra strukturen på moln eller eld.",
            color: "#B0B6BA",
            thumbnail: "url(././projects/webb/fire/thumb.png)",
            source: "././projects/webb/fire",
            type: "webb",
            year: 4,
            course: "Procedurella metoder för bilder"
        },
        {
            title: "Bildmosaik",
            domain: "Bildbehandling",
            description: "Ett projekt som gjordes i grupp om två i kursen bilddatabaser. Givet en inbild ska programmet återskapa denna bild genom att ersätta områden i inbilden med olika databasbilder. Mosaikbilden som skapas kommer därmed innehålla en mängd olika databasbilder. På nära avstånd kommer varje enskild databasbild att synas men på ett längre avstånd kommer mosaikbilden i sin helhet att efterlikna orginalbilden. Analysera bilder för att hitta färg, viktiga områden och sen hitta bästa matchning i databasen.",
            color: "#F0F0F1",
            thumbnail: "url(././projects/pictures/mosaik/thumb.png)",
            source: ["././projects/pictures/mosaik/1.png", "././projects/pictures/mosaik/2.png", "././projects/pictures/mosaik/3.png"],
            type: "pictures",
            year: 4,
            course: "Bilddatabaser"
        },
        {
            title: "Raytracing",
            domain: "Datorgrafik",
            description: "Ett projekt där ett program programmerades som simulerar hur ljus studsar i ett rum och renderar ut det som en bild. Projektet är gjort i kursen Advanced Global Illumination and Rendering.",
            color: "#F0F0F1",
            thumbnail: "url(././projects/pictures/ray/thumb.png)",
            source: ["././projects/pictures/ray/1.png", "././projects/pictures/ray/2.png"],
            type: "pictures",
            year: 4,
            course: "Advanced Global Illumination and Rendering"
        },
        {
            title: "Visualizing Space Weather",
            domain: "Datorgrafik, Visualisering",
            description: "Exjobbaren programmerade delar i projektet Open Space på NASA tillsammans med Linköpings Universitet. Programmet ska kunna visa och flyga omkring i vårt universum i 3D med t.ex planeter, solstormar, stjärnor och rymdfarkoster.",
            color: "#F0F0F1",
            thumbnail: "url(././projects/pictures/space/thumb.png)",
            source: ["././projects/pictures/space/1.png", "././projects/pictures/space/2.png"],
            type: "pictures",
            year: 5,
            course: "Examensarbete "
        },
        {
            title: "Mammografibilder",
            description: "Det här exjobbet innefattar en utveckling och implementering av en algoritm som detekterar siliconinplantat i mammografibilder. Exjobbet utfördes åt Sectra AB, och syftet med projektet är att ha möjlighet att gömma implantaten då de kan vara störande vid bedömning av bröstcancer. De sista bilderna i bildspelet visar det slutgiltiga resultatet och de övriga bilderna visar andra detekteringsmetoder.",
            color: "#F0F0F1",
            thumbnail: "url(././projects/pictures/bröst/thumb.png)",
            source: ["././projects/pictures/bröst/1.png", "././projects/pictures/bröst/2.png", "././projects/pictures/bröst/3.png", "././projects/pictures/bröst/4.png"],
            type: "pictures",
            year: 5 
        },
        {
            title: "Anton",
            domain: "Datorgrafik, Visualisering",
            color: "#B0B6BA",
            thumbnail: "url(././projects/movies/anton.png)",
            source: "././projects/movies/anton.mp4",
            type: "video",
            year: 5,
            course: "Digitala medier "
        },
        {
            title: "Rob's Vengence",
            domain: "Specialeffekter",
            description: "Rob's Vengence är en 3D-animerad kortfilm som skapades i kursen Digitala medier. Idén bestod av att skapa en kort film på cirka en minut så att fokus kunde läggas på att skapa detaljerade omgivningar, modeller, animationer och ljussättning. Resultatet belönades med priset ”Bästa visuella effekt i film & rörlig bild” på C Awards-galan 2014.",
            color: "#B0B6BA",
            thumbnail: "url(././projects/movies/robs_vengeance.png)",
            source: "././projects/movies/robs_vengeance.mp4",
            type: "video",
            year: 1,
            course: "Digitala medier"
        },
        {
            title: "Stereoscopic Snow Simulation",
            domain: "Datorgrafik",
            description: "Projektets grundidé handlade om att visualisera olika typer av partikelsystem i domteatern på Visualiseringscenter C. Initialt lades fokus på snösimulering och tanken var att försöka arbeta på ett sådant sätt att vidareutveckling skulle vara möjligt. En tänkt riktning var att skapa olika typer av partikelsystem för att representera de olika årstiderna och visa upp ett år genom att växla simulering. Den färdiga produkten är ett partikelsystem anpassat för att visas i domen, där olika fält kan appliceras för att simulera olika effekter. Vind, virvlar och även gravitation kan skapas och regleras via gränssnittet. Systemet är designat för att göra det enkelt att bygga vidare på och ger användaren möjligheten att själv bestämma hur simulationen ska se ut och bete sig. De programspråk som användes för att åstadkomma det är C++ och ett bibliotek som heter SGCT (Simple Graphics Cluster Toolkit). ",
            color: "#B0B6BA",
            thumbnail: "url(././projects/pictures/snömys/1.jpg)",
            source: ["././projects/pictures/snömys/1.jpg"],
            type: "pictures",
            year: 2,
            course: "3D-Datorgrafik"
        }
        ];

            $scope.changeView = function(project) {

            $scope.show = !$scope.show;
            $scope.activeProject = project;

            $scope.fullscreen.bool = false;
            
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
