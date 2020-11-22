<template functional>
    <button
        v-bind="data.attrs"
        v-on="listeners"
        :type="props.type"
        class="button"
    >
        <slot/>
    </button>
</template>
<script src="./ButtonComponent.js"/>
<style
    src="./ButtonComponent.scss"
    lang="scss"
/>
