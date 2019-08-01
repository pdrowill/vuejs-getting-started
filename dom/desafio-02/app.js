new Vue({
    el: '#desafio',
    data: {
        valorOne: '',
        valorTwo: ''
    },
    methods: {
        showAlert() {
            alert('This is a JS alert.');
        },
        keyValue(event) {
            this.valorOne = event.target.value;
        },
        keyValueEnter(event) {
            this.valorTwo = event.target.value;
        }
    }
})