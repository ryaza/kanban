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
                        <template v-if="column.type === card.columnType">
                            <div>
                                <card-preview-component :card-id="card.id" />
                            </div>
                            <modal-component
                                v-show="card.isEditMode || card.isReadMode"
                                @closeModal="closeCardModal(card.id)"
                            >
                                <template>
                                    <card-edit-component
                                        :card-id="card.id"
                                    />
                                </template>
                            </modal-component>
                        </template>
                    </div>
                </template>
            </column-component>
        </div>
        <modal-component
            v-show="isModalVisible"
            @closeModal="closeModal"
        >
            <template>
                <card-edit-component
                    @closeModel="closeModal"
                />
            </template>
        </modal-component>
    </div>
</template>
<script src="./BoardComponent.js"/>
<style
    src="./BoardComponent.scss"
    lang="scss"
/>
