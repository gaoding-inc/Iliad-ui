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
export const SvgFormatListNumbered = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 17.5H4.66667V18.1667H3.33333V19.5H4.66667V20.1667H2V21.5H6V16.1667H2V17.5ZM3.33333 7.83333H4.66667V2.5H2V3.83333H3.33333V7.83333ZM2 10.8333H4.4L2 13.6333V14.8333H6V13.5H3.6L6 10.7V9.5H2V10.8333Z"
                fill="#1F1F1F"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 5.75H9V4.25H21V5.75ZM21 12.75H9V11.25H21V12.75ZM9 19.75H21V18.25H9V19.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
