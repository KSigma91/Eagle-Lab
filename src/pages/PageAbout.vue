<template>
    <div class="container d-flex flex-column align-items-center m-auto">
        <div class="col-12 col-md-10 col-lg-10">
            <div v-for="(info, index) in pilotProfile" :key="index"
            class="card-profile position-relative d-flex flex-column justify-content-between gap-4 border-0 shadow w-100" style="width: 18rem;">
                <div class="card-header py-5 border-0 bg-white">
                    <img class="position-absolute top-0 start-50 translate-middle rounded-circle" :src="info.photo"  :alt="info.name">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ info.name }}</h5>
                    <p class="card-text p-4 p-md-4">{{ info.info }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-9 col-lg-8">
            <h3 class="py-5 text-start">Contattaci per informazioni</h3>
            <form id="app" method="post" @submit="checkForm" action="/" novalidate="true">
                <div v-if="errors.length" class="text-start text-danger lh-lg">
                    <ul>
                        <li v-for="error in errors" :key="error" class="list-unstyled">- {{ error }}</li>
                    </ul>
                </div>
                <!-- Name input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="name">Nome</label>
                    <input type="text" name="name" placeholder="..." id="name" class="form-control rounded-0" v-model="name" />
                </div>
                <!-- Email input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="email">Email</label>
                    <input type="email" name="email" placeholder="..." id="email" class="form-control rounded-0" v-model="email" />
                </div>
                <!-- Message input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="message">Messaggio</label>
                    <textarea type="text" name="message" placeholder="..." id="message" class="form-control rounded-0" rows="4" v-model="message"></textarea>
                </div>
                <!-- Submit button -->
                <input type="submit" value="Invia" class="btn btn-outline-warning btn-block rounded-0 mb-4 px-4">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageAbout',
    data() {
        return {
            errors: [],
            name: "",
            email: "",
            message: "",
            pilotProfile: [
                {
                    photo: require("../assets/img_profilo_300x.jpg"),
                    name: "Andrea Guidotti",
                    info: "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                    photo: require("../assets/Alessio-Montinaro.jpg"),
                    name: "Alessio Montinaro",
                    info: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
            ]
        }
    },
    methods: {
        checkForm(e) {
            this.errors = [];
            if (!this.name) {
                this.errors.push("Il nome è richiesto");
            }
            if (!this.email) {
                this.errors.push("L'email è richiesta");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("E' richiesta un'email valida");
            }
            if (!this.message) {
                this.errors.push("Il messaggio è richiesto")
            }
            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 150px 0;

    .card-profile {
        margin: 150px 0;
        height: 400px;

        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            object-position: top;
        }
    }

    label {
        font-size: .9rem;
    }
}
</style>