<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .slide-enter-active{
    transition: all 1000ms;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-leave-active {
    opacity: 0;
  }

  .slide-leave {
    opacity: 1;
  }

</style>
