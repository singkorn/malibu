/* eslint-disable no-console, no-unused-vars, import/extensions, object-shorthand, global-require */
import createApp from "@quintype/framework/server/create-app";
import logger from "@quintype/framework/server/logger";
import { isomorphicRoutes, upstreamQuintypeRoutes } from "@quintype/framework/server/routes";
import { SEO } from "@quintype/seo";
import { pickComponent } from "../isomorphic/pick-component";
import { renderLayout } from "./handlers/render-layout";
import { loadData, loadErrorData } from "./load-data";
import { generateRoutes, STATIC_ROUTES } from "./routes";

export const app = createApp();

upstreamQuintypeRoutes(app, { forwardAmp: true });

const STATIC_TAGS = {
  "twitter:site": "Quintype",
  "twitter:app:name:ipad": undefined,
  "twitter:app:name:googleplay": undefined,
  "twitter:app:id:googleplay": undefined,
  "twitter:app:name:iphone": undefined,
  "twitter:app:id:iphone": undefined,
  "apple-itunes-app": undefined,
  "google-play-app": undefined,
  "fb:app_id": undefined,
  "fb:pages": undefined,
  "og:site_name": "Quintype"
};

const STRUCTURED_DATA = {
  organization: {
    name: "Quintype",
    url: "http://www.quintype.com/",
    logo: "https://quintype.com/logo.png",
    sameAs: [
      "https://www.facebook.com/quintype",
      "https://twitter.com/quintype_in",
      "https://plus.google.com/+quintype",
      "https://www.youtube.com/user/Quintype"
    ]
  },
  enableLiveBlog: true
};

isomorphicRoutes(app, {
  appVersion: require("../isomorphic/app-version"),
  logError: error => logger.error(error),
  generateRoutes: generateRoutes,
  loadData: loadData,
  pickComponent: pickComponent,
  renderLayout: renderLayout,
  templateOptions: true,
  loadErrorData: loadErrorData,
  staticRoutes: STATIC_ROUTES,
  seo: new SEO({
    staticTags: STATIC_TAGS,
    enableTwitterCards: true,
    enableOgTags: true,
    enableNews: true,
    structuredData: STRUCTURED_DATA
  }),
  preloadJs: true
});
