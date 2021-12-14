/*
Copyright 2020 Adobe. All rights reserved.
Copyright 2021 Gaoding. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { tag as html, TemplateResult } from '../custom-tag.js';
export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinkIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7119 13.7535L10.6167 14.2409L10.3833 12.7591L13.4786 12.2717C14.5829 12.0979 15.6036 11.5784 16.3941 10.7879L18.5407 8.64124C19.4194 7.76256 19.4194 6.33794 18.5407 5.45926C17.662 4.58058 16.2374 4.58058 15.3587 5.45926L11.8232 8.99479L10.7626 7.93413L14.2981 4.3986C15.7626 2.93413 18.1369 2.93413 19.6014 4.3986C21.0659 5.86306 21.0659 8.23743 19.6014 9.7019L17.4547 11.8486C16.4399 12.8633 15.1296 13.5303 13.7119 13.7535ZM10.2881 10.2465L13.3833 9.75914L13.6167 11.2409L10.5214 11.7283C9.4171 11.9021 8.39638 12.4216 7.60591 13.2121L5.45926 15.3588C4.58058 16.2374 4.58058 17.6621 5.45926 18.5407C6.33794 19.4194 7.76256 19.4194 8.64124 18.5407L12.1768 15.0052L13.2374 16.0659L9.7019 19.6014C8.23743 21.0659 5.86306 21.0659 4.3986 19.6014C2.93413 18.1369 2.93413 15.7626 4.3986 14.2981L6.54525 12.1514C7.56003 11.1367 8.87042 10.4697 10.2881 10.2465Z"
            />
        </svg>
    `;
};
