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
export const EditorUndoIcon = (): string | TemplateResult => {
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
                d="M4.81066 11.75L9.03033 15.9697L7.96967 17.0303L2.46967 11.5303C2.17678 11.2374 2.17678 10.7626 2.46967 10.4697L7.96967 4.96967L9.03033 6.03033L4.81066 10.25H13.1C17.8773 10.25 21.75 14.1227 21.75 18.9V19H20.25V18.9C20.25 14.9512 17.0488 11.75 13.1 11.75H4.81066Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
