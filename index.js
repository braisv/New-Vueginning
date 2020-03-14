const app = new Vue({
    el: '#app',
    data: {
        title: 'A New Vueginning',
        background: 'bg-warning',
        color: false,
        count: 0
    },
    beforeCreate() {
        console.log('Before Create')
    },
    created() {
        console.log('Created')
    },
    beforeMount() {
        console.log('Before Mount')
    },
    mounted() {
        console.log('Mounted')
    },
    beforeUpdate() {
        console.log('Before Update')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        console.log('Before Destroy')
    },
    destroyed() {
        console.log('Destroyed')
    },
    methods: {
        destroyLifecycle() {
            this.$destroy()
        }
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