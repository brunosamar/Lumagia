/* para os Embeds dos vids pararem quando o modal desaparece*/
$(document).ready(function () {
    $('.modal').on('hidden.bs.modal', function () {
        var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });
});

