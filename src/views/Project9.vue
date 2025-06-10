<template>
  <div class="">
    <h2 class="">OE:</h2>
    <textarea
      v-model="inputText"
      rows="4"
      class=""
    ></textarea>

    <h2 class="">Between "OE" и "—":</h2>
    <textarea
      :value="transformedText"
      rows="6"
      class=""
      readonly
    ></textarea>
  </div>
    <h2 class="">Fullname:</h2>
    <textarea
      v-model="input_Text"
      rows="6"
      class=""
    >
    </textarea>
    <textarea
      :value="formattedSymbols"
      rows="6"
      class=""
      readonly
    ></textarea>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputText = ref('');
const input_Text = ref('');
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
const formattedSymbols = computed(() => {
          return input_Text.value
            .replace(/-/g, ",")
            .trim()
            .split(/\s+/)
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .reduce((acc, item) => {
              if (acc.length === 0) return [item];
              const last = acc[acc.length - 1];
              if (last.endsWith(",") || item.startsWith(",")) {
                acc.push(item.replace(/^,+/, ""));
              } else {
                acc.push(", " + item);
              }
              return acc;
            }, [])
            .join("");
        });
</script>