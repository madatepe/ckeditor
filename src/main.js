import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import CKEditor from '@ckeditor/ckeditor5-vue';

createApp(App).use( CKEditor ).mount('#app')
