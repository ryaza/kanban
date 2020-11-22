<template>
    <div class="board__wrapper">
        <div class="board__button">
            <button-component @click="showModal">
                Create a new card
            </button-component>
        </div>
        <div class="board__columns">
            <column-component
                v-for="(column, key) in columns"
                class="columns__column"
                :key="`column-${key}`"
            >
                <template v-slot:title>
                    {{ column.title }}
                </template>
                <template v-slot:cards>
                    <div
                        v-for="(card, key) in cards"
                        :key="`card-${key}`"
                        class="board__card"
                    >
                        <card-preview-component
                            v-if="column.type === card.columnType"
                            :card="card"
                        />
                        <modal-component
                            v-show="card.isEditMode"
                            @closeModal="setEditMode({ id: card.id, value: false })"
                        >
                            <template>
                                <card-edit-component :id="card.id" :card="card"/>
                            </template>
                        </modal-component>
                    </div>
                </template>
            </column-component>
        </div>
        <modal-component
            v-show="isModalVisible"
            @closeModal="closeModal"
        >
            <template>
                <card-edit-component />
            </template>
        </modal-component>
    </div>
</template>
<script src="./BoardComponent.js"/>
<style
    src="./BoardComponent.scss"
    lang="scss"
/>
