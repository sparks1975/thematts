const pushups = document.querySelectorAll(".pushup");
const observerOptions = {
  rootMargin: "-50px 0px -20px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pushed");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

pushups.forEach((push) => {
  observer.observe(push);
});

const pushright = document.querySelectorAll(".pushright");
const spacing_right = {
  rootMargin: "-50px 0px -20%",
};

const observer_right = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pushedright");
      self.unobserve(entry.target);
    }
  });
}, spacing_right);

pushright.forEach((pushright) => {
  observer_right.observe(pushright);
});

const pushleft = document.querySelectorAll(".pushleft");
const spacing_left = {
  rootMargin: "-50px 0px -20%",
};

const observer_left = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pushedleft");
      self.unobserve(entry.target);
    }
  });
}, spacing_left);

pushleft.forEach((pushleft) => {
  observer_left.observe(pushleft);
});

window.onhashchange = function () {
  //   _gaq.push([
  //     "_trackPageview",
  //     location.pathname + location.search + location.hash,
  //   ]);

  //   window.dataLayer = window.dataLayer || [];

  //   window.dataLayer.push({
  //     event: "page_view",
  //     pageUrl: location.pathname + location.search + location.hash,
  //     pageTitle: `${document.title} - ${location.hash}`,
  //   });
  const pageTitle = `${document.title} - ${location.hash}`;
  console.log("testing-page_view", pageTitle);
  gtag("event", "page_view", {
    page_title: pageTitle,
    page_location: location.pathname + location.search + location.hash,
  });
};
