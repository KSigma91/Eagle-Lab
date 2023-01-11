<template>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid position-relative">
            <a class="navbar-brand" href="/">
                <img src="../assets/EagleLab_Navbar.png" alt="EagleLab-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav d-flex justify-content-center gap-4">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/service">Servizi</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/tool">Strumentazione</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/gallery">Galleria <i class="fas fa-chevron-down" style="font-size: .6rem;"></i></router-link>
                        </li> -->
                        <li class="nav-item dropdown position-relative">
                            <router-link class="nav-link" to="/gallery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Galleria <i class="fas fa-chevron-down" style="font-size: .6rem;"></i>
                            </router-link>
                            <ul class="dropdown-menu dropdown-menu-dark border-0 rounded-0 p-3 shadow" style="margin-top: 15px" role="menu" aria-labelledby="dLabel">
                                <li>
                                    <router-link class="dropdown-item d-flex justify-content-start align-items-center gap-3 p-2 py-3" to="/mavic">
                                        <img src="../assets/MavicAir2S.jpg" alt="Mavic-Air-2s">
                                        Dji Mavic Air 2S
                                    </router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-flex justify-content-start align-items-center gap-3 p-2 py-3" to="/spark">
                                        <img src="../assets/Spark.jpg" alt="Spark">
                                        Dji Spark
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">Chi siamo</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarApp'
}
</script>

<style lang="scss" scoped>
.navbar {
    background: #2E2E37;
    height: 80px;

    @media screen and (max-width: 991px) {
        height: 110px;
    }

    img {
        width: auto;
        height: 80px;
    }

    .navbar-nav {
        width: calc(100% - 106.667px);

        a {
            color: #fff;
            font-size: .9rem;
            font-weight: 300;

            &:hover {
                color: #f5bc41;
                transition: all .2s linear;
            }

            &:focus {
                display: block;
                color: #f5bc41;
                box-shadow: inset 0 -3px 0 #f5bc41;
            }
        }

        .dropdown-item {
            
            &:hover {
                box-shadow: 0 0 0 #000;
                color: #fff;
            }

            &::after {
                position: absolute;
                top: -10px;
                left: 21px;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-bottom: 15px solid #343a40;
                content: '';
                display: block;
                z-index: 2;
                transition: all 200ms linear;

                img {
                    width: 80px;
                    height: 80px;
                }
            }
        }
    }
}
</style>