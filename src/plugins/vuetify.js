import { PurpleTheme } from '@/theme/LightTheme';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export default createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: 'PurpleTheme',
        themes: {
            PurpleTheme,
        }
    },
    defaults: {
        VBtn: {},
        VCard: {
            rounded: 'md'
        },
        VTextField: {
            rounded: 'lg'
        },
        VTooltip: {
            // set v-tooltip default location to top
            location: 'top'
        }
    }
});
