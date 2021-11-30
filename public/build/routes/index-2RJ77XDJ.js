import {
  Link
} from "/build/_shared/chunk-MIGXM67X.js";
import "/build/_shared/chunk-A4MDZ53X.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B1/PROJECT FULLSTACK/remix-js/jokes/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-LQJHUV2J.css";

// app/routes/index.tsx
var meta = () => {
  return {
    title: "Remix: It's funny!",
    description: "Remix jokes app. Learn Remix and laugh at the same time!"
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Clone ", /* @__PURE__ */ React.createElement("span", null, " Remix Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "jokes"
  }, "Read Jokes")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    reloadDocument: true,
    to: "/jokes.rss"
  }, "RSS")), /* @__PURE__ */ React.createElement(Link, {
    reloadDocument: true,
    to: "/my-first-post.md"
  }, "Posts")))));
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-2RJ77XDJ.js.map
