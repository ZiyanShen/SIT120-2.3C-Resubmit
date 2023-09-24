<template>
  <div>
    <!-- 1. Template Syntax -->
    <p>{{ message }}</p>
    <p v-html="rawHtml"></p>
    <div :id="inputId"></div>
    <p>{{ message + ' from Vue!' }}</p>

    <!-- 2. Methods -->
    <button @click="sayHello">Say Hello</button>

    <!-- 3. Reactivity Fundamentals -->
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>

    <!-- 4. Computed Properties -->
    <p>{{ doubledValue }}</p>

    <!-- 5. Class and Style Bindings -->
    <div :class="{ active: isActive }">Active Class</div>
    <div :style="{ color: textColor }">Colored Text</div>

    <!-- 6. List Rendering -->
    <ul>
      <li v-for="(value, key) in items" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <!-- 7. Event Handling -->
    <button @click="handleClick">Inline Event</button>

    <!-- 8. Form Input Bindings -->
    <input type="text" v-model="textInput" />
    <input type="checkbox" v-model="isChecked" />
    <input type="radio" v-model="selectedOption" value="option1" />
    <input type="radio" v-model="selectedOption" value="option2" />
    <select v-model="selectedItem">
      <option value="item1">Item 1</option>
      <option value="item2">Item 2</option>
    </select>
    <textarea v-model="textareaInput"></textarea>

    <!-- 9. Watchers -->
    <input type="text" v-model="valueToWatch">

    <!-- 10. Components -->
    <child-component :message="parentMessage" @message-sent="handleMessage"></child-component>
    <p>{{ receivedMessage }}</p>

  </div>
</template>

<script setup>
  import ChildComponent from './ChildComponent.vue';
  import {computed, reactive, ref, watch} from "vue"; // Import your child component

  // 1. Template Syntax
  const message = ref('Hello, Vue!')
  const rawHtml = ref('<span style="color: red;">Raw HTML content</span>')
  const inputId = ref('unique-id')

  // 2. Methods


  // 3. Reactivity Fundamentals
  const count = ref(0)

  // 4. Computed Properties

  // 5. Class and Style Bindings
  const isActive = ref(true)
  const textColor = ref('blue')

  // 6. List Rendering
  const items = reactive({name: 'John', age: 30, country: 'USA'})

  // 7. Event Handling

  // 8. Form Input Bindings
  const textInput = ref('')
  const isChecked = ref(false)
  const selectedOption = ref('')
  const selectedItem = ref('')
  const textareaInput = ref('')

  // 9. Watchers
  const valueToWatch = ref('')

  // 10. Components
  const parentMessage = ref('Hello from parent!')
  const receivedMessage = ref('')


  // 2. Methods
  function sayHello() {
  alert('Hello, Vue!');
}

  // 3. Reactivity Fundamentals
  function increment() {
  count.value++;
}

  // 7. Event Handling
  function handleClick() {
  alert('Inline event handler clicked');
}

  function handleMessage(message) {
  receivedMessage.value = message;
}

  // 4. Computed Properties
  const doubledValue = computed(() => count.value * 2)

  // 9. Watchers
  watch(valueToWatch, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  // Watcher logic goes here (not included in this example)
})

  // 10. Components
  // 11. Router
  // Vue Router setup goes here (not included in this example)

</script>
