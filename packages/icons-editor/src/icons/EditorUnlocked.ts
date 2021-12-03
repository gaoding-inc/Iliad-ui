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
export const EditorUnlockedIcon = (): string | TemplateResult => {
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
                d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V10H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V10H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 18V14H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V14H15.25V18C15.25 19.7949 13.7949 21.25 12 21.25C10.2051 21.25 8.75 19.7949 8.75 18Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
