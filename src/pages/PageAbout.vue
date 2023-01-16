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
            <form ref="form" method="post" @submit.prevent="sendMail">
                <div class="d-flex flex-wrap gap-3">
                    <!-- Name input -->
                    <div class="form-outline mb-4 text-start">
                        <label class="form-label fst-italic" for="name">Nome <span class="text-danger">*</span></label>
                        <input type="text" id="name" name="name" class="form-control rounded-0" v-model="name" required />
                    </div>
                    <!-- Lastname input -->
                    <div class="form-outline mb-4 text-start">
                        <label class="form-label fst-italic" for="email">Cognome <span class="text-danger">*</span></label>
                        <input type="text" id="lastname" name="lastname" class="form-control rounded-0" v-model="lastname" required />
                    </div>
                    <!-- Email input -->
                    <div class="form-outline mb-4 text-start">
                        <label class="form-label fst-italic" for="email">Email <span class="text-danger">*</span></label>
                        <input type="email" id="email" name="email" class="form-control rounded-0" v-model="email" required />
                    </div>
                    <!-- Phone input -->
                    <div class="form-outline mb-4 text-start">
                        <label class="form-label fst-italic" for="phone">Cellulare</label>
                        <input type="tel" id="phone" name="phone" class="form-control rounded-0" v-model="phone" />
                    </div>
                </div>
                <!-- Message input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="message">Messaggio</label>
                    <textarea type="text" id="message" name="message" class="form-control rounded-0" rows="8" v-model="message" required></textarea>
                </div>
                <!-- Submit button -->
                <input type="submit" value="Invia" class="btn btn-outline-warning btn-block rounded-0 mb-4 px-4" @click="showAlert">
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2' 

export default {
    name: 'PageAbout',
    data() {
        return {
            name: "",
            lastname: "",
            email: "",
            phone: "",
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
        sendMail(event) {
            event.preventDefault();
            emailjs.sendForm('service_6be7r0c', 'template_rnslkem', this.$refs.form,  'cUDgm2mMCKvxUT_sl')
            .then((result) => {
                console.log('Success', result.status, result.text);
            }, (error) => {
                console.log('Error', error);
            });
            event.target.reset();
        },
        showAlert() {
            if (!this.name || !this.lastname || !this.email.includes('@') || !this.email.includes('.') || !this.message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Si è verificato un errore',
                    text: 'Invio messaggio non riuscito',
                    confirmButtonColor: '#3085d6'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Ben fatto!',
                    text: 'Messaggio inviato con successo',
                    confirmButtonColor: '#3085d6'
                });
            }
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