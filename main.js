var app = {
    config: {
        title: 'JCHS Programming Club',
        navs: ['Home', 'About', 'Projects', 'Contact']
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

        nav.children[0].className = nav.children[0].className + " active";
        this.current.page = nav.children[0].innerText;

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
        
        switch(page) {
            case 'Home':
                this.loadHome(article);
                break;
            case 'About':
                this.loadAbout(article);
                break;
            case 'Projects':
                this.loadProjects(article);
                break;
            case 'Contact':
                this.loadContact(article);
                break;
            default:
                break;
        }
    },
    clearContent: function(article) {
        while (article.firstElementChild) {
            article.removeChild(article.firstElementChild);
        }
    },
    loadHome: function(article) {
        var p = document.createElement('p');
        p.innerText = 'Home';
        article.appendChild(p);
    },
    loadAbout: function(article) {
        var p = document.createElement('p');
        p.innerText = 'About';
        article.appendChild(p);
    },
    loadProjects: function(article) {
        var p = document.createElement('p');
        p.innerText = 'Projects';
        article.appendChild(p);
    },
    loadContact: function(article) {
        var p = document.createElement('p');
        p.innerText = 'Contact';
        article.appendChild(p);
    },
    load: function() {
        this.createHeader();
        this.createContainer();
        this.loadContent(this.current.page);
    }
};

app.load();