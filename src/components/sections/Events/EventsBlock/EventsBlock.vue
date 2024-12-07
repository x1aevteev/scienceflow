<script setup lang="ts">
import {pageStore} from "@/stores/MainStore";
import {onMounted, type PropType} from "vue";
import {VCard, VCardActions, VBtn} from "vuetify/components";
import Container from "@/components/base/Container/Container.vue";
import Card from "@/components/base/Card/Card.vue";

const store = pageStore()

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    required: true,
  },
})
console.log(props.data)
</script>

<template>
    <Container>
      <h3 class="text-h6">{{props.data.title}}</h3>
      <VContainer>
        <VRow>
          <template v-for="(event, i) in props.data.sections">
            <div class="event">
              <VCol>
                <VSheet>
                  <Card
                  :data="props.data"
                  />
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