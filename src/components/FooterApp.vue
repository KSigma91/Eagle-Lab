<template>
    <div class="container-bottom d-flex flex-wrap justify-content-lg-center align-items-center gap-5 p-5 bg-gradient text-white">
        <div class="logo-footer d-flex flex-column align-items-start gap-5 w-25">
            <img src="../assets/EagleLab_Navbar.png" alt="EagleLab-footer">
            <ul class="d-flex gap-3 list-unstyled fs-2">
                <li>
                    <a href="https://www.facebook.com/eagledrones.salento.9"><i class="fab fa-facebook text-secondary"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andrea-guidotti-1a204224b/"><i class="fab fa-linkedin text-secondary"></i></a>
                </li>
            </ul>
        </div>
        <div class="d-flex flex-wrap gap-5">
            <div class="col text-start">
                <ul class="list-unstyled fw-light">
                    <li class="mb-3">
                        <h6>Contatti</h6>
                    </li>
                    <li>
                        <i class="fas fa-map-marker-alt me-3"></i>
                        Lecce, 73100
                    </li>
                    <li class="d-flex align-items-center my-2">
                        <i class="fas fa-at me-3"></i>
                        <div class="lh-base">
                            alessio.montinaro16@pec.it<br> andrea_guidotti@pec.it
                        </div>
                    </li>
                    <li class="d-flex align-items-center my-2">
                        <i class="fas fa-envelope me-3"></i>
                        <div class="lh-base">
                            alessio.montinaro16@gmail.com<br> andrea19912014@gmail.com
                        </div>
                    </li>
                    <li class="my-2">
                        <i class="fas fa-phone-alt me-3"></i>
                        389 6821133 - 328 7264874
                    </li>
                </ul>
            </div>
            <div class="col text-start">
                <ul class="list-unstyled fw-light">
                    <li class="mb-3">
                        <h6>Link utili</h6>
                    </li>
                    <li class="my-2">
                        <router-link to="/about" class="text-decoration-none text-white">Contattaci</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/services" class="text-decoration-none text-white">Servizi</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/tools" class="text-decoration-none text-white">Strumentazione</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/gallery" class="text-decoration-none text-white">Galleria</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style lang="scss" scoped>
.container-bottom {
    width: 100%;
    //height: 320px;
    height: 100%;
    background:#000;

    .logo-footer {

        img {
            width: auto;
            height: 120px;
        }
    }

    .gallery {
        width: 300px;

        img {
            width: 60px;
            height: 60px;

            @media screen and (max-width: 1361px) {
                width: 100px;
                height: 100px;
            }
        }
    }
}
</style>