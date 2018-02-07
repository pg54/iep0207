import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../page/grid/Grid.vue'

import StudentFile from '../page/studentFile/StudentFile.vue'
import PatientInfo from '../page/studentFile/patientInfo/PatientInfo.vue'
import PatientRegister from '../page/studentFile/patientInfo/patientRegister/PatientRegister.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'studentFile'
    },
    {
      path: '/studentFile',
      name: 'studentFile',
      component: StudentFile,
      children: [
        {
          path: 'patientInfo',
          name: 'patientInfo',
          component: PatientInfo,
          children: [
            {path: 'patientRegister', name: 'patientRegister', component: PatientRegister}

          ]
        }


      ]
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }

  ]
})
