<script lang="ts">
    export let label: string;
    export let type: string;
    export let step: number = 0.0;
    export let inputId: string;
</script>

<div class="input-control">
    <label for={inputId}>{label.toLocaleUpperCase()} </label>
    <input autocomplete="off" type="{type}" step="{step}" id="{inputId}"/>
</div>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .input-control {
        /* background: blue; */
        height: 2rem;

        display: flex;
        flex-direction: row;
    }

    .input-control label {
        /* background: blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 3;
    }

    .input-control input {
        flex: 7;
        /* margin-left: 1rem; */
        border: none;
        border-bottom: 3px solid #fce4ec;
        outline-style: none;
        font-size: 1.2rem;
        transition: 1s;
    }

    .input-control input:focus {
        border: none;
        border-bottom: 4px solid #f48fb1;
        color: #f48fb1;
    }
</style>
