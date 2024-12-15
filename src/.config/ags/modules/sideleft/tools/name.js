import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import { setupCursorHover } from '../../.widgetutils/cursorhover.js';
const { execAsync } = Utils;
const { Box, Button, Icon, Label } = Widget;

export default () => Box({
    className: 'txt sidebar-module techfont',
    children: [
        Label({
            label: 'illogical-impulse by end-4, modified by Ardox',
        }),
        Box({ hexpand: true }),
        Button({
            className: 'sidebar-module-btn-arrow',
            onClicked: () => execAsync(['xdg-open', 'https://github.com/levraiardox/dots-hyprland']).catch(print),
            child: Icon({
                className: 'txt txt-norm',
                icon: 'github-symbolic',
            }),
            setup: setupCursorHover,
        })
    ]
})
