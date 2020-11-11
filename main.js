const {google} = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, ["https://www.googleapis.com/auth/spreadsheets"]);
const api = google.sheets({version:'v4', auth: client});
const option = {
    spreadsheetId: '1BU9TIJxnTBRVYb3sUlNCqVwBJmYibICxL5kw_cY-OXg',
    range: 'sheet1!A1:E2'

}

client.authorize(() => {
    apiCall();
});

async function apiCall() {
    let response = await api.spreadsheets.values.get(option);
    let arr = response.data.values;
    console.log(arr)
}
