<template>
    <div class="wrapper">
        <header class="relative">
            <img src="/storage/img/space.jpg" class="background">
            <img src="/storage/img/astronaut.png" class="foreground">
            <div class="title text-center">
                <h1 class="text-5xl font-bold"> Harrison Kim </h1>
                <h2 class="text-xl font-semibold"> Full Stack Engineer </h2>
            </div>
            <span class="material-symbols-outlined absolute text-white bottom-8 text-4xl"> keyboard_double_arrow_up </span>
        </header>
        <section class="h-1/2 lg:text-center">
            <h3 class="text-3xl font-bold"> Hello, world! </h3>
            <p class="text-xl mt-3">
                My name is Harrison Kim. I'm a software developer currently focusing on web development mostly.
                <br>
                <br>
                You can reach out to me at <span class="hover:underline hover:text-blue-400">hsookim90@gmail.com</span>
                <br>
                <br>
                Thank you so much for visting my website. 😃
                <br>
            </p> 
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
}

header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
}

.background {
    transform: translateZ(-10px) scale(2);
}
.foreground {
    transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

div h1, h2{
    color: white;
    text-shadow: 0 0 5px black;
}

section {
    padding: 2rem;
    background-color: #333;
    color: white;
}

</style>