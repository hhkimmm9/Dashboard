<template>
        <div class="p-5 bg-white md:text-lg">
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
                <swiper-slide>
                    <p>
                        So the reason why I started building this website is that I needed
                        a portfolio as a web developer, and I also needed a place to play around
                        with up-to-date technologies since I wanted to update my tech stacks as well.
                        <br>
                        <br>
                        At my previous work, I used Laravel and Vue.js, and during the time
                        I work for them I wasn't really able to study something else other than the current stack.
                        <br>
                        <br>
                        Now I have more time to study but that wasn't really something
                        that I will be satisfied with. I wanted to improve my time
                        management skills to achieve more and be more productive so I
                        did my research and found this video.
                        <br>
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <p>
                        So the reason why I started building this website is that I needed
                        a portfolio as a web developer, and I also needed a place to play around
                        with up-to-date technologies since I wanted to update my tech stacks as well.
                        <br>
                        <br>
                        At my previous work, I used Laravel and Vue.js, and during the time
                        I work for them I wasn't really able to study something else other than the current stack.
                        <br>
                        <br>
                        Now I have more time to study but that wasn't really something
                        that I will be satisfied with. I wanted to improve my time
                        management skills to achieve more and be more productive so I
                        did my research and found this video.
                        <br>
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <div class="my-5 lg:max-w-3xl mx-auto">
                        <!-- width="560" height="315" -->
                        <iframe class="w-full md:h-96" src="https://www.youtube.com/embed/clMf1ciEIEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <img src="/storage/img/blocksix_bookcover.jpeg" alt=""
                            class="mt-5 md:mt-10 md:w-1/2 md:mx-auto"
                        >
                    </div>    
                </swiper-slide>
                <swiper-slide>
                    <p>
                        I was fortunately able to purchase this book from google as an
                        E-book. I read it through for a few days, and I realized I had
                        been missing so far and why this was happening.
                        <br>
                        <br>
                        The further I looked back how I had been doing, the more I
                        realized it, and I wanted to fix it.
                        <br>
                        <br>
                        When I started working on my project I thought it would be
                        more enjoyable if I do this somewhat differently. So I decided
                        to contact the author of the book.
                    </p>
                </swiper-slide>
            </swiper-container>
    
        </div>
</template>

<script>
export default {
        setup() {
        const spaceBetween = 10;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress)
        };

        const onSlideChange = (e) => {
            console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
        }
}
</script>

<style lang="scss" scoped>

</style>