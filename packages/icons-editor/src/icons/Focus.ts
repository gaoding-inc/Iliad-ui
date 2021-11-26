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
export const SvgFocus = (): string | TemplateResult => {
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
                d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H9V3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V9H2.25V6ZM21.75 18C21.75 20.0711 20.0711 21.75 18 21.75H15V20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V15H21.75V18ZM6 21.75C3.92893 21.75 2.25 20.0711 2.25 18V15H3.75V18C3.75 19.2426 4.75736 20.25 6 20.25H9V21.75H6ZM21.75 6C21.75 3.92893 20.0711 2.25 18 2.25H15V3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V9H21.75V6ZM12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
