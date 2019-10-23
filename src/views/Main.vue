<template>
    <div class="page">
        <div class="container">
            <div id="header">
                <div class = "logo">
                    <img class="logo-img" src="../assets/logo.svg">
                    <h1>Closet</h1>
                </div>

                <nav>
                    <ul>
                        <li>My Closet</li>
                        <li>Lookbooks</li>
                        <li>Guides</li>
                        <li>Find Items</li>
                    </ul>
                </nav>
                <div class="clear"></div>
            </div>

            <main>
                <table>
                    <tr>
                        <td rowspan = "2">Accordion Menu Area</td>
                        <td>Cover Flow Menu Area</td>
                    </tr>

                    <tr>
                        <td>Cover Flow Menu Area</td>
                    </tr>
                </table>
            </main>

            <div id = "footer">
                Footer content area
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main.vue"
    }
</script>

<style scoped>

</style>