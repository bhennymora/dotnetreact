import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contacts", "routes/contacts.tsx"),
  route("messages", "routes/messages.tsx"),
] satisfies RouteConfig;
