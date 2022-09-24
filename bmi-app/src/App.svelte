<script>
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Footer from "./components/Footer.svelte";

</script>

<body>
  <div id="container">
    <Header />
    <Main />
    <Footer />
  </div>
</body>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #fce4ec;
    font-family: 'Segoe UI'
  }

  #container {
    background: white;
    width: 25rem;
    min-height: 70vh;
    /* padding: 2rem; */
    margin: 0 auto;
    margin-top: 3rem;
    box-shadow: 0px 10px 13px -7px #000000;

    border-radius: 2rem;

    display: flex;
    flex-direction: column;
  }

</style>
