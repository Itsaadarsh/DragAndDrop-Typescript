export function Autobind(_target, _2methodName, descriptors) {
    const originalMethod = descriptors.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=autoBindDec.js.map