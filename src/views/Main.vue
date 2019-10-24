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
                        <router-link class="nav-link" to="/">
                            <li>Logout</li>
                        </router-link>
                    </ul>
                </nav>

            </header>

            <main>
                <table>
                    <tr>
                        <td id="collapse" rowspan="2">
                            <div id="drawer">
                                <div id="collapse-title">Tops</div>
                                <div style="background-color: white; padding: 12px">
                                    <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                        <el-collapse-item title="Color" name="tops-color">
                                            <input class="checkbox" type="checkbox" id="tops-color-black" name="Black"
                                                   value="black">
                                            <label class="checkbox-label" for="tops-color-black">Black</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-white"
                                                   name="subscribe"
                                                   value="white">
                                            <label class="checkbox-label" for="tops-color-white">White</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-gray"
                                                   name="subscribe"
                                                   value="gray">
                                            <label class="checkbox-label" for="tops-color-gray">Gray</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Type" name="tops-type">
                                            <input class="checkbox" type="checkbox" id="tops-type-cardigans"
                                                   name="Cardigans"
                                                   value="cardigans">
                                            <label class="checkbox-label" for="tops-type-cardigans">Cardigans</label>
                                            <input class="checkbox" type="checkbox" id="tops-type-hoodies_zipups"
                                                   name="Hoodies_Zipups"
                                                   value="hoodies_zipups">
                                            <label class="checkbox-label"
                                                   for="tops-type-hoodies_zipups">Hoodies/Zipups</label>
                                            <input class="checkbox" type="checkbox" id="tops-type-knits" name="knits"
                                                   value="knits">
                                            <label class="checkbox-label" for="tops-type-knits">Knits</label>
                                            <input class="checkbox" type="checkbox" id="tops-type-shirts" name="shirts"
                                                   value="shirts">
                                            <label class="checkbox-label" for="tops-type-shirts">Shirts</label>
                                            <input class="checkbox" type="checkbox" id="tops-type-sweatshirts"
                                                   name="sweatshirts"
                                                   value="sweatshirts">
                                            <label class="checkbox-label"
                                                   for="tops-type-sweatshirts">Sweatshirts</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Brand" name="tops-brand">
                                            <input class="checkbox" type="checkbox" id="tops-brand-8seconds"
                                                   name="8seconds"
                                                   value="8seconds">
                                            <label class="checkbox-label" for="tops-brand-8seconds">8seconds</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-costumeoclock"
                                                   name="costumeoclock"
                                                   value="costuemoclock">
                                            <label class="checkbox-label" for="tops-brand-costumeoclock">Costume
                                                0'clock</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-stockholmsyndrome"
                                                   name="stockholmsyndrome"
                                                   value="stockholmsyndrome">
                                            <label class="checkbox-label" for="tops-brand-stockholmsyndrome">Stockholm
                                                Syndrome</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-tbj" name="tbj"
                                                   value="tbj">
                                            <label class="checkbox-label" for="tops-brand-tbj">TBJ Advanced</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-voiebit"
                                                   name="voiebit"
                                                   value="voiebit">
                                            <label class="checkbox-label" for="tops-brand-voiebit">Voiebit</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-fila" name="fila"
                                                   value="fila">
                                            <label class="checkbox-label" for="tops-brand-fila">FILA</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-markgonzales"
                                                   name="markgonzales"
                                                   value="markgonzales">
                                            <label class="checkbox-label" for="tops-brand-markgonzales">Mark
                                                Gonzales</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-mignonneuf"
                                                   name="mignonneuf"
                                                   value="mignonneuf">
                                            <label class="checkbox-label" for="tops-brand-mignonneuf">Mignonneuf</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-romanticcrown"
                                                   name="romanticcrown"
                                                   value="romanticcrown">
                                            <label class="checkbox-label" for="tops-brand-romanticcrown">Romantic
                                                Crown</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-diamondlayla"
                                                   name="diamondlayla"
                                                   value="diamondlayla">
                                            <label class="checkbox-label" for="tops-brand-diamondlayla">Diamond
                                                Layla</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-konus" name="knous"
                                                   value="konus">
                                            <label class="checkbox-label" for="tops-brand-konus">Konus</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-maryjames"
                                                   name="maryjames"
                                                   value="maryjames">
                                            <label class="checkbox-label" for="tops-brand-maryjames">MaryJames</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-cargobros"
                                                   name="cargobros"
                                                   value="cargobros">
                                            <label class="checkbox-label" for="tops-brand-cargobros">Cargo Bros</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-homboigoing"
                                                   name="homboigoing"
                                                   value="homboigoing">
                                            <label class="checkbox-label" for="tops-brand-homboigoing">Homboi
                                                Going</label>

                                            <input class="checkbox" type="checkbox" id="tops-brand-markm" name="markm"
                                                   value="markm">
                                            <label class="checkbox-label" for="tops-brand-markm">MarkM</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-softur" name="softur"
                                                   value="softur">
                                            <label class="checkbox-label" for="tops-brand-softur">Softur</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-filluminate"
                                                   name="filluminate"
                                                   value="filluminate">
                                            <label class="checkbox-label"
                                                   for="tops-brand-filluminate">Filluminate</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-grooverhyme"
                                                   name="grooverhyme"
                                                   value="grooverhyme">
                                            <label class="checkbox-label" for="tops-brand-grooverhyme">Groove
                                                Rhyme</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-istkunst"
                                                   name="istkunst"
                                                   value="istkunst">
                                            <label class="checkbox-label" for="tops-brand-istkunst">Ist Kunst</label>
                                            <input class="checkbox" type="checkbox" id="tops-brand-thisisneverthat"
                                                   name="thisisneverthat"
                                                   value="thisisneverthat">
                                            <label class="checkbox-label" for="tops-brand-thisisneverthat">thisisneverthat</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Price" name="tops-price">
                                            <div class="block">
                                                <span class="demonstration">Default value</span>
                                                <el-slider :range="true" v-model="value1"></el-slider>
                                            </div>
                                        </el-collapse-item>
                                    </el-collapse>
                                </div>

                                <div id="collapse-title">Bottoms</div>
                                <div style="background-color: white; padding: 12px">
                                    <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                        <el-collapse-item title="Color" name="bottoms-color">
                                            <input class="checkbox" type="checkbox" id="tops-color-black" name="Black"
                                                   value="black">
                                            <label class="checkbox-label" for="tops-color-black">Black</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-white"
                                                   name="subscribe"
                                                   value="white">
                                            <label class="checkbox-label" for="tops-color-white">White</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-gray"
                                                   name="subscribe"
                                                   value="gray">
                                            <label class="checkbox-label" for="tops-color-gray">Gray</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Type" name="bottoms-type">
                                            <input class="checkbox" type="checkbox" id="tops-color-black" name="Black"
                                                   value="black">
                                            <label class="checkbox-label" for="tops-color-black">Black</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-white"
                                                   name="subscribe"
                                                   value="white">
                                            <label class="checkbox-label" for="tops-color-white">White</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-gray"
                                                   name="subscribe"
                                                   value="gray">
                                            <label class="checkbox-label" for="tops-color-gray">Gray</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Brand" name="bottoms-brand">
                                            <input class="checkbox" type="checkbox" id="tops-color-black" name="Black"
                                                   value="black">
                                            <label class="checkbox-label" for="tops-color-black">Black</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-white"
                                                   name="subscribe"
                                                   value="white">
                                            <label class="checkbox-label" for="tops-color-white">White</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-gray"
                                                   name="subscribe"
                                                   value="gray">
                                            <label class="checkbox-label" for="tops-color-gray">Gray</label>
                                        </el-collapse-item>

                                        <el-collapse-item title="Price" name="bottoms-price">
                                            <input class="checkbox" type="checkbox" id="tops-color-black" name="Black"
                                                   value="black">
                                            <label class="checkbox-label" for="tops-color-black">Black</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-white"
                                                   name="subscribe"
                                                   value="white">
                                            <label class="checkbox-label" for="tops-color-white">White</label>
                                            <input class="checkbox" type="checkbox" id="tops-color-gray"
                                                   name="subscribe"
                                                   value="gray">
                                            <label class="checkbox-label" for="tops-color-gray">Gray</label>
                                        </el-collapse-item>
                                    </el-collapse>
                                </div>
                            </div>

                            <ul id="interaction">
                                <li>
                                    <router-link class="nav-link" to="/">
                                        <button>Save</button>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="nav-link" to="/">
                                        <button>Checkout</button>
                                    </router-link>
                                </li>
                            </ul>

                        </td>
                        <td class="coverflow-area">
                            <coverflow :coverList="coverListTopsCardigans" :width="1250" :coverWidth="250"
                                       :index="10" style="margin: 0 auto"></coverflow>
                        </td>
                    </tr>

                    <tr>
                        <td class="coverflow-area">
                            <coverflow :coverList="coverListBottomsDenims" :width="1250" :coverWidth="250"
                                       :index="10" style="margin: 0 auto"></coverflow>
                        </td>
                    </tr>
                </table>
            </main>

            <footer>
                <div class="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a>
                    and <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a
                            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
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
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/8SECONDS_269X5ADY1A.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/COSTUME%20O%E2%80%99CLOCK_COOSCD001BEIGE.png',
                        title: 'COSTUME O’CLOCK'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/STOCKHOLM%20SYNDROME_S93UKL06-BLACK.png',
                        title: 'STOCKHOLM SYNDROME'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/TBJ%20ADVANCED_T194KC720P-GRAY.png',
                        title: 'TBJ ADVANCED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/tops/cardigans/VOIEBIT_V546.png',
                        title: 'VOIEBIT'
                    }
                ],
                coverListBottomsDenims: [
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: 'PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: '1PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/8SECONDS_269X21DP2R.png',
                        title: '8SECONDS'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/BRANDED_LOT1931.png',
                        title: 'BRANDED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/MODIFIED_M%230720.png',
                        title: 'MODIFIED'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH0DPTB15612.png',
                        title: 'PIECE WORKER'
                    },
                    {
                        cover: 'https://raw.githubusercontent.com/htcrefactor/closet-web/master/public/images/men/bottoms/denims/PIECE%20WORKER_PMH3DPTB01002.png',
                        title: 'PIECE WORKER'
                    }
                ],
                value: [4, 8]
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
    header {
        background-color: #2D2F36;
        box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
    }

    nav {
        background-color: transparent;
    }

    #collapse {
        width: 25%;
        margin-right: 20px;
    }

    table {
        margin: 20px;
    }

    #collapse-title {
        font-family: 'Inter UI', sans-serif;
        font-weight: 900;
        margin: 20px 0 10px 0;
    }

    .checkbox {
        height: 16px;
        width: auto;
    }

    .checkbox-label {
        color: #2D2F36;
        width: auto;
    }

    #interaction {
        text-align: center;
    }

    #interaction li {
        text-decoration: none;
        list-style: none;
    }

    #interaction li button {
        background-color: #2D2F36;
        box-shadow: 0 0 40px 16px rgba(0, 0, 0, 0.22);
        border: none;
        color: white;
        height: 40px;
        width: 120px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-family: 'Inter UI', sans-serif;
        font-weight: 900;
    }

    footer {
        padding-top: 8px;
    }

    .icon-credits {
        color: #e2e2e5;
        text-align: right;
        font-style: italic;
        padding-top: 8px;
        padding-right: 12px;

    }

    .icon-credits a {
        text-decoration: none;
        color: #e2e2e5;
        text-underline: none;
    }

</style>