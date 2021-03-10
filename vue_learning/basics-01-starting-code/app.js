const app = Vue.createApp({
    data: () => {
        return {
            courseGoal: "Finish it!",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return "Learn Vue";
            } else {
                return "Master Vue";
            }
        },

        randomize() {
            goal = Math.random();
            if(goal < 0.5) {
                this.courseGoal = "Learn Vue";
            } else {
                this.courseGoal = "Master Vue";
            }
        }
    }
});

app.mount('#user-goal');