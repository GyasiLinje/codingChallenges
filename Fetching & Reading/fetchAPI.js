async function fetch_data(url_name) {
    const response = await fetch(url_name);
    var data = await response.json();
}