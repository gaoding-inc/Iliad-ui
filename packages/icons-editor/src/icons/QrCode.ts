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
export const SvgQrCode = (): string | TemplateResult => {
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
                d="M2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H8.5C9.74264 2.25 10.75 3.25736 10.75 4.5V8.5C10.75 9.74264 9.74264 10.75 8.5 10.75H4.5C3.25736 10.75 2.25 9.74264 2.25 8.5V4.5ZM4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V8.5C3.75 8.91421 4.08579 9.25 4.5 9.25H8.5C8.91421 9.25 9.25 8.91421 9.25 8.5V4.5C9.25 4.08579 8.91421 3.75 8.5 3.75H4.5ZM2.25 15.5C2.25 14.2574 3.25736 13.25 4.5 13.25H8.5C9.74264 13.25 10.75 14.2574 10.75 15.5V19.5C10.75 20.7426 9.74264 21.75 8.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5V15.5ZM4.5 14.75C4.08579 14.75 3.75 15.0858 3.75 15.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H8.5C8.91421 20.25 9.25 19.9142 9.25 19.5V15.5C9.25 15.0858 8.91421 14.75 8.5 14.75H4.5ZM15.5 13.25C14.2574 13.25 13.25 14.2574 13.25 15.5V19.5C13.25 20.7426 14.2574 21.75 15.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V15.5C21.75 14.2574 20.7426 13.25 19.5 13.25H15.5ZM14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75H19.5C19.9142 14.75 20.25 15.0858 20.25 15.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H15.5C15.0858 20.25 14.75 19.9142 14.75 19.5V15.5ZM16.25 17C16.25 16.5858 16.5858 16.25 17 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17V18C18.75 18.4142 18.4142 18.75 18 18.75H17C16.5858 18.75 16.25 18.4142 16.25 18V17ZM15.5 2.25C14.2574 2.25 13.25 3.25736 13.25 4.5V8.5C13.25 9.74264 14.2574 10.75 15.5 10.75H19.5C20.7426 10.75 21.75 9.74264 21.75 8.5V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H15.5ZM14.75 4.5C14.75 4.08579 15.0858 3.75 15.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8.5C20.25 8.91421 19.9142 9.25 19.5 9.25H15.5C15.0858 9.25 14.75 8.91421 14.75 8.5V4.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
