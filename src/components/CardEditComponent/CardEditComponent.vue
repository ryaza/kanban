<template>
    <form class="card-edit">
        <div
            v-if="!cardData.isReadMode"
            class="card-edit__header"
        >
            <span v-if="cardId !== null"> Edit the card </span>
            <span v-else> Create a new card </span>
        </div>
        <div v-if="!cardData.isReadMode">
            <div class="card-edit__group">
                <label :for="`${cardId}-title`">
                    Title
                </label>
                <input
                    v-model="cardData.title"
                    type="text"
                    :id="`${cardId}-title`"
                    placeholder="Please enter the title"
                    required
                />
            </div>
            <div class="card-edit__group">
                <label :for="`${cardId}-description`">
                    Description
                </label>
                <textarea
                    v-model="cardData.description"
                    type="text"
                    :id="`${cardId}-description`"
                    placeholder="Please enter the description"
                />
            </div>
            <div
                v-if="cardData.tasks.length > 0"
                class="card-edit__group"
            >
                <div
                    v-for="(task, key) in cardData.tasks"
                    :key="`${cardId}-task-${key}`"
                    class="checkbox__group"
                >
                    <input
                        v-model="task.isCompleted"
                        type="checkbox"
                        :id="`${cardId}-task-${key}-id`"
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
        </div>
        <div v-else>
            <div class="card-edit__group"> {{ cardData.title }} </div>
            <div class="card-edit__group"> {{ cardData.description }} </div>
            <div
                v-if="cardData.tasks.length > 0"
                class="card-edit__group"
            >
                <div
                    v-for="(task, key) in cardData.tasks"
                    :key="`${cardId}-task-read-only-${key}`"
                    class="checkbox__group"
                >
                    <input
                        v-model="task.isCompleted"
                        disabled
                        type="checkbox"
                        :id="`${cardId}-task-read-only-${key}-id`"
                        class="checkbox__checkbox"
                    />
                    <label :for="`${cardId}-task-read-only-${key}-id`">
                        {{ task.title }}
                    </label>
                </div>
            </div>
        </div>
    </form>
</template>
<script src="./CardEditComponent.js"/>
<style
    src="./CardEditComponent.scss"
    lang="scss"
/>
