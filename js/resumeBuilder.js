
var bio = {
		"name": "Oliver Otto",
		"age": 36,
		"skills": [
				 "SAP Technologies (Gateway, HCP, HCC)",
				 "SAP Fiori", "SAP UI5","IOT","JAVA",
				 "ABAP",
				 "Java Script",
				 "ODATA"
		],
		"role": "IT Consultant",
		"contacts": {
				"mobile": "+49 176 80327683",
				"email": "oliver.angelin.otto(at)gmail.com",
				"github": "github.com/OliverOtto",
				"location": "Heidelberg, Germany"
		},
		"pictureURL": "images/portrait.png",
		"welcomeMessage": "IT professional with advanced knowledge in the field of SAP Solution Manager 7.1 (CRM WebUI, Abap OO), Android and a strong Java background",
		"display": function() {
			//var formattedSkills = HTMLskillsStart.replace("%data%", bio.skills);
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			var formattedGithub = HTMLemail.replace("%data%", bio.contacts.github);
			var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			var formattedContact = formattedEmail + formattedMobile + formattedGithub + formattedLocation;

			$("#header").prepend(formattedBioPic);
			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
			$("#header").append(formattedWelcomeMsg);
			$("#main").append(internationalizeButton);

			if (bio.skills.length > 0){
				$("#header").append(HTMLskillsStart);
				for (singleSkillIndex in bio.skills){
				 var formattedSkills = HTMLskills.replace("%data%", bio.skills[singleSkillIndex]);
				 $("#skills").append(formattedSkills);
				}
			}
	}


};

var work = {
		jobs: [
				{
					"employer": "Schneider-Neureither & Partner AG",
					"title": "Consultant",
					"dates": "Nov. 2012 - still running",
					"description": "Business landscape management consulting, Incident & service consulting, Change request management consulting",
					"location": "Heidelberg, Germany"
				},
				{
					"employer": "Delta Systemtechnik Horn GmbH",
					"title": "Java Developer",
					"dates": "Nov. 2010 - Okt. 2012",
					"description": "Android App development, JEE Server development, Participation in contract work, Coach for java / OO design patterns",
					"location": "Bruchsal, Germany"
				},
				{
					"employer": "Canon (Freelance)",
					"title": "Trade marketing promotor",
					"dates": "Apr. 2009 - Jan. 2013",
					"description": "Trade Marketing (instore / events / roadshows)",
					"location": "Krefeld, Germany"
				},
				{
					"employer": "Chair of Practical Computer Sciences IV University of Mannheim",
					"title": "Certified IT Engineer",
					"dates": "Aug. 2010 - Okt. 2010",
					"description": "Usage of a particle filter to improve accuracy for positioning in a wlan indoor positioning system",
					"location": "Mannheim, Germany"
				}
		],
		"display": function() {
			if (work.jobs.length > 0){
				var job;
				for (job in work.jobs){
					 $("#workExperience").append(HTMLworkStart);
					 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
					 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
					 var formattedJobTimeline = HTMLworkDates.replace("%data%", work.jobs[job].dates);
					 var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
					 var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
					 var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedJobTimeline + formattedJobLocation + formattedJobDescription;
					 $(".work-entry:last").append(formattedEmployerTitle);
				}
			}
		}
};

