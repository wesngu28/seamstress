<script>
  export let resultant = '';
</script>

{#if resultant}
<div class="flex justify-between bg-cafe-pink dark:bg-periwinkle-blue-200 p-4 my-4 border-black border-2 rounded-2xl items-center text-black">
  <a href={resultant} class="underline hover:font-bold mr-4">{resultant}</a>
  <button on:click={() => {
    if ("ontouchstart" in document.documentElement) {
      resultant.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(resultant);
    } else {
      resultant.select()
      navigator.clipboard.writeText(resultant);
    }
  }} class="ml-4 bg-cafe-bright dark:bg-gwen-bright px-3 leading-4 h-8 font-bold rounded-3xl">Copy</button>
</div>
{/if}