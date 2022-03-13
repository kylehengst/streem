<template>
  <router-view />
</template>

<style>
:root {
  color-scheme: light;
}
body {
  overscroll-behavior: none;
}
#app {
  @apply bg-gray-300;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overscroll-behavior: none;
}
</style>
