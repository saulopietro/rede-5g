import Vue from 'vue';
import Router from 'vue-router';

import Introducao from '@/views/Introducao.vue';
import Oque5g from '@/views/Oque5g.vue';
import Aplicacoes from '@/views/Aplicacoes.vue';
import Beneficios from '@/views/Beneficios.vue';
import Seguranca from '@/views/Seguranca.vue';
import Conclusao from '@/views/Conclusao.vue';
import Referencias from '@/views/Referencias.vue';
import Participantes from '@/views/Participantes.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // para URLs "limpas" sem #
  routes: [
    { path: '/', component: Introducao},
    { path: '/introducao', component: Introducao },
    { path: '/oque5g', component: Oque5g },
    { path: '/aplicacoes', component: Aplicacoes },
    { path: '/beneficios', component: Beneficios },
    { path: '/seguranca', component: Seguranca },
    { path: '/conclusao', component: Conclusao },
    { path: '/referencias', component: Referencias },
    { path: '/participantes', component: Participantes },
  ],
});
