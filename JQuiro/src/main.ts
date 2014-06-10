/// <reference path="./com/jquiro/progress_bar/jqprogressbar.ts" />
/// <reference path="./com/jquiro/base_component/jqelement.ts" />
/// <reference path="./com/jquiro/tree/JQTree.ts" />
/// <reference path="./com/jquiro/utilities/utils.ts" />
import pr = require('./com/jquiro/progress_bar/jqprogressbar');
import tr = require('./com/jquiro/tree/JQTree');
import el = require('./com/jquiro/base_component/JQElement');
import mdUtils = require('./com/jquiro/utilities/utils');

declare var io; 

var skiil1 = document.getElementById('skill1');
var skiil2 = document.getElementById('skill2');
var skiil3 = document.getElementById('skill3');

var DSABar = new pr.jqProgressBar(100, 'Data Structures and Algorithms');
var proDSA = new pr.jqProgress(DSABar);
proDSA.create(skiil1);

var ESABar = new pr.jqProgressBar(100, 'Engineering and software architecture');
var proESA = new pr.jqProgress(ESABar);
proESA.create(skiil2);

var JavaBar = new pr.jqProgressBar(100, 'Java');
var proJava = new pr.jqProgress(JavaBar);
proJava.create(skiil1);

var PHPBar = new pr.jqProgressBar(100, 'PHP');
var proPHP = new pr.jqProgress(PHPBar);
proPHP.create(skiil2);

var jsBar = new pr.jqProgressBar(100, 'JavaScript');
var projs = new pr.jqProgress(jsBar);
projs.create(skiil1);

var MySqlBar = new pr.jqProgressBar(100, 'MySql');
var proMySql = new pr.jqProgress(MySqlBar);
proMySql.create(skiil2);

var Html5Bar = new pr.jqProgressBar(100, 'HTML 5');
var proHtml5 = new pr.jqProgress(Html5Bar);
proHtml5.create(skiil1);

var Cs33Bar = new pr.jqProgressBar(100, 'CSS 3');
var proCs33 = new pr.jqProgress(Cs33Bar);
proCs33.create(skiil2);




var skillsTree = new tr.jqTree();

var skillsBranch = new tr.jqBranch('Others Skills');

var mcsLeaf = new tr.jqLeaf('');
var MFCSBar = new pr.jqProgressBar(75, 'Mathematics for Computer Science');
var proMFCS = new pr.jqProgress(MFCSBar);


var nodeLeaf = new tr.jqLeaf('');
var NodeBar = new pr.jqProgressBar(65, 'Node Js');
var proNode = new pr.jqProgress(NodeBar);

var MongoLeaf = new tr.jqLeaf('');
var MongoBar = new pr.jqProgressBar(55, 'Mongo Db');
var proMongo = new pr.jqProgress(MongoBar);

var phoneLeaf = new tr.jqLeaf('');
var PhoneBar = new pr.jqProgressBar(80, 'PhoneGap');
var proPhone = new pr.jqProgress(PhoneBar);

var clLeaf = new tr.jqLeaf('');
var clBar = new pr.jqProgressBar(65, 'c#');
var procl = new pr.jqProgress(clBar);

var umlLeaf = new tr.jqLeaf('');
var UMLBar = new pr.jqProgressBar(100, 'UML');
var proUML = new pr.jqProgress(UMLBar);

var neoLeaf = new tr.jqLeaf('');
var NeoBar = new pr.jqProgressBar(10, 'Neo4j');
var proNeo = new pr.jqProgress(NeoBar);


skillsBranch.addLeaf(mcsLeaf);
skillsBranch.addLeaf(nodeLeaf);
skillsBranch.addLeaf(MongoLeaf);
skillsBranch.addLeaf(phoneLeaf);
skillsBranch.addLeaf(clLeaf);
skillsBranch.addLeaf(umlLeaf);
skillsBranch.addLeaf(neoLeaf);

skillsTree.addBranch(skillsBranch);
skillsTree.create(skiil3);

