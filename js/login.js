import {createApp} from  'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const app=createApp({
    data(){
        return{
            user:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        login:function(){
            console.log(this.user.username);
            const url='https://vue3-course-api.hexschool.io/v2';
            const path='amberlin081022';
            axios.post(`${url}/admin/signin`,this.user)
            .then((res)=>{
                console.log(res);
                //取token 存cookie
                const { token, expired } = res.data;
                    document.cookie = `amberlin081022token=${token}; expires=${new Date(
                    expired
                )}; `;
                console.log(token);
                window.location = "products.html";
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
});
app.mount('#app'); 