var projects = {
	"projects" :[
			 {
			 	"title": "Public Administration Software And Consulting Company",
			 	"dates": "12.2015 – 03.2015",
			 	"description": "Migration of 7.0 transaction types orders to 7.1 transaction types orders – using different SAP® Solution Manager Systems"
			 },
			 {
			 	"title": "International Steel And Technology Company",
			 	"dates": "05.2014 – 12.2014",
			 	"description": "Migration of 7.0 transaction types orders to 7.1 transaction types orders – using different SAP® Solution Manager Systems"
			 },
			 {
			 	"title": "International Healthcare And Medical Technology Company",
			 	"dates": "06.2014 – 06.2014",
			 	"description": "Support introducing the knowledge article within SAP® Solution Manager 7.1"
			 },
			 {
			 	"title": "National Publicly Owned Specialized Credit Institution",
			 	"dates": "01.2014 – 03.2014",
			 	"description": "Coaching in the area of SAP® Solution Managers 7.1"
			 },
			 {
			 	"title": "International Technology Company",
			 	"dates": "06.2013 – 08.2014",
			 	"description": "Upgrade of SAP® Solution Managers from 7.0 to 7.1 (Incident Management)"
			 },
			 {
			 	"title": "National Insurance Group",
			 	"dates": "12.2013 – 12.2013",
			 	"description": "Consulting in the area of custom developments for SAP® CRM Web UI"
			 },
			 {
			 	"title": "International Automotive Supplier",
			 	"dates": "05.2013 – 08.2013",
			 	"description": "Setup of change request management in Solution Manager 7.1"
			 },
			 {
			 	"title": "International Wood Processor",
			 	"dates": "01.2013 – 06.2013",
			 	"description": "Business Process Reengineering after upgrade to SAP® Solution Manager 7.1"
			 },
			 {
			 	"title": "International Energy Supplier",
			 	"dates": "11.2012 – 04.2013",
			 	"description": "Migration of SAP® Solution Manager 7.0 transaction types to 7.1"
			 },
			 {
			 	"title": "Global Tabacco Company",
			 	"dates": "11.2012 – 11.2012",
			 	"description": "Consulting in the area of application lifecycle management using Solution Manager 7.0"
			 },
			 {
			 	"title": "International Automotive Manufacturer",
			 	"dates": "05.2012 – 10.2012",
			 	"description": "Development of enterprise application integration using a heterogeneous server landscape with the target being an android app"
			 },
			 {
			 	"title": "International Car Rental Company",
			 	"dates": "03.2012 – 05.2012",
			 	"description": "Development of an Android App to make enterprise application integration via a middleware solution possible"
			 },
			  {
			 	"title": "European Telecommunication Company",
			 	"dates": "11.2010 – 03.2012",
			 	"description": "Development of a client/ server backup solution."
			 }

	],
	"display": function(){
			if (this.projects.length > 0){
			var project;
			for (project in this.projects){
				 $("#projects").append(HTMLprojectStart);
				 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				 var formattedTimeline = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				 var formattedProject = formattedTitle + formattedTimeline + formattedDescription;
				 $(".project-entry:last").append(formattedProject);
			}
		}
	}
};

