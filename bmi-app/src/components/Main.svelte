<script>
    import InputControl from "./InputControl.svelte";
    import CalculateButton from "./CalculateButton.svelte";
    import ResultArea from "./ResultArea.svelte";
</script>

<main>
    <h2>Type your data</h2>
    <form action="#">
        <InputControl label={"name: "} type={"text"} inputId={"name"}/>
        <InputControl label={"weight: "} type={"number"} inputId={"weight"}/>
        <InputControl label={"height: "} type={"number"} step={0.01} inputId={"height"} />
        <CalculateButton />
    </form>
    <ResultArea />
</main>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    main {
        flex: 1;
        padding: 2rem;
        /* background: yellow; */
    }

    main form {
        width: 100%;
        /* background: red; */

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 0.3rem;
    }

    main h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
</style>
