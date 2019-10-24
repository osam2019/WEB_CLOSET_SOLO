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
                        <li>Logout</li>
                    </ul>
                </nav>

            </header>

            <main>
                <table>
                    <tr>
                        <td id="collapse" rowspan="2">
                            <div id = "menu-title">Tops</div>
                            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                <el-collapse-item title="Color" name="tops-color">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Type" name="tops-type">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Brand" name="tops-brand">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Price" name="tops-price">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>
                            </el-collapse>

                            <div id = "menu-title">Tops</div>
                            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                <el-collapse-item title="Color" name="bottoms-color">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Type" name="bottoms-type">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Brand" name="bottoms-brand">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>

                                <el-collapse-item title="Price" name="bottoms-price">
                                    <input type="checkbox" id="tops-color-black" name="Black" value="black">
                                    <label for="tops-color-black">Black</label>
                                    <input type="checkbox" id="tops-color-white" name="subscribe" value="white">
                                    <label for="tops-color-white">White</label>
                                    <input type="checkbox" id="tops-color-gray" name="subscribe" value="gray">
                                    <label for="tops-color-gray">Gray</label>
                                </el-collapse-item>
                            </el-collapse>
                        </td>
                        <td class = "coverflow-area">
                            <coverflow :coverList="coverListBottomsDenims" :width="1250" :coverWidth="300"
                                       :index="10" style="margin: 0 auto"></coverflow>
                        </td>
                    </tr>

                    <tr>
                        <td class = "coverflow-area">
                            <coverflow :coverList="coverListBottomsDenims" :width="1250" :coverWidth="300"
                                       :index="10" style="margin: 0 auto"></coverflow>
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
                coverListTopsCardigans: [
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS_269X5ADY1A'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME_S93UKL06-BLACK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED_T194KC720P-GRAY'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT_V546'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS_269X5ADY1A'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME_S93UKL06-BLACK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED_T194KC720P-GRAY'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT_V546'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS_269X5ADY1A'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME_S93UKL06-BLACK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED_T194KC720P-GRAY'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT_V546'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS_269X5ADY1A'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK_COOSCD001BEIGE'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME_S93UKL06-BLACK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED_T194KC720P-GRAY'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT_V546'
                    }
                ],
                coverListBottomsDenims: [
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS_269X21DP2R'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED_LOT1931'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED_M#0720'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER_PMH0DPTB15612'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER_PMH3DPTB01002'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS_269X21DP2R'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED_LOT1931'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED_M#0720'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER_PMH0DPTB15612'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER_PMH3DPTB01002'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS_269X21DP2R'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED_LOT1931'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED_M#0720'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER_PMH0DPTB15612'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER_PMH3DPTB01002'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS_269X21DP2R'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED_LOT1931'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED_M#0720'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER_PMH0DPTB15612'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER_PMH3DPTB01002'
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
    #collapse {
        width: 25%;
    }

    #menu-title {
        font-family: 'Inter UI', sans-serif;
        font-weight: 900;
    }

    table {
        margin: 20px;
    }

    #collapse {
        margin-right: 20px;
    }

</style>