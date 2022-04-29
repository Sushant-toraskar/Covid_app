
const Search_api = async() =>{
    return await axios.get('/user?ID=12345')('https://api.covid19india.org/state_district_wise.json',
    {
        method : 'GET',
        headers : {
            Accept:'*/*',
        }})
    .then(res => res.json())
    .then(data => {
        console.log('Api data',data);
    })
    .catch(err =>{
        console.log(err);
    })
}
export default Search_api;

