document.addEventListener('DOMContentLoaded', () => {
    console.log('dashboard-01 run !!');

    let content = document.getElementById('content');
    let btnMenu = document.getElementById('btn-menu');
    let sidebar = document.getElementById('sidebar');
    let nav = document.getElementById('nav');
    let main = document.getElementById('main');

    let noResponsive = document.getElementsByClassName('no-responsive');

    btnMenu.addEventListener('click', () => {

        if (sidebar.clientWidth > 100) {
            content.style.gridTemplateColumns = '100px auto';

            for (let i = 0; i < noResponsive.length; i++) {
                noResponsive[i].style.display = 'none';
            }

        } else {
            content.style.gridTemplateColumns = '280px auto';

            setTimeout(() => {
                for (let i = 0; i < noResponsive.length; i++) {
                    noResponsive[i].style.display = 'block';
                }
            }, 300);
        }
    });
});