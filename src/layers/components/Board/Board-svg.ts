const enum BoardSVG {
  Filter = `<svg fill="#000000" viewBox="0 0 24 24" id="filter-alt-2" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M5,12H19M3,7H21M7,17H17" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`,
  Chevron = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 185.344 185.344" xml:space="preserve">
<g>
   <g>
       <path style="fill:#010002;" d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
           c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
           c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"/>
   </g>
</g>
</svg>`,
  Star = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7309 3.51014L15.4909 7.03014C15.7309 7.52014 16.3709 7.99014 16.9109 8.08014L20.1009 8.61014C22.1409 8.95014 22.6209 10.4301 21.1509 11.8901L18.6709 14.3701C18.2509 14.7901 18.0209 15.6001 18.1509 16.1801L18.8609 19.2501C19.4209 21.6801 18.1309 22.6201 15.9809 21.3501L12.9909 19.5801C12.4509 19.2601 11.5609 19.2601 11.0109 19.5801L8.02089 21.3501C5.88089 22.6201 4.58089 21.6701 5.14089 19.2501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2209 1.60014 12.7809 1.60014 13.7309 3.51014Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  Dots = `<svg
class="fill-primary stroke-primary group-hover:fill-primary-focus"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  class="fill-secondary"
  d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
/>
<path
  class="fill-secondary"
  d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
/>
<path
  class="fill-secondary"
  d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
/>
</svg>`,
  Pen = `<svg
version="1.1"
id="Capa_1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 45.807 45.807"
xml:space="preserve"
>
<g>
  <path
    style="fill: #424242"
    d="M45.256,8.203l-7.651-7.652C37.252,0.198,36.773,0,36.274,0c-0.5,0-0.978,0.198-1.331,0.551
L0.55,34.943C0.189,35.304-0.01,35.797,0,36.308l0.136,7.516c0.018,1.012,0.835,1.829,1.848,1.848l7.515,0.135
c0.011,0,0.023,0,0.034,0c0.499,0,0.978-0.198,1.331-0.552l34.393-34.391C45.99,10.129,45.99,8.938,45.256,8.203z M31.626,19.172
l-4.991-4.991l2.237-2.236l4.99,4.99L31.626,19.172z M14.139,36.657l-4.99-4.989l14.826-14.826l4.99,4.99L14.139,36.657z
M8.767,42.029l-4.901-0.088L3.777,37.04l2.711-2.712l4.99,4.99L8.767,42.029z M36.524,14.273l-4.991-4.99l4.741-4.741l4.99,4.991
L36.524,14.273z"
  />
</g>
</svg>`,
  Add = `<svg
fill="#000000"
viewBox="-6.5 0 32 32"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M10.719 13.281h6.781v2.219h-6.781v6.813h-2.25v-6.813h-6.781v-2.219h6.781v-6.781h2.25v6.781z"
></path>
</svg>`,
Lines = `<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M6 12v-1h4v1H6zM4 7h8v1H4V7zm10-4v1H2V3h12z"/></svg>`
}

export default BoardSVG;
