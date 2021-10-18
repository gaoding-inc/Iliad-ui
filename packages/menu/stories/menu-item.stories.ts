/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { html, TemplateResult } from '@lliad-ui/base';
import '@lliad-ui/icons-workflow/icons/sp-icon-edit.js';

import '../sp-menu.js';
import '../sp-menu-item.js';
import '@lliad-ui/icons-workflow/icons/sp-icon-edit.js';

export default {
    component: 'sp-menu-item',
    title: 'Menu Item',
};

export const Default = (): TemplateResult => {
    return html`
        <sp-menu>
            <sp-menu-item>Menu Item</sp-menu-item>
        </sp-menu>
    `;
};

export const noWrap = (): TemplateResult => {
    return html`
        <sp-menu style="width: 150px;">
            <sp-menu-item no-wrap>
                Select a Country with a very long label, too long, in fact
            </sp-menu-item>
        </sp-menu>
    `;
};

export const valueSlot = (): TemplateResult => {
    /**
     * This story featurs zero width spaces between the characters in the `<kbd>` element.
     * While their absence has not caused issues in the local Storybook, the visual regression
     * suite was causig the `⌘​` character to display different between the various Menu Items
     * without the intevening zero width space character. When reviewing in the future,
     * `font-variant-ligatures: none` was also not enough to address this situation.
     */
    //
    //
    return html`
        <style>
            kbd {
                font-family: var(--spectrum-alias-body-text-font-family);
                white-space: nowrap;
            }
        </style>
        <sp-menu style="width: 150px;" selects="single">
            <sp-menu-item>
                Save
                <kbd slot="value">⌘​S</kbd>
            </sp-menu-item>
            <sp-menu-item selected>
                Save As...
                <kbd slot="value">⇧​⌘​S</kbd>
            </sp-menu-item>
            <sp-menu-item disabled>
                Save All
                <kbd slot="value">⌥​⌘​S</kbd>
            </sp-menu-item>
        </sp-menu>
    `;
};

export const href = (): TemplateResult => {
    return html`
        <sp-menu style="width: 150px;">
            <sp-menu-item
                href="https://opensource.adobe.com/spectrum-web-components"
            >
                <sp-icon-edit slot="icon"></sp-icon-edit>
                Edit the Documentation Site
            </sp-menu-item>
        </sp-menu>
    `;
};
