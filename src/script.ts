function removeAd() {
  Array.from(document.querySelectorAll('#gn_interstitial_area')).forEach(e => e.remove())
  const list = document.getElementsByTagName("html")[0].classList
  if (list.contains('gn_inst_scroll_cancel')) {
    document.getElementsByTagName("html")[0].classList.remove('gn_inst_scroll_cancel');
  }
}

window.onload = function() {
  const targetNode = document.querySelector("html");
  const observerOptions = {
    attributes: true,
    subtree: true
  };

  // run script each time new page is opened
  const observer = new MutationObserver(() => {
    
    removeAd()
  });
  if (targetNode) {
    observer.observe(targetNode, observerOptions);
  }
};
