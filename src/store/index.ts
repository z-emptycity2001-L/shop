import {createStore} from 'vuex'
import main from './modules/mainStore'
export default createStore({
    modules:{
        main
    }
})