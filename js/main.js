// Always load profile page to first block
import {loadMd} from '/js/md2html.js';
import {loadHash, switchHighlighted} from '/js/module.js';

document.addEventListener("DOMContentLoaded", () => {
  switch(window.location.hash) {
    case null:
    case '':
      loadMd('github.com', 'SpamTagger', '.github', 'main', 'profile/WEBSITE.md', 'md1');
      loadMd('github.com', 'SpamTagger', 'SpamTagger', 'main', 'README.md', 'md2');
      switchHighlighted('#SpamTagger');
    case '#About':
      loadMd('github.com', 'SpamTagger', '.github', 'main', 'profile/README.md', 'md1');
      loadMd('github.com', 'SpamTagger', 'SpamTagger', 'main', 'README.md', 'md2');
      switchHighlighted('#SpamTagger');
      break;
    default:
      loadMd('github.com', 'SpamTagger', '.github', 'main', 'profile/WEBSITE.md', 'md1');
      switchHighlighted(window.location.hash);
      loadHash();
  }
});

addEventListener('hashchange', loadHash);
