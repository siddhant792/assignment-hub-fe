<template>
    <div class="post-details-container">
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

        <h3 class="proposals-heading">Proposals</h3>
        <ul class="proposals-list">
            <li v-for="proposal in post.proposals" :key="proposal.id">
                <div class="proposal-header" @click="toggleProposal(proposal.id)">
                    <span>{{ proposal.title }}</span>
                    <button class="chat-button" @click.stop="openChat(proposal.id)">Chat</button>
                </div>
                <div v-if="expandedProposals.includes(proposal.id)" class="proposal-details">
                    <p>{{ proposal.details }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<style scoped>
.post-details-container {
    max-width: 800px;
    margin: auto;
    margin-top: 5rem;
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

.proposals-heading {
    color: #333;
    font-size: 1.3rem;
    margin-top: 1.5rem;
}

.proposals-list {
    list-style: none;
    padding: 0;
}

.proposals-list li {
    margin-top: 1rem;
}

.proposal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;
}

.proposal-header:hover {
    background-color: #e0e0e0;
}

.proposal-header span {
    flex-grow: 1;
}

.chat-button {
  background-color: #0a152f;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.chat-button:hover {
  background-color: #57668a;
}

.proposal-details {
    margin-top: 0.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}
</style>
  
  
<script>
export default {
    data() {
        return {
            post: {
                id: this.$route.params.id,
                title: 'Vue.js Project',
                description: 'Looking for a Vue.js developer to help with a project. Must have experience with Vuex and Vue Router.',
                createdAt: new Date('2023-01-15T10:30:00'),
                attachments: [
                    { id: 1, name: 'Attachment 1', url: 'https://example.com/attachment1.pdf' },
                    // Add more attachments as needed
                ],
                proposals: [
                    { id: 1, title: 'Proposal 1', details: 'I have experience with Vuex and Vue Router.' },
                    { id: 2, title: 'Proposal 2', details: 'I am a skilled Vue.js developer with a portfolio.' },
                    // Add more proposals as needed
                ],
            },
            expandedProposals: [],
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },
        toggleProposal(proposalId) {
            const index = this.expandedProposals.indexOf(proposalId);
            if (index === -1) {
                this.expandedProposals.push(proposalId);
            } else {
                this.expandedProposals.splice(index, 1);
            }
        },
        openChat(proposalId) {
            // Handle opening chat for the selected proposal
            console.log(`Open chat for proposal ${proposalId}`);
        },
    },
};
</script>
  