<template>
    <div class="card-preview">
        <div>
            <input
                v-show="isEditMode"
                v-model="textModel"
                type="text"
                @keydown.enter="closeLocalEditMode"
            />
            <div
                v-show="!isEditMode"
                @click="setLocalEditMode(true)"
            >
                {{ title }}
            </div>
        </div>
        <div class="card-preview__buttons">
            <div @click="openReadModal"> VIEW </div>
            <div @click="openEditModal"> EDIT </div>
        </div>
    </div>
</template>
<script src="./CardPreviewComponent.js"/>
<style
    src="./CardPreviewComponent.scss"
    lang="scss"
/>
