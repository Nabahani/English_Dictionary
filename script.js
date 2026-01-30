const inputEl = document.getElementById("input");


async function FetchApi(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    re
}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        FetchApi(inputEl.value);
    }
})