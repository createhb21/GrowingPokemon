class BtnDict {
    dragBtns: string[] = ['H', 'Q', 'L', 'P', 'BL', 'NL', 'TL'];
    AllBtns: string[] = ['H', 'B', 'I', 'Q', 'C', 'L', 'P', 'BL', 'NL', 'TL'];

    name;
    age;
    constructor(a: string, b: number) {
        this.name = a;
        this.age = b;
    }
    login() {
        console.log('hi');
    }

    getProvider(providerName: string) {
        switch (providerName) {
            case 'Google':
                return 'googleProvider';
            case 'Github':
                return 'githubProvider';
            default:
                throw new Error(`not supported provider ${providerName}`);
        }
    }
}

export default BtnDict;
