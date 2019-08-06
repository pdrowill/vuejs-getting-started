new Vue({
    el: '#desafio',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value == 37? "Equal Value" : "Different Value"
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});