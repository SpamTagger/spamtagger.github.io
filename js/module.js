import {loadMd} from '/js/md2html.js';

function md2(hash) {
  switchHighlighted(hash);
  document.getElementById("header_menu").style.display = 'none';
  document.getElementById("menu_button").classList.remove('button_rotate');
  document.getElementById("Projects").scrollIntoView();
}

export function loadHash() {
  var hash = '';
  if (window.location.hash !== null) {
    hash = window.location.hash;
  }
  switch(hash) {
    case '':
      loadMd('github.com', 'SpamTagger', '.github', 'main', 'profile/WEBSITE.md', 'md1');
      document.getElementById("header").scrollIntoView();
      break;
    case '#About':
      loadMd('github.com', 'SpamTagger', '.github', 'main', 'profile/README.md', 'md1');
      document.getElementById("header").scrollIntoView();
      break;
    case '#SpamTagger':
      loadMd('github.com', 'SpamTagger', 'SpamTagger', 'main', 'README.md', 'md2');
      md2(hash);
      break;
    case '#SpamTagger-Core':
      loadMd('github.com', 'SpamTagger', 'SpamTagger-Core', 'main', 'README.md', 'md2');
      md2(hash);
      break;
    case '#SpamTagger-Bootc':
      loadMd('github.com', 'SpamTagger', 'SpamTagger-Bootc', 'main', 'README.md', 'md2');
      md2(hash);
      break;
    case '#st-exim':
      loadMd('github.com', 'SpamTagger', 'st-exim', 'main', 'README.md', 'md2');
      md2(hash);
      break;
    default:
      alert("Invalid page reference: "+hash);
  }
}

export function switchHighlighted(project) {
  project = project.replace(/^#/, 'project');
  if (window.md2_highlighted != '' && window.md2_highlighted != null) {
    document.getElementById(window.md2_highlighted).classList.remove('active-project');
  }
  window.md2_highlighted = project
  document.getElementById(project).classList.add('active-project');
}

window.loadHash = loadHash;
