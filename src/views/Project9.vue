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
  return results.toString().replaceAll(' ', '').replaceAll(',', ', ');
});
const formattedSymbols = computed(() => {
  //const input = "Рульова тяга DACIA 97- RENAULT Logan 04-, Sandero 08-, Lodgy 1.6-1.4 12-, 6001550441, 60 01 547 606, 8660003581";

    // Сначала извлечем «номерные» группы (например, "60 01 547 606"), чтобы не потерять их
    const preservedParts = input_Text.value.match(/\d{2} \d{2} \d{3} \d{3}/g) || [];
// Заменяем их на маркеры
    let tempInput = input_Text.value;
    preservedParts.forEach((part, index) => {
      tempInput = tempInput.replace(part, `__PRESERVED_${index}__`);
    });

    // Заменим "1.6-1.4" на "1.6 1.4"
    tempInput = tempInput.replace(/(\d\.\d)-(\d\.\d)/g, '$1 $2');

    // Обрабатываем диапазоны лет вида "10-14" → "2010, 2014"
    tempInput = tempInput.replace(/\b(\d{2})-(\d{2})\b/g, (_, start, end) => {
      const year1 = parseInt(start) < 30 ? '20' + start : '19' + start;
      const year2 = parseInt(end) < 30 ? '20' + end : '19' + end;
      return `${year1}, ${year2}`;
    });

    // Разбиваем по запятым
    let parts = tempInput.split(',').map(part => part.trim());

    let result = ['купить, в наличии, оригинал, на складе, заказать'];

    parts.forEach(part => {
      const tokens = part.split(/\s+/);
      tokens.forEach(token => {
        // Вернуть сохранённую строку
        if (/__PRESERVED_\d+__/.test(token)) {
          const index = parseInt(token.match(/\d+/)[0]);
          result.push(preservedParts[index]);
        }
        // Год в формате 97-, 04-, 12-
        else if (/^\d{2}-$/g.test(token)) {
          const num = parseInt(token);
          result.push(num < 30 ? '20' + token.slice(0, 2) : '19' + token.slice(0, 2));
        }
        // Прочие токены
        else {
          result.push(token);
        }
      });
    });


    return result.filter(Boolean).join(', ');
  
      
          // return input_Text.value
          //   .replace(/-/g, ",")
          //   .trim()
          //   .split(/\s+/)
          //   .map(item => item.trim())
          //   .filter(item => item.length > 0)
          //   .reduce((acc, item) => {
          //     if (acc.length === 0) return [item];
          //     const last = acc[acc.length - 1];
          //     if (last.endsWith(",") || item.startsWith(",")) {
          //       acc.push(item.replace(/^,+/, ""));
          //     } else {
          //       acc.push(", " + item);
          //     }
          //     return acc;
          //   }, [])
          //   .join("");
})
</script>