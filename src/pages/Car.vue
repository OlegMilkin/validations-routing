<template>
    <div>
        <h1>
            Car id {{ id }}
        </h1>

        <button class="btn btn-sm btn-default" @click="goBackToCars">Back</button>
        <br><br>
        <router-link
            class="btn btn-info"
            tag="button"
            :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
        >
            Full info
        </router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            id: this.$router.currentRoute.params['id']
          }
        },
        watch: {
          $route(toR) {
            this.id = toR.params['id']
          }
        },
        methods: {
          goBackToCars() {
            this.$router.push('/cars')
          }
        },
        beforeRouterLeave (to, fromR, next) {
            console.log('beforeRouterLeave');
            next(false); //Не срабатывает
        }
    }
</script>

<style>

</style>