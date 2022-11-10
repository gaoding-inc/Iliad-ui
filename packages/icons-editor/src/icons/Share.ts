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
export const ShareIcon = (): string | TemplateResult => {
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
                d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.23355 15.0267 5.46087 15.0772 5.67907L8.10493 9.86241C7.56338 9.32909 6.82012 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.82009 15 7.56332 14.6709 8.10486 14.1376L15.0772 18.321C15.0267 18.5392 15 18.7665 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.1166 16 16.3224 16.3818 15.7734 16.9895L8.87734 12.8518C8.95716 12.5818 9 12.2959 9 12C9 11.7041 8.95717 11.4182 8.87736 11.1482L15.7734 7.0106C16.3224 7.61819 17.1166 8 18 8ZM18 6.5C18.8284 6.5 19.5 5.82843 19.5 5C19.5 4.17157 18.8284 3.5 18 3.5C17.1716 3.5 16.5 4.17157 16.5 5C16.5 5.82843 17.1716 6.5 18 6.5ZM7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12ZM19.5 19C19.5 19.8284 18.8284 20.5 18 20.5C17.1716 20.5 16.5 19.8284 16.5 19C16.5 18.1716 17.1716 17.5 18 17.5C18.8284 17.5 19.5 18.1716 19.5 19Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
