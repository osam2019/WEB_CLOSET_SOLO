<template>
    <div class="page">
        <div class="container">
            <header>
                <div id="logo-img"><img src="../assets/logo.svg"></div>
                <div id="logo-text">Closet</div>

                <nav>
                    <ul>
                        <li>My Closet</li>
                        <li>Lookbooks</li>
                        <li>Guides</li>
                        <li>Find Items</li>
                    </ul>
                </nav>

            </header>

            <main>
                <table>
                    <tr>
                        <td id = "collapse" rowspan="2">
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item title="Consistency" name="1">
                                    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                                    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                                </el-collapse-item>
                                <el-collapse-item title="Feedback" name="2">
                                    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                                    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                                </el-collapse-item>
                                <el-collapse-item title="Efficiency" name="3">
                                    <div>Simplify the process: keep operating process simple and intuitive;</div>
                                    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                                    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                                </el-collapse-item>
                                <el-collapse-item title="Controllability" name="4">
                                    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                                    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                                </el-collapse-item>
                            </el-collapse>
                        </td>
                        <td>
                            <coverflow :coverList="coverListTopsCardigans" :coverWidth="260" :index="1"></coverflow>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <coverflow :coverList="coverListBottom" :coverWidth="260" :index="1"></coverflow>
                        </td>
                    </tr>
                </table>
            </main>

            <footer>
                <div class="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a>
                    from <a
                            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                <div class="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/fjstudio"
                                                           title="fjstudio">fjstudio</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import coverflow from 'vue-coverflow';

    export default {
        components: {
            coverflow
        },
        data() {
            return {
                activeNames: ['1'],
                coverListTopsCardigans:  [
                    {
                        cover: '../assets/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS_269X5ADY1A'
                    },
                    {
                        cover: '../assets/images/men/tops/cardigans/COSTUME O’CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: '../assets/images/men/tops/cardigans/COSTUME O’CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: '../assets/images/men/tops/cardigans/COSTUME O’CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    }

                ],
                coverListBottom:  [
                    {
                        cover: 'https://cdn.shopify.com/s/files/1/0086/1991/7392/products/Calvin_Klein_Jeans_Slim_Cool_Collum_300x300.png?v=1552138007',
                        title: '1'
                    }
                ]
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>

</style>