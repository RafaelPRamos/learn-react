import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("/firstComponent", "routes/firstComponent.tsx"),
  ]),
  route("/about", "routes/about.tsx"),
] satisfies RouteConfig;
