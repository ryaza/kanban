<template>
    <div class="modal modal__overley">
        <div class="modal__content">
            <div
                class="modal__closer"
                @click="close"
            >
                X
            </div>
            <slot/>
        </div>
    </div>
</template>
<script src="./ModalComponent.js"/>
<style
    src="./ModalComponent.scss"
    lang="scss"
/>
