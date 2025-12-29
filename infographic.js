// Event listeners
document.body.addEventListener('click', handleClick);
for (const $dialog of document.body.querySelectorAll('dialog')) {
  $dialog.addEventListener('close', handleCloseDialog);
}

/**
 * @param {Event & { target: HTMLElement }} event
 */
function handleClick({ target }) {
  // Panel closer
  if (target.matches('.close')) {
    target.closest('dialog').close();
    return;
  }
  // Panel opener
  if (target.id.startsWith('tab_')) {
    const stageNumber = +target.id.split('_').at(-1);
    togglePanel(stageNumber);
    return;
  }
}

/**
 * @param {number} stageNumber
 */
function togglePanel(stageNumber) {
  const $panel = document.getElementById(`panel_${stageNumber}`);
  if ($panel.open) {
    $panel.close();
  } else {
    $panel.show();
    $panel.classList.add('animate');
  }
}

/**
 * @param {Event & { target: HTMLElement }} event
 */
function handleCloseDialog({ target }) {
  target.classList.remove('animate');
  target.removeAttribute('open');
}
