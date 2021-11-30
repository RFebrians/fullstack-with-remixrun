import {
  Link
} from "/build/_shared/chunk-VBUBM3PH.js";
import "/build/_shared/chunk-KNZAXA4D.js";
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
    title: "Forum Sample",
    description: "An Application Fullstack using Remix"
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Forum ", /* @__PURE__ */ React.createElement("span", null, "Remix")), /* @__PURE__ */ React.createElement("h4", null, " An Application using Remix JS"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "jokes"
  }, "Go To Index")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
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
//# sourceMappingURL=/build/routes/index-3OUNPZH5.js.map