skillsBranch.getBranch().addEvent(el.jqEvent.CLICK, (e) => {

    if (skillsBranch.isOpen()) {

        proMFCS.create(document.getElementById(mcsLeaf.getLeaf().getId()));
        proNode.create(document.getElementById(nodeLeaf.getLeaf().getId()));
        proMongo.create(document.getElementById(MongoLeaf.getLeaf().getId()));
        proPhone.create(document.getElementById(phoneLeaf.getLeaf().getId()));
        procl.create(document.getElementById(clLeaf.getLeaf().getId()));
        proUML.create(document.getElementById(umlLeaf.getLeaf().getId()));
        proNeo.create(document.getElementById(neoLeaf.getLeaf().getId()));

    } else {

        MFCSBar.clear();
        NodeBar.clear();
        MongoBar.clear();
        PhoneBar.clear();
        clBar.clear();
        UMLBar.clear();
        NeoBar.clear();
 
    }
});


 



var educationTreeId = document.getElementById('education');

var educationTree = new tr.jqTree();

var educationBranch = new tr.jqBranch('Education');

/*****PRIMARIA/BACHILLER******/
var primaryBranch = new tr.jqBranch('primary and  high school');
var primaryAgeBranch = new tr.jqBranch('1995-2005');

var schoolPrimaryLeaf = new tr.jqLeaf('Escuela sta Teresita (1 - 5)');
var schoolSecLaef = new tr.jqLeaf('Liceo San Pablo (6 - 9)');
var schoolSec2Leaf = new tr.jqLeaf('I.E Juan De Dios Cock (10 - 11)');

primaryAgeBranch.addLeaf(schoolPrimaryLeaf);
primaryAgeBranch.addLeaf(schoolSecLaef);
primaryAgeBranch.addLeaf(schoolSec2Leaf);

primaryBranch.addBranch(primaryAgeBranch);


/****************CURSOS*********************/


//Cursos por internet
var curBranch = new tr.jqBranch('Courses');
var curInternetBranch = new tr.jqBranch('Others Courses');
var curInternetYearBranch = new tr.jqBranch('2007 - Now');

var cIntHtmlLeaf = new tr.jqLeaf('Html');
var cIntCssLeaf = new tr.jqLeaf('Css');
var cIntFlashLeaf = new tr.jqLeaf('Flash');
var cIntActionSLeaf = new tr.jqLeaf('ActionScript');
var cIntJavaSLeaf = new tr.jqLeaf('JavaScript');
var cIntJQueryLeaf = new tr.jqLeaf('Jquery');
var cIntJavaLeaf = new tr.jqLeaf('Java');
var cIntVisualBLeaf = new tr.jqLeaf('VisualBasic');
var cIntSqlServerLeaf = new tr.jqLeaf('SqlServer');
var cIntMySqlLeaf = new tr.jqLeaf('MySql');
var cIntPhpLeaf = new tr.jqLeaf('Php');
var cIntCLeaf = new tr.jqLeaf('C#');
var cIntLPLeaf = new tr.jqLeaf('Data Structures and Algorithms');
var cIntUmlLeaf = new tr.jqLeaf('Engineering and software architecture');
var cIntMPI = new tr.jqLeaf('Mathematics for Computer Science');
var cIntMongoLeaf = new tr.jqLeaf('MongoDb');
var cIntNodeLeaf = new tr.jqLeaf('Nodejs');
var cIntPhoneGLeaf = new tr.jqLeaf('PhoneGap');
var cIntTsLeaf = new tr.jqLeaf('TypeScript');
var cIntNeoLeaf = new tr.jqLeaf('Neo4j');

curInternetYearBranch.addLeaf(cIntLPLeaf);
curInternetYearBranch.addLeaf(cIntUmlLeaf);
curInternetYearBranch.addLeaf(cIntMPI);
curInternetYearBranch.addLeaf(cIntNeoLeaf);
curInternetYearBranch.addLeaf(cIntMongoLeaf);
curInternetYearBranch.addLeaf(cIntNodeLeaf);
curInternetYearBranch.addLeaf(cIntPhoneGLeaf);
curInternetYearBranch.addLeaf(cIntTsLeaf);
curInternetYearBranch.addLeaf(cIntHtmlLeaf);
curInternetYearBranch.addLeaf(cIntCssLeaf);
curInternetYearBranch.addLeaf(cIntFlashLeaf);
curInternetYearBranch.addLeaf(cIntActionSLeaf);
curInternetYearBranch.addLeaf(cIntJavaSLeaf);
curInternetYearBranch.addLeaf(cIntJQueryLeaf);
curInternetYearBranch.addLeaf(cIntJavaLeaf);
curInternetYearBranch.addLeaf(cIntVisualBLeaf);
curInternetYearBranch.addLeaf(cIntSqlServerLeaf);
curInternetYearBranch.addLeaf(cIntMySqlLeaf);
curInternetYearBranch.addLeaf(cIntPhpLeaf);
curInternetYearBranch.addLeaf(cIntCLeaf);

