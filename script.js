document.addEventListener("DOMContentLoaded", function() {
    const downloadList = document.getElementById('download-list');
    const searchBar = document.getElementById('search-bar');
    const downloads = [
        { name: 'File 1', url: 'downloads/file1.zip' },
        { name: 'File 2', url: 'downloads/file2.zip' },
        { name: 'Arrow Cursor', url: 'downloads/ArrowCursor3.png' },
        { name: 'Doors Grumble Nest', url: 'downloads/Doors_Grumble_Nest.mp3' },
        { name: 'Untitled Model', url: 'downloads/Untitled Model.zmbx' },
    ];

    const displayDownloads = (downloads) => {
        downloadList.innerHTML = '';
        downloads.forEach(download => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = download.name;
            link.href = download.url;
            link.download = download.name;
            listItem.appendChild(link);
            downloadList.appendChild(listItem);
        });
    };

    displayDownloads(downloads);

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDownloads = downloads.filter(download =>
            download.name.toLowerCase().includes(searchTerm)
        );
        displayDownloads(filteredDownloads);
    });

    downloadList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.querySelector('a').click();
        }
    });
});
