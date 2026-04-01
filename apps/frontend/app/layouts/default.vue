<template>
  <div class="site-shell">
    <header class="topbar">
      <div class="inner">
        <NuxtLink to="/" class="brand">VK</NuxtLink>
        <nav class="nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>