<template>
    <div class="navbar">
        <div class="logo">
            <router-link :to="{ name: 'my-assignments' }">
                <img src="../assets/logo.png" alt="Logo" @click.stop>
            </router-link>
            
        </div>
        <div class="actions">
            <router-link :to="{ name: 'chats' }">
                <img class="chat-icon" src="../assets/chat.png" alt="Chat" @click.stop>
            </router-link>
            <div class="profile" @click="toggleProfile">
                <img class="profile-picture" src="../assets/profile.png" alt="Profile">
                <div class="profile-options" v-if="isProfileOpen">
                    <p @click="MyPosts">My Posts</p>
                    <p @click="logout">Logout</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isProfileOpen: false,
        };
    },
    methods: {
        openChat() {

        },
        toggleProfile() {
            this.isProfileOpen = !this.isProfileOpen;
        },
        MyPosts() {

        },
        logout() {

        },
    },
};
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    background-color: #0a152f;
}

.logo img {
    width: 180px;
}

.actions {
    display: flex;
    align-items: center;
}

.chat-icon {
    width: 30px;
    margin-right: 2.5rem;
    cursor: pointer;
}

.profile {
    position: relative;
    margin-right: 1rem;
    cursor: pointer;
}

.profile-picture {
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
}

.profile-options {
    position: absolute;
    top: 50px;
    width: max-content;
    right: 0;
    background-color: #0a152f;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    display: none;
}

.profile-options {
    display: block;
}

.profile-options p {
    margin: 0;
    padding: 0.5rem;
    color: #ecf0f1;
    cursor: pointer;
}
</style>
  