curInternetBranch.addBranch(curInternetYearBranch);


//cursos sena
var senaBranch = new tr.jqBranch('SENA');
var senaYear11Branch = new tr.jqBranch('2011');

var senaAppDataLeaf = new tr.jqLeaf('Database applications and java');
var senaNetWorksLeaf = new tr.jqLeaf('Computer networks');
var senaMultiLeaf = new tr.jqLeaf('Multimedia with Java');
var senaSqlLeaf = new tr.jqLeaf('Database design sql');
var senaNcsSLeaf = new tr.jqLeaf('Networking and Computer Security');

senaYear11Branch.addLeaf(senaAppDataLeaf);
senaYear11Branch.addLeaf(senaNetWorksLeaf);
senaYear11Branch.addLeaf(senaMultiLeaf);
senaYear11Branch.addLeaf(senaSqlLeaf);
senaYear11Branch.addLeaf(senaNcsSLeaf);

senaBranch.addBranch(senaYear11Branch);

//curso MVA (Microsoft Virtual Academy Learning)
var mvaBranch = new tr.jqBranch('MVA (Microsoft Virtual Academy Learning)');
var mvaYearBranch = new tr.jqBranch('2012');

var html5MvaLeaf = new tr.jqLeaf('HTML 5 advanced');
var css3MvaLeaf = new tr.jqLeaf('Css 3 advanced');
var jsMvaLeaf = new tr.jqLeaf('JavaScript advanced');
var winMva = new tr.jqLeaf('Apps for Win 8 with HTML5 - JS - CSS3');

mvaYearBranch.addLeaf(html5MvaLeaf);
mvaYearBranch.addLeaf(css3MvaLeaf);
mvaYearBranch.addLeaf(jsMvaLeaf);
mvaYearBranch.addLeaf(winMva);

mvaBranch.addBranch(mvaYearBranch);

//Universidad
var UniversityBranch = new tr.jqBranch('University');
var itmBranch = new tr.jqBranch('ITM');
var itmEngineerELeaf = new tr.jqBranch('Engineer');
var itmYearBranch = new tr.jqBranch('2009-2014');
var itmSystemsELeaf = new tr.jqLeaf('Systems engineer');

itmEngineerELeaf.addBranch(itmYearBranch);
itmYearBranch.addLeaf(itmSystemsELeaf);
itmBranch.addBranch(itmEngineerELeaf);

//Postgraduate Diploma
var diplomaBranch = new tr.jqBranch('Postgraduate Diploma');
var diplomaYearBranch = new tr.jqBranch('2013');
var diplomaVsLeaf = new tr.jqLeaf('Development of software and mobile  with .Net');

diplomaYearBranch.addLeaf(diplomaVsLeaf);
diplomaBranch.addBranch(diplomaYearBranch);
itmBranch.addBranch(diplomaBranch);

//Certificaciones
var certifcationBranch = new tr.jqBranch('Certifications');
var certificationYear = new tr.jqBranch('2013');
var certificactionMCSDBranch = new tr.jqBranch('MCSD: Web apps Certification');
var certificactionProHtml = new tr.jqLeaf('480 Programming in HTML5 with JavaScript and CSS3');

certificactionMCSDBranch.addLeaf(certificactionProHtml);
certificationYear.addBranch(certificactionMCSDBranch);


//nodos principales
UniversityBranch.addBranch(itmBranch);

certifcationBranch.addBranch(certificationYear);

