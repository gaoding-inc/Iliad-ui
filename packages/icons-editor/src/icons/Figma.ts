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
export const FigmaIcon = (): string | TemplateResult => {
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
                d="M9 2.25C6.92893 2.25 5.25 3.92893 5.25 6C5.25 7.2267 5.83901 8.31583 6.74963 9C5.83901 9.68417 5.25 10.7733 5.25 12C5.25 13.2267 5.83901 14.3158 6.74964 15C5.83901 15.6842 5.25 16.7733 5.25 18C5.25 20.0711 6.92893 21.75 9 21.75C11.0711 21.75 12.75 20.0711 12.75 18V15.75H15C17.0711 15.75 18.75 14.0711 18.75 12C18.75 10.7733 18.161 9.68417 17.2504 9C18.161 8.31583 18.75 7.2267 18.75 6C18.75 3.92893 17.0711 2.25 15 2.25H9ZM9 15.75C7.75736 15.75 6.75 16.7574 6.75 18C6.75 19.2426 7.75736 20.25 9 20.25C10.2426 20.25 11.25 19.2426 11.25 18V15.75H9ZM15 14.25H12.75V9.75H15C16.2426 9.75 17.25 10.7574 17.25 12C17.25 13.2426 16.2426 14.25 15 14.25ZM11.25 14.25V9.75H9C7.75736 9.75 6.75 10.7574 6.75 12C6.75 13.2426 7.75736 14.25 9 14.25H11.25ZM15 8.25H12.75V3.75H15C16.2426 3.75 17.25 4.75736 17.25 6C17.25 7.24264 16.2426 8.25 15 8.25ZM9 8.25H11.25V3.75H9C7.75736 3.75 6.75 4.75736 6.75 6C6.75 7.24264 7.75736 8.25 9 8.25Z"
            />
        </svg>
    `;
};
