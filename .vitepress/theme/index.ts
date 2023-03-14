import DefaultTheme from "vitepress/theme";
// @ts-ignore
import Archives from "./components/Archives.vue";
// @ts-ignore
import Tags from "./components/Tags.vue";
// @ts-ignore
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";
import { EnhanceAppContext } from "vitepress/dist/client";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  },
};
