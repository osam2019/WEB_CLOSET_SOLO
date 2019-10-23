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
                            <coverflow :coverList="coverListTops" :coverWidth="260" :index="1"></coverflow>
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
                coverListTops:  [
                    {
                        cover: 'https://static.mlb-korea.com/images/goods/thnail/m/20190813/31MT01941-50L-17478509599769860.png/dims/resize/800x800',
                        title: '1'
                    }, {
                        cover: 'http://thexshop.co.kr/web/product/medium/201809/1fd4448748fb58a6a068e1563849e4d5.png',
                        title: '2'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1199278/1199278_1_500.jpg',
                        title: '3'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198783/1198783_1_500.jpg',
                        title: '4'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1199295/1199295_1_500.jpg',
                        title: '5'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198170/1198170_3_500.jpg',
                        title: '6'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198175/1198175_4_500.jpg',
                        title: '7'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198238/1198238_2_500.jpg',
                        title: '8'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198239/1198239_2_500.jpg',
                        title: '9'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198440/1198440_1_500.jpg',
                        title: '10'
                    }
                ],
                coverListBottom:  [
                    {
                        cover: 'https://cdn.shopify.com/s/files/1/0086/1991/7392/products/Calvin_Klein_Jeans_Slim_Cool_Collum_300x300.png?v=1552138007',
                        title: '1'
                    }, {
                        cover: 'https://i.ebayimg.com/images/g/dwEAAOSwxCBcmPoM/s-l300.png',
                        title: '2'
                    }, {
                        cover: 'https://cdn.shopify.com/s/files/1/1594/4353/products/Spring19-Mens-Session-Pants-Wine-On-Body_grande.png?v=1551282991',
                        title: '3'
                    }, {
                        cover: 'https://images-dynamic-arcteryx.imgix.net/F19/450x625/Abbott-Pant-Tui.png?auto=format',
                        title: '4'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20190910/1149328/1149328_2_500.jpg',
                        title: '5'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20161222/466299/466299_1_500.jpg',
                        title: '6'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20190830/1137372/1137372_2_500.jpg',
                        title: '7'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191002/1174053/1174053_1_500.jpg',
                        title: '8'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198340/1198340_2_500.jpg',
                        title: '9'
                    }, {
                        cover: 'https://image.msscdn.net/images/goods_img/20191023/1198383/1198383_2_500.jpg',
                        title: '10'
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