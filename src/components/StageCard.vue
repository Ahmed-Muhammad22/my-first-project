<template>
  <div
    class="stage-card"
    :class="['stage-' + (index + 1)]"
    @click="toggleActive"
  >
    <h3>{{ stage.title }}</h3>
    <p>{{ stage.description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  stage: Object,
  index: Number,
});

const emit = defineEmits(['change-background']);

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;

  // Emit the background change event based on the index
  if (props.index === 1) {
    emit('change-background', 'pink');
  } else if (props.index === 2) {
    emit('change-background', 'blue');
  }
}
</script>

<style scoped>
.stage-card {
  max-width: 530px !important;
  padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
  /* padding: 1.5rem; */
  border-radius: 1.5rem !important;
  margin-bottom: 1rem;
  background-color: #fff;
  color: #334d6e;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
  /* transition: background-color 0.3s ease; */
  cursor: pointer;
}
.stage-2 {
  /* background-color: #a8e0e6; */
  opacity: .75 !important;
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
  padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
}

.stage-3 {
  opacity: .75 !important;
  /* background-color: #b9e3e8; */
}


h3 {
  color: #322f75 !important;
  font-size: 1.5rem !important;
  line-height: 2rem !important;
  font-weight: 700 !important;
  margin-top: 0 !important;
  margin-bottom: 6px !important;
}

p {
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  color: #322f75 !important;
  margin-bottom: 0 !important;
    margin-top: 0 !important;
}
</style>





  