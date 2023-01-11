<template>
    <div class="drone__container">
        <div class="container">
            <h1 class="p-5">Mavic Air 2S</h1>
            <div class="drone__list card d-flex justify-content-center align-items-center h-100 m-auto p-5 border-0 shadow col-lg-12">
                <div class="p-5">
                    <img src="../assets/eead2358fecb94ceb86d412f4ca4b67d.png" alt="Mavic_Air_2S">
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    <div v-for="mavic in mavicSpecs" :key="mavic"
                    class="drone__icon d-flex flex-column justify-content-start align-items-center gap-2 p-2 m-3 rounded-4 text-dark">
                        <!-- <img :src="mavic.icon" :alt="mavic.title">
                        <big class="fs-6">{{ mavic.title }}</big>
                        <p>{{ mavic.text }}</p> -->
                    </div>
                </div>
                <div class="my-5">
                    <video width="90%" autoplay loop>
                        <source src="../assets/EagleLabLoop_Site.webm">
                    </video>
                </div>
            </div>
        </div>
        <!-- INFO SERVIZI -->
        <div class="drone__service d-flex flex-column align-items-center">
            <div class="d-flex flex-wrap justify-content-center">
                <div class="drone__text d-flex align-items-center p-4 bg-secondary">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis veniam asperiores quidem? Explicabo corrupti delectus aspernatur similique earum, architecto eaque ea, voluptatum quod repellat tempora velit autem maiores consequuntur!
                    </p>
                </div>
                <img src="https://4.img-dpreview.com/files/p/E~C23x0S1333x1000T1200x900~articles/7348982418/j_Dead_Sea_29-12-2018_18.jpeg" alt="">
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <img src="https://4.img-dpreview.com/files/p/E~C23x0S1333x1000T1200x900~articles/7348982418/j_Dead_Sea_29-12-2018_18.jpeg" alt="">
                <div class="drone__text d-flex align-items-center order-md-2 p-4 bg-secondary">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis veniam asperiores quidem? Explicabo corrupti delectus aspernatur similique earum, architecto eaque ea, voluptatum quod repellat tempora velit autem maiores consequuntur!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTool'
}
</script>

<style lang="scss" scoped>
.drone__container {
    width: 100%;
    height: 100%;
    background-color: #d1dee5;
    
    big {
        font-weight: 500;
    }

    p {
        font-weight: 200;
    }

    .drone__list {
        // debug
        height: 60vh;

        img {
            width: 400px;
            object-fit: cover;

            @media screen and (max-width: 437px) {
                width: 300px;
            }
        }

        .drone__icon {
            width: 200px;
            height: 150px;
            // width: 210px;
            // height: 210px;
            //background: #1d1f25;

            img {
                width: auto;
                height: 32px;
            }
        }

        video {
            box-shadow: 0 80px 50px -70px #000;
        }
    }

    .drone__service {
        padding: 100px 0;
        width: 100%;

        .drone__text {
            width: 600px;
            height: 563px;
            object-fit: cover;

            @media screen and (max-width: 1199px) {
                width: 690px;
                height: 300px;
            }

            @media screen and (max-width: 760px) {
                width: 510px;
                height: 300px;
            }
        }

        img {
            width: 600px;
            height: 563px;

            @media screen and (max-width: 1199px) {
                width: 690px;
                height: 600px;
            }

            @media screen and (max-width: 760px) {
                width: 510px;
                height: 450px;
            }
        }
    }
}
</style>