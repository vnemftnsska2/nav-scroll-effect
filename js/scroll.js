// Variable
const subMenuList = document.querySelectorAll('.container .sideMenu ul li');
const sectionList = document.querySelectorAll('.container .main section');

// class
const sectionManager = {
    nav: document.getElementById('sectionNav'),
    boxs: document.querySelectorAll('.main section'),
    yList: null,
    setSectionList() {
       const yList = {};
       [...this.nav.children].forEach(li => {
           [...this.boxs].forEach(box => {
               if (li.dataset.section === box.dataset.section) {
                   yList[li.dataset.section] = box.offsetTop;
               }
           });
       });

       this.yList = yList;
       return function (id) {
           return yList[id];
       };
    },
};

// Function
const clickSection = (e) => {
    if (e.target.tagName === 'LI') {
        const section = e.target.dataset.section;
        const y = getY(section);
        window.scrollTo(0, y);
    }
};

const changeSectionColor = (section) => {
    [...sectionManager.nav.children].forEach(v => {
        if (v.dataset.section === section) v.classList.add('current');
        else v.classList.remove('current');
    });
};

const getY = sectionManager.setSectionList();

// Event
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    for (const section in sectionManager.yList) {
        if (fromTop >= sectionManager.yList[section]) changeSectionColor(section);
    }
});

sectionManager.nav.addEventListener('click', (e) => clickSection(e));