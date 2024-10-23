<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import {onMounted} from "vue";
import {VCard, VCardActions, VBtn} from "vuetify/components";
import Container from "@/components/base/Container/Container.vue";

const store = pageStore()

onMounted(() => {
  store.getEvents()
})

</script>

<template>
    <Container>
      <VContainer>
        <VRow>
          <template v-for="(event, i) in store.events.sections">
            <div class="event">
              <VCol>
                <VSheet>
                  <VCard title="Card title" subtitle="Subtitle" :text="event.name">
                    <VCardActions>
                      <RouterLink :to="`/events/${event.slug}`">
                        <VBtn>Подробнее</VBtn>
                      </RouterLink>
                    </VCardActions>
                  </VCard>
                </VSheet>
              </VCol>
            </div>

          </template>
        </VRow>
      </VContainer>
    </Container>
</template>

<style scoped lang="scss">

</style>