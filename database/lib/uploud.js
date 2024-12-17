const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

const pomf = async (buffer) => {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new FormData();
  form.append("files[]", buffer, { filename: `tmp.${ext}`, contentType: mime });

  const { data } = await axios.post("https://pomf.lain.la/upload.php", form, {
    headers: form.getHeaders(),
  });
  return data.files[0].url;
};

module.exports = { pomf };