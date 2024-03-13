function initPopovers() {
    // Enable popovers
    updateAllPopovers();
}

function updateAllPopovers() {
    // Define the options for the popover.
    const options = {
        trigger: 'hover',
        html: true,
        placement: 'auto',
        container: 'body',
    }

    $('[data-toggle="popover"]').each(function() {
        var id = $(this).attr('id');
        const popover = POPOVERS[id];
        updatePopover(id, popover.title, popover.dataContent, popover.options);
    });

}

function updatePopover(id, title, content, options) {
    // Update a single popover
    const selection = $('#' + id);
    if (title) selection.attr('title', title);
    if (content) selection.attr('data-content', content);
    if (options) selection.popover(options);
}