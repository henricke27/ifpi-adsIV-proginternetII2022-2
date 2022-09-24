<script type="ts">
    function click() {
        const input_weight = document.getElementById("weight");
        const input_height = document.getElementById("height");

        const result = document.getElementById("result");
        const bmi_span = document.getElementById("bmi");

        const weight = Number(input_weight.value);
        const height = Number(input_height.value);

        const bmi = weight / (height * height);

        bmi_span.innerHTML = bmi.toFixed(1);

        result.style.display = "flex";
        result.classList.add("visivel");
        result.classList.remove("visivel");
    }
</script>

<button id="btn_calculate" on:click={click}>Calculate</button>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #btn_calculate {
        align-self: center;
        border: none;
        width: 60%;
        height: 2.2rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
        background: #f06292;
        color: white;
        font-size: 1.1rem;
        transition: 0.5s;
    }
    #btn_calculate:hover {
        background: #c2185b;
        cursor: pointer;
        border-radius: 1rem;
    }
</style>
