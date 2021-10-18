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

import '@lliad-ui/action-menu/sync/sp-action-menu.js';
import { ActionMenu } from '@lliad-ui/action-menu';
import '@lliad-ui/icons-workflow/icons/sp-icon-settings.js';
import '@lliad-ui/menu/sp-menu.js';
import '@lliad-ui/menu/sp-menu-item.js';
import '@lliad-ui/menu/sp-menu-divider.js';
import { fixture, elementUpdated, html, expect } from '@open-wc/testing';

const deprecatedActionMenuFixture = async (): Promise<ActionMenu> =>
    await fixture<ActionMenu>(
        html`
            <sp-action-menu label="More Actions">
                <sp-menu>
                    <sp-menu-item>Deselect</sp-menu-item>
                    <sp-menu-item>Select Inverse</sp-menu-item>
                    <sp-menu-item>Feather...</sp-menu-item>
                    <sp-menu-item>Select and Mask...</sp-menu-item>
                    <sp-menu-divider></sp-menu-divider>
                    <sp-menu-item>Save Selection</sp-menu-item>
                    <sp-menu-item disabled>Make Work Path</sp-menu-item>
                </sp-menu>
            </sp-action-menu>
        `
    );

const actionMenuFixture = async (): Promise<ActionMenu> =>
    await fixture<ActionMenu>(
        html`
            <sp-action-menu label="More Actions">
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-action-menu>
        `
    );

describe('Action menu', () => {
    it('loads', async () => {
        const el = await actionMenuFixture();
        await elementUpdated(el);

        expect(el).to.not.be.undefined;

        await expect(el).to.be.accessible();
    });
    it('loads - [slot="label"]', async () => {
        const el = await fixture<ActionMenu>(
            html`
                <sp-action-menu>
                    <span slot="label">More Actions</span>
                    <sp-menu-item>Deselect</sp-menu-item>
                    <sp-menu-item>Select Inverse</sp-menu-item>
                    <sp-menu-item>Feather...</sp-menu-item>
                    <sp-menu-item>Select and Mask...</sp-menu-item>
                    <sp-menu-divider></sp-menu-divider>
                    <sp-menu-item>Save Selection</sp-menu-item>
                    <sp-menu-item disabled>Make Work Path</sp-menu-item>
                </sp-action-menu>
            `
        );

        await elementUpdated(el);

        await expect(el).to.be.accessible();
    });
    it('loads - [custom icon]', async () => {
        const el = await fixture<ActionMenu>(
            html`
                <sp-action-menu label="More Actions">
                    <sp-icon-settings slot="icon"></sp-icon-settings>
                    <sp-menu-item>Deselect</sp-menu-item>
                    <sp-menu-item>Select Inverse</sp-menu-item>
                    <sp-menu-item>Feather...</sp-menu-item>
                    <sp-menu-item>Select and Mask...</sp-menu-item>
                    <sp-menu-divider></sp-menu-divider>
                    <sp-menu-item>Save Selection</sp-menu-item>
                    <sp-menu-item disabled>Make Work Path</sp-menu-item>
                </sp-action-menu>
            `
        );

        await elementUpdated(el);

        await expect(el).to.be.accessible();
    });
    it('stays `quiet`', async () => {
        const el = await actionMenuFixture();
        await elementUpdated(el);

        expect(el.quiet).to.be.true;

        el.quiet = false;
        await elementUpdated(el);

        expect(el.quiet).to.be.true;
    });
    it('stay `valid`', async () => {
        const el = await actionMenuFixture();

        await elementUpdated(el);

        expect(el.invalid).to.be.false;

        el.invalid = true;
        await elementUpdated(el);

        expect(el.invalid).to.be.false;
    });
    it('opens unmeasured', async () => {
        const el = await actionMenuFixture();

        await elementUpdated(el);
        const button = el.button as HTMLButtonElement;

        button.click();
        await elementUpdated(el);
        expect(el.open).to.be.true;
    });
    it('opens unmeasured with deprecated syntax', async () => {
        const el = await deprecatedActionMenuFixture();

        await elementUpdated(el);
        const button = el.button as HTMLButtonElement;

        button.click();
        await elementUpdated(el);
        expect(el.open).to.be.true;
    });
});
