<template>
    <div class="authentication-container">
        <h2>{{ isLogin ? 'LOGIN' : 'REGISTER' }}</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <div v-if="!isLogin" class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" v-model="confirmPassword" required />
            </div>
            <div v-if="!isLogin" class="form-group">
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="serviceConsumer" v-model="userType" value="consumer" />
                        <label for="serviceConsumer" class="radio-label">Service Consumer</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="serviceProvider" v-model="userType" value="provider" />
                        <label for="serviceProvider" class="radio-label">Service Provider</label>
                    </div>
                </div>
            </div>
            <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        </form>
        <p @click="toggleLoginMode">
            {{ isLogin ? "Don't have an account? Register here." : 'Already have an account? Login here.' }}
        </p>
    </div>
</template>
  
<style scoped>
.authentication-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-top: 10rem;
}

h2 {
    text-align: center;
    color: #333;
    font-size: 28px;
}

form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    color: #555;
    font-size: 16px;
    margin-bottom: 4px;
}

input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 18px;
    margin-top: 8px;
}

button {
    background-color: #0a152f;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #12378f;
}

p {
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    color: #0a152f;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
}

p:hover {
    color: #6c727f;
}

.radio-group {
    display: flex;
    margin-top: 12px;
}

.radio-option {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.radio-label {
    margin-left: 5px;
    margin-top: 12px;
    font-size: 16px;
    color: #555;
}
</style>
  
<script>
export default {
    data() {
        return {
            isLogin: true,
            username: '',
            password: '',
            confirmPassword: '',
            userType: 'consumer', // Default to Service Consumer
        };
    },
    methods: {
        handleSubmit() {
            // Implement login or registration logic based on 'isLogin' flag
            if (this.isLogin) {
                // Handle login
            } else {
                // Handle registration
                console.log('User Type:', this.userType);
            }
        },
        toggleLoginMode() {
            // Toggle between login and registration mode
            this.isLogin = !this.isLogin;
        },
    },
};
</script>