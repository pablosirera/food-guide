<script setup>
import { SearchIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div class="form-control">
    <div class="input-group">
      <!-- TODO: translate this placeholder -->
      <input
        type="text"
        placeholder="Buscar..."
        class="input input-bordered w-full"
      />
      <button class="btn btn-square">
        <SearchIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>
