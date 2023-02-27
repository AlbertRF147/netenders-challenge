# Netenders challenge

This is a technical submission for Netenders. The project comprises 2 main pages:

1. **Product page:** `route: product/{id}`. In here, the user can find a typical product detail page (PDP) with the product fields image, name, colors, price, stock, sizes, and id. There is also a color swatch component that lets the user select bewteen colors. Also, there is a "customize" button that once a color is selected, it will navigate the user to the below page.
2. **Customization page:** `route: /customize/{id}/{colorName}`. This page is reached once the user has selected a color in the product page and clicks on the customization button. The aim here is to let the user choose a size and quantity for the order. Only one size can be selected at the time. Once the size and quantities have been picked, the user can add the items to cart by clicking on the "add to cart" button. Then, a `POST` request is fired to a mock endpoint (http://www.example.com/jsonservice), containing the following fields: `product.id`, `product.color_name`, `custom_product.quantity` and `custom_product.size`.
3. **Index page (bonus):** `route: /`. This page is simply there to avoid confusing the users. It serves as a root path and gives the user the option to navigate to the product page with an already prepopulated product `id` (i.e. `product/1`).

## Run the project

- `git clone https://github.com/AlbertRF147/netenders-challenge.git`
- `npm install`
- `npm run dev`

## Stack

- Vite
- Javascript
- React JS
- React Router
- LESS

## Icons

- [Font Awesome Icons](https://fontawesome.com/v5/docs/web/use-with/react)

## Products

For the purpose of this task, there is only one product served from a static source (`products.json`). The information for the product has been obtained from https://fakestoreapi.com/.
