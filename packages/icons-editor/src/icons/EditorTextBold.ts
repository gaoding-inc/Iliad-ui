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
export const EditorTextBoldIcon = (): string | TemplateResult => {
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
                d="M5.25 3C5.25 2.58579 5.58579 2.25 6 2.25H13C15.6234 2.25 17.75 4.37665 17.75 7C17.75 8.62521 16.9338 10.0598 15.6889 10.9162C17.5097 11.8812 18.75 13.7958 18.75 16C18.75 19.1756 16.1756 21.75 13 21.75H6C5.58579 21.75 5.25 21.4142 5.25 21V3ZM13 10.25C14.7949 10.25 16.25 8.79493 16.25 7C16.25 5.20507 14.7949 3.75 13 3.75H6.75V10.25H13ZM6.75 11.75H13C15.3472 11.75 17.25 13.6528 17.25 16C17.25 18.3472 15.3472 20.25 13 20.25H6.75V11.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
