const gbToMb = (gb: any, useSIDefinition = false) => {
    let mb;
    if (useSIDefinition) {
        mb = gb * 1000;
    } else {
        mb = gb * 1024;
    }
    return mb.toLocaleString();
};
export default gbToMb;
