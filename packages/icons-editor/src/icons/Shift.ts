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
export const ShiftIcon = (): string | TemplateResult => {
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
                d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.7448 11.6842 19.809 12.0068 19.6929 12.287C19.5768 12.5673 19.3033 12.75 19 12.75H16.25V19C16.25 19.4142 15.9142 19.75 15.5 19.75H8.49999C8.08578 19.75 7.74999 19.4142 7.74999 19V12.75H4.99999C4.69664 12.75 4.42317 12.5673 4.30708 12.287C4.191 12.0068 4.25516 11.6842 4.46966 11.4697L11.4697 4.46967ZM6.81065 11.25H8.49999C8.91421 11.25 9.24999 11.5858 9.24999 12V18.25H14.75V12C14.75 11.5858 15.0858 11.25 15.5 11.25H17.1893L12 6.06066L6.81065 11.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
