<template>
    <div>
        <h4>
            Car name: {{ $route.query.name }}
        </h4>
        <h5>
            Car year: {{ year }}
        </h5>

        <div class="scroll"></div>
        <h6 id="scroll">Hello from the bottom</h6>
    </div>
</template>

<script>
  export default {
    computed: {
      year () {
        return this.$route.query.year;
      }
    },
    beforeRouterEnter (to, from, next) {
      console.log(to, from, next);
      console.log('beforeRouterEnter');
      next(true); //Не срабатывает, разобраться
    }
  }
</script>

<style>
    .scroll {
        width: 100px;
        height: 1000px;
        background: #ccc;
    }
</style>