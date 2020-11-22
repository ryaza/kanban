<template>
    <form class="card-edit">
        <div class="card-edit__header">
            <span v-if="id !== null"> Edit the card </span>
            <span v-else> Create a new card </span>
        </div>
        <div class="card-edit__group">
            <label for="title">
                Title
            </label>
            <input
                v-model="cardData.title"
                type="text"
                id="title"
                placeholder="Please enter the title"
                required
            />
        </div>
        <div class="card-edit__group">
            <label for="description">
                Description
            </label>
            <textarea
                v-model="cardData.description"
                type="text"
                id="description"
                placeholder="Please enter the description"
            />
        </div>
        <div
            v-if="cardData.tasks.length > 0"
            class="card-edit__group"
        >
            <div
                v-for="(task, key) in cardData.tasks"
                :key="`task-${key}`"
                class="checkbox__group"
            >
                <input
                    v-model="task.isCompleted"
                    type="checkbox"
                    :id="`task-${key}-id`"
                    class="checkbox__checkbox"
                />
                <div>
                    <input
                        v-show="task.isEditMode"
                        v-model="task.title"
                        type="text"
                        class="checkbox__title"
                        @keydown.enter="setEditCheckBoxMode(key, false)"
                    />
                    <div
                        v-show="!task.isEditMode"
                        class="checkbox__title"
                        @click="setEditCheckBoxMode(key, true)"
                    >
                        {{ task.title }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-edit__group">
            <button-component @click="addTask"> + Add task </button-component>
        </div>
        <button-component
            type="submit"
            @click.prevent="save"
        >
            Save
        </button-component>
    </form>
</template>
<script src="./CardEditComponent.js"/>
<style
    src="./CardEditComponent.scss"
    lang="scss"
/>
