$(document).ready(function() {
    // Quando a bandeira do Brasil for clicada
    $("#br-flag").click(function() {
        // Altera o texto dos links da barra de navegação para português
        $(".nav-link").each(function() {
            switch ($(this).attr('href')) {
                case '#about':
                    $(this).text('Sobre');
                    break;
                case '#meus_projetos':
                    $(this).text('Meus Projetos');
                    break;
                case '#participei_projetos':
                    $(this).text('Projetos que participei');
                    break;
                case '#artigos':
                    $(this).text('Artigos');
                    break;
                case '#skills':
                    $(this).text('Habilidades');
                    break;
                case '#education':
                    $(this).text('Educação');
                    break;
                case '#experiencia':
                    $(this).text('Experiência');
                    break;
            }
        });
        // Altera o texto dentro do elemento <p> com a classe mb-5 para português
        $(".sobre-mim p.mb-5").text('Olá! Eu sou Vinícius, engenheiro de produção, graduado pela Universidade Federal do Oeste da Bahia. Desde 2020, venho trilhando meu caminho no mundo dos dados. Minha jornada envolve a combinação entre minha formação sólida em engenharia de produção e minha paixão enraizada por tecnologia. Ao longo dos anos, concentrei meus esforços na área de Data Science, explorando diversas vertentes, desde a análise de dados até o universo do Business Intelligence. Meu foco principal reside na Engenharia de Dados. Quando não estou imerso nos desafios dos dados, sou um músico instrumentista nas horas vagas. Acredito que a combinação da lógica da engenharia com a criatividade da música é a chave para uma abordagem única e inovadora. Meu objetivo é continuar aprimorando minhas habilidades, explorando novas fronteiras da ciência de dados e contribuindo para soluções inteligentes e impactantes. Esse é o meu mundo, onde a paixão pela tecnologia e a busca incessante por conhecimento moldam minha jornada profissional e pessoal.');
    });

    // Quando a bandeira dos Estados Unidos for clicada
    $("#us-flag").click(function() {
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
                    $(this).text("Projects I've Participated In");
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
        // Altera o texto dentro do elemento <p> com a classe mb-5 para inglês
        $(".sobre-mim p.mb-5").text("Hello! I'm Vinícius, production engineer, graduated from the Federal University of Western Bahia. Since 2020, I've been making my way in the world of data. My journey involves combining my solid background in production engineering and my deep-rooted passion for technology. Over the years, I focused my efforts in the area of ​​Data Science, exploring different aspects, from data analysis to the world of Business Intelligence. My main focus lies in Data Engineering. When I'm not immersed in data challenges, I'm an instrumental musician in my spare time. I believe that combining the logic of engineering with the creativity of music is the key to a unique and innovative approach. My goal is to continue improving my skills, exploring new frontiers of data science and contributing to smart and impactful solutions. This is my world, where the passion for technology and the incessant search for knowledge shape my professional and personal journey.");
    });
});