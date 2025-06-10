<template>
  <div class="p-4">
    <h2 class="text-xl mb-2">Введите строки (по одной на строку):</h2>
    <textarea
      v-model="inputText"
      rows="6"
      class="w-full border p-2 mb-4 rounded"
    ></textarea>

    <h2 class="text-xl mb-2">Результат (между "OE" и "—", либо после "OE"):</h2>
    <textarea
      :value="transformedText"
      rows="4"
      class="w-full border p-2 rounded bg-gray-100"
      readonly
    ></textarea>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputText = ref('');

const transformedText = computed(() => {
  const lines = inputText.value.split('\n');

  const results = lines.map(line => {
    const oeIndex = line.indexOf('OE ');

    if (oeIndex === -1) return null;

    const dashIndex = line.indexOf('—', oeIndex);
    
    let value = '';
    if (dashIndex !== -1) {
      value = line.slice(oeIndex + 3, dashIndex);
    } else {
      value = line.slice(oeIndex + 3);
    }

    return value.trim();
  }).filter(Boolean); // убираем пустые строки/null

  return results.join(', ');
});
</script>