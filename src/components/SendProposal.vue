<!-- BidForm.vue -->
<template>
    <div class="bid-form">
        <h2 class="bid-form-title">Submit Your Proposal</h2>
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-description">{{ post.description }}</p>
        <p class="post-created-at">{{ formatDate(post.createdAt) }}</p>

        <!-- Display attachments if available -->
        <div v-if="post.attachments.length > 0" class="attachments">
            <h3>Attachments</h3>
            <ul class="attachment-list">
                <li v-for="attachment in post.attachments" :key="attachment.id">
                    <div class="attachment-box">
                        <img src="../assets/attach-file.png" alt="File Icon" class="file-icon">
                        <a :href="attachment.url" target="_blank">{{ attachment.name }}</a>
                    </div>
                </li>
            </ul>
        </div>

        <form @submit.prevent="submitBid">
            <div class="form-group">
                <label for="bidInput">Your Proposal:</label>
                <textarea id="bidInput" v-model="bidText" placeholder="Write your proposal here..." class="proposal-input"
                    required></textarea>
            </div>
            <button type="submit" class="submit-button">Send Proposal</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            bidText: '',
            post: {
                id: this.$route.params.id,
                title: 'Vue.js Project',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate porttitor odio, sit amet dapibus nibh consectetur euismod. Ut hendrerit ipsum a libero rhoncus, eu fringilla ante viverra. Sed elementum velit augue, sit amet elementum mauris tincidunt non. Vestibulum at tincidunt magna, vel dictum augue. In posuere justo sed arcu euismod aliquet. Phasellus vitae fermentum diam, pellentesque mollis sem. Donec pulvinar magna ut ipsum sodales, sed aliquet lacus lobortis. Aliquam vehicula, lorem ac bibendum bibendum, eros tortor congue sapien, eget hendrerit nulla nisi eleifend arcu. Ut vitae nunc nec nibh mattis pretium ac non massa. Donec semper augue est, a efficitur arcu elementum ut. Integer rhoncus et velit at euismod. Maecenas interdum odio vel urna accumsan gravida. Sed ut euismod eros, in consectetur mauris. Vestibulum non justo a lacus ullamcorper finibus in nec risus. Morbi et metus porta, rutrum ante ut, mollis turpis. Integer congue lobortis felis, in ultricies elit condimentum eu. Nam ac enim lacus. Mauris cursus urna nec neque sagittis, vel auctor urna ultrices. Proin eget blandit lacus. Vivamus condimentum diam justo, a imperdiet est dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed pharetra lectus. Curabitur laoreet elementum elit, ut fringilla ex finibus vitae. Nulla tempus id tortor eu pretium. Donec non sagittis arcu. Nam auctor orci ut dignissim sodales. Proin tincidunt odio sed nisl ultrices tempus. Morbi eget placerat urna. Integer molestie vulputate tellus, quis ultrices metus egestas sed. Praesent n',
                createdAt: new Date('2023-01-15T10:30:00'),
                attachments: [
                    { id: 1, name: 'Attachment 1', url: 'https://example.com/attachment1.pdf' },
                    // Add more attachments as needed
                ],
            },
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },
        submitBid() {
            // Handle bid submission logic here
            // You can emit an event or call a method to handle the submission
            this.$emit('bid-submitted', this.bidText);
            // Reset bidText after submission
            this.bidText = '';
        },
    },
};
</script>
  
<style scoped>
/* Add your custom styles for the BidForm component */
.bid-form {
    max-width: 70rem;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.bid-form-title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    text-decoration: underline;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 1.6rem;
    color: #555;
    text-align: left;
}

textarea {
    /* Fixed width */
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    overflow-y: auto;
}

.submit-button {
    display: block;
    padding: 12px;
    background-color: #0a152f;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    margin-left: 1.5rem;
}

.submit-button:hover {
    background-color: #173a5f;
}

.proposal-input {
    width: 65rem;
    height: 10rem;
    resize: vertical;
    max-height: 25rem;
}

.post-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.post-description {
    color: #555;
    margin-bottom: 1rem;
}

.post-created-at {
    color: #777;
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

.attachments {
    margin-top: 1rem;
}

.attachments h3 {
    color: #333;
    font-size: 1.2rem;
}

.attachment-list {
    list-style: none;
    padding: 0;
}

.attachment-box {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 0.5rem;
    transition: background-color 0.3s ease;
    width: 65rem;
    margin-left: 1.5rem;
}

.attachment-box:hover {
    background-color: #f5f5f5;
}

.file-icon {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
}

.attachment-box a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}
</style>
  