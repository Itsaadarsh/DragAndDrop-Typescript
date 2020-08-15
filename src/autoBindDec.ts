export function Autobind(_target: any, _2methodName: string, descriptors: PropertyDescriptor) {
  const originalMethod = descriptors.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
