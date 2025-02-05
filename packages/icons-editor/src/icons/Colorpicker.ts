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
export const ColorpickerIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9859 3.73743C17.2551 2.46823 19.3129 2.46823 20.5821 3.73743C21.8513 5.00664 21.8513 7.06442 20.5821 8.33363L16.9157 12L18.5303 13.6146L17.4697 14.6753L15.8551 13.0607L7.33367 21.582C7.13793 21.7778 6.85033 21.8498 6.58554 21.7694L6.58457 21.7691L6.57606 21.7666C6.56687 21.764 6.55129 21.7596 6.52978 21.7539C6.48671 21.7425 6.4201 21.7257 6.33352 21.7066C6.15987 21.6685 5.90869 21.6219 5.60805 21.5908C4.9987 21.5279 4.22792 21.533 3.49542 21.7663C3.21108 21.8569 2.9001 21.7703 2.70352 21.5458C2.50695 21.3212 2.46218 21.0015 2.58953 20.7317C2.86675 20.1441 2.88215 19.4283 2.7989 18.8007C2.75847 18.4959 2.69759 18.2329 2.64708 18.0473C2.62196 17.955 2.59973 17.883 2.58448 17.836C2.57686 17.8125 2.57101 17.7954 2.56745 17.7852L2.5642 17.7759C2.46305 17.5014 2.5306 17.1927 2.73748 16.9858L11.2233 8.5L9.46967 6.74634L10.5303 5.68568L12.284 7.43934L15.9859 3.73743ZM12.2893 9.55535L14.789 12.0054L6.57086 20.2235C6.36027 20.1799 6.08387 20.132 5.76224 20.0988C5.3485 20.056 4.84637 20.036 4.30578 20.0857C4.37134 19.5429 4.34191 19.0259 4.28587 18.6034C4.24009 18.2583 4.174 17.9576 4.11478 17.7299L12.2893 9.55535Z"
            />
        </svg>
    `;
};
