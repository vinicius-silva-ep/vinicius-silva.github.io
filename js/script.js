$(document).ready(function() {
    // Quando a bandeira do Brasil for clicada
    $("#br-flag").click(function() {
        // Recarrega a página para restaurar o estado inicial
        location.reload();
    });

    // Quando a bandeira dos Estados Unidos for clicada
    $("#us-flag").click(function() {
        // Altera o texto e os elementos para o estado com a bandeira dos Estados Unidos
        changeToEnglish();
    });

    // Função para alterar para inglês
    function changeToEnglish() {
        // Altera o texto dos links da barra de navegação para inglês
        $(".nav-link").each(function() {
            switch ($(this).attr('href')) {
                case '#about':
                    $(this).text('About');
                    break;
                case '#meus_projetos':
                    $(this).text('My Projects');
                    break;
                case '#participei_projetos':
                    $(this).text("I've participated in");
                    break;
                case '#artigos':
                    $(this).text('Articles');
                    break;
                case '#skills':
                    $(this).text('Skills');
                    break;
                case '#education':
                    $(this).text('Education');
                    break;
                case '#experiencia':
                    $(this).text('Experience');
                    break;
            }
        });
        $(".sobre-mim p.mb-5").text("Hello! I'm Vinícius, production engineer, graduated from the Federal University of Western Bahia. Since 2020, I've been making my way in the world of data. My journey involves combining my solid background in production engineering and my deep-rooted passion for technology. Over the years, I focused my efforts in the area of Data Science, exploring different aspects, from data analysis to the world of Business Intelligence. My main focus lies in Data Engineering. When I'm not immersed in data challenges, I'm an instrumental musician in my spare time. I believe that combining the logic of engineering with the creativity of music is the key to a unique and innovative approach. My goal is to continue improving my skills, exploring new frontiers of data science and contributing to smart and impactful solutions. This is my world, where the passion for technology and the incessant search for knowledge shape my professional and personal journey.");
        // $("#meus_projetos h2.mb-5").text('My Projects');
        // $("#meus_projetos h3.mb-3").text('Project Management');
        // $("#meus_projetos p").text('With the aim of organizing my personal study activities, I created this Power BI dashboard with phases, project, activity descriptions, deadlines, and status. This way, I can know what is pending, what is already finished, and everything I have not started yet.');
        $(".btn-custom").each(function() {
            // Verifica se o texto do botão é o texto original em inglês
            if ($(this).text() === 'Clique aqui para visualizar o painel em tela inteira') {
                // Se for, traduz para inglês
                $(this).text('Click here to view the dashboard in full screen');
            }
        });
        $(".text-muted").each(function() {
            // Verifica se o texto do botão é o texto original em inglês
            if ($(this).text() === '(Todos os dados são públicos, inclusive os dashboards)') {
                // Se for, traduz para inglês
                $(this).text('(All data is public, including dashboards)');
            }
        });
    }
});