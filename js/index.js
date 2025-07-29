$(function() {
  const apiUrl = 'https://api.github.com/orgs/SpamTagger';
  let totalStars = 0;
  const languages = {};

  $.ajax(`${apiUrl}/repos?per_page=1000`, {
    success: (data) => {
      data.filter(repo => !repo.archived).sort((a, b) =>  b.stargazers_count - a.stargazers_count).forEach((repo) => {
        totalStars += repo.stargazers_count;

        if (repo.language) {
          languages[repo.language] = languages[repo.language] ? ++languages[repo.language] : 1;
        }

        $('ol.repos').append(`
          <li class="repos_item repo">
              <div class="card">
                  <header class="card_header">
                      <a class="repo_title" href="${repo.html_url}" target="_blank">
                          <span class="repo_title-text">${repo.name}</span>
                          <img class="icon repo_title-icon" src="images/${repo.name.startsWith('ext-') ? 'package' : 'repo'}.svg">
                      </a>
                  </header>
                  <div class="card_content">
                      <div class="repo_description">${repo.description || ''}</div>
                  </div>
                  <footer class="card_footer">
                      <div class="repo_summary">
                          ${!repo.language ? '' :
                              `<span class="repo_summary-item">
                                  <img class="icon repo_summary-icon" src="images/code.svg">
                                  <span class="repo_summary-text">${repo.language}</span>
                              </span>`
                          }
                          <a href="${repo.html_url}/stargazers" target="_blank" class="repo_summary-item">
                              <img class="icon repo_summary-icon" src="images/star.svg">
                              <span class="repo_summary-text">${repo.stargazers_count}</span>
                          </a>
                          <a href="${repo.html_url}/network" target="_blank" class="repo_summary-item">
                              <img class="icon repo_summary-icon" src="images/fork.svg">
                              <span class="repo_summary-text">${repo.forks_count}</span>
                          </a>
                          ${!repo.homepage ? '' :
                              `<a href="${repo.homepage}" target="_blank" class="repo_summary-item">
                                  <img class="icon repo_summary-icon" src="images/globe.svg">
                                  <span class="repo_summary-text">Website</span>
                              </a>`
                          }
                      </div>
                  </footer>
              </div>
          </li>
        `);
      });

      $('.stats_count-stars').text(totalStars);
      $('.stats_count-repos').text(data.length);
      $('.stats_count-languages').text(Object.keys(languages).length);

      const colors = ['5b1301', '015b40', '011c5b', '40015b'];
      Object.keys(languages).sort((a, b) => languages[b] - languages[a]).slice(0, 4).forEach((language, index) => {
        $('.languages').append(
          `<a class="languages_name" href="https://github.com/orgs/SpamTagger/repositories?language=${language.toLowerCase()}" target="_blank" style="background-color:#${colors[index]};">${language}</a>`
        );
      });
    }
  });
});

function getAnchor() {
  var currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}

function toggleMenu() {
  var m = document.getElementById("header_menu");
  var s = document.getElementById("menu_spacer");
  var b = document.getElementById("menu_button");
  var window_top = window.scrollY;
  if (m.style.display == "" || m.style.display == 'none') {
    m.style.display = 'block';
    if (window_top > 90) {
      s.style.display = 'block';
    }
    b.style.transform = 'rotate(45deg)';
  } else {
    m.style.display = 'none';
    if (window_top > 90) {
      s.style.display = 'none';
    }
    b.style.transform = '';
  }
}

function stickMenu() {
  var m = document.getElementById("header_menu");
  var s = document.getElementById("menu_spacer");
  var window_top = window.scrollY;
  if (window_top > 90) {
    m.classList.add('menu_stick');
    if (document.getElementById('header_menu').style.display == 'block') {
      s.style.display = 'block';
    }
  } else {
    m.classList.remove('menu_stick');
    s.style.display = 'none';
  }
}

window.addEventListener('scroll', stickMenu);
stickMenu();
