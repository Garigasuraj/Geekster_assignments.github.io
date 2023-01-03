const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
const total_countries = document.getElementById("total_counties")
const search_countries =  document.getElementById("search_countries")

const start = document.getElementById("start_button")
const include = document.getElementById("include_button")
const sort = document.getElementById("sort_button")

const text = document.getElementById("text_input")

const result_container = document.getElementById("result_div")

console.log(countries.length)

let button = ''
let sorting = 'ascending'

init()
function init(){
    start.addEventListener("click",()=>{
        button = 'start'
        start.setAttribute("class","color_button")
        include.removeAttribute("class")
        filtering_elements()
    })
    include.addEventListener("click",()=>{
        button = 'include'
        include.setAttribute("class","color_button")
        start.removeAttribute("class")
        filtering_elements()
    })
    sort.addEventListener("click",()=>{
        sor_t()
        filtering_elements()
    })
    text.addEventListener("keyup",filtering_elements)
    filtering_elements()

}
function sor_t(){
    sorting = sorting === "ascending" ? "decending" : "ascending"
    if(sorting === "ascending"){
        document.getElementById("sort_icon").setAttribute("class","fa-solid fa-arrow-down-a-z")
    }
    else{
        document.getElementById("sort_icon").setAttribute("class","fa-solid fa-arrow-up-z-a")
    }
}
function filtering_elements(){
    let data = [...countries]
    if(button === 'start'){
        data = data.filter((country)=>{
            return country.toLowerCase().startsWith(text.value)
        })
    }
    else{
        data = data.filter((country)=>{
            return country.toLowerCase().includes(text.value)
        })
    }
    let html_2 = ''
    if(sorting === 'ascending'){
        for(let i=0; i<data.length; i++){
            html_2 += `<div>${data[i]}</div>`
        }
        result_container.innerHTML = html_2
    }
    else{
        for(let i=data.length-1; i>=0; i--){
            html_2 += `<div>${data[i]}</div>`
        }
        result_container.innerHTML = html_2
    }
    let html = ''
    if(button === 'include' && text.value !== "" || button === 'start' && text.value !== ""){
        html += `<div>Countries contains <span style ="color:red">${text.value}</span> are <span style ="color:blue ">${data.length}</span></div>`
        search_countries.innerHTML = html
    }
}

