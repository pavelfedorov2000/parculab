window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuClose = document.querySelector('.burger-menu__close');
    //const menuLinks = document.querySelectorAll('.menu__link');
    
    /* burgerBtn.addEventListener('click', () => {
        body.classList.toggle('_lock');
        burgerBtn.classList.toggle('burger-btn--active');
        burgerMenu.classList.toggle('burger-menu--active');
    }); */
    burgerBtn.addEventListener('click', () => {
        body.classList.add('_lock');
        //burgerBtn.classList.add('burger-btn--active');
        burgerMenu.classList.add('burger-menu--active');
    });
    burgerMenuClose.addEventListener('click', () => {
        body.classList.remove('_lock');
        //burgerBtn.classList.remove('burger-btn--active');
        burgerMenu.classList.remove('burger-menu--active');
    });

    const filters = document.querySelectorAll('.new__filter-btn');
    if (filters.length > 0) {
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.new__filter-btn--active').classList.remove('new__filter-btn--active');
                btn.classList.add('new__filter-btn--active');
                let activeFilter = btn.getAttribute('data-articles-filter');
                console.log(activeFilter);
                if (activeFilter !== 'all') {
                    document.querySelectorAll('.new-card').forEach(card => {
                        card.style.display = 'none';
                    });
                    document.querySelectorAll(`[data-article-category = ${activeFilter}]`).forEach(item => item.style.display = 'block');
                } else {
                    document.querySelectorAll('.new-card').forEach(card => {
                        card.style.display = 'block';
                    });
                }
            });
        });
    }

    const newLoadMore = document.querySelector('.new__more-btn');
    if (newLoadMore) {
        newLoadMore.addEventListener('click', () => {
            //newLoadMore.classList.add('hidden');
            newLoadMore.style.display = 'none';
            document.querySelectorAll('.new-card').forEach(card => {
                if (card.classList.contains('hidden')) {
                    card.classList.remove('hidden');
                }
            });
        });
    }

    const servicesLoadMore = document.querySelector('.services__more-btn');
    if (servicesLoadMore) {
        servicesLoadMore.addEventListener('click', () => {
            //servicesLoadMore.classList.add('hidden');
            servicesLoadMore.style.display = 'none';
            document.querySelectorAll('.service-card').forEach(card => {
                if (card.classList.contains('hidden')) {
                    card.classList.remove('hidden');
                }
            });
        });
    }


    const visibleProjects = 6;
    const projectsCards = document.querySelectorAll('.project-card');
    projectsCards.forEach((card, i) => {
        if (i >= visibleProjects) {
            card.classList.add('hidden');
        }
    });

    const projectsLoadMore = document.querySelector('.projects__more-btn');
    if (projectsLoadMore) {
        projectsLoadMore.addEventListener('click', () => {
            //projectsLoadMore.classList.add('hidden');
            projectsLoadMore.style.display = 'none';
            document.querySelectorAll('.project-card').forEach(card => {
                if (card.classList.contains('hidden')) {
                    card.classList.remove('hidden');
                }
            });
        });
    }
});



