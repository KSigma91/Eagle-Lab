<template>
    <div>
        <div class="container-fluid">
            <h1 class="p-5">Esplora i nostri servizi</h1>
            <div class="d-flex flex-wrap justify-content-center">
                <ul v-for="(service, index) in serviceList" :key="index">
                    <li class="card d-flex flex-column justify-content-between align-items-center p-5 text-center border border-light border-2 rounded-0 list-unstyled">
                        <img class="mb-3" :src="service.icon" :alt="service.title">
                        <h5>{{ service.title }}</h5>
                        <p class="mt-3 fw-light">{{ service.info }}</p>
                        <a href="#">Scopri di più</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-for="(info, index) in serviceInfoList" :key="index" class="bg-section">
            <div class="bg-opacity d-flex justify-content-center bg-dark bg-opacity-50">
                <div class="col-lg-10">
                    <div class="container d-flex flex-column flex-md-column flex-lg-row justify-content-around align-items-center p-3">
                        <div class="d-flex flex-column gap-4 text-wrap text-start text-white p-2">
                            <h1 class="m-0 fw-bold">{{ info.title }}</h1>
                            <h2>lorem</h2>
                            <p>{{ info.text }}</p>
                        </div>
                        <ul class="card__info list-unstyled d-flex flex-column flex-md-column flex-lg-column align-items-center gap-3 m-auto rounded-3 p-4">
                            <li>
                                <div class="card__icon d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 p-2">
                                    <img class="rounded-circle opacity-100" src="../assets/Icone-EagleLab-3d.png" alt="EagleLab-3d">
                                    <p class="border-0 m-auto text-center text-lg-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veritatis esse repudiandae in, libero illum adipisci fugit quis modi, beatae pariatur qui cumque voluptates nisi error enim? Nam, repellat ducimus?</p>
                                </div>
                            </li>
                            <li>
                                <div class="card__icon d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 p-2">
                                    <img class="rounded-circle opacity-100" src="../assets/Icone-EagleLab-2d-3d.png" alt="EagleLab-2d-3d">
                                    <p class="border-0 m-auto text-center text-lg-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veritatis esse repudiandae in, libero illum adipisci fugit quis modi, beatae pariatur qui cumque voluptates nisi error enim? Nam, repellat ducimus?</p>
                                </div>
                            </li>
                            <li>
                                <div class="card__icon d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 p-2">
                                    <img class="rounded-circle opacity-100" src="../assets/Icone-EagleLab-cons.png" alt="EagleLab-2d-3d">
                                    <p class="border-0 m-auto text-center text-lg-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veritatis esse repudiandae in, libero illum adipisci fugit quis modi, beatae pariatur qui cumque voluptates nisi error enim? Nam, repellat ducimus?</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="price">
            <h1 class="p-5">Confronta i nostri prezzi e paga</h1>
            <div class="container d-flex flex-wrap justify-content-center gap-5 my-5">
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0"><h5 class="m-0">Pacchetto 1</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>300 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0 bg-primary"><h5 class="m-0">Pacchetto 2</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>500 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0 bg-success"><h5 class="m-0">Pacchetto 3</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>800 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageService',
    data() {
        return {
            serviceList: [
                {
                    icon: require("../assets/Icone-EagleLab.png"),
                    title: "Fotografia e ripresa aerea",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel obcaecati maiores distinctio delectus impedit blanditiis dolorum odit corrupti, ducimus fugit veniam fugiat architecto repellendus, nesciunt cum sed qui laboriosam?"
                },
                {
                    icon: require("../assets/Icone-EagleLab-3d.png"),
                    title: "Fotogrammetria aerea",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel obcaecati maiores distinctio delectus impedit blanditiis dolorum odit corrupti, ducimus fugit veniam fugiat architecto repellendus, nesciunt cum sed qui laboriosam?"
                },
                {
                    icon: require("../assets/Icone-EagleLab-2d-3d.png"),
                    title: "Ricostruzione 2D e 3D",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel obcaecati maiores distinctio delectus impedit blanditiis dolorum odit corrupti, ducimus fugit veniam fugiat architecto repellendus, nesciunt cum sed qui laboriosam?"
                },
                {
                    icon: require("../assets/Icone-EagleLab-cons.png"),
                    title: "Consulenze tecniche",
                    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel obcaecati maiores distinctio delectus impedit blanditiis dolorum odit corrupti, ducimus fugit veniam fugiat architecto repellendus, nesciunt cum sed qui laboriosam?"
                },
            ],
            serviceInfoList: [
                {
                    img: require("../assets/DJI_0618.jpg"),
                    title: "Lorem",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel obcaecati maiores distinctio delectus impedit blanditiis dolorum odit corrupti, ducimus fugit veniam fugiat architecto repellendus, nesciunt cum sed qui laboriosam"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    
    img {
        height: 92vh;
    }
}

.container-fluid {
    width: 100%; 

    .card {
        width: 350px;
        height: 530px;
        cursor: default;

        img {
            width: 100px;
            height: auto;
        }

        h5 {
            font-weight: 500;
        }

        &:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 20px #f2f2f2;
            transform: translate(0, -8px);
            transition: all .3s ease-in-out;
        }

        &:not(:hover) {
        transform: translate(0);
        transition: all .3s ease-in-out;
        }
    }
}

.bg-section {
    margin: 30px 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/DJI_0618.jpg);
    background-size: cover;
    background-position: top;
    opacity: 85%;

    .bg-opacity {
        height: 100%;

        .container {
            height: 100%;
            
            h2, p {
                font-weight: 100;
            }

            p {
                padding: 3px 30px;
                border-left: 4px solid #f5bc41;
            }

            .card__info {
                background-color: #fff;
                opacity: 90%;

                .card__icon {

                    img {
                        width: 70px;
                        height: 70px;
                        border: 2px solid #1971f8;
                        object-fit: contain;
                        object-position: center;
                    }
                }
            }
        }
    }
}

.price {

    .card {
        width: 350px;
        height: 500px;
    }
}
</style>