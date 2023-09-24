<template>
    <div>
      {{ props.message }}
    </div>
  </template>
  
  <script setup>
  import {defineProps} from "vue"

  const props=defineProps(['message'])

  </script>