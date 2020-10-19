(function () {
  let tablist = document.querySelectorAll('[role="tablist"]')[0];
  let tabs;
  let panels;

  const keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46,
  };

  const direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1,
  };

  const generateArrays = () => {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  generateArrays();

  const clickEventListener = (event) => {
    let tab = event.target;
    activateTab(tab, false);
  };

  const keydownEventListener = (event) => {
    let key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        activateTab(tabs[0]);
        break;

      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    }
  };

  const keyupEventListener = (event) => {
    let key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    }
  };

  const addListeners = (index) => {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    tabs[index].index = index;
  };
  for (i = 0; i < tabs.length; ++i) {
    console.log(tabs);
    addListeners(i);
  }

  const determineOrientation = (event) => {
    let key = event.keyCode;
    let vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    let proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      }
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      }
    }

    if (proceed) {
      switchTabOnArrowPress(event);
    }
  };

  const switchTabOnArrowPress = (event) => {
    let pressed = event.keyCode;

    for (x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    }

    if (direction[pressed]) {
      let target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        } else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        }
      }
    }
  };

  const activateTab = (tab, setFocus) => {
    setFocus = setFocus || true;
    deactivateTabs();
    tab.removeAttribute('tabindex');
    tab.setAttribute('aria-selected', 'true');
    let controls = tab.getAttribute('aria-controls');
    document.getElementById(controls).removeAttribute('hidden');

    if (setFocus) {
      tab.focus();
    }
  };

  const deactivateTabs = () => {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    }

    for (p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    }
  };

  const focusFirstTab = () => {
    tabs[0].focus();
  };

  const focusLastTab = () => {
    tabs[tabs.length - 1].focus();
  };

  const determineDelay = () => {
    let hasDelay = tablist.hasAttribute('data-delay');
    let delay = 0;

    if (hasDelay) {
      let delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      } else {
        delay = 300;
      }
    }

    return delay;
  };

  let delay = determineDelay();

  const focusEventHandler = (event) => {
    let target = event.target;

    setTimeout(checkTabFocus, delay, target);
  };

  const checkTabFocus = (target) => {
    focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    }
  };
})();
