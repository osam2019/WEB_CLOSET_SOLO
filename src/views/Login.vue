<template>
    <div class="page-login">
        <div class="container-login">
            <div class="left">
                <div class="login">Login to Closet</div>
                <div class="eula">Start mix & match by logging in right away.
                </div>
            </div>
            <div class="right">
                <svg viewBox="0 0 320 300">
                    <defs>
                        <linearGradient
                                inkscape:collect="always"
                                id="linearGradient"
                                x1="13"
                                y1="193.49992"
                                x2="307"
                                y2="193.49992"
                                gradientUnits="userSpaceOnUse">
                            <stop
                                    style="stop-color:#ff00ff;"
                                    offset="0"
                                    id="stop876"/>
                            <stop
                                    style="stop-color:#ff0000;"
                                    offset="1"
                                    id="stop878"/>
                        </linearGradient>
                    </defs>
                    <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"/>
                </svg>
                <div class="form">
                    <label for="email">Email</label>
                    <input type="email" id="email">
                    <label for="password">Password</label>
                    <input type="password" id="password">
                    <router-link class="nav-link" to="/main"><input type="submit" id="submit" value="Submit"></router-link>
                </div>
            </div>
        </div>
        <script type="application/javascript" src="../assets/scripts/anime-min.js"></script>
        <script type="application/javascript" src="../assets/scripts/login.js"></script>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                property: 'Blank'
            }
        },

        computed: {
            propertyComputed() {
                let anime = document.createElement('script');
                anime.setAttribute('src', "../assets/scripts/anime-min.js");
                document.head.appendChild(anime);
            }
        },

        created() {
            let anime = document.createElement('script1');
            anime.setAttribute('src', "../assets/scripts/anime-min.js");
            document.head.appendChild(anime);

            let login = document.createElement('script2');
            login.setAttribute('src', "../assets/scripts/login.js");
            document.head.appendChild(login);
        }
    }
</script>
