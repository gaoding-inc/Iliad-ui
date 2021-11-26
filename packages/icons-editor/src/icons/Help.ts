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
export const SvgHelp = (): string | TemplateResult => {
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
                d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9V9.5H8.25V9C8.25 6.92893 9.92893 5.25 12 5.25H12.3849C14.2434 5.25 15.75 6.75662 15.75 8.61512V8.77512C15.75 10.128 14.8843 11.3291 13.6008 11.757C13.0927 11.9263 12.75 12.4018 12.75 12.9374V14H11.25V12.9374C11.25 11.7562 12.0059 10.7075 13.1265 10.3339C13.7974 10.1103 14.25 9.48238 14.25 8.77512V8.61512C14.25 7.58504 13.415 6.75 12.3849 6.75H12ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
