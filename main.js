var app = {
    config: {
        title: 'JCHS Programming Club',
        navs: ['Home', 'About', 'Projects', 'Contact'],
        homePage: {
            name: 'Home',
            index: 0
        },
        pages: {
            home: [
                ['h2', 'Home'],
                ['br', null],
                ['p', 'Welcome to our website!'],
                ['p', '● To learn about the club, click on the About link in the navigation bar above'],
                ['p', '● A collection of our projects of the month can be accessed by navigating to the Projects link'],
                ['p', '● To get in touch with us, navigate to the Contact link and fill out the form']
            ],
            about: [
                ['h2', 'About'],
                ['br', null],
                ['p', 'Welcome to James Caldwell High School\'s Programming Club!'],
                ['p', 'Meetings are held every 1st Tuesday of the month after school in Room 206.'], 
                ['br', null],
                ['p', 'Club Board', 'heading'],
                ['p', 'Jordan Sang — President'],
                ['p', 'Alexandra Li — Co-President'],
                ['p', 'Jess Sang — Treasurer'],                
                ['p', 'Anthonette Akinyemi — Secretary'],
                ['p', 'Mr. Antonucci — Advisor'],
                ['br', null],
                ['p', 'Questions, comments, or concerns? Email us: jchsprogramming@gmail.com', 'footnote']           
            ],
            projects: [
                ['h2', 'Projects'],
                ['br', null],
                ['p', 'View our top-voted projects from each monthly meeting!'],
                ['br', null]
            ],
            contact: [
                ['h2', 'Contact'],
                ['br', null],
                ['p', 'Feel free to contact us with any questions, comments, or concerns!'],
                ['p', 'We look forward to hearing from you.'],
                ['br', null]
            ]
        },
        projects: [/*{
            project: 'Name',
            name: 'Author',
            date: 'Date',
            media: {
                type: 'img',
                src: './projects/●●-2●/●.●'
            },
            code: './projects/●●-2●/●.pdf'
        }*/]
    },
    current: {},
    createHeader: function() {
        var header = document.createElement('header');

        var title = document.createElement('div');
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
    
        title.className = "title flex column center";
        h1.innerText = this.config.title;
        p.className = "date flex center";
        p.innerText = new Date().toLocaleDateString('en-US', {dateStyle: 'long'});
    
        header.appendChild(title);
        title.appendChild(h1);
        title.appendChild(p);

        var navs = this.config.navs;

        var nav = document.createElement('div');
        var navPage;
        var a;

        nav.className = "nav flex";
        
        for (var i = 0; i < navs.length; i++) {
            navPage = document.createElement('div');
            a = document.createElement('a');
            navPage.className = "navpage flex center clickable";

            a.innerText = navs[i];
            navPage.appendChild(a);
            navPage.addEventListener('click', this.setNavPage);

            nav.appendChild(navPage);
        }
        
        if (!this.config.homePage) {
            nav.children[0].className = nav.children[0].className + " active";
            this.current.page = nav.children[0].innerText;
        } else {
            nav.children[this.config.homePage.index].className = nav.children[this.config.homePage.index].className + " active";
            this.current.page = this.config.homePage.name;
        }

        header.appendChild(nav);
        document.body.appendChild(header);
    },
    setNavPage: function(e) {
        var active = false;
        var target;

        var navs = document.getElementsByClassName('navpage');
        var classes = [];
    
        if (e.target.localName === 'a') {
            target = e.target.parentElement;
        } else {
            target = e.target;
        }
        
        classes[0] = target.className.split(' ');
    
        for (var j = 0; j < classes[0].length; j++) {
            if (classes[0][j] === 'active') {
                active = j;
            }
        }
    
        if (!active) {
            app.current.page = target.innerText;
            for (var i = 0; i < navs.length; i++) {
                classes[1] = navs[i].className.split(' ');
                for (var k = 0; k < classes[1].length; k++) {
                    if (classes[1][k] === 'active') {
                        classes[1].splice(k, 1);
                        navs[i].className = classes[1].join(' ');
                    }
                }
            }
            classes[0][classes[0].length] = 'active';
            target.className = classes[0].join(' ');

            app.loadContent(app.current.page);
        }
    },
    createContainer: function() {
        var article = document.createElement('article');
        document.body.appendChild(article);
    },
    loadContent: function(page) {
        var article = document.getElementsByTagName('article')[0];
        this.clearContent(article);        
        this.loadPage(article, page);
    },
    clearContent: function(article) {
        while (article.firstElementChild) {
            article.removeChild(article.firstElementChild);
        }
    },
    loadPage: function(article, page) {
        var content = this.config.pages[page.toLowerCase()];
        var element;

        for (var i = 0; i < content.length; i++) {
            element = document.createElement(content[i][0]);
            element.innerText = content[i][1];

            if (content[i][2]) {
                element.className = content[i][2];
            }

            article.appendChild(element);
        }

        switch(page.toLowerCase()) {
            case 'projects':
                this.loadProjects(article);
                break;
            case 'contact':
                this.loadContact(article);
                break;
            default:
                break;
        }
    },
    loadProjects: function(article) {
        var project = {};

        for (i = this.config.projects.length - 1; i >= 0; i--) {
            project.div = document.createElement('div');
            project.info = document.createElement('div');
            project.source = document.createElement('div');

            project.project = document.createElement('p');
            project.name = document.createElement('p');
            project.separator = document.createElement('p');
            project.date = document.createElement('p');
            project.media = document.createElement(this.config.projects[i].media.type);
            project.code = document.createElement('iframe');

            project.div.className = 'project';
            project.info.className = 'info';
            project.date.className = 'date';
            project.source.className = 'source';
            
            project.name.innerText = this.config.projects[i].project + ' — ' + this.config.projects[i].name;
            project.date.innerText = this.config.projects[i].date;
            project.media.src = this.config.projects[i].media.src;
            project.code.src = this.config.projects[i].code;

            project.code.className = 'float-r';

            project.info.appendChild(project.name);

            project.source.appendChild(project.code);
            project.source.appendChild(project.media);
            
            project.div.appendChild(project.info);
            project.div.appendChild(project.date);
            project.div.appendChild(project.source);

            article.appendChild(project.div);
            article.appendChild(document.createElement('br'));
        }
    },
    loadContact: function(article) {
        var div = document.createElement('div');
        var iframe = document.createElement('iframe');
        
        div.className = "contact";
        iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSf2yaRXeqyaVfoe7GWRd4iN6Xl-ZACBCelfzdeh3HL2Kj3gqQ/viewform?embedded=true";
        
        div.append(iframe);
        article.append(div);
    },
    load: function() {
        this.createHeader();
        this.createContainer();
        this.loadContent(this.current.page);
    }
};

app.load();