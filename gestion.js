document.addEventListener('DOMContentLoaded', () => {
    
    const schoolData = {
        levels: ["Collège", "Lycée"],
        classes: {
            "Collège": ["6ème", "5ème", "4ème", "3ème", ],
            "Lycée": ["Seconde", "Première", "Terminale"]
        },
        subjects: [
            "Français", "Mathématiques", "Histoire-Géographie", "Physique-Chimie",
            "SVT", "Anglais", "Espagnol", "EPS", "Informatique"
        ],
        students: {
            "Collège": {
                "6ème": ["Seynabou Sarr 16 - 07  - 2001 Diourbel", 
                    "Saliou Diaw 20 - 10 - 1998 Diourbel", "Nafi Diop 02 - 04 - 2000 Diourbel", "Adama Ndiaye 11 - 07 - 2003 Diourbel", "Sokhna Faye 23 - 12 - 1999 Diourbel",
                    "Marame Sall 12 - 09 2002 Diourbel", "Moussa Tine 25 - 10 - 2005 Diourbel", "Adjia Diouf 01 - 01 - 2001 Diourbel", "Ndeye Fatou Sylla 6 - 05 - 2005 Diourbel"
                ],
                "5ème": ["Moussa Tine 12 - 09 2002 Diourbel", "Adjia Diouf 12 - 09 2002 Diourbel", "Ndeye Fatou Sylla 12 - 09 2002 Diourbel" , "Adama Ndiaye 12 - 09 2002 Diourbel", "Sokhna Faye 12 - 09 2002 Diourbel",
                    "Marame Sall 12 - 09 2002 Diourbel", "Seynabou Sarr 12 - 09 2002 Diourbel", "Saliou Diaw 12 - 09 2002 Diourbel", "Nafi Diop 12 - 09 2002 Diourbel"],

                "4ème": ["Marame Sall 00 - 00 - 9999 Diourbel", "Seynabou Sarr 00 - 00 - 9999 Diourbel", "Saliou Diaw 00 - 00 - 9999 Diourbel", "Nafi Diop 00 - 00 - 9999 Diourbel", "Adama Ndiaye 00 - 00 - 9999 Diourbel",
                         "Sokhna Gueye 00 - 00 - 9999 Diourbel","Moussa Tine 00 - 00 - 9999 Diourbel", "Adjia Diouf 00 - 00 - 9999 Diourbel" ],

                "3ème": ["Moussa Tine 00 - 00 - 9999 Diourbel", "Adjia Diouf 00 - 00 - 9999 Diourbel", "Seynabou Sarr 00 - 00 - 9999 Diourbel", "Saliou Diaw 00 - 00 - 9999 Diourbel", "Nafi Diop 00 - 00 - 9999 Diourbel", "Adama Ndiaye 00 - 00 - 9999 Diourbel" ]
            },
            "Lycée": {
                "Seconde": ["Moussa Tine 00 - 00 - 9999 Diourbel", "Adjia Diouf 00 - 00 - 9999 Diourbel", "Seynabou Sarr 00 - 00 - 9999 Diourbel", "Saliou Diaw 00 - 00 - 9999 Diourbel", "Nafi Diop 00 - 00 - 9999 Diourbel", "Adama Ndiaye 00 - 00 - 9999 Diourbel"],

                "Première": ["Marame Sall 00 - 00 - 9999 Diourbel", "Seynabou Sarr 00 - 00 - 9999 Diourbel", "Saliou Diaw 00 - 00 - 9999 Diourbel", "Nafi Diop 00 - 00 - 9999 Diourbel", "Adama Ndiaye 00 - 00 - 9999 Diourbel",
                         "Sokhna Gueye 00 - 00 - 9999 Diourbel","Moussa Tine 00 - 00 - 9999", "Adjia Diouf 00 - 00 - 9999"],

                "Terminale": ["Moussa Tine 00 - 00 - 9999 Diourbel", "Adjia Diouf 00 - 00 - 9999 Diourbel", "Ndeye Fatou Sylla 00 - 00 - 9999 Diourbel" , "Adama Ndiaye 00 - 00 - 9999 Diourbel", "Sokhna Faye 00 - 00 - 9999 Diourbel",
                    "Marame Sall 00 - 00 - 9999 Diourbel", "Seynabou Sarr 00 - 00 - 9999 Diourbel", "Saliou Diaw 00 - 00 - 9999 Diourbel", "Nafi Diop 00 - 00 - 9999 Diourbel"]
            }
        },
        schedule: {
            "6ème": {
                "Lundi": ["Maths", "Français", "SVT", "--", "Histoire"],
                "Mardi": ["Histoire", "EPS", "Physique", "--" , "Anglais"],
                "mercredi": ["Physique", "Français", "SVT", "--" , "Français"] ,
                "Jeudi": ["EPS", "Français", "SVT", "--", "Maths"],
                "Vendredi": ["Maths", "Physique", "SVT", "--", "Français"],
        
            },
            "5ème": {
                "Lundi": ["Français", "Physique", "Maths", "--",  "Géographie"],
                 "Mardi": ["Histoire", "EPS", "Physique", "--" ,  "SVT"],
                "mercredi": ["Physique", "Français", "SVT", "--" , "Français"],
                "Jeudi": ["EPS", "Français", "SVT", "--" , "Anglais"],
                "Vendredi": ["Maths", "Physique", "SVT", "--", "Histoire"],
               
            },
            "4ème": {
                "Lundi": ["Français", "Physique", "Maths", "--",  "SVT"],
                 "Mardi": ["Histoire", "EPS", "Physique", "--" , "Histoire"],
                "mercredi": ["Physique", "Français", "SVT", "--" , "Français"],
                "Jeudi": ["EPS", "Français", "SVT", "--" , "Anglais"],
                "Vendredi": ["Maths", "Physique", "Anglais", "--" , "Géographie"],
            },
            "3ème":{
                 "Lundi": ["Anglais", "Physique", "Maths", "--", "SVT"],
                 "Mardi": ["Histoire", "EPS", "Physique", "--", "Histoire"],
                "mercredi": ["Physique", "Français", "SVT", "--", "Français"],
                "Jeudi": ["EPS", "Français", "SVT", "--", "Anglais"],
                "Vendredi": ["Maths", "Physique", "SVT", "--", "Géographie"],
            }
        }
    };

    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');
    const scheduleClassSelect = document.getElementById('schedule-class-select');
    const studentsLevelSelect = document.getElementById('students-level-select');
    const studentsClassSelect = document.getElementById('students-class-select');
    const studentsList = document.getElementById('students-list');
    const subjectsList = document.getElementById('subjects-list');
    const scheduleTableBody = document.querySelector('#schedule-table tbody');

    // Gestion de la navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                if (section.id === button.dataset.section) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Remplissage des listes déroulantes
    function populateSelect(selectElement, options) {
        selectElement.innerHTML = '';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            selectElement.appendChild(opt);
        });
    }

    // Affichage des matières
    function renderSubjects() {
        subjectsList.innerHTML = '';
        schoolData.subjects.forEach(subject => {
            const li = document.createElement('li');
            li.textContent = subject;
            subjectsList.appendChild(li);
        });
    }

    // Affichage des élèves
    function renderStudents() {
        const level = studentsLevelSelect.value;
        const className = studentsClassSelect.value;
        studentsList.innerHTML = '';
        
        const students = schoolData.students[level][className] || [];
        students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = student;
            studentsList.appendChild(li);
        });
    }

    // Affichage de l'emploi du temps
    function renderSchedule() {
        const className = scheduleClassSelect.value;
        scheduleTableBody.innerHTML = '';

        const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
        const hours = ["8h00 - 10h00", "10h00 - 12h00", "12h15 - 14h15", "- - - -", "115h30 - 17h30"];

        hours.forEach(hour => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = hour;
            row.appendChild(timeCell);

            days.forEach(day => {
                const cell = document.createElement('td');
                // Récupère la matière ou affiche un message
                const subject = schoolData.schedule[className] && schoolData.schedule[className][day] ? schoolData.schedule[className][day][hours.indexOf(hour)] : "---";
                cell.textContent = subject;
                row.appendChild(cell);
            });
            scheduleTableBody.appendChild(row);
        });
    }
    
    // Événements
    studentsLevelSelect.addEventListener('change', () => {
        const level = studentsLevelSelect.value;
        populateSelect(studentsClassSelect, schoolData.classes[level]);
        renderStudents();
    });

    studentsClassSelect.addEventListener('change', renderStudents);
    scheduleClassSelect.addEventListener('change', renderSchedule);
    
    // Initialisation de la page
    populateSelect(studentsLevelSelect, schoolData.levels);
    populateSelect(studentsClassSelect, schoolData.classes["Collège"]);
    populateSelect(scheduleClassSelect, schoolData.classes["Collège"]);

    renderStudents();
    renderSubjects();
    renderSchedule();
});