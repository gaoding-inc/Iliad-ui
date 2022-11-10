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
export const ScrollIcon = (): string | TemplateResult => {
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
                d="M17 1.25C19.0711 1.25 20.75 2.92893 20.75 5L20.75 19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19L3.25 5C3.25 2.92893 4.92893 1.25 7 1.25L17 1.25ZM19.25 5C19.25 3.75736 18.2426 2.75 17 2.75L7 2.75C5.75736 2.75 4.75 3.75736 4.75 5L4.75 19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19L19.25 5ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L12 15.9393L9.53033 13.4697L8.46967 14.5303L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303ZM12.5303 6.46967L15.5303 9.46967L14.4697 10.5303L12 8.06066L9.53033 10.5303L8.46967 9.46967L11.4697 6.46967C11.6103 6.32901 11.8011 6.25 12 6.25C12.1989 6.25 12.3897 6.32901 12.5303 6.46967Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
