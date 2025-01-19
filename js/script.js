$(document).ready(function () {
    // Quando a bandeira do Brasil for clicada
    $("#br-flag").click(function () {
       // Recarrega a página para restaurar o estado inicial
       location.reload();
    });
 
    // Quando a bandeira dos Estados Unidos for clicada
    $("#us-flag").click(function () {
       // Altera o texto e os elementos para o estado com a bandeira dos Estados Unidos
       changeToEnglish();
    });
 
    // Função para alterar para inglês
    function changeToEnglish() {
       // Altera o texto dos links da barra de navegação para inglês
       $(".nav-link").each(function () {
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
                case '#certificacoes':
                  $(this).text('Certifications');
                  break;                
          }
       });
       $(".sobre-mim p.mb-5").text("Hello! I'm Vinícius, a production engineer, graduated from the Federal University of Western Bahia. Since 2020, I've been paving my way in the world of data. My journey involves combining my strong background in production engineering with my deep-rooted passion for technology. Over the years, I've focused my efforts on Data Science, exploring various aspects from data analysis to the realm of Business Intelligence. I've dedicated a significant amount of time to studying to become a Data Scientist.");
 
       // Essa parte do código faz as alterações para os botões que aparecem
       const translations = {
          'Ver em tela inteira': 'View in full screen',
          'Ver artigo': 'See article',
          'Ver o trabalho final': 'See the final paper',
          'Ver credencial': 'See credential'
       };
       // Itera sobre os botões com a classe .btn-custom
       $(".btn-custom").each(function () {
          const originalText = $(this).text();
          // Verifica se a tradução está definida para o texto do botão
          if (translations[originalText]) {
             // Atualiza o texto do botão com a tradução correspondente
             $(this).text(translations[originalText]);
          }
       });
       $(".text-muted").each(function () {
          // Verifica se o texto do botão é o texto original em inglês
          if ($(this).text() === '(Todos os dados são públicos, inclusive os dashboards)') {
             // Se for, traduz para inglês
             $(this).text('(All data is public, including dashboards)');
          }
       });
       // Traduz o conteúdo da seção "Meus Projetos"
       $("#meus_projetos h2.mb-5").text('My Projects');
       $("#meus_projetos p.mb-5").text('These are my original projects that I worked on using my creative potential and fully public data. To open each one of them, just click on any of the images. A new page will open with the details, I hope you like it! 😄');       
       $("#meus_projetos #gestao_de_projetos").text('Project Management');
       $("#meus_projetos #gestao_de_projetos + p").text('With the aim of organizing my personal study activities, I created this Power BI dashboard with phases, project, activity descriptions, deadlines, and status. This way, I can know what is pending, what is already finished, and everything I have not started yet.');
       $("#meus_projetos #metricas_de_uso").text('Usage metrics');
       $("#meus_projetos #metricas_de_uso + p").text('Explored the potential of Power BI REST APIs to create a dynamic dashboard, going beyond the basic metrics available in the Power BI Service, using fictitious data.');
       // Traduz o conteúdo da seção "Projetos que participei"
       $("#participei_projetos h2.mb-5").text('Projects I participated in');
       $("#participei_projetos p.mb-5").text('Here is a summary of the projects I participated in as a research scholar in college! The project is called Rede Data Science BR and its main client, to this day, is the Ministry of Education (MEC). I was a student researcher in Data Science and was always collaborating with other researchers throughout Brazil.');       
       // Traduz o conteúdo da seção "Artigos"
       $("#artigos h2.mb-5").text('My articles');
       $("#artigos #artigo_1").text('Inserting data from a csv file into a table in a remote (cloud) database using Python');
       $("#artigos #artigo_2").text('Optimizing the transformation of large volumes of data in Power BI');
       $("#artigos #artigo_3").text('Editing the expression or name of multiple measures using Tabular Editor');
       // Traduz o conteúdo da seção "Habilidades"
       $("#skills h2.mb-5").text('Skills');
       $("#skills #ferramentas_ds").text('Data science tools');
       $("#skills #linguagens").text('Programming languages');
       $("#skills #sos").text('Operational Systems');
       $("#skills #competencias").text('Expertise');
       // Traduz o conteúdo da subseção "Expertise"
       $("#competencias + ul li").eq(0).html('<i class="fa-li fa fa-check"></i> Proficient in exploratory data analysis, data manipulation, cleaning, and transformation using tools like Power Query (M language), Python, Pandas, and SQL;');
       $("#competencias + ul li").eq(1).html('<i class="fa-li fa fa-check"></i> Creation and administration of databases, covering modeling, implementation, and optimization. Experience in schema design and normalization;');
       $("#competencias + ul li").eq(2).html('<i class="fa-li fa fa-check"></i> ETL and Data Pipelines with Python;');
       $("#competencias + ul li").eq(3).html('<i class="fa-li fa fa-check"></i> Process automation and web scraping using Python;');
       $("#competencias + ul li").eq(4).html('<i class="fa-li fa fa-check"></i> Version control using Git/GitHub;');
       $("#competencias + ul li").eq(5).html('<i class="fa-li fa fa-check"></i> VPS utilization, API knowledge, and microservices management using Docker;');
       $("#competencias + ul li").eq(6).html('<i class="fa-li fa fa-check"></i> UX and Storytelling.');
       // Traduz o conteúdo da seção "Educação"
       $("#education h2.mb-5").text('Education');
       $("#education #universidade").text('Federal University of Western Bahia (UFOB)');
       $("#education #bacharel").text('Bachelor in Production Engineering');
       $("#education #data").text('June 2016 - August 2023');
      // Tradução da seção "Experiência"
      $("#experiencia h2.mb-5").text('Experience');

      $("#experiencia .resume-item").eq(0).find('h3.mb-0').text('Business Intelligence Specialist');
      $("#experiencia .resume-item").eq(0).find('.subheading.mb-3').text('Agrex do Brasil');
      $("#experiencia .resume-item").eq(0).find('.text-primary').text('September 2024 - Present');

      $("#experiencia .resume-item").eq(1).find('h3.mb-0').text('Business Intelligence Analyst');
      $("#experiencia .resume-item").eq(1).find('.subheading.mb-3').text('Agrex do Brasil');
      $("#experiencia .resume-item").eq(1).find('.text-primary').text('February 2023 - August 2024');

      $("#experiencia .resume-item").eq(2).find('h3.mb-0').text('Data Analyst');
      $("#experiencia .resume-item").eq(2).find('.subheading.mb-3').text('Cerrado Pneus');
      $("#experiencia .resume-item").eq(2).find('.text-primary').text('May 2022 - January 2023');

      $("#experiencia .resume-item").eq(3).find('h3.mb-0').text('Data Science Researcher');
      $("#experiencia .resume-item").eq(3).find('.subheading.mb-3').text('Rede Data Science BR');
      $("#experiencia .resume-item").eq(3).find('.text-primary').text('October 2020 - December 2022');

      $("#experiencia .resume-item").eq(4).find('h3.mb-0').text('Utilities Sector Intern');
      $("#experiencia .resume-item").eq(4).find('.subheading.mb-3').text('Bunge');
      $("#experiencia .resume-item").eq(4).find('.text-primary').text('August 2021 - May 2022');

       // Tradução da seção "Certificações
       $("#certificacoes h2.mb-5").text('Certifications');
    }
 });