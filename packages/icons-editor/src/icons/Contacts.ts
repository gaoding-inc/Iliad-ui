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
export const ContactsIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.25 7C2.25 4.92893 3.92893 3.25 6 3.25H18C20.0711 3.25 21.75 4.92893 21.75 7V10C21.75 12.0711 20.0711 13.75 18 13.75H6C3.92893 13.75 2.25 12.0711 2.25 10V7ZM6 4.75C4.75736 4.75 3.75 5.75736 3.75 7V10C3.75 11.2426 4.75736 12.25 6 12.25H18C19.2426 12.25 20.25 11.2426 20.25 10V7C20.25 5.75736 19.2426 4.75 18 4.75H6ZM2.25 20C2.25 19.5858 2.58579 19.25 3 19.25H21C21.4142 19.25 21.75 19.5858 21.75 20C21.75 20.4142 21.4142 20.75 21 20.75H3C2.58579 20.75 2.25 20.4142 2.25 20ZM3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25H3Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
