<template>
    <div class="chat-container">
        <!-- User list section -->
        <div class="user-list" ref="userListRef">
            <div v-for="user in userList" :key="user.id" @click="selectUser(user)" class="user-parent-container">
                <div>
                    <img :src="user.profilePicture" alt="Profile" class="profile-picture" />
                    <div class="user-info">
                        <h3>{{ user.name }}</h3>
                        <p class="last-message">{{ user.lastMessagePreview }}</p>
                    </div>
                </div>
                <p class="last-seen">{{ user.lastSeen }}</p>
            </div>
        </div>
        <!-- Chat section -->
        <div class="chat-section" ref="chatSectionRef">
            <div v-if="selectedUser" class="chat-section-parent">
                <div class="mini-navbar">
                    <img :src="selectedUser.profilePicture" alt="Profile" class="profile-picture" />
                    <h3>{{ selectedUser.name }}</h3>
                </div>
                <div class="messages">
                    <div v-for="message in selectedUser.messages" :key="message.id" class="message"
                        :class="{ 'sent': message.sentByUser, 'received': !message.sentByUser }">
                        <span class="bubble">{{ message.text }}</span>
                        <span class="timestamp">{{ message.timestamp }}</span>
                    </div>
                </div>
                <div class="message-input">
                    <input v-model="newMessage" placeholder="Type a message..." />
                    <button @click="sendMessage">Send</button>
                </div>
            </div>
            <div v-else>
                <p>Select a user to start chatting.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        let pp =
            'https://cdn-icons-png.flaticon.com/512/1999/1999625.png';
        return {
            userList: [
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
                {
                    id: 1,
                    name: 'John Doe',
                    profilePicture: pp,
                    lastSeen: 'Just now',
                    lastMessagePreview:
                        'Hello there! My name is Siddhant Gupta and Im here to learn vue.js',
                    messages: [],
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePicture: pp,
                    lastSeen: '1 minute ago',
                    lastMessagePreview: 'How are you?',
                    messages: [],
                },
            ],
            selectedUser: null,
            newMessage: '',
        };
    },
    methods: {
        selectUser(user) {
            this.selectedUser = user;
        },
        sendMessage() {
            if (this.selectedUser && this.newMessage.trim() !== '') {
                const timestamp = new Date().toLocaleTimeString();
                this.selectedUser.messages.push({
                    id: Date.now(),
                    text: this.newMessage,
                    sentByUser: true,
                    timestamp,
                });
                // Simulate a received message for demo purposes
                setTimeout(() => {
                    this.selectedUser.messages.push({
                        id: Date.now(),
                        text: 'Received: ' + this.newMessage,
                        sentByUser: false,
                        timestamp,
                    });
                    this.newMessage = '';
                }, 500);
            }
        },
    },
};
</script>
  
<style scoped>
.chat-container {
    display: flex;
    height: 93vh;
    font-family: 'Arial', sans-serif;
    margin-top: 1px;
    overflow: hidden;
}

.user-list {
    width: 25%;
    background-color: #0a152f;
    color: #ffffff;
    padding: 10px;
    overflow-y: auto;
}

.profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.user-info {
    flex-direction: column;
}

.user-info h3 {
    width: 100%;
    text-align: start;
    margin: 0;
}

.user-list div {
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;
}

.user-list div:hover {
    background-color: #2f3237;
}

.last-message {
    margin: 0;
    color: #ababab;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 18rem;
}

.last-seen {
    font-size: 12px;
    float: right;
    color: #7f8c8d;
}

.message-input-input-parent {
    float: inline-end;
}

.user-parent-container {
    display: flex;
    padding: 3px 0px 3px 0px;
    justify-content: space-between;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 5px;
}

.chat-section {
    flex: 1;
    margin-left: 0.1rem;
    background-color: #f2f3f5;
    overflow-y: auto;
}

.chat-section-parent {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.mini-navbar,
.messages,
.message-input {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.mini-navbar {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    background-color: #0a152f;
    border-radius: 0.2rem;
    padding: 0.5rem;
    align-self: flex-start;
    order: -1;
    flex-shrink: 0;
}

.profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
}

.mini-navbar h3 {
    text-align: start;
    color: #ffffff;
}

.messages {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.sent {
    background-color: #27ae60;
    color: #ffffff;
    align-self: flex-end;
}

.received {
    background-color: #3498db;
    color: #ffffff;
}

.timestamp {
    font-size: 12px;
    color: #7f8c8d;
    margin-left: 10px;
}

.message-input {
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 15px;
    align-self: flex-end;
    order: 1;
    flex-shrink: 0;
}

input {
    flex: 1;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}

button {
    background-color: #27ae60;
    color: #ffffff;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
}

button:hover {
    background-color: #219653;
}

.message {
    display: flex;
    justify-content: space-between;
    margin: 8px;
    width: fit-content;
    max-width: 60%;
    flex-direction: column;
}

.sent {
    float: right;
    border-radius: 15px 15px 0px 15px;
    background-color: #d5d5d5;
}

.received {
    border-radius: 15px 15px 15px 0px;
    background-color: #bdbdbd;
}

.bubble {
    padding: 12px;
    color: #000000;
    word-wrap: break-word;
    text-align: start;
}

.timestamp {
    color: #000000;
    font-size: 12px;
    text-align: start;
    padding: 0px 4px 5px 4px;
}
</style>
  