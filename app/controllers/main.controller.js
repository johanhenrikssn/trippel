(function() {
    'use strict';

    angular
        .module('trippelApp')
        .controller('mainController', mainController);

    function mainController($scope) { 

    	$scope.activeProject;
        $scope.show = false;

        $scope.infofilm = {
            title: "Om medieteknik",
            description: "",
            subtitle: "Informationsfilm om medieteknik"
        };

    	$scope.projects = [
        {
    		title: "Medusa 3D-scannerbås",
    		description: "Medusa är ett projekt som utfördes i kursen Medietekniskt kandidatarbete. Ett utvecklingsteam bestående av sju personer fick i uppgift att utveckla ett mjukvarusystem för ett 3D-scannerbås för att skapa en modell av användaren i färg. Båset skulle innehålla flera djupkameror för att scanna användaren. Den erhållna punktdatan skulle användas för att skapa en solid tredimensionell modell. Användaren skulle även ha möjlighet att interagera med systemet via ett enkelt gränssnitt. Gränssnittet skulle ha som användningsområde att starta scanning, spara- och kasta modell och göra om scanningsprocessen.

            Kurs: Medietekniskt kandidatarbete",
            subtitle: "3D-scannerbås, ett kandidatarbete",
            color: "#3E4F5B",
            source: "../../movies/ladybug.mp4",
            year: 3
        },
        {
            title: "A glance at happiness",
            description: "Projektgruppen bestod av 5 medieteknikstudenter från årskurs 1. Projektet är en del av kursen Digitala Medier. Syftet med projektet var främst att studenterna skulle lära sig att arbeta och planera tillsammans i grupp. Ramarna för projektet är väldigt vida och studenterna har stora möjligheter att använda sin kreativitet för att skapa något inom valfritt medium.

            Kurs: Digitala Medier",
            subtitle: "Animerad film från introduktionskurs",
            color: "#3BC0C3",
            source: "../../movies/a_glance.mp4",
            year: 1
        },
        {
            title: "Isande diskant",
            description: "Isande Diskant är ett kortfilm som utspelar sig i ett samhälle där musik klassas som, och är, en olaglig och farlig drog samt ett kompisgängs möte med ett missbruk. Filmen är gjord i kursen Digitala Medier.

            Kurs: Digitala Medier",
            subtitle: "Spelfilm från introduktionskurs",
            color: "#B0B6BA",
            source: "../../movies/isande_diskant.mp4",
            year: 1

        }, 
        {
            title: "Ladybug",
            description: "Ladybug skapades som kandidatarbete. Det är ett spel som utnyttjar ytan av flera Android-skärmar samtidigt. Alla spelare har sin egna telefon/surfplatta och skjuter bollar mot en surfplatta i mitten av alla spelare. För att surfplattan i mitten ska veta vart du som spelare är behöver du bara dra ditt finger från mittenplattan till din egen telefon/surfplatta.

            Kurs: Medietekniskt kandidatarbete",
            subtitle: "Multiplayerspel för Android-enheter",
            color: "#F16161",
            source: "../../movies/ladybug.mp4",
            year: 3
        }, 
        {
            title: "Mote.fm",
            description: "Mote.fm är ett projekt som startade i kursen Kommunikation och användargränssnitt. Det är en tjänst för att demokratisera Spotifys uppspelningskö. Vem som helst kan skapa en lista och bjuda in sina vänner att komma med låtförslag och rösta på de förslagen som redan finns. Låtarna med flest röster spelas sedan först. Syftet är att förenkla valet av musik då det är flera personer som lyssnar tillsammans, till exempel på fest eller på ett café.

            Efter kursen vann projektet två priser i C Awards – priset för bästa kreativ teknisk tillämpning och priset för bästa affärsidé. Efter detta har projektet vidareutvecklats från att ha varit en enkel prototyp till att använda ett robust system i kombination med Android och iOS-appar. För att utveckla projektet ur ett affärspespektiv och nå en större publik har universitetet och InnovationskontorEtt varit till stor hjälp.

            Kurs: Kommunikation och användargränssnitt",
            subtitle: "Mote.fm är en demokratisk, portabel jukebox.",
            color: "#F0F0F1",
            source: "../../movies/mote_fm.mp4",
            year: 2
        },
        {
            title: "Penguins Maze",
            description: "Penguins Maze är inspirerat av brädspelet Labyrint, och är ett multiplayer-spel där varje spelare kontrollerar varsin pingvin i en labyrint av isblock. Labyrinten går att påverka genom att sätta in nya isblock i sidorna av labyrinten, och det gäller för varje spelare att fånga fler fiskar än sina motståndare. Ett drag görs genom att först sätta in ett isblock och sedan klicka dit man vill gå med sin pingvin. 

            Man kan välja att spela 'Classic mode' med endast en fisk i taget på planen, eller 'Fish feast' då hela planen är full av fiskar. Vidare kan man välja antal spelare (2-4), och det finns en kort 'Learn to play'-guide om man inte har spelat spelet tidigare. 

            Gränssnittet är implementerat i Java, med hjälp av Swing biblioteket. Alla bilder och animationer är egenproducerade, precis som musiken. För ljudeffekterna har vi använt oss av samplingar hämtade från ett bibliotek, men redigerade för att passa till resten av spelet.

            Mjukvara:
            Java / Eclipse 
            Bilder och ikoner / PhotoShop 
            Musik och ljudeffekter / Logic Pro 

            Kurs: Kommunikation och användargränssnitt",
            subtitle: "Multiplayerspel med fokus på användarvänlighet",
            color: "#F16161",
            source: "../../movies/penguins_maze.mp4",
            year: 2
        },
        {
            title: "Splash",
            description: " !!!!!!!!!!!!!!!!!!

            Kurs: Medietekniskt kandidatarbete",
            subtitle: "Multiplayerspel med ...., ett kandidatarbete",
            color: "#3E4F5B",
            source: "../../movies/splash.mp4",
            year: 3
        }
        ];

       

        $scope.changeView = function(project) {

            $scope.show = !$scope.show;
            $scope.activeProject = project;
        }

    }
})();