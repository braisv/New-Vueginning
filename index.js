const app = new Vue({
    el: '#app',
    data: {
        title: 'A New Vueginning',
        background: 'bg-warning',
        color: false,
        count: 0
    },
    computed: {
        reverse() {
            return this.title.split("").reverse().join("")
        },
        progress() {
            return  {
                'bg-success': this.count <= 10,
                'bg-warning': this.count > 10 && this.count <= 20,
                'bg-danger': this.count > 20
            }
        }
    }
})