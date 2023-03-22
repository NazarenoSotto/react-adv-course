import { lazy } from "react";
import { LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

export interface RouteInterface {
  to: string;
  path: string;
  name?: string;
  component?: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  redirectTo?: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/Layout/LazyLayout"
    )
);
const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: RouteInterface[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No lazy",
  },

  {
    to: "/*",
    path: "*",
    redirectTo: "/lazy1",
  },
];
