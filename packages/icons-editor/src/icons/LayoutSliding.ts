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
export const LayoutSlidingIcon = (): string | TemplateResult => {
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
                d="M5.25 7C5.25 5.75736 4.24264 4.75 3 4.75L2 4.75L2 3.25L3 3.25C5.07107 3.25 6.75 4.92893 6.75 7L6.75 17C6.75 19.0711 5.07107 20.75 3 20.75L2 20.75L2 19.25L3 19.25C4.24264 19.25 5.25 18.2426 5.25 17L5.25 7ZM11 4.75C10.3096 4.75 9.75 5.30964 9.75 6L9.75 18C9.75 18.6904 10.3096 19.25 11 19.25L13 19.25C13.6904 19.25 14.25 18.6904 14.25 18L14.25 6C14.25 5.30964 13.6904 4.75 13 4.75L11 4.75ZM8.25 6C8.25 4.48122 9.48122 3.25 11 3.25L13 3.25C14.5188 3.25 15.75 4.48122 15.75 6L15.75 18C15.75 19.5188 14.5188 20.75 13 20.75L11 20.75C9.48122 20.75 8.25 19.5188 8.25 18L8.25 6ZM21 4.75C19.7574 4.75 18.75 5.75736 18.75 7L18.75 17C18.75 18.2426 19.7574 19.25 21 19.25L22 19.25L22 20.75L21 20.75C18.9289 20.75 17.25 19.0711 17.25 17L17.25 7C17.25 4.92893 18.9289 3.25 21 3.25L22 3.25L22 4.75L21 4.75Z"
            />
        </svg>
    `;
};
