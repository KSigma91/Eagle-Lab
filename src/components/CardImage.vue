<template>
    <div class="container min-vh-100">
        <h1 class="p-5 text-center text-md-start text-lg-start">DJI Mavic Air 2S</h1>
        <div class="d-flex flex-wrap justify-content-center gap-4 mb-5">
            <div v-for="card in cardList" :key="card" class="img-gallery">
                <a :href="card.photo">
                    <img class="img-fluid rounded-1" :src="card.photo" :alt="card.desc"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardImage',
    data() {
        return {
            cardList: [
                {
                    id: 0,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 1,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 2,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 3,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 4,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 5,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 6,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 7,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                {
                    id: 8,
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.img-gallery {

    img {
        width: 350px;
        height: 280px;

        &:hover {
            box-shadow: 0 6px 10px #a7a7a7;
            opacity: 70%;
            transform: scale(1.03);
            transition: all .3s ease-in-out;
        }

        &:not(:hover) {
            transform: scale(1);
            transition: all .3s ease-in-out;
        }
    }
}
</style>