function removeReadUser() {
  const users = document.querySelectorAll(".scout-users-index__card");

  // filter Users with memo
  const usersWithMemo = Array.from(users).filter((user: Element) => {
    const memo = user.querySelector(".MemoContainer");
    if (memo) {
      const withComment = memo.querySelector(".memos");
      return withComment;
    }
  });

  // remove all users with memo in that page
  usersWithMemo.forEach((user: Element) => {
    user.remove();
  });

  // set search result count to what's displayed on the page
  const searchResultCount = document.querySelector(".text-jumped-large");
  if (searchResultCount) {
    searchResultCount.innerHTML = (
      users.length - usersWithMemo.length
    ).toString();
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
    removeReadUser();
  });
  if (targetNode) {
    observer.observe(targetNode, observerOptions);
  }
};
