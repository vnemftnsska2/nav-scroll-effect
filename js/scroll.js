const subMenuList = document.querySelectorAll('.container .sideMenu ul li a');
const sectionList = document.querySelectorAll('.container .main section');

window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    subMenuList.forEach(link => {
        const section = document.querySelector(link.hash);
        if (fromTop >= section.offsetTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});