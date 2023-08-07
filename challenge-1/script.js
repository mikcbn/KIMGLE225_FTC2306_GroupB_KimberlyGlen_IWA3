import { company } from './challenge-1/configuration.js';
import { year } from './challenge-1/configuration.js';

function updateFooter() {
  const message = `© ${company} (${year})`;
  document.querySelector('footer').innerText = message;
}

document.addEventListener('DOMContentLoaded', updateFooter); // Call updateFooter after the HTML has loaded