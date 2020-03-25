import VueRouter from 'vue-router';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Form from './pages/Form';
import Car from './pages/Car';
import CarFull from './components/CarFull';
import ErrorCmp from './pages/Error';

export default new VueRouter({
  routes: [
    {
      path: '', //localhost:8080
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull',
          beforeEnter (to, from, next) {
            //console.log(to, from, next);
            let test = 1 + 1 === 2;//проверка например при регистрации или логине
            if (test) {
              next(true)
            } else {
              next(false)
            }
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {selector: to.hash}
    }

    return {
      x: 0,
      y: 0
    }
  }
})