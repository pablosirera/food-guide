<template>
  <div>
    <h1 class="text-3xl">Gracias por registrarte!</h1>
    <p>
      Por favor, confirma tu email para poder terminar el registro:
      <b>{{ $route.query.email }}</b>
    </p>
    <router-link class="block cursor-pointer mt-6 font-bold" to="/">
      Ir a inicio
    </router-link>
  </div>
</template>
