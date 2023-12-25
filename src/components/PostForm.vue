<template>
    <form @submit.prevent="submitPost" class="post-form">
        <h2>Post Assignment</h2>
        <div class="form-group">
            <label for="title">Title</label>
            <input id="title" v-model="post.title" required>
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="post.description" required></textarea>
        </div>

        <div class="form-group">
            <label for="attachments">Attachment</label>
            <input type="file" id="attachments" accept=".jpg, .png, .jpeg, .pdf" @change="handleAttachment">
        </div>

        <div class="form-group">
            <label for="deadline">Deadline</label>
            <input type="date" id="deadline" v-model="post.deadline" required>
        </div>

        <div class="form-group">
            <label for="budget">Budget</label>
            <div class="budget-input">
                <span>$</span>
                <input type="number" id="budget" v-model="post.budget" required>
            </div>
        </div>

        <button type="submit">Create Post</button>
    </form>
</template>
  
<style scoped>
.post-form {
    max-width: 600px;
    margin: auto;
    margin-top: 5rem;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    color: #555;
}

input,
textarea,
select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}

.budget-input {
    display: flex;
    align-items: center;
}

.budget-input span {
    padding: 10px;
    background-color: #ddd;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
}

</style>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                description: '',
                deadline: '',
                budget: '',
                attachments: null,
            },
        };
    },
    methods: {
        submitPost() {
            
        },
    },
};
</script>
