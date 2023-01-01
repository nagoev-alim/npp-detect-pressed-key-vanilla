// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='key-codes'>
    <p class='key-codes__lead h3' data-preview=''>Press any key</p>
    <div class='key-codes__container hide' data-container=''>
      <div class='top'>
        <span class='h1' data-value='keyCode'>32</span>
        <span class='h1' data-value='key'>Space</span>
      </div>
      <div class='bottom'>
        <p class='h5'>Key: <span data-value='key'>Space</span></p>
        <p class='h5'>Code: <span data-value='keyCode'>32</span></p>
      </div>
    </div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Query Selector
const DOM = {
  key: document.querySelectorAll('[data-value="key"]'),
  keyCode: document.querySelectorAll('[data-value="keyCode"]'),
  preview: document.querySelector('[data-preview]'),
  container: document.querySelector('[data-container]'),
};

// ⚡️Events
window.addEventListener('keydown', ({ key, keyCode }) => {
  DOM.preview.classList.add('hide');
  DOM.container.classList.remove('hide');
  DOM.key.forEach(k => k.innerHTML = key === ' ' ? 'Space' : key);
  DOM.keyCode.forEach(k => k.innerHTML = keyCode);
});
