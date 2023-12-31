<template>
    <div class="post-list-container">
        <h2>New Assignments</h2>
        <div class="search-container">
            <input v-model="searchTerm" type="text" placeholder="Search assignments..." class="search-input"
                @input="filterPosts" />
            <button class="search-button" @click="filterPosts">
                <img src="../assets/search.png" alt="Search Icon" />
            </button>
        </div>
        <ul class="post-list">
            <li v-for="post in filteredPosts" :key="post.id" class="post-item" @click="viewPostDetails(post.id)">
                <div class="post-info">
                    <h3>{{ post.title }}</h3>
                    <p class="description">{{ truncate(post.description) }}</p>
                    <p class="created-at">{{ formatDate(post.createdAt) }}</p>
                </div>
                <div class="proposals-count">
                    <span>{{ post.proposals }}</span> Proposals
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            userPosts: [
                {
                    id: 1,
                    title: 'Vue.js Project',
                    description: 'Looking for a Vue.js developer to help with a project. Must have experience with Vuex and Vue Router.',
                    createdAt: new Date('2023-01-15T10:30:00'),
                    proposals: 5,
                },
                {
                    id: 2,
                    title: 'Graphic Design Needed',
                    description: 'In need of a graphic designer to create a logo for my startup. Please submit your portfolio.',
                    createdAt: new Date('2023-01-20T15:45:00'),
                    proposals: 8,
                },
                {
                    id: 3,
                    title: 'Python Programming Assignment',
                    description: 'Need assistance with a Python programming assignment. Deadline is in one week.',
                    createdAt: new Date('2023-01-22T09:00:00'),
                    proposals: 3,
                },
                {
                    id: 1,
                    title: 'Vue.js Project',
                    description: 'Looking for a Vue.js developer to help with a project. Must have experience with Vuex and Vue Router.',
                    createdAt: new Date('2023-01-15T10:30:00'),
                    proposals: 5,
                },
                {
                    id: 2,
                    title: 'Graphic Design Needed',
                    description: 'In need of a graphic designer to create a logo for my startup. Please submit your portfolio.',
                    createdAt: new Date('2023-01-20T15:45:00'),
                    proposals: 8,
                },
                {
                    id: 3,
                    title: 'Python Programming Assignment',
                    description: 'Need assistance with a Python programming assignment. Deadline is in one week.',
                    createdAt: new Date('2023-01-22T09:00:00'),
                    proposals: 3,
                },
                // Add more posts as needed
            ],
            searchTerm: '',
        };
    },
    computed: {
        filteredPosts() {
            return this.userPosts.filter(post =>
                post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
    },
    methods: {
        viewPostDetails(postId) {
            console.log(postId);
        },
        truncate(text) {
            const maxLength = 150;
            return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },
        filterPosts() {
            // Automatically triggered by the search bar input
        },
    },
};
</script>
  
<style scoped>
.post-list-container {
    max-width: 800px;
    margin: auto;
    margin-top: 2rem;
}

.search-bar {
    margin-bottom: 1rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
}

.post-list {
    list-style: none;
    padding: 0;
}

.post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.post-item:hover {
    background-color: #f5f5f5;
}

.post-info {
    width: 70%;
}

.description {
    color: #555;
}

.created-at {
    color: #777;
    font-size: 0.8rem;
}

.proposals-count {
    width: 30%;
    text-align: right;
}

.search-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.search-input {
    flex: 1;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    border-radius: 20px;
}

.search-button {
    padding: 0.7rem 0.8rem;
    background-color: #0a152f;
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-left: 0.5rem;
}

.search-button img {
    width: 20px;
    height: 20px;
}

.search-button:hover {
    background-color: #475c8b;
}
</style>
  