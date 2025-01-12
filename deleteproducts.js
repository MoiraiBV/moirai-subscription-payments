const stripe = require('stripe')('sk_test_51QVxXlJvR1CkRTUzU9F8JWCwtikyBQBKolCS9iCNjRB20fT2miuK0gZUvechMGzLArkj7hCTLLlKrkEbz64GTU9600VnFNtixq');

async function deleteAllProducts() {
    try {
        // Fetch all products
        const products = await stripe.products.list({ limit: 100 });

        for (const product of products.data) {
            // Delete each product
            await stripe.products.del(product.id);
            console.log(`Deleted product: ${product.id}`);
        }

        console.log('All products deleted.');
    } catch (error) {
        console.error('Error deleting products:', error);
    }
}

deleteAllProducts();
