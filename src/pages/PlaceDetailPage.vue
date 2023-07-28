<script setup>
import { useRoute, useRouter } from 'vue-router'
import usePlaces from '@/composables/usePlaces'
import { ref } from 'vue'
import useCategories from '@/composables/useCategories'
import { useI18n } from 'vue-i18n'
import StarsRating from '../components/ui/StarsRating.vue'

const route = useRoute()
const router = useRouter()
const { readPlace } = usePlaces()
const { readCategory } = useCategories()
const { t } = useI18n()

const place = ref({})
const category = ref({})

const loadData = async () => {
  place.value = await readPlace(route.params.id)
  category.value = await readCategory(place.value.category)
}

loadData()
</script>

<template>
  <BaseLayout>
    <ChevronLeftIcon class="w-8 h-8 cursor-pointer" @click="router.go(-1)" />
    <section>
      <div class="relative max-w-screen-xl px-4 py-4 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div class="aspect-w-1 aspect-h-1">
              <img
                alt="Mobile Phone Stand"
                class="object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
            </div>

            <!-- TODO: move this grid to component -->
            <div class="grid grid-cols-2 gap-4 lg:mt-4">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
            </div>
          </div>

          <div class="sticky top-0">
            <strong v-if="place.visited" class="badge badge-secondary">
              {{ t('places.visited') }}
            </strong>

            <div class="flex justify-between mt-6">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                  {{ place.name }}
                </h1>

                <p class="mt-0.5 text-sm">
                  {{ `${category.emoji} ${category.name}` }}
                </p>

                <StarsRating :stars="place.rating || 0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>
