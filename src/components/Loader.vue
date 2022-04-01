<template>
    <div class="loader">
        {{$t("Loader")}}
    </div>
</template>
<script>

export default {
    name: 'loader-component',
    props: {
    }
}
</script>
<style scoped>
    .loader{
        padding-top: 30vh;
        color: #FFF;
        text-align: center;
        font-size:6rem;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 91%);
        transition: opacity .2s ease;

    }
</style>