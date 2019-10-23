<template>
    <div id = "cover-flow">
        <div id="player"></div>
        <script type = "application/javascript" src="../assets/scripts/coverflow.js"></script>
        <script type = "application/javascript">
            coverflow('player').setup({
                flash: '../assets/coverflow.swf',
                playlist: '../assets/playlist.json',
                width: 460,
                height: 240
            });
        </script>
    </div>

</template>

<script>
    export default {
        name: "Coverflow.vue"
    }
</script>

<style scoped>
    @import '../assets/css/coverflow.css';
</style>