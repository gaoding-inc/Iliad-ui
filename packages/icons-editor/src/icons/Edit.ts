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
export const EditIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_304_400)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3497 2.9948C17.2284 2.11612 18.653 2.11612 19.5317 2.9948L20.9459 4.40901C21.8246 5.28769 21.8246 6.71231 20.9459 7.59099L7.08051 21.4564C6.96556 21.5714 6.81637 21.6459 6.65541 21.6687L2.60525 22.2426C2.37392 22.2754 2.14054 22.1985 1.974 22.0346C1.80746 21.8707 1.7268 21.6386 1.75583 21.4068L2.27046 17.2974C2.29118 17.1319 2.36643 16.9781 2.48432 16.8602L16.3497 2.9948ZM18.0104 8.40518L15.5356 5.93031L3.72687 17.739L3.36611 20.6198L6.19696 20.2186L18.0104 8.40518Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_304_400">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
