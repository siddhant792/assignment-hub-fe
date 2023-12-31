<template>
    <div class="post-list-container">
        <h2>My Assignments</h2>
        <ul class="post-list">
            <li v-for="post in userPosts" :key="post.id" class="post-item" @click="viewPostDetails(post.id)">
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
                    createdAt: new Date('2023-01-15T10:30:00'), // Replace with actual creation date
                    proposals: 5, // Number of proposals
                },
                {
                    id: 2,
                    title: 'Graphic Design Needed',
                    description: 'In need of a graphic designer to create a logo for my startup. Please submit your portfolio.',
                    createdAt: new Date('2023-01-20T15:45:00'), // Replace with actual creation date
                    proposals: 8, // Number of proposals
                },
                {
                    id: 3,
                    title: 'Python Programming Assignment',
                    description: 'Need assistance with a Python programming assignment. Deadline is in one week.',
                    createdAt: new Date('2023-01-22T09:00:00'), // Replace with actual creation date
                    proposals: 3, // Number of proposals
                },
                // Add more posts as needed
            ],
        };
    },
    methods: {
        viewPostDetails(postId) {
            // Navigate to the detailed view of the post
            // You can use Vue Router or any other navigation method
            // Example: this.$router.push(`/post-details/${postId}`);
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
    },
};
</script>
  
<style scoped>
.post-list-container {
    max-width: 800px;
    margin: auto;
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
</style>
  