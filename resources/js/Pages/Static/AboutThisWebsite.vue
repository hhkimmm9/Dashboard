<template>
    <div class="p-10">
        <div class="text-center font-bold">
            <h1 class="text-5xl">Initial Design Sketch</h1>

            <div class="mt-8">
                <swiper-container
                    :slides-per-view="3"
                    :space-between="spaceBetween"
                    :centered-slides="true"
                    :pagination="{
                    hideOnClick: true
                    }"
                    :breakpoints="{
                    768: {
                        slidesPerView: 3,
                    },
                    }"
                    @progress="onProgress"
                    @slidechange="onSlideChange"
                >
                    <swiper-slide class="border p-5 rounded">
                        <h2 class="text-2xl mb-5"> Wireframe </h2>
                        <img src="/storage/img/wireframe.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="border p-5 rounded">
                        <h2 class="text-2xl"> Dashboard </h2>
                        <img src="/storage/img/dashboard_home.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="border p-5 rounded">
                        <h2 class="text-2xl"> Block Six </h2>
                        <img src="/storage/img/blocksix.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="border p-5 rounded">
                        <h2 class="text-2xl"> Notes </h2>
                        <img src="/storage/img/notes_layout.png" alt="">
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
        <div class="text-center font-bold mt-16">
            <h1 class="text-5xl">Figma Design Sample</h1>
            <div class="mt-8">
                <swiper-container
                    :slides-per-view="3"
                    :space-between="spaceBetween"
                    :centered-slides="true"
                    :pagination="{
                    hideOnClick: true
                    }"
                    :breakpoints="{
                    768: {
                        slidesPerView: 3,
                    },
                    }"
                    @progress="onProgress"
                    @slidechange="onSlideChange"
                >
                    <swiper-slider class="border p-5 rounded">
                        <h2 class="text-2xl mb-5"> Dashboard </h2>
                        <img src="/storage/img/dashboard_home_figma.png" alt="">
                    </swiper-slider>
                    <swiper-slider class="border p-5 rounded">
                        <h2 class="text-2xl mb-5"> Block Six </h2>
                        <img src="/storage/img/blocksix_figma.png" alt="">
                    </swiper-slider>
                    <swiper-slider class="border p-5 rounded">
                        <h2 class="text-2xl mb-5"> Notes </h2>
                        <img src="/storage/img/notes_figma.png" alt="">
                    </swiper-slider>
                </swiper-container>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const spaceBetween = 10;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
            // console.log(progress)
        };

        const onSlideChange = (e) => {
            // console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
    }
}
</script>

<style scoped>

</style>