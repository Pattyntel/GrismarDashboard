$(".js-data-example-ajax").select2({    
  ajax: {
    url: "https://api.github.com/search/repositories",
    dataType: 'json',
    data: function (params) {
      return {
        q: params.term, // search term
        page: params.page
      };
    },
    processResults: function (data, params) {
      // parse the results into the format expected by Select2
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data, except to indicate that infinite
      // scrolling can be used
      params.page = params.page || 1;

      return {
        results: data.items,
        pagination: {
          more: (params.page * 30) < data.total_count
        }
      };
    },
    cache: true
  },
  escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
  minimumInputLength: 1,
  templateResult: template, // omitted for brevity, see the source of this page
  templateSelection: selection // omitted for brevity, see the source of this page
});
function template(data){
    return data.full_name;
}

function selection(data){
    return data.full_name;
}