<template>
  <div>
    <InteractivePreloader />
    <CustomCursor />
    <NuxtPage />
  </div>
</template>

<style>
/* Hide default cursor on devices with a fine pointer (mouse) */
@media (pointer: fine) {
  body, a, button, input, select, textarea, [role="button"], label, p, h1, h2, h3, h4, h5, h6, div, span, img {
    cursor: none !important;
  }
}
</style>
