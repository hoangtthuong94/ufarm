export default {
  add(state, newProduct) {
    console.log('newProduct', newProduct);
    state.list.push(newProduct)
  }
}
