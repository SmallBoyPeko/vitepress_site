<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from "vue";
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

const gitalk = new Gitalk({
  clientID: "758be8ce440c4433fc5d",
  clientSecret: "65b6ef3df58baa3a06a296948f6513115dc6afcb",
  repo: "blog-comments",
  owner: "SmallBoyPeko",
  admin: ["SmallBoyPeko"],
  id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
  language: "zh-CN",
  distractionFreeMode: true, // Facebook-like distraction free mode
  proxy: "https://vercel.younglina.top/github_access_token",
});

onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
<style scoped>
</style>