var education = {
	"mainDegree": "University Mannheim Germany: Diploma of Business Informatics",
	"schools": [
			{
				"name": "University of Mannheim",
				"location": "Mannheim, Germany",
				"degree": "Diploma in Business Informatics",
				"majors": ["Informatics", "Business informatics", "Marketing"],
				"dates": 2009,
				"url": "http://www.uni-mannheim.de/"
			},
			{
				 "name": "Professional Scrum Master I",
				 "location": "Online",
				 "degree": "Scrum.org Certificate",
				 "majors": ["Scrum", "Agile Development"],
				 "dates": 2015,
				 "url": "https://www.scrum.org/Assessments/Certification-Lists?AssessmentName=PSM%20I"
			},
			{
				 "name": "In-Memory Data Management (2014) - Implications on Enterprise Systems",
				 "location": "Online",
				 "degree": "Hasso Plattner Institute - Certificate",
				 "majors": ["In-Memory Data Management","HANA Basics"],
				 "dates": 2014,
				 "url": "https://open.hpi.de/verify/xihad-vyken-feric-gysus-rurot"
			},
			{
				 "name": "Sicherheit im Internet",
				 "location": "Online",
				 "degree": "Hasso Plattner Institute - Certificate",
				 "majors": ["IT Security"],
				 "dates": 2014,
				 "url": "https://open.hpi.de/verify/xipet-fuvob-lefyk-dahoh-bekuv"
			},
			{
				 "name": "edX Professional Certificate for Economics of Cybersecurity",
				 "location": "Online",
				 "degree": "edX Professional Certificate",
				 "majors": ["Economics of Cybersecurity"],
				 "dates": 2015,
				 "url": "https://s3.amazonaws.com/verify.edx.org/downloads/ee4875c4bbdb450597a42d56fd267848/Certificate.pdf"
			},
			{
				 "name": "Cryptography I",
				 "location": "Online",
				 "degree": "Coursera Certificate",
				 "majors": ["Cryptography"],
				 "dates": 2015,
				 "url": "https://www.coursera.org/course/crypto"
			},
			{
				 "name": "Game Theory",
				 "location": "Online",
				 "degree": "Coursera Certificate",
				 "majors": ["Game Theory"],
				 "dates": 2014,
				 "url": "https://www.coursera.org/course/gametheory"
			},
			{
				 "name": "Game Theory II: Advanced Applications",
				 "location": "Online",
				 "degree": "Coursera Certificate",
				 "majors": ["Game Theory", "Auction Theory", "Reverse Game Theory - Mechanism Design"],
				 "dates": 2015,
				 "url": "https://www.coursera.org/course/gametheory2"
			},
			{
				 "name": "Gamification",
				 "location": "Online",
				 "degree": "Coursera Verified Certificate",
				 "majors": ["Application of Gamification"],
				 "dates": 2015,
				 "url": "https://www.coursera.org/account/accomplishments/verify/VLS9CFUKV8"
			},
			{
				 "name": "The Data Scientist’s Toolbox",
				 "location": "Online",
				 "degree": "Coursera Verified Certificate",
				 "majors": ["Basic Tools for Data Science"],
				 "dates": 2014,
				 "url": "https://www.coursera.org/signature/certificate/967LHCVGGX"
			},
			{
				 "name": "R Programming",
				 "location": "Online",
				 "degree": "Coursera Verified Certificate",
				 "majors": ["R"],
				 "dates": 2014,
				 "url": "https://www.coursera.org/signature/certificate/EGNXGHYTSD"
			},
			{
				 "name": "SAP Business Suite 4 SAP HANA in a Nutshell",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["S4/HANA"],
				 "dates": 2015,
				 "url": "https://open.sap.com/verify/xider-datez-husil-vezub-dikoz"
			},
			{
				 "name": "Digital Transformation and Its Impact",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["Digital Transformation, Disruptive Technologies"],
				 "dates": 2015,
				 "url": "https://open.sap.com/verify/xuhad-mycin-refot-vudev-zosyh"
			},
			{
				 "name": "How the Internet of Things and Smart Services Will Change Society",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["IOT"],
				 "dates": 2015,
				 "url": "https://open.sap.com/verify/xetiv-muvah-tigud-tafob-zugil"
			},
			{
				 "name": "ABAP Development for SAP HANA",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["Abap for HANA"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xuton-luhuv-gozyn-tisip-tukik"
			},
			{
				 "name": "Introduction to SAP HANA Cloud Platform (Repeat)",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["HCP, HCC"],
				 "dates": 2015,
				 "url": "https://open.sap.com/verify/xohig-zazum-nagub-febam-pedyh"
			},
			{
				 "name": "Introduction to SAP Fiori UX",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["Fiori", "SAP UI5"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xumoc-tovac-lafyb-dopod-kygus"
			},
			{
				 "name": "Get to Know SAP’s Innovative Enterprise Solutions",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["SAP"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xizis-bacyc-pimes-nysah-sumir"
			},
			{
				 "name": "OGSD 7.0 – An Introduction to Oil & Gas Downstream Logistics",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["Oil & Gas Logistics"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xehik-cysic-cidik-nobap-honac"
			},
			{
				 "name": "SAP Business Warehouse powered by SAP HANA",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["BW", "BI"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xuhot-zevez-tegev-fygus-gidub"
			},
			{
				 "name": "BI Clients and Applications on SAP HANA",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["BW", "BI"],
				 "dates": 2014,
				 "url": "https://open.sap.com/verify/xomab-dyfip-cilod-gesav-kebig"
			},
			{
				 "name": "Rapid Deployment of SAP Solutions (Update Q1/2015)",
				 "location": "Online",
				 "degree": "Open SAP Certificate",
				 "majors": ["Rapid Deployment SAP Solutions"],
				 "dates": 2015,
				 "url": "https://open.sap.com/verify/xonas-nukuh-ducez-luryt-symid"
			},
			{
				 "name": "ER22x Justice",
				 "location": "Online",
				 "degree": "EDX Certificate",
				 "majors": ["Philosophy", "Moral Philosophy"],
				 "dates": 2013,
				 "url": "https://verify.edx.org/cert/85982650af7c487eaf2788dd7d4f0859"
			}


	],
	"display": function() {
		if (education.schools.length > 0){
		var school;
			for (school in education.schools){
				 $("#education").append(HTMLschoolStart);
				 var formattedNameSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
				 var formattedDegreeSchool = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				 var formattedDatesSchool = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				 var formattedLocationSchool = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				 var formattedMajorSchool = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				 var formattedSchool = formattedNameSchool + formattedDegreeSchool + formattedDatesSchool + formattedLocationSchool + formattedMajorSchool;
				 $(".education-entry:last").append(formattedSchool);
			}
		}
	}

};

var tools = {
	version : "1.0"
};

tools.logClicks = function (xCoordinate, yCoordinate){
	var location = "xCoordinate:" + xCoordinate + " " + "yCoordinate" + yCoordinate;
	console.log(location);
};

tools.inName = function (name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};

/* Main handling */
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
