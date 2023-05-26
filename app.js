const {createApp} = Vue;

createApp({
    data() {
        return{
            titulo: "Primer desafio del curso Vue JS",
            subtitulo: "Contador",
            valorInicial: 0
        }
    },
    created() {
    },
    methods: {
        sumador() {
            return this.valorInicial += 1
        },
        restador() {
            return this.valorInicial -= 1
        }
    },
    computed: {
    }
}).mount("#app");