function solve(input) {
    const catalogue = {};

    input.forEach(product => {
        let [name, price] = product.split(' : ');
        price = Number(price);

        const products = name[0];

        if (!catalogue[products]) {
            catalogue[products] = [];
        }

        catalogue[products].push({ name, price});
    });

    const sortedProducts = Object.keys(catalogue).sort();

    sortedProducts.forEach(product => {
        console.log(product);

        catalogue[product]
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);  
        });
    });
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);