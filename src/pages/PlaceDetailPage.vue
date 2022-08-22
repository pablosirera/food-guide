<script setup>
import { useRoute, useRouter } from 'vue-router'
import usePlaces from '@/composables/usePlaces'
import { ref } from 'vue'
import useCategories from '@/composables/useCategories'

const route = useRoute()
const router = useRouter()
const { readPlace } = usePlaces()
const { readCategory } = useCategories()

const place = ref({})
const category = ref({})

const loadData = async () => {
  place.value = await readPlace(route.params.id)
  category.value = await readCategory(place.value.category)
}

loadData()
</script>

<template>
  <BaseLayout class="pb-16">
    <ChevronLeftIcon class="w-8 h-8 cursor-pointer" @click="router.go(-1)" />
    <section>
      <div class="relative max-w-screen-xl px-4 py-4 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div class="aspect-w-1 aspect-h-1">
              <img
                alt="Mobile Phone Stand"
                class="object-cover rounded-xl"
                src="https://api.lorem.space/image/burger?w=400&h=225"
              />
            </div>

            <!-- TODO: move this grid to component -->
            <div class="grid grid-cols-2 gap-4 lg:mt-4">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://api.lorem.space/image/burger?w=400&h=225"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://api.lorem.space/image/burger?w=400&h=225"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://api.lorem.space/image/burger?w=400&h=225"
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  class="object-cover rounded-xl"
                  src="https://api.lorem.space/image/burger?w=400&h=225"
                />
              </div>
            </div>
          </div>

          <div class="sticky top-0">
            <strong v-if="place.visited" class="badge badge-secondary">
              He ido
            </strong>

            <div class="flex justify-between mt-6">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                  {{ place.name }}
                </h1>

                <p class="mt-0.5 text-sm">
                  {{ `${category.emoji} ${category.name}` }}
                </p>

                <!-- TODO: move this stars to component rating -->

                <div class="flex mt-2 -ml-0.5">
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>
