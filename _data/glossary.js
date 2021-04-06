// const { client } = require('../utils/prismic-client');

const { client } = require('../utils/prismic-client');

module.exports = async () => {
  const result = await client.query('');

  // hard-code getting the page
  const page = result.results[0];
  const data = page.data.page;
  const title = data.title.value[0].text;

  const terms = data.body.value
    .filter((entry) => {
      return entry.slice_type === 'glossary_term';
    })
    .map((slice) => {
      const fields = slice['non-repeat'];
      return {
        term: fields.term.value[0].text,
        definition: fields.definition.value[0].text,
      };
    });

  return {
    title,
    terms,
  };
};
