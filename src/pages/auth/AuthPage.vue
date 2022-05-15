<script setup></script>

<template>
  <div class="h-full overflow-x-hidden flex flex-col bg-secondary">
    <section class="py-20">
      <h1 class="text-center text-3xl font-bold">Food Guide</h1>
    </section>

    <section class="login-body flex justify-center h-full bg-base-100">
      <div class="h-full w-2/5 flex flex-col justify-around">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
