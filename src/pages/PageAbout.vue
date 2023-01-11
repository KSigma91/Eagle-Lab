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
            <form>
                <!-- Name input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="form4Example1">Nome</label>
                    <input type="text" placeholder="Scrivi il tuo nome..." id="form4Example1" class="form-control" />
                </div>
                <!-- Email input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="form4Example2">Email</label>
                    <input type="email" placeholder="Scrivi la tua email..." id="form4Example2" class="form-control" />
                </div>
                <!-- Message input -->
                <div class="form-outline mb-4 text-start">
                    <label class="form-label fst-italic" for="form4Example3">Messaggio</label>
                    <textarea class="form-control" placeholder="Scrivi qui..." id="form4Example3" rows="4"></textarea>
                </div>
                <!-- Submit button -->
                <button type="submit" class="btn btn-outline-warning btn-block rounded-0 mb-4">Invia</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageAbout'
}
</script>

<style lang="scss" scoped>

</style>