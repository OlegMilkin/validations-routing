<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <!-- Links -->
      <ul class="navbar-nav">
        <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" to="/cars" class="nav-item" active-class="active">
          <a class="nav-link">Cars</a>
        </router-link>
        <router-link tag="li" to="/form" class="nav-item" active-class="active">
          <a class="nav-link">Form</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  .nav-item.active {
    background: #ccc;
  }
  .navbar {
    padding: 0;
  }
</style>