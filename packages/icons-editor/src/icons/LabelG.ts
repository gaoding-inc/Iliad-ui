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
export const LabelGIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0536 4.896C10.1636 4.896 8.66959 5.562 7.57159 6.912C6.52759 8.154 6.02359 9.72 6.02359 11.628C6.02359 13.536 6.54559 15.102 7.58959 16.308C8.70559 17.604 10.2896 18.252 12.3236 18.252C13.3856 18.252 14.3756 18.108 15.3116 17.82C16.1936 17.532 16.9496 17.154 17.5616 16.65V11.394H12.0716V12.672H16.1036V15.948C15.6536 16.236 15.1136 16.488 14.4836 16.668C13.8356 16.848 13.1696 16.956 12.4676 16.956C10.7936 16.956 9.53359 16.452 8.68759 15.462C7.89559 14.526 7.49959 13.248 7.49959 11.628C7.49959 9.972 7.89559 8.658 8.72359 7.686C9.55159 6.696 10.6496 6.21 12.0536 6.21C13.1876 6.21 14.1056 6.48 14.8076 7.038C15.4736 7.56 15.9056 8.298 16.1036 9.27H17.5796C17.3456 7.866 16.7876 6.804 15.8876 6.066C14.9336 5.274 13.6556 4.896 12.0536 4.896Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
