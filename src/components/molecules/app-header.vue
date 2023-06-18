<template lang="pug">
header.app-header
    .container
        .flex.flex--x-between.flex--y-center
            .app-header__brand.flex.flex--y-center
                .app-header__logo
                    router-link(to="/")
                        svg(viewBox="0 0 45 36", fill="none", xmlns="http://www.w3.org/2000/svg")
                            path(d="M24.2495 11.7063C29.5681 17.0249 29.5681 25.6481 24.2495 30.9668C18.9308 36.2854 10.3076 36.2854 4.98898 30.9668C-0.32966 25.6481 -0.32966 17.0249 4.98898 11.7063C10.3076 6.38764 18.9308 6.38764 24.2495 11.7063Z", fill="url(#paint0_linear_314_24)")
                            path(d="M35.1075 6.04141C38.5489 9.48289 38.5489 15.0626 35.1075 18.5041C31.666 21.9456 26.0863 21.9456 22.6448 18.5041C19.2033 15.0626 19.2033 9.48289 22.6448 6.04141C26.0863 2.59994 31.666 2.59994 35.1075 6.04141Z", fill="url(#paint1_linear_314_24)")
                            path(d="M43.0429 2.64252C45.233 4.83255 45.233 8.38329 43.0429 10.5733C40.8529 12.7633 37.3022 12.7633 35.1122 10.5733C32.9221 8.38329 32.9221 4.83255 35.1122 2.64252C37.3022 0.452493 40.8529 0.452493 43.0429 2.64252Z", fill="url(#paint2_linear_314_24)")
                            path(d="M24.3202 31.0375C27.0416 28.316 28.3807 24.7357 28.3374 21.169C30.7944 21.3169 33.3008 20.4521 35.1782 18.5748C36.9448 16.8082 37.8148 14.4844 37.788 12.169C39.6422 12.5972 41.6689 12.0888 43.1137 10.644C45.3427 8.41494 45.3427 4.80089 43.1137 2.57181C40.8846 0.34273 37.2705 0.34273 35.0414 2.57181C34.4036 3.20965 33.9483 3.9609 33.6755 4.76065C30.2264 2.55248 25.589 2.95583 22.5741 5.9707C21.6872 6.85764 21.0262 7.88499 20.5913 8.98121C15.4818 6.51123 9.15782 7.39601 4.91827 11.6356C-0.439423 16.9933 -0.439423 25.6798 4.91827 31.0375C10.276 36.3952 18.9625 36.3952 24.3202 31.0375Z", stroke="#C2ECEA", stroke-width="0.2")
                            defs
                                linearGradient(id="paint0_linear_314_24", x1="31.3667", y1="13.9831", x2="10.2506", y2="37.3018", gradientUnits="userSpaceOnUse")
                                    stop(offset="0.0677083", stop-color="#06CDC1")
                                    stop(offset="1", stop-color="#06CDC1", stop-opacity="0")
                                linearGradient(id="paint1_linear_314_24", x1="24.8284", y1="5.63033", x2="18.9561", y2="15.2003", gradientUnits="userSpaceOnUse")
                                    stop(stop-color="#06CDC1")
                                    stop(offset="1", stop-color="#06CDC1", stop-opacity="0")
                                linearGradient(id="paint2_linear_314_24", x1="39.6937", y1="4.1274", x2="35.7235", y2="9.80673", gradientUnits="userSpaceOnUse")
                                    stop(offset="0.0677083", stop-color="#06CDC1")
                                    stop(offset="1", stop-color="#06CDC1", stop-opacity="0")
                .app-header__title
                    router-link(to="/")
                        h2 iAmaDeveloper

            nav.app-header__nav
                ul.app-header__ul.flex.flex--y-center
                    li.app-header__li(
                        v-for="route in routes"
                        :key="route.name"
                    )
                        router-link(:to="route.path") {{ route.name }}
                    li.app-header__li
                        span.m-right--1 theme
                        app-switch(
                        :checked="checked"
                        @changed="toogleTheme")
</template> 

<script>
import AppSwitch from '@/components/molecules/app-switch'
export default {
    name: 'app-header',
    components: {
        AppSwitch
    },
    data(){
        return{
            routes: [
                {
                    name: 'Inicio',
                    path: '/'
                }
            ],
            theme: '',
            oldTheme: '',
            checked: false
        }
    },
    watch: {
        theme(newVal, oldVal){
            if(oldVal){
                document.querySelector('body').classList.remove(`${oldVal}`)
            }
        }
    },
    methods: {
        toogleTheme(){
            const localTheme = JSON.parse(window.localStorage.getItem('theme'))
            if(localTheme){
                if(localTheme === 'theme-dark'){
                    // this.theme = 'theme-light'
                    this.changeTheme('theme-light')
                    this.checked = false
                }
                else{
                    this.changeTheme('theme-dark')
                    this.checked = true
                }
            }
            else{
                if(this.theme === 'theme-dark'){
                    this.changeTheme('theme-light')
                    this.checked = false
                }
                else{
                    this.changeTheme('theme-dark')
                    this.checked = true
                }
            }
        },
        changeTheme(theme){
            this.theme = theme
            window.localStorage.setItem('theme', JSON.stringify(`${this.theme}`))
            document.querySelector('body').classList.add(`${this.theme}`)
        },
        getTheme(){
            const localTheme = JSON.parse(window.localStorage.getItem('theme'))

            if(localTheme && localTheme === 'theme-dark'){
                this.theme = localTheme
                this.checked = true
            }
            else{
                this.theme = 'theme-light'
                this.checked = false
            }
            this.changeTheme(this.theme)
        }
    },
    mounted(){
        this.getTheme()
    }
}
</script>

<style lang="scss">
    .app-header{
        padding: 20px 0;

        &__logo svg{
            width: 30px;
        }
        
        &__title h2{
            font-size: 1.1em;
        }

        @media (min-width: map-get($medias, 'lg')){
            &__logo svg{
                width: 45px;
            }
            
            &__title h2{
                font-size: 1.4em;
            }
        }
    }
</style>