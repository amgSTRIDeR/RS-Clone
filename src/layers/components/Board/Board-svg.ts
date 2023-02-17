const enum BoardSVG {
  Filter = `<svg class="fill-secondary group-hover:fill-secondary-focus" viewBox="0 0 24 24" id="filter-alt-2" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
  <path class="stroke-secondary group-hover:stroke-secondary-focus" id="primary" d="M5,12H19M3,7H21M7,17H17" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
  </svg>`,
  Chevron = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 185.344 185.344" xml:space="preserve">
<g>
   <g>
       <path class="stroke-secondary group-hover:stroke-secondary-focus" style="fill:#010002;" d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
           c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
           c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"/>
   </g>
</g>
</svg>`,
  Star = `<svg class="fill-secondary group-hover:fill-secondary-focus" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="stroke-secondary group-hover:stroke-secondary-focus" d="M13.7309 3.51014L15.4909 7.03014C15.7309 7.52014 16.3709 7.99014 16.9109 8.08014L20.1009 8.61014C22.1409 8.95014 22.6209 10.4301 21.1509 11.8901L18.6709 14.3701C18.2509 14.7901 18.0209 15.6001 18.1509 16.1801L18.8609 19.2501C19.4209 21.6801 18.1309 22.6201 15.9809 21.3501L12.9909 19.5801C12.4509 19.2601 11.5609 19.2601 11.0109 19.5801L8.02089 21.3501C5.88089 22.6201 4.58089 21.6701 5.14089 19.2501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2209 1.60014 12.7809 1.60014 13.7309 3.51014Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
  class="fill-secondary group-hover:fill-secondary-focus"
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
  class="fill-secondary group-hover:fill-secondary-focus"
viewBox="-6.5 0 32 32"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
>
<path class="stroke-secondary group-hover:stroke-secondary-focus"
  d="M10.719 13.281h6.781v2.219h-6.781v6.813h-2.25v-6.813h-6.781v-2.219h6.781v-6.781h2.25v6.781z"
></path>
</svg>`,
  Lines = `<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M6 12v-1h4v1H6zM4 7h8v1H4V7zm10-4v1H2V3h12z"/></svg>`,
  Arrow = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 12-6-6m6 6-6 6m6-6H5"/></svg>`,
  Copy = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  Template = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 2.0028C9.82495 2.01194 9.4197 2.05103 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8.05103 3.4197 8.01194 3.82495 8.0028 4.5M19.5 2.0028C20.1751 2.01194 20.5803 2.05103 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C21.949 3.4197 21.9881 3.82494 21.9972 4.49999M21.9972 13.5C21.9881 14.175 21.949 14.5803 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.5803 15.949 20.1751 15.9881 19.5 15.9972M22 7.99999V9.99999M14.0001 2H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  Delete = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  User = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="12" cy="8" r="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"/></svg>`,
  Time = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.5V12L16 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  Mark = `<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill-secondary group-hover:fill-secondary-focus" d="M4.97879 4.63551C4.97887 4.63462 4.97895 4.63373 4.97903 4.63284C4.97992 4.63276 4.98081 4.63267 4.9817 4.63259C5.43849 4.59036 6.07532 4.54622 6.79718 4.51753C8.25652 4.45955 9.99036 4.46795 11.2768 4.65973C11.3353 4.66845 11.4111 4.70095 11.4872 4.77708L19.2406 12.5304C19.4358 12.7257 19.4358 13.0423 19.2406 13.2375L13.5837 18.8944C13.3884 19.0897 13.0719 19.0897 12.8766 18.8944L5.12325 11.141C5.04711 11.0649 5.01462 10.9891 5.0059 10.9306C4.81412 9.6442 4.80573 7.91035 4.86373 6.451C4.89241 5.72913 4.93656 5.0923 4.97879 4.63551Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<circle cx="9.4346" cy="9.17334" r="1" transform="rotate(-45 9.4346 9.17334)" fill="#000000"/>
</svg>`,
  Attachment = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
<path d="M0 0h48v48H0z" fill="none"/>
<g id="Shopicon">
	<path class="fill-secondary group-hover:fill-secondary-focus" d="M31.778,13.394l-14.85,14.849l2.828,2.828l14.85-14.848c1.169-1.17,3.072-1.169,4.243-0.001
		c1.169,1.17,1.169,3.073,0,4.243L35.314,24l-0.001-0.001l-6.033,6.034l-5.28,5.279L24,35.313
		c-3.119,3.119-8.194,3.118-11.313,0.001c-3.118-3.119-3.118-8.194,0.001-11.313L28.242,8.443l-2.828-2.828L9.859,21.173
		c-2.267,2.267-3.515,5.279-3.516,8.484c0,3.205,1.248,6.219,3.515,8.485c2.34,2.339,5.411,3.508,8.484,3.508
		c3.072,0,6.146-1.17,8.485-3.509l4.482-4.483l10.368-10.365c2.728-2.73,2.728-7.171-0.001-9.9
		C38.947,10.665,34.507,10.666,31.778,13.394z"/>
</g>
</svg>`,
  BoardsTemplates = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>document-bulk</title>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="icon" fill="#000000" transform="translate(85.333333, 42.666667)">
          <path class="fill-secondary group-hover:fill-secondary-focus" d="M149.333333,128 L234.666667,213.333333 L234.666667,426.666667 L4.26325641e-14,426.666667 L4.26325641e-14,128 L149.333333,128 Z M131.648,170.666667 L42.6666667,170.666667 L42.6666667,384 L192,384 L192,231.018667 L131.648,170.666667 Z M213.333333,64 L298.666667,149.333333 L298.666667,362.666667 L256,362.666 L256,167.018667 L195.648,106.666667 L64,106.666 L64,64 L213.333333,64 Z M277.333333,-2.13162821e-14 L362.666667,85.3333333 L362.666667,298.666667 L320,298.666 L320,103.018667 L259.648,42.6666667 L128,42.666 L128,-2.13162821e-14 L277.333333,-2.13162821e-14 Z" id="Combined-Shape">

</path>
      </g>
  </g>
</svg>`,
  Boards = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>card-layout</title>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="icon" fill="#000000" transform="translate(42.666667, 85.333333)">
          <path class="fill-secondary group-hover:fill-secondary-focus" d="M128,1.42108547e-14 L128,149.333333 L3.55271368e-14,149.333333 L3.55271368e-14,1.42108547e-14 L128,1.42108547e-14 Z M85.3333333,42.6666667 L42.6666667,42.6666667 L42.6666667,106.666667 L85.3333333,106.666667 L85.3333333,42.6666667 Z M426.666667,192 L426.666667,341.333333 L298.666667,341.333333 L298.666667,192 L426.666667,192 Z M384,234.666667 L341.333333,234.666667 L341.333333,298.666667 L384,298.666667 L384,234.666667 Z M426.666667,1.42108547e-14 L426.666667,149.333333 L170.666667,149.333333 L170.666667,1.42108547e-14 L426.666667,1.42108547e-14 Z M384,42.6666667 L213.333333,42.6666667 L213.333333,106.666667 L384,106.666667 L384,42.6666667 Z M256,192 L256,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,192 L256,192 Z M213.333333,234.666667 L42.6666667,234.666667 L42.6666667,298.666667 L213.333333,298.666667 L213.333333,234.666667 Z" id="Combined-Shape">

</path>
      </g>
  </g>
</svg>`,
}

export default BoardSVG;