curBranch.addBranch(mvaBranch);
curBranch.addBranch(senaBranch);
curBranch.addBranch(curInternetBranch);

educationBranch.addBranch(UniversityBranch);
educationBranch.addBranch(certifcationBranch);
educationBranch.addBranch(curBranch);
educationBranch.addBranch(primaryBranch);


educationTree.addBranch(educationBranch);

//arbol
educationTree.create(educationTreeId);

educationTree.finalize();

//WORKS
var worksTreeId = document.getElementById('works');

var worksTree = new tr.jqTree();

var worksBranch = new tr.jqBranch('Works');
/****freelance**/
var freeLanceBranch = new tr.jqBranch('Freelance [ 4 years ]');
var freeLanceYearBranch = new tr.jqBranch('2007 - 2011');
var descFreeLanceLeaf = new tr.jqLeaf('Cuando era un aficionado tuve la suerte de trabajar para un profesor,haciendo blogs y luego un proyecto de una página de cursos de ingles, lo que me dio experiencia en java, html, javascript, mysql, css.');

freeLanceYearBranch.addLeaf(descFreeLanceLeaf);
freeLanceBranch.addBranch(freeLanceYearBranch);

/****SOLFTCOL SA. ****/
var softColBranch = new tr.jqBranch('SoftCol S.A [ 1 year ]');
var softCOlYearBranch = new tr.jqBranch('2011 - 2012');
var descSoftColLeaf = new tr.jqLeaf('Empresa start-up donde realice mis practicas universitarias por 6 meses, luego trabaje 6 meses más como prestador de servicios; funciones como programador con Java, HTML, JavaScript, Php, MySql, Css.');

softCOlYearBranch.addLeaf(descSoftColLeaf);
softColBranch.addBranch(softCOlYearBranch);

/** EMTELCO S.A **/
var emtBranch = new tr.jqBranch('Emtelco S.A [1 Year ]');
var emtYearBranch = new tr.jqBranch('2012 - 2013');
var descEmtLeaf = new tr.jqLeaf('Empresa de telecomunicaciones y contact center con el modelo de negocio (BPO), donde mis funciones era desarrollar software para une y comfama principalmente (Java, asp.net,c#,php), tambien dar soporte tecnico a los usuarios finales.');

emtYearBranch.addLeaf(descEmtLeaf);
emtBranch.addBranch(emtYearBranch);

/** GOGOPOINT S.A **/
var gogoBranch = new tr.jqBranch('GogoPoint S.A [1 Year ]');
var gogoYearBranch = new tr.jqBranch('2013 - 2014');
var descgogoLeaf = new tr.jqLeaf('Empresa start-up,donde me inicie en el mundo de aplicaciones y tecnologias en la nube, funciones de arquitecto y programdor senior de software, con Php, mySql,Html 5, JavaScript y Css 3.');

gogoYearBranch.addLeaf(descgogoLeaf);
gogoBranch.addBranch(gogoYearBranch);

/** SLI S.A **/
var sliBranch = new tr.jqBranch('LoTrading S.A [ Continuing ]');
var sliYearBranch = new tr.jqBranch('2014 - Today');
var descsliLeaf = new tr.jqLeaf('<a href="http://www.lotrading.com/en/contact_admin.cfm" target="_blank">LoTrading S.A</a> es una empresa de servicios logisticos internacionales, compras industriales y materias primas. Programador senior y arquitecto de software con Java, MySql, HTML 5, JavaScript y Css 3.');

sliYearBranch.addLeaf(descsliLeaf);
sliBranch.addBranch(sliYearBranch);

/***nodos principales*/
worksBranch.addBranch(sliBranch);
worksBranch.addBranch(gogoBranch);
worksBranch.addBranch(emtBranch);
worksBranch.addBranch(softColBranch);
worksBranch.addBranch(freeLanceBranch);

worksTree.addBranch(worksBranch);

worksTree.create(worksTreeId);
worksTree.finalize();

/*****Other functions*****/

var print = document.getElementById('print');

var link_print = document.getElementById('link_print');

link_print.addEventListener('click', function () {


    window.open('print').print();    


});



var socket = io.connect('http://localhost');
socket.on('loadIndex', function (data) {
    console.log(data);

});













