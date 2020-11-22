<template>
    <div class="card-preview">
        <div class="card-edit__group">
            {{ card.title }}
        </div>
        <div @click="setEditMode({ id: card.id, value: true })"> EDIT </div>
    </div>
</template>
<script src="./CardPreviewComponent.js"/>
<style
    src="./CardPreviewComponent.scss"
    lang="scss"
/>
