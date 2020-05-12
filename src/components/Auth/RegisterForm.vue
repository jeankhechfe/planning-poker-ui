<template>
  <div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="text-center">
                            <img src="../../assets/poker-logo.png" class="logo">
                        </div>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="">
                            <div class="form-group row">
                                <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
                                <div class="col-md-6">
                                    <input id="username" type="text" class="form-control" name="username" required autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" required autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="confirm_password" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6">
                                    <input id="confirm_password" type="password" class="form-control" name="confirm_password" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style scoped>
    .container {
        margin-top: 1.5rem;
    }
        .btn-primary {
            text-transform: uppercase;
            border: 1px solid #CF142B;
            color: #686868;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 0;
        }
        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:active {
            background-color: #CF142B!important;
            color: #fff!important;
            border-color: #CF142B!important;
            -webkit-box-shadow: none!important;
            box-shadow: none!important;
        }
        .form-control:focus {
            border-color: #CF142B;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .card,
        .card-header,
        .form-control {
            border-radius: 0;
        }
        .logo {
            margin: 25px 0;
            width: 30%
        }
</style>
