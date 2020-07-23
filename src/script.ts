function removeAd() {
  Array.from(document.querySelectorAll('#gn_interstitial_area')).forEach(e=>e.remove())
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
