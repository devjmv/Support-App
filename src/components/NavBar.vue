<script setup>

</script>

<template>
    <div class="container mt-2 fixed-top">
        <nav class="navbar navbar-expand-lg bg-dark rounded" data-bs-theme="dark" aria-label="Twelfth navbar">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Centered nav only</a>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about" class="nav-link">About</RouterLink>
                        </li>
                        <li class="nav-item dropdown invisible">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped></style>