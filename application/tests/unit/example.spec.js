import {shallowMount} from '@vue/test-utils'
import Boilerplate from '@/components/_boilerplate'

describe('components/_boilerplate/index.vue', () => {
    it('Renders "Boilerplate Component"', () => {
        const wrapper = shallowMount(Boilerplate, {
            propsData: {}
        });
        expect(wrapper.text()).toMatch('Boilerplate Component');
    })
});
