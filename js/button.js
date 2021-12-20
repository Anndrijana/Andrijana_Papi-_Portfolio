var supportsES6 = (function() {
    // https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
    try {
      new Function('(a = 0) => a');
      return true;
    }
    catch (err) {
      return false;
    }
  }());
  
  
  
  var Button_Click_Animation = (function (window, document) {
  
    'use strict';
    if (!supportsES6) return;
  
    const buttons = document.querySelectorAll('[class^=btn--]');
    const clickedClass = '-js-clicked';
  
    const btn_clicked = e => {
      const btn = e.target;
      btn.classList.add(clickedClass);
      btn.addEventListener('animationend', e => {
        btn.classList.remove(clickedClass);
      }, {once: true});
      btn.focus();
    };
  
    Object.values(buttons).forEach(btn => {
      btn.addEventListener('click', btn_clicked);
      btn.addEventListener('blur', e => {
        e.target.classList.remove(clickedClass);
      });
    });
  
  }(window, document));