import { shallowMount } from '@vue/test-utils';
import AppFooter from '@/components/app-footer.vue';

describe('AppFooter', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(AppFooter);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('matches snapshot', () => {
        const wrapper = shallowMount(AppFooter);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('has a link to UncaughtException GitHub profile', () => {
        const wrapper = shallowMount(AppFooter);
        const link = wrapper.find('small a');
        expect(link.attributes('href')).toBe('https://github.com/uncaughtxcptn');
        expect(link.attributes('target')).toBe('_blank');
        expect(link.text()).toBe('Uncaught Exception');
    });

    test('has a link to project\'s GitHub repository', () => {
        const wrapper = shallowMount(AppFooter);
        const link = wrapper.find('.github-link');
        expect(link.attributes('href')).toBe('https://github.com/uncaughtxcptn/endpoints');
        expect(link.attributes('target')).toBe('_blank');
    });
});
