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
export const LayoutPageturnIcon = (): string | TemplateResult => {
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
                d="M8 3.75C7.30964 3.75 6.75 4.30964 6.75 5L6.75 19C6.75 19.6904 7.30964 20.25 8 20.25L16 20.25C16.6904 20.25 17.25 19.6904 17.25 19L17.25 5C17.25 4.30964 16.6904 3.75 16 3.75L8 3.75ZM5 5.75H5.25L5.25 18.25H5C3.75736 18.25 2.75 17.2426 2.75 16L2.75 8C2.75 6.75736 3.75736 5.75 5 5.75ZM8 21.75C6.74122 21.75 5.67998 20.9043 5.35352 19.75H5C2.92893 19.75 1.25 18.0711 1.25 16L1.25 8C1.25 5.92893 2.92893 4.25 5 4.25H5.35352C5.67998 3.09575 6.74122 2.25 8 2.25L16 2.25C17.2588 2.25 18.32 3.09575 18.6465 4.25H19C21.0711 4.25 22.75 5.92893 22.75 8L22.75 16C22.75 18.0711 21.0711 19.75 19 19.75H18.6465C18.32 20.9043 17.2588 21.75 16 21.75L8 21.75ZM18.75 18.25H19C20.2426 18.25 21.25 17.2426 21.25 16L21.25 8C21.25 6.75736 20.2426 5.75 19 5.75H18.75L18.75 18.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
