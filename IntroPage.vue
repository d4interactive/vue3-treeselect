<template>
  <div>
    <div class="container">
      <div class="text-center h2 pt-3">Vue TreeSelect Example</div>
      <div class="row p-3">
        <div class="col">
            <Treeselect v-model="selectedValue"  :options="treeList"/>
          <code class="pt-2">
            Tree Structure
            <pre>{{treeList}}</pre>
          </code>
        </div>
        <div class="col">
          selectedValue: <b>{{selectedValue}}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import Treeselect from '/lib/index.js'

const selectedValue = ref('1.2.2')
const treeList = computed(()=> {
  return [
    {
      id: "1",
      label: "Folder 1",
      children: [
        {
          id: "1.1",
          label: "Subfolder 1.1",
        },
        {
          id: "1.2",
          label: "Subfolder 1.2",
          children: [
            {
              id: "1.2.1",
              label: "Subfolder 1.2.1",
            },
            {
              id: "1.2.2",
              label: "Subfolder 1.2.2",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Folder 2",
      children: [
        {
          id: "2.1",
          label: "Subfolder 2.1",
        },
        {
          id: "2.2",
          label: "Subfolder 2.2",
        },
      ],
    },
    {
      id: "3",
      label: "Folder 3",
    },
  ]

})
</script>

<style lang="scss">

</style>
