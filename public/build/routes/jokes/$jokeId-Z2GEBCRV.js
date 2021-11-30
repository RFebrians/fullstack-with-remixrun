import {
  JokeDisplay
} from "/build/_shared/chunk-W2JCKNRN.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import "/build/_shared/chunk-Z6YLDIKF.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-VBUBM3PH.js";
import {
  require_main2 as require_main
} from "/build/_shared/chunk-KNZAXA4D.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/media/zegveld/9EA0FA39A0FA180B/PROJECT FULLSTACK/remix-js/jokes/app/routes/jokes/$jokeId.tsx?browser
init_react();

// app/routes/jokes/$jokeId.tsx
init_react();
var import_react_router_dom = __toModule(require_main());
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
var meta = ({
  data
}) => {
  if (!data) {
    return {
      title: "No joke",
      description: "No joke found"
    };
  }
  return {
    title: `"${data.joke.name}" joke`,
    description: `Enjoy the "${data.joke.name}" joke and much more`
  };
};
function JokeRoute() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement(JokeDisplay, {
    joke: data.joke,
    isOwner: data.isOwner
  });
}
function CatchBoundary() {
  let caught = useCatch();
  let params = (0, import_react_router_dom.useParams)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Huh? What the heck is ", params.jokeId, "?");
    }
    case 401: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Sorry, but ", params.jokeId, " is not your joke.");
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  let { jokeId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", null, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokeRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-Z2GEBCRV.js.map
