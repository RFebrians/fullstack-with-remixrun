import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B/PROJECT FULLSTACK/remix-js/jokes/app/routes/posts/test category.md?browser
init_react();

// mdx:/media/zegveld/9EA0FA39A0FA180B/PROJECT FULLSTACK/remix-js/jokes/app/routes/posts/test category.md
init_react();
var import_react = __toModule(require_react());
var attributes = {
  "title": "testing"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.p, null, "wow is this really a simple thing ?"));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var test_category_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links = void 0;
export {
  test_category_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/posts/test category-SAXUZJW6.js.map
