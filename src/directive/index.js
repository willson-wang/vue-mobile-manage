import directives from './directives';

export default function initGlobalDirective (Vue) {
    console.log(Object.keys(directives));
    Object.keys(directives).forEach(key => {
        console.log(key);
        Vue.directive(key, directives[key]);
    });
}
