import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B/PROJECT FULLSTACK/remix-js/jokes/app/routes/my-first-post.md?browser
init_react();

// mdx:/media/zegveld/9EA0FA39A0FA180B/PROJECT FULLSTACK/remix-js/jokes/app/routes/my-first-post.md
init_react();
var import_react = __toModule(require_react());
var attributes = {
  "title": "My First Post"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    hr: "hr",
    h1: "h1",
    h2: "h2",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.hr, null), "\n", /* @__PURE__ */ import_react.default.createElement(_components.hr, null), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h1, null, "This is Demo Section"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.hr, null), "\n", /* @__PURE__ */ import_react.default.createElement(_components.h2, null, "Soon"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.hr, null), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Created using markdown format"));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var my_first_post_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  my_first_post_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/my-first-post-R4VDUZNF.js.map
