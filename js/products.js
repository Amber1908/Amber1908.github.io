import {createApp} from  'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const url='https://vue3-course-api.hexschool.io/v2';
const path='amberlin081022';
// 產品資料格式
const app=createApp({
    data(){
        return{
            temp:{},
            products: []
        }
    },
    methods:{
        checkLogin(){
                //取 token
                const token = document.cookie.replace(/(?:(?:^|.*;\s*)amberlin081022token\s*=\s*([^;]*).*$)|^.*$/, '$1');
                console.log(token);
                // 把Token 帶到headers的Authorization裡
                axios.defaults.headers.common.Authorization = token;

            //驗證
            axios.post(`${url}/api/user/check`)//要改
            .then(()=>{
                //驗證成功取得商品資訊
                this.getProducts();
            
            }).catch((error)=>{
                console.log(error);
                //提示 驗證失敗
                alert("驗證失敗，請確認帳號密碼是否正確!")
                //轉跳回登入頁
                window.location = "login.html";
            })

        },
        getProducts(){
            axios.get(`${url}/api/${path}/products/all`)
            .then((res)=>{
                console.log(res);
                this.products=res.data.products;
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    mounted() {//一開始要做的事
    this.checkLogin();
    }
});
app.mount('#app');
